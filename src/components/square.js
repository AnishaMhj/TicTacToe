import React from "react";

// Square renders a single button


class Square extends React.Component {

    //constructor to initialize the state: CLASS BASE COMPONENT / STATELESS COMPONENTS
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         value: null
    //     };
    // }
    //   FUNCTIONAL COMPONENT
    // const [mark, setMark] = useState(0);

    render() {
        return (
            /*  onClick handler calls this.setState which will tell React to re-render that Square whenever its button is clicled.
            Upon update the Square's this.state.value will be 'X' */
            // <button className="square"
            //     onClick={() => this.setState({ value: 'X' })
            //     }>
            //     {this.state.value}
            // </button>

            //will be changed into this, while the constructor above is deleted, or in our case commented out
            <button className="square"
                onClick={() => this.props.onClick()
                }>
                {this.props.value}
            </button>
        );
    }
}
export default Square;