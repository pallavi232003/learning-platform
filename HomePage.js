import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import ActionAreaCard from './ActionAreaCard';

const sampleCourses = [{
        id: 1,
        name: 'Introduction to React Native',
        instructor: 'John Doe',
        description: 'Learn the basics of React Native development and build your first mobile app.',
        enrollmentStatus: 'Open',
        thumbnail: 'https://images.pexels.com/photos/5212320/pexels-photo-5212320.jpeg?auto=compress&cs=tinysrgb&w=600',
        duration: '8 weeks',
        schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
        location: 'Online',
        prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
        syllabus: [
            { week: 1, topic: 'Introduction to React Native', content: 'Overview of React Native, setting up your development environment.' },
            { week: 2, topic: 'Building Your First App', content: 'Creating a simple mobile app using React Native components.' },
        ],
        rating: 4.5,
    },


    {
        id: 2,
        name: 'Introduction to HTML,CSS,JAVASCRIPT',
        instructor: 'Doe',
        description: 'Learn the basics of Web development and build your first web page.',
        enrollmentStatus: 'Open',
        thumbnail: 'https://images.pexels.com/photos/5212320/pexels-photo-5212320.jpeg?auto=compress&cs=tinysrgb&w=600',
        duration: '5 weeks',
        schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
        location: 'Online',
        prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
        syllabus: [
            { week: 1, topic: 'Introduction to HTML,CSS,JAVASCRIPT', content: 'Overview of frontend, setting up your development environment.' },
            { week: 2, topic: 'Building Your web page', content: 'Creating a simple mobile application using the above components.' },
        ],
    },

    {
        id: 3,
        name: 'Advanced React',
        instructor: 'Ram',
        description: 'Learn the basics of Advanced React  development and build your first mobile app.',
        enrollmentStatus: 'Open',
        thumbnail: 'https://images.pexels.com/photos/5212320/pexels-photo-5212320.jpeg?auto=compress&cs=tinysrgb&w=600',
        duration: '8 weeks',
        schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
        location: 'Online',
        prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
        syllabus: [
            { week: 1, topic: 'Introduction to Advanced React ', content: 'Overview of React , setting up your development environment.' },
            { week: 2, topic: 'Building Your First App', content: 'Creating a simple mobile app using React  components.' },
        ],
    },

    {
        id: 4,
        name: 'Intermediate Python',
        instructor: 'James',
        description: 'Learn the basics of Intermediate Python development and build your first mobile app.',
        enrollmentStatus: 'Open',
        thumbnail: 'https://images.pexels.com/photos/5212320/pexels-photo-5212320.jpeg?auto=compress&cs=tinysrgb&w=600',
        duration: '8 weeks',
        schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
        location: 'Online',
        prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
        syllabus: [
            { week: 1, topic: 'Introduction to Intermediate Python', content: 'Overview of Intermediate Python, setting up your development environment.' },
            { week: 2, topic: 'Building Your First Application', content: 'Creating a simple mobile application using React Native components.' },
        ],
    },

    {
        id: 5,
        name: 'Advanced python',
        instructor: 'Carli',
        description: 'Learn the basics of Advanced Python development and build your first mobile app.',
        enrollmentStatus: 'Open',
        thumbnail: 'https://media.istockphoto.com/id/1219290047/photo/businessman-working-in-office.jpg?s=2048x2048&w=is&k=20&c=lCxBzVW4EB548vp6wP1h1rJwGxUMeELG1C6DhN9SYGU=',
        duration: '8 weeks',
        schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
        location: 'Online',
        prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
        syllabus: [
            { week: 1, topic: 'Introduction to Advanced Python', content: 'Overview of Advanced Python, setting up your development environment.' },
            { week: 2, topic: 'Building Your First Application', content: 'Creating a simple mobile application using React Native components.' },
        ],
        rating: 4.5,
    },

    {
        id: 6,
        name: 'Java',
        instructor: 'Lilly',
        description: 'Learn the basics of Java development and build your first mobile application.',
        enrollmentStatus: 'Open',
        thumbnail: 'https://media.istockphoto.com/id/1219290047/photo/businessman-working-in-office.jpg?s=2048x2048&w=is&k=20&c=lCxBzVW4EB548vp6wP1h1rJwGxUMeELG1C6DhN9SYGU=',
        duration: '8 weeks',
        schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
        location: 'Online',
        prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
        syllabus: [
            { week: 1, topic: 'Introduction to java', content: 'Overview of React Native, setting up your development environment.' },
            { week: 2, topic: 'Building Your First Application', content: 'Creating a simple mobile app using React Native components.' },
        ],
        rating: 4.5,
    },

    {
        id: 7,
        name: 'Advanced React',
        instructor: 'Ram',
        description: 'Learn the basics of Advanced React  development and build your first mobile app.',
        enrollmentStatus: 'Open',
        thumbnail: 'https://media.istockphoto.com/id/1219290047/photo/businessman-working-in-office.jpg?s=2048x2048&w=is&k=20&c=lCxBzVW4EB548vp6wP1h1rJwGxUMeELG1C6DhN9SYGU=',
        duration: '8 weeks',
        schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
        location: 'Online',
        prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
        syllabus: [
            { week: 1, topic: 'Introduction to Advanced React ', content: 'Overview of React , setting up your development environment.' },
            { week: 2, topic: 'Building Your First App', content: 'Creating a simple mobile app using React  components.' },
        ],
        rating: 4.5,
    },

    {
        id: 8,
        name: 'Advanced python',
        instructor: 'Carli',
        description: 'Learn the basics of Advanced Python development and build your first mobile app.',
        enrollmentStatus: 'Open',
        thumbnail: 'https://media.istockphoto.com/id/1293902461/photo/business-woman-stock-photo.jpg?s=612x612&w=0&k=20&c=mQxz3OJDshyjIGtQXeCr6utJN8I7rXVbWiaEVLweRb8=',
        duration: '8 weeks',
        schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
        location: 'Online',
        prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
        syllabus: [
            { week: 1, topic: 'Introduction to Advanced Python', content: 'Overview of Advanced Python, setting up your development environment.' },
            { week: 2, topic: 'Building Your First Application', content: 'Creating a simple mobile application using React Native components.' },
        ],
    },
    // Add more courses here...
];

