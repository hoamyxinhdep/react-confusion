import React from "react";
class Count extends React.Component{
   state = {
        count: 0
   }
   increment = () => {
    this.setState({
        count: this.state.count + 1
    })
   }
    decrement = () => {
        this.setState({
            count: this.state.count - 1
        })
    }
    render(){
        return(
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>

            </div>
        )
    }

}
export default Count;