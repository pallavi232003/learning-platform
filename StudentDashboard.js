/*import React, { useState } from 'react';
import './StudentDashboard.css';

const sampleCourses = [{
        id: 1,
        name: 'Course 1',
        instructor: 'Instructor 1',
        thumbnail: '/static/images/course1.jpg',
        dueDate: '2024-09-30',
        progress: 50,
        isCompleted: false,
    },
    // Add more sample courses here...
];

const StudentDashboard = () => {
    const [courses, setCourses] = useState(sampleCourses);

    const markAsCompleted = (id) => {
        setCourses(
            courses.map((course) =>
                course.id === id ?
                {...course, isCompleted: true, progress: 100 } :
                course
            )
        );
    };

    return ( <
        div className = "dashboard" >
        <
        h1 > Your Enrolled Courses < /h1> <
        div className = "course-list" > {
            courses.map((course) => ( <
                div key = { course.id }
                className = { `course-card ${course.isCompleted ? 'completed' : ''}` } >
                <
                img src = { course.thumbnail }
                alt = { course.name }
                className = "course-thumbnail" / >
                <
                div className = "course-details" >
                <
                h2 > { course.name } < /h2> <
                p > Instructor: { course.instructor } < /p> <
                p > Due Date: { course.dueDate } < /p> <
                div className = "progress-bar" >
                <
                div className = "progress"
                style = {
                    { width: `${course.progress}%` } } > { course.progress } %
                <
                /div> <
                /div> {
                    !course.isCompleted && ( <
                        button onClick = {
                            () => markAsCompleted(course.id) } > Mark as Completed < /button>
                    )
                } <
                /div> <
                /div>
            ))
        } <
        /div> <
        /div>
    );
};

export default StudentDashboard;*/

import React, { useState } from 'react';
import './StudentDashboard.css';

// Sample enrolled courses data
const enrolledCourses = [{
        id: 1,
        name: 'Introduction to React Native',
        instructor: 'John Doe',
        //thumbnail: 'https://media.istockphoto.com/id/1219290047/photo/businessman-working-in-office.jpg?s=2048x2048&w=is&k=20&c=lCxBzVW4EB548vp6wP1h1rJwGxUMeELG1C6DhN9SYGU=',
        dueDate: '2024-09-30',
        progress: 50,
        isCompleted: false,
    },
    {
        id: 2,
        name: 'Advanced React',
        instructor: 'Jane Doe',
        //thumbnail: 'https://media.istockphoto.com/id/1219290047/photo/businessman-working-in-office.jpg?s=2048x2048&w=is&k=20&c=lCxBzVW4EB548vp6wP1h1rJwGxUMeELG1C6DhN9SYGU=',
        dueDate: '2024-10-15',
        progress: 30,
        isCompleted: false,
    },
    // Add two more enrolled courses here...
];

const StudentDashboard = () => {
    const [courses, setCourses] = useState(enrolledCourses);

    const markAsCompleted = (id) => {
        setCourses(
            courses.map((course) =>
                course.id === id ? {...course, isCompleted: true, progress: 100 } :
                course
            )
        );
    };

    return ( <
        div className = "dashboard" >
        <
        h1 > Your Enrolled Courses < /h1> <
        div className = "course-list" > {
            courses.map((course) => ( <
                div key = { course.id }
                className = { `course-card ${course.isCompleted ? 'completed' : ''}` } >
                <
                img src = { course.thumbnail }
                alt = { course.name }
                className = "course-thumbnail" / >
                <
                div className = "course-details" >
                <
                h2 > { course.name } < /h2> <
                p > Instructor: { course.instructor } < /p> <
                p > Due Date: { course.dueDate } < /p> <
                div className = "progress-bar" >
                <
                div className = "progress"
                style = {
                    { width: `${course.progress}%` }
                } > { course.progress } %
                <
                /div> < /
                div > {!course.isCompleted && ( <
                        button onClick = {
                            () => markAsCompleted(course.id)
                        } > Mark as Completed < /button>
                    )
                } <
                /div> < /
                div >
            ))
        } <
        /div> < /
        div >
    );
};

export default StudentDashboard;