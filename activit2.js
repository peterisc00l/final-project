import React from 'react';
import ReactDOM from 'react-dom';

class Student extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name: "Peter",
            grade: 6,
            favorite_color: "blue",
            favorite_subject: "Math"    
        };
    }
    favouriteColor = () => {
        this.setState({favorite_color: "blue"});
    } 
    render() {
        return(
            <div>
            <h1>Student Details</h1>
            <p>My name is {this.state.name}</p>
            <p>I am in grade {this.state.grade}</p>
            <p>My favorite color is {this.state.favorite_color}</p>
            <p>My favorite subject is {this.state.favorite_subject}</p>
            <button type="button"onClick={this.favoriteColor}>Click me</button>
            </div>
        );
    }
}

ReactDOM.render(<Student />, document.getElementById('root'));