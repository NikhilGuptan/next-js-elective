import Link from 'next/link';

const data = [
    {name:"Jonny",id:1},
    {name:"Ram",id:2},
    {name:"Shyam",id:3},
    {name:"Rohan",id:4},
    {name:"Rahul",id:5},
    {name:"Roy",id:6}
]


const IndexPage = () => {

    return(
        <div style={{width:"30%",margin:"auto",border:"1px solid black",padding:"0px 30px"}}>
            <h3>User List</h3>
            {data.map((e)=>{
                return(
                    <Link key={e.id} href={`/${e.id}`}> 
                        <div style={{border:"1px solid red",margin:"10px",padding:"10px",cursor:"pointer",background:e.id%2==0 ? "yellow":"blue"}}>
                        <p>Name : {e.name}</p>
                        <p>Id : {e.id}</p>
                    </div>
                    </Link>
                )
            })}
        </div>
    )
}

export default IndexPage;
