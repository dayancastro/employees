import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Employees } from '../../imports/collections/employees';
import EmployeeDetail from './employee_detail'

const EmployeeList = (props) => {
    //props.employees => as an array of employees objects
    // console.log(props.employees);
    return (
        <div>
            <div className="employee-list">
                { props.employees.map(employee => 
                    <EmployeeDetail key={employee._id} employee={employee}/>
                ) }                
            </div>
        </div>
    );
};

export default createContainer(() => {
    //Set ut subscription
    Meteor.subscribe('employees');
    //return an object. Whateverwe return will be sent to EmployeeList
    //as props
    return { employees: Employees.find({}).fetch() };

}, EmployeeList);

