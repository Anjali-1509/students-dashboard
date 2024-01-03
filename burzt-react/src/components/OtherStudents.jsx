import { useContext, useEffect } from "react"
import { studentsContext } from "../providers/StudentsContextProvider"
import Student from "./Student"



const OtherStudents = ()=>{
    const {otherStudents, getOtherStudents} = useContext(studentsContext)

    useEffect(()=>{
      if(!otherStudents.length){
      getOtherStudents()
      }
    }, [otherStudents.length])
    return<>
  <h3>Other Students</h3>
  {
    otherStudents.length ? otherStudents.map((student)=>
      <Student key={student.userId} username={student.userName} />
    ) :
    <p>Loading...</p>
  }
    </>
}

export default OtherStudents