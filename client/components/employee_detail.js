import React from 'react';

const EmployeeDetail = ({ employee }) => {
    //props.employee is our employee model
    // const { name, email, phone, avatar } = employee;
    return (
        <div className="thumbnail"> 
            <img src={employee.avatar}/>
            <div className="caption">
                <h3>{employee.name}</h3>
                <ul className="list-group">
                    <li className="list-group-item">Email: {employee.email}</li>
                    <li className="list-group-item">Phone: {employee.phone}</li>
                    <li className="list-group-item">Lat: {employee.latitude}</li>
                    <li className="list-group-item">Long: {employee.longitude}</li>
                </ul>
            </div>
        </div>
    );
};

export default EmployeeDetail;