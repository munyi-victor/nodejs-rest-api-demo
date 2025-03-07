const express = require("express");
const cors = require("cors");
const data = require("./data");

let users = data.users;

const app = express();
app.use(cors());
app.use(express.json());

app.get("/users", (req, res) => {
    res.json({"users": users});
})

app.post("/users", (req, res) => {
    const user = req.body;
    users.push(user);
    res.json({"message": "User added successfully"});
})

app.put("/users/:id", (req, res) => {
    const {id} = req.params;
    const {name, email} = req.body;

    users = users.map(user => user.id === id ? {...user, name, email} : user);
    res.json({message: "User updated"});
})

app.delete("/users/:id", (req, res) => {
    const {id} = req.params;
    users = users.filter(user => user.id !== id);
    res.json({message: "User deleted"});
})

app.listen(3000, (req, res) => {
    console.log(`Server running at http://localhost:3000`);
})