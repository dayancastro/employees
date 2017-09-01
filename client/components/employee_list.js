import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Employees } from '../../imports/collections/employees';
import EmployeeDetail from './employee_detail'

const PER_PAGE = 40;

class EmployeeList extends Component{
    constructor(props){
        super(props);
    };

    componentWillMount(){
        this.page = 1;
    };

    handleButtonClick(){        
        Meteor.subscribe('employees', PER_PAGE * this.page);
        this.page += 1;
    };

    render(){
        //props.employees => as an array of employees objects
        // console.log(props.employees);
        return (
            <div>
                <div className="employee-list">
                    { this.props.employees.map(employee => 
                        <EmployeeDetail key={employee._id} employee={employee}/>
                    ) }                
                </div>
                <button onClick={this.handleButtonClick.bind(this)}
                className="btn btn-primary">Load More...</button>
            </div>
        );
    };   
};

export default createContainer(() => {
    //Set ut subscription
    Meteor.subscribe('employees', PER_PAGE);
    //return an object. Whateverwe return will be sent to EmployeeList
    //as props
    return { employees: Employees.find({}).fetch() };

}, EmployeeList);

