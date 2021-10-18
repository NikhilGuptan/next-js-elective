
import { withRouter } from "next/router";

const Detail=(props)=>{

    // console.log(props);

    return(
        <div style={{width:"30%",margin:"auto"}}>
            <h1>the ID is : {props.router.query.id}</h1>
        </div>
    )
}

export default withRouter(Detail)