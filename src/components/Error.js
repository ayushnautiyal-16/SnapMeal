import { useRouteError } from "react-router";
const Error=()=>{
    const err =useRouteError();
    console.log(err);
    return(
        <div><h1>
            O0ps!!!</h1>
            <h2>Something went wromg</h2>
            <h3>{err.status}</h3></div>
    )
}
export default Error;