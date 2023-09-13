import { useEffect, useState } from "react"

const Admin = ({setTitle,employees,removeData,createData}) => {
    const [name,setName] = useState('');
    const [lastname,setLastname] = useState('');
    const [position,setPosition] = useState('');

    useEffect(()=>{
        setTitle('Home - Admin Sector')
    },[])

        
    const buttonHandler = () => {
        const data= {
            name:name,
            lastname:lastname,
            position:position
        }
        createData(data)
    }

    return(
        <div className="admin-data">

            <div className="create-user">
                <input onChange={(e)=>setName(e.target.value)} type="text" placeholder="name"/>
                <input onChange={(e)=>setLastname(e.target.value)} type="text" placeholder="lastname"/>
                <input onChange={(e)=>setPosition(e.target.value)} type="text" placeholder="position"/>
                <button onClick={() => buttonHandler()}>Save</button>
            </div>

            <div className="table-width">
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Last Name</th>
                        <th>Position</th>
                        <th>Action</th>
                    </tr>
                    {employees.map((data) => (
                        <tr>
                            <td>{data.name}</td>
                            <td>{data.lastname}</td>
                            <td>{data.position}</td>
                            <td><button className="button-in-table" onClick={()=>removeData(data.id)} >Delete</button></td>
                        </tr>
                    ))} 
                </table>
            </div>
        </div>
    )
}

export default Admin