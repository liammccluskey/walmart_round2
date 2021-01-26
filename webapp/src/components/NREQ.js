import React from "react"
import NavBar from "./NavBar"

export default function NREQ(props) {
    const {params} = props.match

    return (
        <div>
            <NavBar />
            <h1>{params.title}</h1>
        </div>
    )
}