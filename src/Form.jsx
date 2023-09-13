import { v4 as uuidv4 } from 'uuid';
import { useState } from "react"

const Form = ({createData}) => {
    const [name,setName] = useState('');
    const [lastname,setLastname] = useState('');
    const [position,setPosition] = useState('');

    const buttonHandler = () => {
        if(name !== "" && lastname !== "" && position !== ""){
            const  uid = uuidv4();   
            const data= {
            id:uid,
            name:name,
            lastname:lastname,
            position:position
        }
        createData(data)
        setName("")
        setLastname("")
        setPosition("")
        }else{
            alert("Bad input")
        }
    }

    return(
        <div className="create-user">
            <input onChange={(e)=>setName(e.target.value)} type="text" placeholder="name" value={name}/>
            <input onChange={(e)=>setLastname(e.target.value)} type="text" placeholder="lastname" value={lastname}/>
            <input onChange={(e)=>setPosition(e.target.value)} type="text" placeholder="position" value={position}/>
            <button onClick={() => buttonHandler()}>Save</button>
        </div>
    )
}
export default Form