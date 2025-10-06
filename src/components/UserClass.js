import React from "react"
class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            userInfo:{
                name:"dummy",
                location: "default",
                avatar_url: "https://avatars.githubusercontent.com/u/172249924?v=4",
            },
        };
        console.log("child Constructor");
    }

    async componentDidMount(){
        console.log("child component did mount");
        const data= await fetch("https://api.github.com/users/ayushnautiyal-16");
        const json = await data.json();

        this.setState({
            userInfo:json,
        })
        console.log(json);
    }
    componentDidUpdate(){
        console.log("component Did Update");
    }
    componentWillUnmount(){
        console.log("component will unmount ")
    }
    render() {
        const{name,Location,avatar_url,login}=this.state.userInfo;
        console.log("Child render");
        return (<div
            className="user-card">
            <img src={avatar_url}/>
            <h2>Name: {name}</h2>
            <h3>Location :{Location} India</h3>
            <h4> Username : {login} </h4>
        </div>
        )
    }
}

export default UserClass;