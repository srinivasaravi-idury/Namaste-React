import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    //props are part of parent class to invoke parent class constructor to use this.props we use super()
    super(props);
    this.state={
        count:0,
        count2:2
    }
  }
  render() {
    const { name, location } = this.props;
    return (
      <div>
        <h1>User</h1>
        <h2>{name}</h2>
        <h3>{location}</h3>
        <h4>{this.state.count}-{this.state.count2}</h4>
        <button onClick={()=>{
            this.setState(
                {
                    count:this.state.count + 100,
                    count2:this.state.count2 + 20,
                }
            )
        }}>Increment Count</button>
      </div>
    );
  }
}

export default UserClass