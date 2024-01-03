import { useContext } from "react"
import OtherStudents from "./components/OtherStudents"
import SignIn from "./components/SignIn"
import SignUp from "./components/SignUp"
import Home from "./components/hOME.JSX"
import Navbar from "./components/navbar"
import { StudentsContextProvider, studentsContext } from "./providers/StudentsContextProvider"
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"



function App() {
  const { token } = useContext(studentsContext)


  return (
    <>
          <Navbar />
          <Routes>
            {
              token ? <>
                <Route path="/signup" element={<SignUp />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/home" element={<Home />} />
                <Route path="/other-students" element={<OtherStudents />} />
                <Route path="/" element={<Navigate to="/home" />} />
              </> :
                <>
                  <Route path="/signup" element={<SignUp />} />
                  <Route path="/signin" element={<SignIn />} />
                  <Route path="/" element={<Navigate to="/signin" />} />
                  <Route path="*" element={<Navigate to="/signin" />} />
                </>
            }
          </Routes>
    </>
  )
}

export default App
