import React, { useState } from "react"

export function CreateTodo(){
    const [title , setTitle] = useState("");
    const [discription , setDiscription] = useState("");

    return <div>
        <input id="title" style={{ padding : 10, margin : 10 }} type="text" placeholder="Title" 
        onChange={function(title){
            // const value = title.target.value;
            setTitle(title.target.value);
        }} 
        />   <br />
        <input id="discriptions" style={{ padding : 10, margin : 10 }} type="text" placeholder="Discription" 
        onChange={function(discription){
            // const value = discription.target.value;
            setDiscription(discription.target.value);
        }} 
        /> <br />
        <button style={{ padding : 3, margin : 3 }}  
            onClick={() => {
                fetch("http://localhost:2001/todos" , {
                    method : "POST",
                    body : JSON.stringify({
                        // title : document.getElementById("title").innerHTML,
                        // discription: document.getElementById("discriptions").innerHTML,

                        title : title,
                        discription :  discription
                    }),
                    headers : {
                        "content-type" : "application/json"
                    }
                }).then(async function(res) {
                    const json = await res.json();
                    alert("Todo added")
                })
            }}
        >Add a TODO</button>
    </div>
}