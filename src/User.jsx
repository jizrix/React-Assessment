import { useEffect } from "react"
import TableUser from "./Table-user"
const User = ({setTitle,employees}) => {

    useEffect(()=>{
        setTitle('Home - User Sector')
    },[])

    return(
        <TableUser employees={employees} />
    )
}

export default User