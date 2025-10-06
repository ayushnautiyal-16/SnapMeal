import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";
class About extends Component{
    constructor(props){
        super(props);

        // console.log("parent constructor");
    }
    componentDidMount(){
        // console.log("parent component Did Mount");
    }
    render(){
        // console.log("parent render")
        return(
        <div>
            <h1>About</h1>
            <h2>This is namaste react web series</h2>
            {/* <User name={"ayush nautiyal{Function}"}/> */}
            <UserClass name ={"ayush bhai"} Location={"Dehradun"}/>
        </div>
    );
    }
};

export default About;