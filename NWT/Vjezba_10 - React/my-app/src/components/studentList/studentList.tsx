import React, { Component } from 'react';
import './StudentList.css';
import { IStudent } from '../../models/student.model'
import StudentRow from '../studentRow/studentRow';

// - "ccc" shortcut
// - props - Recieved from parent
// - state - What state we have
// - Render - Most important function - Creates output and what actually shows on the screen
export interface StudentListProps {
    
}

export interface StudentListState {
    
}
 
class StudentList extends React.Component<StudentListProps, StudentListState> {
    constructor(props: StudentListProps) {
        super(props);
        //Stateless component
        //this.state = { :  };
        students: [],
    }

    componentDidMount() {
        this.setState({
            students: this.fetchStudents(),
        })
    }

    fetchStudents() {
        const studentList: IStudent[] = [
            id: 1,
            fullName: "Jure Jurić",
            birthdate: new Date(2000, 9, 3),
            email: "jure.juric@gmail.com",
            address: "Vikovarska 32",
            phone: "0948273648",
            faculty: "FESB",
            marked?: false,
        ]

        return studentList;
    }
    // render() { 
    //     return ( <div>studentList</div>);
    // }

    // v2
    render() { 
        return (
            <div className = "border border-bottom-0">
                <div className="bg-secondary d-flex p-3 text-center text-ligth">
                    <div className="col-1">#</div>
                    <div className="col-5">Student</div>
                    <div className="col-3">Birthdate</div>
                    <div className="col-3">faculty</div>
                </div>
                <div className="tbody">
                    {/* ili samo napravit neku konstantu napuniti je i ispisati je "{ studnetsVarList ]" */}
                    {/* v1 */}
                    {/* {this.state.students.map((student:IStudent, i:number) => student.fullName )} */}

                    {/* v2 */}
                    {this.state.students.map((student:IStudent, i:number) => 
                    
                        <StudentRow 
                            index={i}
                            student={student}
                            key={"studentRow"+i} // Potencijalni problemi ako koristimo 'i'
                        />
                        // U reactu manupulacija DOM (Doccument object model) je jako skupo
                        // 2 verzije virtualnog DOM-a, usporede se razlike i samo se razlika prebaci u DOM
                        // Ako imamo 2 ili 3 elementa i sad znamo da moramo koristit key-eve koji oznacava element.
                        // Imamo 2 elementa jedan ispod durgog i keyevi ideu po indexu 0,1,2,3
                        // Kad se izbrise neki element stari se pomakne naprijed i promjeni index i onda ako je element
                        // Zahtjevan da se re-renderira istu stvar cemo ponavljat i jako ce usporit applikaciju
                        // Key mora biti unique
                        // Dobro pazit koristit ove indexe
                    )}
                </div>
            </div>
        )
    }
}

export default StudentList;