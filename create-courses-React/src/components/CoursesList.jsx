import { useContext } from "react"
import { coursesContext } from "../providers/CoursesContextProvider"
import Course from "./Course"



const CoursesList= ()=>{
    const {coursesList} = useContext(coursesContext)
    console.log(coursesList)
    return<>
    {
        coursesList.map((course)=>{
            return <Course key={course._id} id={course._id} courseName={course.courseName}  courseDesc={course.courseDescription} />
        }
        
        )
    }
    </>
}

export default CoursesList