const HomePage = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredCourses = sampleCourses.filter(course =>
        course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return ( <
        div className = "homepage"
        style = {
            { padding: '20px' }
        } >
        <
        AppBar position = "static" >
        <
        Toolbar >
        <
        Typography variant = "h6"
        component = "div"
        sx = {
            { flexGrow: 1 }
        } >
        Coursly Platform <
        /Typography> <
        TextField variant = "outlined"
        size = "small"
        placeholder = "Search..."
        onChange = {
            (e) => setSearchTerm(e.target.value)
        }
        sx = {
            { backgroundColor: 'white', borderRadius: '5px', marginRight: '10px' }
        }
        /> <
        Button color = "inherit"
        component = { Link }
        to = "/dashboard" > Dashboard < /Button> <
        Button color = "inherit"
        component = { Link }
        to = "/register" > Register < /Button> <
        Button color = "inherit"
        component = { Link }
        to = "/login" > Login < /Button> < /
        Toolbar > <
        /AppBar>

        <
        Box sx = {
            { textAlign: 'center', marginTop: '20px' }
        } >
        <
        header >
        <
        h1 > Welcome to the Coursly Platform < /h1> <
        p > Explore our courses and enhance your skills. < /p> < /
        header >

        { /* Filtered Courses Section */ } <
        Box display = "flex"
        flexWrap = "wrap"
        justifyContent = "center"
        mt = { 2 }
        gap = { 2 } > {
            filteredCourses.map(course => ( <
                ActionAreaCard key = { course.id }
                course = { course }
                />
            ))
        } <
        /Box> < /
        Box > <
        /div>
    );
};

export default HomePage;