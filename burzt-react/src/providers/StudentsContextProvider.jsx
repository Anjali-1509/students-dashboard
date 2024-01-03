import { createContext, useState } from "react"
import { useNavigate } from "react-router-dom"



const studentsContext = createContext({
    signUp : async()=>{},
    signIn : async()=>{},
    token : "",
    setToken : ()=>{},
    getCurrentUser : async()=>{},
    currentUser : "",
    getOtherStudents: async()=>{},
    otherStudents: [],
    setOtherStudents: ()=>{}
})

const StudentsContextProvider = ({children})=>{

    const navigate = useNavigate()
    const [token , setToken] = useState(localStorage.getItem("authorization"))
    const [currentUser, setCurrentUser] = useState("")
    const [otherStudents, setOtherStudents] = useState([])

   const signUp = async(username, password)=>{
     const response = await fetch("https://burzt-backend.onrender.com/students/signup", {
        method : "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body : JSON.stringify({
            username: username,
            password: password
        })
     })
     const data = await response.json()
     if(data.error){
        alert(data.error)
     }
     else{
        console.log(data.message)
        navigate("/signin")
     }

   }


   const signIn = async(username, password)=>{
    console.log(username)
    const response = await fetch("http://localhost:8001/students/signin", {
        method : "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify({
            username: username,
            password : password
        })
    })
    const data = await response.json()
    console.log(data)
    const token = response.headers.get("authorization")
    if(data.error){
        alert(data.error)
    }
    else{
        console.log(data.message, token)
        localStorage.setItem("authorization", token)
        setToken(token)
        navigate("/home")
    }
   }


   const getCurrentUser= async()=>{
    const response= await fetch("http://localhost:8001/students/user", {
        method : "GET",
        headers:{
            "Content-Type" : "application/json",
            authorization : token
        }
    })
    const data = await response.json()
    setCurrentUser(data.userName)
    console.log(data)
   }

   const getOtherStudents= async()=>{
    const response= await fetch("http://localhost:8001/students/others", {
        method : "GET",
        headers:{
            "Content-Type" : "application/json",
            authorization : token
        }
    })

    const data = await response.json()
    console.log(data)
    setOtherStudents(data)
   }

    return<>
   <studentsContext.Provider value={{signUp, signIn, token, setToken, getCurrentUser, currentUser, setCurrentUser, getOtherStudents, otherStudents,setOtherStudents}}>
       {children}
   </studentsContext.Provider>
    </>
}

export {studentsContext, StudentsContextProvider}