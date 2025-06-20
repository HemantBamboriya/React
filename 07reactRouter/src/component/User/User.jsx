import React from "react";
import { useParams } from "react-router";

function User(){
    const {userid}= useParams()
    return (
        <>
        <div className="flex flex-wrap justify-center bg-gray-500 p-4 text-3xl">User:{userid}</div>
        </>
    )
}

export default User