import { useEffect, useState } from "react"
import Layout from "./Layout";
import axios from "axios";
import User from "./User";
import Admin from "./Admin";
  
const Home = () => {
    const [title,setTitle] = useState('React - Assessment');
    const [sector,setSector] = useState('');
    const [employees,setEmployees] = useState([]);
    const [reload, setReload] = useState(false);

    useEffect(()=>{
        const getData = async () => {
            const response = await axios.get(
              "https://jsd5-mock-backend.onrender.com/members/"
            );
            setEmployees(response.data);
        }
          getData()
    },[reload]);

    /// select Role
    const buttonHandler = (role) => {
        setSector(role)
        setReload(!reload)
        console.log(reload)
    }

    const createData = async (data) => {
        const response = await axios.post(
          "https://jsd5-mock-backend.onrender.com/members", data
        );
    
        if (response.status === 200) {
            setReload(!reload);
            alert('เพิ่มเรียบร้อย')
          }else{
            alert(`ติดปัญหา : ${response.status}`)
          }
      };


    const removeData = async (id) => {
        const response = await axios.delete(
          `https://jsd5-mock-backend.onrender.com/member/${id}`
        );
        if (response.status === 200) {
            setReload(!reload);
            alert('ลบเรียบร้อย')
          }else{
            alert(`ติดปัญหา : ${response.status}`)
          }
      };

    return(
    <Layout>
        <div className="home">


            <div className="header-in-home">
                <h1><strong>Generation Thailand</strong></h1>
                <br/>
                <h1><strong>{title}</strong></h1>
            </div>
            
            <div className="button-in-home">
                <button onClick={()=>buttonHandler('user')}>User Home Sector</button>
                <button onClick={()=>buttonHandler('admin')}>Admin Home Sector</button> 
            </div>


            <br/>
            <div className="data-in-home">
                {sector === "user" ? 
                <User 
                setTitle={setTitle}
                employees={employees}
                />                 
                : sector === "admin" ? 
                <Admin 
                setTitle={setTitle}
                employees={employees}
                removeData={removeData}
                createData={createData}
                /> 
                : ""
                }
            </div>
        </div>
    </Layout>
    )
}

export default Home