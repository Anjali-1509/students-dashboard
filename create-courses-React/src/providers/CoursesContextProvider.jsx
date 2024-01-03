import { createContext, useEffect, useState } from "react";



const coursesContext = createContext({
    coursesList: [],
    createCourse: async () => {

    },
    deleteCourse: async () => {

    },
    editCourse: async () => {

    }

})

const CoursesContextProvider = ({ children }) => {
    const [coursesList, setCoursesList] = useState([])

    const createCourse = async (courseName, courseDescription) => {
        const response = await fetch("http://localhost:8000/courses", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                courseNameFromReact: courseName,
                courseDescFromReact: courseDescription
            })
        })
        const data = await response.json()
        setCoursesList(data)
    }

    const getAllCourses = async () => {
        const response = await fetch("http://localhost:8000/courses", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        }
        )

        const data = await response.json()
        setCoursesList(data)
    }

    useEffect(() => {
        getAllCourses()
    }, [])


    const deleteCourse = async (courseId) => {
        console.log(courseId)
        const response = await fetch(`http://localhost:8000/courses/${courseId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })

        const data = await response.json()
        console.log(data.message)
        await getAllCourses()
    }

    const editCourse = async (courseId, newCourseName, newCourseDesc) => {
        const response = await fetch(`http://localhost:8000/courses/${courseId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                newCourseName: newCourseName,
                newCourseDesc: newCourseDesc
            })
        })

        const data = await response.json()
        console.log(data.message)
        await getAllCourses()
    }

    return <>
        <coursesContext.Provider value={{ coursesList, createCourse, deleteCourse, editCourse }}>
            {children}
        </coursesContext.Provider>
    </>
}

export { coursesContext, CoursesContextProvider }