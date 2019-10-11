const express = require('express');
const routes = express.Router();
const logService = require('../services/logService');


routes.get("/dailyLog",async (req,res)=>{
    let result = await logService.dailyLog();
    res.json(result)
})


module.exports = routes;