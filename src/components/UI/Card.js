import './Card.css';
import React from 'react';


// This file mainly holds features from the card css file and props className, Which is the expense item file
/* props children is a method that includes whatever is present between then opening and closing tabs running the components present
   in the files*/

function Card(props){
    const classes = 'card ' + props.className;

    return <div className={classes}>{props.children}</div>;

}

export default Card;