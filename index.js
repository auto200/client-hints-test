import express from "express"
import cors from "cors"

const app = express()

app.use(cors())


app.get("/",(req,res)=>{
    console.log(req.headers)
    res.setHeader("Accept-CH", "sec-ch-ua-platform")

    res.send("ok")
})

app.listen(3000)