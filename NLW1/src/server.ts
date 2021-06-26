import express from "express";


const app = express();

app.get("/test", (request, response) => {

    return response.send("Hello There!!!");
});

app.post("/test-post", (request, response) => {

    return response.send("Hello There Post!!!");
})
// http://localhost:5000
app.listen(5000, () => console.log("Server is running..."));