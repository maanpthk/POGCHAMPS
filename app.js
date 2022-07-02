const express = require('express')
const app = express()
const request = require("request")
const port = 3000
app.use(express.static("public"));
var bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({extended:true}))

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/public/frontPage.html")
})

app.post("/signup.html",function(req, res){

})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
