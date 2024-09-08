/*import logo from './logo.svg';
import './App.css';

function App() {
    return ( 
    <div className = "App" >
        <
        header className = "App-header" >
        <
        img src = { logo }
        className = "App-logo"
        alt = "logo" / >
        <p>
        Edit < code > src / App.js < /code> and pallavi reddy to reload. <
        /p> <
        a className = "App-link"
        href = "https://reactjs.org"
        target = "_blank"
        rel = "noopener noreferrer" >
        Learn React <
        /a> <
        /header> <
        /div>
    );
}

export default App;*/
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import CourseListing from './components/CourseListing';
import CourseDetails from './components/CourseDetails';
import StudentDashboard from './components/StudentDashboard';
import RegisterPage from './components/RegisterPage';
import LoginPage from './components/LoginPage';

const courses = [{
        id: 1,
        name: 'HTML and CSS for Beginners',
        instructor: 'Edwin Diaz',
        description: 'Learn HTML and CSS from scratch.',
        enrollmentStatus: 'Open',
        duration: '5 weeks',
        schedule: 'Mon, Wed, Fri',
        location: 'Online',
        prerequisites: ['Basic Computer Knowledge'],
        syllabus: [
            { week: 1, topic: 'Introduction to HTML', content: 'Learn the basics of HTML.' },
            { week: 2, topic: 'Introduction to CSS', content: 'Learn the basics of CSS.' },
            // Add more weeks as needed
        ]
    },
    // Add more courses as needed
];

function App() {
    return ( <
        Router >
        <
        Routes >
        <
        Route path = "/"
        element = { < HomePage / > }
        /> <
        Route path = "/courses"
        element = { < CourseListing / > }
        /> <
        Route path = "/courses/:id"
        element = { < CourseDetails courses = { courses }
            />} / >
            <
            Route path = "/dashboard"
            element = { < StudentDashboard / > }
            /> <
            Route path = "/register"
            element = { < RegisterPage / > }
            /> <
            Route path = "/login"
            element = { < LoginPage / > }
            /> < /
            Routes > <
            /Router>
        );
    }

    export default App;