import React, { useState } from "react";


const CourseDetails = () => {
    const [isSyllabusExpanded, setIsSyllabusExpanded] = useState(false);

    const toggleSyllabus = () => {
        setIsSyllabusExpanded(!isSyllabusExpanded);
    };

    return ( <
            div className = "course-details-container"
            style = { containerStyle } >
            <
            div className = "course-header"
            style = { headerStyle } >
            <
            h1 style = { titleStyle } > HTML, CSS, & JavaScript - Certification Course
            for Beginners < /h1> <
            p style = { instructorStyle } > Created by YouAccel Training < /p> <
            p style = { descriptionStyle } >
            A Comprehensive Guide
            for Beginners interested in learning HTML, CSS, & JavaScript to Build Interactive Web Pages. <
            /p> < /
            div >

            <
            div className = "course-enrollment"
            style = { enrollmentStyle } >
            <
            p > < strong > Enrollment Status: < /strong> Open</p >
            <
            p > < strong > Course Duration: < /strong> 5.5 hours</p >
            <
            p > < strong > Schedule: < /strong> Self-paced, available anytime</p >
            <
            p > < strong > Location: < /strong> Online</p >
            <
            p > < strong > Pre - requisites: < /strong> None</p >
            <
            /div>

            <
            div className = "course-syllabus"
            style = { syllabusContainerStyle } >
            <
            button onClick = { toggleSyllabus }
            style = { buttonStyle } > { isSyllabusExpanded ? "Hide Syllabus" : "Show Syllabus" } <
            /button> {
            isSyllabusExpanded && ( <
                ul style = { syllabusStyle } >
                <
                li > Introduction to HTML < /li> <
                li > Basics of CSS < /li> <
                li > Introduction to JavaScript < /li> <
                li > Building a simple web page < /li> <
                li > Responsive design with CSS < /li> <
                li > Advanced JavaScript concepts < /li> < /
                ul >
            )
        } <
        /div>

    <
    div className = "course-footer"
    style = { footerStyle } >
        <
        button style = { footerButtonStyle } > Add to Cart - ₹1, 999 < /button > <
    button style = { footerButtonStyle } > Enroll < /button> < /
    div > <
        /div>
);
};

const containerStyle = {
    padding: "20px",
    maxWidth: "900px",
    margin: "0 auto",
    backgroundColor: "#f8f8f8",
    borderRadius: "8px",
};

const headerStyle = {
    marginBottom: "20px",
};

const titleStyle = {
    fontSize: "28px",
    fontWeight: "bold",
};

const instructorStyle = {
    fontSize: "16px",
    color: "#555",
};

const descriptionStyle = {
    fontSize: "16px",
    marginBottom: "20px",
};

const enrollmentStyle = {
    marginBottom: "20px",
    fontSize: "16px",
};

const syllabusContainerStyle = {
    marginBottom: "20px",
};

const buttonStyle = {
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
    backgroundColor: "#6c63ff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    marginBottom: "10px",
};

const syllabusStyle = {
    listStyleType: "none",
    paddingLeft: "20px",
    fontSize: "16px",
};

const footerStyle = {
    display: "flex",
    justifyContent: "space-between",
};

const footerButtonStyle = {
    padding: "15px 25px",
    fontSize: "16px",
    cursor: "pointer",
    backgroundColor: "#6c63ff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
};

export default CourseDetails;