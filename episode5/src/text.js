import { useState,useEffect } from "react";

export const Text=()  => {
    const [text,SetText]=useState("");

    useEffect(() => {
        console.log("COMPONENT MOUNTED");

        return (() =>{
            console.log("COMPONENT UNMOUNTED");
        })
    },[text]);

    return (
        <div>
            <input onChange={(event) => {
                SetText(event.target.value);
            }} /><br></br>

            <h1>{text}</h1>
        </div>
    )
}