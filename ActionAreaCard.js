/*import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Rating from '@mui/material/Rating';

export default function ActionAreaCard() {
    return ( <
        Card sx = {
            { maxWidth: 345 } } >
        <
        CardActionArea >
        <
        CardMedia component = "img"
        height = "140"
        image = "/static/images/cards/contemplative-reptile.jpg" // Update with your image path
        alt = "Course thumbnail" /
        >
        <
        CardContent >
        <
        Typography gutterBottom variant = "h5"
        component = "div" >
        Course Name <
        /Typography> <
        Typography variant = "body2"
        color = "text.secondary" >
        Brief course description goes here. <
        /Typography> <
        Rating name = "course-rating"
        value = { 4 }
        readOnly / >
        <
        /CardContent> <
        /CardActionArea> <
        /Card>
    );
}*/


import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const ActionAreaCard = ({ course }) => {
    return ( <
        Card sx = {
            { maxWidth: 345 }
        } >
        <
        CardActionArea component = { Link }
        to = { `/courses/${course.id}` } >
        <
        CardMedia component = "img"
        height = "200"
        image = { course.thumbnail }
        alt = { course.name }

        /> <
        CardContent >
        <
        Typography gutterBottom variant = "h5"
        component = "div" > { course.name } <
        /Typography> <
        Typography variant = "body2"
        color = "textSecondary" > { course.instructor } <
        /Typography> <
        Typography variant = "body2"
        color = "textSecondary" > { course.description } <
        /Typography> 


        <
        /
        CardContent > <
        /CardActionArea> < /
        Card >
    );
};

export default ActionAreaCard;