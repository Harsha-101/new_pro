const Employees=({employee})=>
{
    return(
        <>
        <table>
            <thead>
                <tr>
                <th>
                    id
                </th>
                <th>
                    name
                </th>
                <th>
                    desg
                </th>
                </tr>
            </thead>
            <tbody>
                {employee.map(employees)=>
                return(<tr key={employee.id}>)}
            </tbody>
        </table>
        </>
    )
}


