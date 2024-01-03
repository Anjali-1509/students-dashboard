
import CoursesList from "./components/CoursesList"
import CreateCourse from "./components/CreateCourse"
import { CoursesContextProvider } from "./providers/CoursesContextProvider"




const App =()=> {

  return (
    <>
     <CoursesContextProvider>
      <CreateCourse />
      <CoursesList />
     </CoursesContextProvider>
    </>
  )
}

export default App
