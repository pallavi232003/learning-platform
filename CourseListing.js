import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import sampleCourses from '../data/sampleCourses';

const CourseListing = () => {
    const [courses, setCourses] = useState(sampleCourses);
    const [search, setSearch] = useState('');

    useEffect(() => {
        // Filter courses based on search query
        setCourses(
            sampleCourses.filter(course =>
                course.name.toLowerCase().includes(search.toLowerCase()) ||
                course.instructor.toLowerCase().includes(search.toLowerCase())
            )
        );
    }, [search]);

    return ( <
        div >
        <
        input type = "text"
        placeholder = "Search by course name or instructor"
        value = { search }
        onChange = {
            (e) => setSearch(e.target.value) }
        /> <
        ul > {
            courses.map(course => ( <
                li key = { course.id } >
                <
                Link to = { `/course/${course.id}` } > { course.name } - { course.instructor } < /Link> <
                /li>
            ))
        } <
        /ul> <
        /div>
    );
};

export default CourseListing;