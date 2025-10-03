import React from "react"
class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            count1:0,
        };
        console.log("child Constructor");
    }

    componentDidMount(){
        console.log("child component did mount");
    }
    render() {
        const{name,Location}=this.props;
        const{count1}=this.state;
        console.log("Child render");
        return (<div
            className="user-card">
            <h1>count:{count1}</h1>
            <button onClick={( )=>{
                this.setState({
                    count1:this.state.count1+1,
                })
            }}>Count increase</button>
            <h2>Name: {name}</h2>
            <h3>Location :{Location}</h3>
            <h4>Conatact: @ayushnautiyal-16</h4>
        </div>
        )
    }
}

export default UserClass;