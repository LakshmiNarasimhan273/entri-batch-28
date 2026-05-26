// import React from 'react'
// import express from "express";

const express = require("express");
const app = express();

// port numbers
// - 3000, 3001, 8080, 8081, 8082

// 8080
let port = 8080;

app.listen(port, () => { // callback function
    console.log("Server running", port);
});