import { useContext, useState } from "react"
import { coursesContext } from "../providers/CoursesContextProvider"


const Courses = ({ courseName, courseDesc, id }) => {
    const { deleteCourse, editCourse } = useContext(coursesContext)
    const [isEditMode, setIsEditMode] = useState(false)
    const [newCourseName, setNewCourseName] = useState(courseName)
    const [newCourseDescription, setNewCourseDescription] = useState(courseDesc)

    const clickDeleteCourseButton = async () => {
        deleteCourse(id)
    }


    const clickEditCourseButton = () => {
        setIsEditMode(true)
    }

    const changeNewCourseNameInput = (event) => {
        setNewCourseName(event.target.value)
    }

    const changeNewCourseDescriptionInput = (event) => {
        setNewCourseDescription(event.target.value)
    }

    const clickSaveCourseButton=  async()=>{
        await editCourse(id, newCourseName, newCourseDescription)
        setIsEditMode(false)
    }
    return <>
        {
            isEditMode ? <>
              <input type="text" placeholder="Enter New Course Name" value={newCourseName} onChange={changeNewCourseNameInput} />
              <input type="text" placeholder="Enter New Course Description" value={newCourseDescription} onChange={changeNewCourseDescriptionInput} />
              <button onClick={clickSaveCourseButton}>Save</button>
            </> :

                <>
                    <h1>{courseName}</h1>
                    <p>{courseDesc}</p>
                    <button onClick={clickDeleteCourseButton}>Delete</button>
                    <button onClick={clickEditCourseButton}>Edit</button>
                </>
        }
    </>
}

export default Courses