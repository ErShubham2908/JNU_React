import React, { useState } from "react";
import PropsChild from "./PropsChild";

const PropsParent = () => {
    // Primitive
    // const [stuName, setStuName] = useState("JNU")
    // const [stuName, setStuName] = useState(23.14)
    // const [stuName, setStuName] = useState(0)

    // non-primitive
    const [stuName, setStuName] = useState([1, 2, 3, 4, 5, 6]);
    const [data, setData] = useState([
        { userId: 1, id: 1, title: "delectus aut autem", completed: false },
        { userId: 1, id: 2, title: "quis ut nam facilis et officia qui",completed: true,},
        { userId: 1, id: 3, title: "fugiat veniam minus", completed: false },
        { userId: 1, id: 3, title: "fugiat veniam minus", completed: false },
        { userId: 1, id: 3, title: "fugiat veniam minus", completed: false },
        { userId: 1, id: 3, title: "fugiat veniam minus", completed: false },
        { userId: 1, id: 3, title: "fugiat veniam minus", completed: false },
        { userId: 1, id: 3, title: "fugiat veniam minus", completed: false },
        { userId: 1, id: 3, title: "fugiat veniam minus", completed: false },
        { userId: 1, id: 3, title: "fugiat veniam minus", completed: false },
        { userId: 1, id: 3, title: "fugiat veniam minus", completed: false },
        { userId: 1, id: 3, title: "fugiat veniam minus", completed: false },
        { userId: 1, id: 3, title: "fugiat veniam minus", completed: false },
        { userId: 1, id: 3, title: "fugiat veniam minus", completed: false },
        { userId: 1, id: 3, title: "fugiat veniam minus", completed: false },
    ]);
    console.log(data);

    return (
        <div>
            {/* {stuName.map((item, index)=>{
        return(
            <>
            <h1>{index} : {item}</h1>
            </>
        )
    })} */}
                <PropsChild Abc = {data} Xyz ={stuName} />
            {data.map((item, index) => {
                return (
                    <>
                        <span>userId: {item.userId}</span>
                        <span>title: {item.title}</span> <br />
                    </>
                );
            })}
        </div>
    );
};

export default PropsParent;

// [{name: "", rollNo: , course: , address:} ]
