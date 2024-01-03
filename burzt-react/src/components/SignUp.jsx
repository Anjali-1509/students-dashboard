import { useContext, useState } from "react"
import { studentsContext } from "../providers/StudentsContextProvider"
import { Link } from "react-router-dom"




const SignUp = () => {
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const { signUp } = useContext(studentsContext)

  return <>
    <div id="signup-container">
      <h1>SignUp</h1>
      <input type="text" placeholder="Enter username" onChange={(e) => setUserName(e.target.value)} name="" id="" />
      <input type="text" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)} name="" id="" />
      <button className="button" onClick={() => { signUp(userName, password) }}>Sign Up</button>
      <Link className="link" to="/signin">Existing User ? Sign In</Link>
    </div>
  </>
}

export default SignUp