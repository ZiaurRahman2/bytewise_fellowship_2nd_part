import React, { Component } from 'react';
import './student.css'


function Student(props) {


    return (

        <div>

            <h1 className="container">My name is   {props.name} and my email address {props.email}</h1>

        </div>



    )

}
export default Student;