import React, { Component } from 'react';
import classNames from 'classnames';
//import './StudentRow.css';
import { IStudent } from '../../models/student.model'

export interface StudentRowProps {
    index: number;
    student: IStudent;

}
 
export interface StudentRowState {
    
}
 
class StudentRow extends React.Component<StudentRowProps, StudentRowState> {
    constructor(props: StudentRowProps) {
        super(props);
        //his.state = { :  };
    }
    render() { 
        return (
            let { index, student } = this.props;

            const rowClasses = classNames ({
                "d-flex": true,
                "p-3": true,
                "student-row": true,
                "text-center": true,
                "border-bottom": true,
                "active": student.marked,
            });

            <div className={rowClasses}>
                <div className="col-1">{ index + 1 }</div>
                <div className="col-5">{ student.fullName }</div>
                <div className="col-3">{ student.birthdate.toLocaleDateString() }</div>
                <div className="col-3">{ student.faculty }</div>
            </div>
        );
    }
}
 
export default StudentRow;