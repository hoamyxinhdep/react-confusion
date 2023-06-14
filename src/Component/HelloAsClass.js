import { Component } from "react";
class HelloAsClass extends Component {
    render() {

        return (
            <div>
                <h1>Hello {this.props.name}</h1>
                
            </div>
        );
    }
}
export default HelloAsClass;
