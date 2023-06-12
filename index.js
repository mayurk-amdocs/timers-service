const express = require("express");
const mongoose = require("mongoose");
const test = require("./testModel");
const test1 = require("./testModel1");
const test2 = require("./testModel2");
const test3 = require("./testModel3");
const test4 = require("./testModel4");
const test5 = require("./testModel5");
const test6 = require("./testModel6");
const test7 = require("./testModel7");
const test8 = require("./testModel8");

const app = express();
const port = 7000;

app.post("/", async (req, res) => {

  try {
    let data = [{
      timestamp: Date.now(),
      job: "Timer Service",
      pattern: "*",
    }];
    let dbData = await test.create({data: data});
    if (dbData) {
      res.status(200).json({
        data: dbData,
        message:"Successfull"
      });  
    } else {
      res.status(500).json({
        data: null,
        message:" Exception !"
      });
    }   
  } catch (error) {
    res.status(500).json({
      message: error.message
    });  
  }
});

app.post("/1", async (req, res) => {

  try {
    let data = [{
      timestamp: Date.now(),
      job: "Timer Service",
      pattern: "*",
    }];
    let dbData = await test1.create({data: data});
    if (dbData) {
      res.status(200).json({
        data: dbData,
        message:"Successfull"
      });  
    } else {
      res.status(500).json({
        data: null,
        message:" Exception !"
      });
    }   
  } catch (error) {
    res.status(500).json({
      message: error.message
    });  
  }
});
app.post("/2", async (req, res) => {

  try {
    let data = [{
      timestamp: Date.now(),
      job: "Timer Service",
      pattern: "*",
    }];
    let dbData = await test2.create({data: data});
    if (dbData) {
      res.status(200).json({
        data: dbData,
        message:"Successfull"
      });  
    } else {
      res.status(500).json({
        data: null,
        message:" Exception !"
      });
    }   
  } catch (error) {
    res.status(500).json({
      message: error.message
    });  
  }
});
app.post("/3", async (req, res) => {

  try {
    let data = [{
      timestamp: Date.now(),
      job: "Timer Service",
      pattern: "*",
    }];
    let dbData = await test3.create({data: data});
    if (dbData) {
      res.status(200).json({
        data: dbData,
        message:"Successfull"
      });  
    } else {
      res.status(500).json({
        data: null,
        message:" Exception !"
      });
    }   
  } catch (error) {
    res.status(500).json({
      message: error.message
    });  
  }
});
app.post("/4", async (req, res) => {

  try {
    let data = [{
      timestamp: Date.now(),
      job: "Timer Service",
      pattern: "*",
    }];
    let dbData = await test4.create({data: data});
    if (dbData) {
      res.status(200).json({
        data: dbData,
        message:"Successfull"
      });  
    } else {
      res.status(500).json({
        data: null,
        message:" Exception !"
      });
    }   
  } catch (error) {
    res.status(500).json({
      message: error.message
    });  
  }
});
app.post("/5", async (req, res) => {

  try {
    let data = [{
      timestamp: Date.now(),
      job: "Timer Service",
      pattern: "*",
    }];
    let dbData = await test5.create({data: data});
    if (dbData) {
      res.status(200).json({
        data: dbData,
        message:"Successfull"
      });  
    } else {
      res.status(500).json({
        data: null,
        message:" Exception !"
      });
    }   
  } catch (error) {
    res.status(500).json({
      message: error.message
    });  
  }
});
app.post("/6", async (req, res) => {

  try {
    let data = [{
      timestamp: Date.now(),
      job: "Timer Service",
      pattern: "*",
    }];
    let dbData = await test6.create({data: data});
    if (dbData) {
      res.status(200).json({
        data: dbData,
        message:"Successfull"
      });  
    } else {
      res.status(500).json({
        data: null,
        message:" Exception !"
      });
    }   
  } catch (error) {
    res.status(500).json({
      message: error.message
    });  
  }
});
app.post("/7", async (req, res) => {

  try {
    let data = [{
      timestamp: Date.now(),
      job: "Timer Service",
      pattern: "*",
    }];
    let dbData = await test7.create({data: data});
    if (dbData) {
      res.status(200).json({
        data: dbData,
        message:"Successfull"
      });  
    } else {
      res.status(500).json({
        data: null,
        message:" Exception !"
      });
    }   
  } catch (error) {
    res.status(500).json({
      message: error.message
    });  
  }
});
app.post("/8", async (req, res) => {

  try {
    let data = [{
      timestamp: Date.now(),
      job: "Timer Service",
      pattern: "*",
    }];
    let dbData = await test8.create({data: data});
    if (dbData) {
      res.status(200).json({
        data: dbData,
        message:"Successfull"
      });  
    } else {
      res.status(500).json({
        data: null,
        message:" Exception !"
      });
    }   
  } catch (error) {
    res.status(500).json({
      message: error.message
    });  
  }
});

try {
  mongoose.connect("mongodb://guest:guest@localhost:27017",{
  useNewUrlParser:true
});
} catch (error) {
  console.log(JSON.stringify(error))
}
app.listen(port, "0.0.0.0", () => {
  console.log(`Example app listening on port ${port}`);
});
