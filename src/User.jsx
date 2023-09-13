import { useEffect, useState } from "react"

const User = ({setTitle,employees}) => {

    useEffect(()=>{
        setTitle('Home - User Sector')
    },[])

    return(
        <div className="table-width">
            <table>
                <tr>
                    <th>Name</th>
                    <th>Last Name</th>
                    <th>Position</th>
                </tr>
                {employees.map((data) => (
                    <tr>
                        <td>{data.name}</td>
                        <td>{data.lastname}</td>
                        <td>{data.position}</td>
                    </tr>
                ))}
                
            </table>
        </div>
    )
}

export default User