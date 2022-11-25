		const express=require("express")
		const app=express();
		const cors=require("cors");
		const bodyParser=require("body-parser")
		const port=4500;

		app.use(bodyParser.urlencoded({
			extended:true

		}))
		app.use(bodyParser.json())

		app.use(cors())
		app.get("/",(req,res)=>{
			res.send("good morning")
		})
		app.post("/newData",(req,res)=>{
			//console.log(req.body)
			const {name,pin,course,gender}=req.body
			console.log(name,pin,course,gender,"values")
			res.send("Data added")

		})
		app.listen(port)
		console.log("hi this is karthik")