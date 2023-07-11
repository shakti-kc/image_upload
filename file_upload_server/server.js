const express = require('express')
const app = express()
app.use(express.json())

const cors = require('cors')
const corsOptions = {origin: 'http://localhost:3000',method:["GET","POST"],credentials: true,}
app.use(cors(corsOptions));

 
const multer  = require('multer')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'img_upload')
    },
    filename: function (req, file, cb) {
     cb(null, Date.now() + '_' + file.originalname)
       
    }
  })
   
  const upload = multer({ storage: storage })

app.post('/upload_file', upload.single('mygFile'), function(req, res){
    console.log(req.file)
}) 

app.get("/", function(req, res){
    res.send("Hellow World")
})

app.listen(8080, function(){
    console.log("Server is Listening")
})