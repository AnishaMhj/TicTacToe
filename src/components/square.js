import React from "react";

// Square renders a single button

//4. changing the Square into a functional component
//fn takes props as input and returns what should be rendered
function Square(props) {

    return (

        <button className="square"
            onClick={props.onClick}>{props.value}
        </button>
    );
}
export default Square;