import express from "express";
import { createPool } from "mysql2/promise";

const app = express();

const pool = createPool({
    host: "mysqldb",
    user: "root",
    password: "nemos5123",
    database: "faztdb",
    port: 3306,
});

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/ping", async (req, res) => {
    const result = await pool.execute("SELECT NOW()");
    res.json({
        data: result[0],
    });
});

app.listen(3000, () => {
    console.log("Listening on port 3000");
});
