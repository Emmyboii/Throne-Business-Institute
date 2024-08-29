import React, { useEffect, useState } from 'react'
import '../Pages/Admin.css'
import { useLocation } from 'react-router-dom';

function Table() {
    const location = useLocation()
    const [state, setLocationState] = useState({ FormData })

    //location state
    useEffect(() => {
        let state = location.state
        setLocationState(state)
    }, [location.state])

    return (
        <div className='table-container'>
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Phone no</th>
                        <th>Email</th>
                        <th>Education Level</th>
                    </tr>
                </thead>
                {/*- mapping table body to display form data using the map method */}
                <tbody>
                    {state && (
                        <tr>
                            <td>{state.first_name}</td>
                            <td>{state.last_name}</td>
                            <td>{state.phone_number}</td>
                            <td>{state.email}</td>
                            <td>{state.education_Lvl}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default Table