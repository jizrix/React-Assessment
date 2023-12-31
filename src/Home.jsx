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
    const [allid,setAllid] = useState([])


    useEffect(()=>{
        const getData = async () => {
            const response = await axios.get(
              "https://jsd5-mock-backend.onrender.com/members/"
            );
            setEmployees(response.data);
        }
          getData();
          collectID();
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
            alert('เพิ่มเรียบร้อย')
          }else{
            alert(`ติดปัญหา : ${response.status}`)
          }
        
        setReload(!reload);
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


    const collectID = async () => {
        const pureID = employees.map(item=>item.id)
        console.log(pureID)
        setAllid(pureID)    
    }

    const remove = async (id) => {
      const response = await axios.delete(
        `https://jsd5-mock-backend.onrender.com/member/${id}`
      );
      if (response.status === 200) {
          console.log('Deleted')
        }else{
          console.log('Error')
        }
    };


    const removeAll = () => {
      const ans = prompt(`แน่ใจนะที่จะลบทั้งหมด? พิมพ์ "ลบ" เพื่อยืนยัน`)
      
      if(ans === "ลบ"){
        for(let i=0; i<allid.length; i++){
          remove(allid[i])
          console.log('Deleting ID : ' + allid[i] )
        }   
      }else{
        alert('อะไรคือ : ' + ans + "?")
      }
      setReload(!reload)
   }      


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
                removeAll={removeAll}
                /> 
                : ""
                }
            </div>
        </div>
    </Layout>
    )
}

export default Home