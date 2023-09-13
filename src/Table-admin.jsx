
const TableAdmin = ({employees,removeData}) => {
    return(
        <div className="table-width">
            <table>
                <tr>
                    <th>Name</th>
                    <th>Last Name</th>
                    <th>Position</th>
                    <th>Action</th>
                </tr>
                {employees.map((data) => (
                    <tr key={data.id}>
                        <td>{data.name}</td>
                        <td>{data.lastname}</td>
                        <td>{data.position}</td>
                        <td className="action-table"><button className="button-in-table" onClick={()=>removeData(data.id)} >Delete</button></td>
                    </tr>
                ))} 
            </table>
        </div> 
    )
} 

export default TableAdmin