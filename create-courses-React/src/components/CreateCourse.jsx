import { useContext, useState } from "react"
import { coursesContext } from "../providers/CoursesContextProvider"



const CreateCourse = () => {

    const [courseName, setCourseName] = useState("")
    const [courseDesc, setCourseDesc] = useState("")
    const {createCourse} = useContext(coursesContext)

    const changeCourseNameInput=(e)=>{
        setCourseName(e.target.value)
    }

    const changeCourseDescInput = (e)=>{
        setCourseDesc(e.target.value)
    }
    const clickCreateCourseButton=()=>{
        createCourse(courseName, courseDesc)
        setCourseName("")
        setCourseDesc("")
    }
    return <>
         
        <input type="text" placeholder="Enter Course Name" value={courseName} onChange={changeCourseNameInput} />
        <input type="text" placeholder="Enter Course Description" value={courseDesc}  onChange={changeCourseDescInput}/>
        <button onClick={clickCreateCourseButton}>Create Course</button>
        <hr />

    </>
}

export default CreateCourse