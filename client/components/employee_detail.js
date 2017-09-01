import React from 'react';

const EmployeeDetail = (props) => {
    //props.employee is our employee model

    return (
        <div className="thumbnail"> 
            <img src={props.employee.avatar}/>
        </div>
    );
};

export default EmployeeDetail;