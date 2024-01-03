import { useContext, useEffect } from "react"
import { studentsContext } from "../providers/StudentsContextProvider"



const Home = ()=>{
    const {getCurrentUser, currentUser} = useContext(studentsContext)

    useEffect(()=>{
       if(!currentUser){
        getCurrentUser()
       }
    }, [currentUser])
    return<>
 {
    currentUser ? <h3>Welcome , {currentUser}</h3> : <p>Loading...</p>
 }
    </>
}

export default Home