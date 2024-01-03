import { useContext, useState } from "react"
import { studentsContext } from "../providers/StudentsContextProvider"
import { Link } from "react-router-dom"



const SignIn = () => {
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const { signIn } = useContext(studentsContext)

  return <>
    <div id="signin-container">
    <h1>Signin</h1>
      <input type="text" placeholder="Enter username" onChange={(e) => setUserName(e.target.value)} name="" id="" />
      <input type="text" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)} name="" id="" />
      <button className="button" onClick={() => { signIn(userName, password) }}>Sign In</button>
      <Link to="/signup">New User ? Sign Up</Link>
    </div>
  </>
}

export default SignIn