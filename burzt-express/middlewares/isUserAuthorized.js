const jwt = require("jsonwebtoken")

const isUserAuthorized= async(req,res,next)=>{
try{
if(req.headers.authorization){
const token = req.headers.authorization
req.currentUser =jwt.verify(token, "s3cret")
next()
return
}
else{
res.status(400).json({
    error : "Error ! please sign in"
})
}
}
catch{
  res.status(400).json({
    error : "Unauthorized Request"
  })
}
}

module.exports= isUserAuthorized

