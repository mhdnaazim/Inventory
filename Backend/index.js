import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "sql123",
        database: "inventory"
    }
)

db.connect((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Connected to MySQL");
    }
})


// CATEGORIES API 

//Fetch Categories
app.get("/categories", (req, res) => {
    db.query("SELECT * FROM categories", (error, result) => {
        if (error) {
            console.log(error);
            res.status(500).json("Serverside Error");
        } else {
            res.status(200).json(result);
        }
    })
})

//Add Category
app.post("/addcategory", (req, res) => {
    const { name } = req.body;

    const values = [name];

    const sql = "INSERT INTO categories (name) VALUES (?)";

    db.query(sql, values, (error, result) => {
        if (error) {
            console.log(error);
            res.status(500).json("Serverside Error");
        } else {
            res.status(200).json("Product Added");
        }
    });
});

//Delete Category
app.delete("/delcategories/:id", (req, res) => {
    const id = req.params.id
    const sql = "DELETE FROM categories WHERE id = ?";

    db.query(sql, id, (error, result) => {
        if (error) {
            console.log(error);
            res.status(500).json("Server Error");
        } else {
            res.status(200).json("Product Deleted");
        }
    })
})

// Edit Category
app.get("/editcategories/:id", (req, res) => {
    const id = req.params.id
    const sql = "SELECT * FROM categories WHERE id = ?";

    db.query(sql, [id], (error, result) => {
        if (error) {
            console.log(error);
            res.status(500).json("Serverside Error")
        } else {
            res.status(200).json(result)
        }
    })
})

//Push Edited Category
app.put("/categories/:id", (req, res) => {
    const id = req.params.id

    const { name } = req.body;
    const values = [name, id];

    const sql = "UPDATE categories SET name = ? WHERE id = ?";

    db.query(sql, values, (error, result) => {
        if (error) {
            console.log(error);
            res.status(500).json("Serverside Error");
        } else {
            res.status(200).json("Working");
        }
    })
})


// PRODUCTS API 
//Fetch Products

// query1 = "SELECT * FROM Products";
// query2 = "SELECT name from Categories where id = ?";
app.get("/products", (req, res) => {
    const sql = "SELECT p.*, c.name AS category_name FROM products p JOIN categories c ON p.category_id = c.id";
    db.query(sql, (error, result) => {
        if (error) {
            console.log(error);
            res.status(500).json("Serverside Error");
        } else {
            res.status(200).json(result, "Working");
        }
    })
})

//Add Products
app.post("/addProducts", (req, res) => {
    const { name, category_id, quantity, price } = req.body;
    const values = [name, category_id, quantity, price];
    const sql = "INSERT INTO products (name, category_id, quantity, price) VALUES (?,?,?,?)";

    db.query(sql, values, (error, result) => {
        if (error) {
            console.log(error);

            res.status(500).json("Serverside Error");
        } else {
            res.status(200).json(result);
        }
    })
})

// Edit Product
app.get("/editproduct/:id", (req, res) => {
    const id = req.params.id;
    const sql = "SELECT * FROM products WHERE id = ?";

    db.query(sql, [id], (error, result) => {
        if (error) {
            res.status(500).json("Serverside error");
        } else {
            res.status(200).json(result)
        }
    })
})

// Updated Product
app.put("/editproduct/:id", (req, res) => {
    const { name, category_id, quantity, price } = req.body;
    const id = req.params.id;
    const values = [
        name,
        category_id,
        quantity,
        price,
        id
    ]

    const sql = "UPDATE products SET name = ?, category_id = ?, quantity = ?, price = ? WHERE id = ?";

    db.query(sql, values, (error, result) => {
        if (error) {
            res.status(500).json("Serverside Error");
            console.log(error);

        } else {
            res.status(200).json("Product Updated Successfully");
        }
    })
})

// Delete Product
app.delete("/delproduct/:id", (req, res) => {
    const id = req.params.id;
    const sql = "DELETE FROM products WHERE id = ?";

    db.query(sql, id, (error, result) => {
        if (error) {
            res.status(500).json("Serverside Error");
            console.log(error);

        } else {
            res.status(200).json("Success");
        }
    })
})

// Update Quantity
app.post("/update-qty", (req, res) => {
    const id = req.params.id
    const { quantity} = req.body
    const values = [ id, quantity]
    const sql =  "UPDATE products SET quantity = quantity - ? WHERE id = ? AND quantity >= ?";

    db.query(sql, values, (error, result) => {
        if(error) {
            res.status(500).json("Serverside Error")
        }else{
            res.status(200).json(result)
        }
    })
})


// Users API

// Fetch Users
app.get("/users", (req, res) => {
    const sql = "SELECT * FROM users"

    db.query(sql, (error, result) => {
        if (error) {
            res.status(500).json("Serverside Error");
        } else {
            res.status(200).json(result);
        }
    })
})

// Signup
app.post("/addUser", (req, res) => {
    const { name, email, number, password } = req.body;
    const values = [name, email, number, password]

    const checkSql = "SELECT * FROM users WHERE email = ?";
    db.query(checkSql, [email], (err, result) => {
        if (err) return res.status(500).json("Server error");

        if (result.length > 0) {
            return res.status(202).json("Email already registered");
        }

        const insertSql = "INSERT INTO users (name, email, number, password) VALUES (?, ?, ?, ?)";
        db.query(insertSql, values, (error, result) => {
            if (error) return res.status(500).json("Server error");

            res.status(200).json("Registration successful");
        });
    });
});


// Delete Users
app.delete("/delusers/:id", (req, res) => {
    const id = req.params.id

    const sql = "DELETE FROM users WHERE userid = ?"

    db.query(sql, id, (error, result) => {
        if (error) {
            console.log(error);
            res.status(500).json("Serverside Error");
        } else {
            res.status(200).json({ message: "Deletion Success", result });
        }
    })
})

// Login
app.post("/logUser", (req, res) => {
    const { email, password } = req.body;

    const sql = "SELECT * FROM users WHERE email = ? AND password = ?";
    db.query(sql, [email, password], (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).json("Server error");
        }

        if (result.length > 0) {
            // User found
            res.status(200).json({ usertype: result[0].usertype });
        } else {
            // User not found
            res.status(401).json({ message: "Invalid Email or Password" });
        }
    });
});



const port = 8000
app.listen(port, () => {
    console.log(`Connected to Port ${port}`);
})