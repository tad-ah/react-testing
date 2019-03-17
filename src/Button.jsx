import React, {Component} from "react";

export default class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {text: ""};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({text: "PROCEED TO CHECKOUT"});
    }

    render() {
        const text = this.state.text || this.props.text;
        return (
            <button onClick={this.handleClick}>
                <Text text={text}/>
                <NestedText text={text}/>
            </button>
        );
    }
}

const Text = ({text}) => text;

const NestedText = ({text}) => <span>{text}</span>;

export {Text, NestedText};