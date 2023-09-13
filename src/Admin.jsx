import { useEffect, useState } from "react"
import TableAdmin from "./Table-admin";
import Form from "./Form";
import axios from "axios";

const Admin = ({setTitle,employees,removeData,createData,removeAll}) => {

    const [allid,setAllid] = useState([])

    useEffect(()=>{
        setTitle('Home - Admin Sector')
    },[])

    return(
        <div className="admin-data">

            <Form createData={createData}/>

            <TableAdmin
                employees={employees}
                removeData={removeData}
            />
            <div className="button-delete-all-box">
            <button onClick={() => removeAll()} className="button-delete-all">DeleteAll</button>
            </div>
        </div>
    )
}

export default Admin