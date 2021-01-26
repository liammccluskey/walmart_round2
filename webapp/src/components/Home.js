import React, {useRef} from "react"
import {useHistory} from "react-router-dom"

export default function Home() {
    const history = useHistory()
    const orgRef = useRef()
    const repoRef = useRef()
    const defaultStyle = {
        margin: "20px 20px"
    }

    function handleSubmit(e) {
        e.preventDefault()
        history.push(`/issues/${orgRef.current.value}/${repoRef.current.value}`)
        console.log("home: did push new issue page")
    }

    return (
        <div>
            <h1>Welcome to My Walmart Project</h1>
            <p>Below, you can enter the <strong>Issue Page</strong> you would like to visit</p>
            <form onSubmit={handleSubmit}>
                <label style={defaultStyle}>
                    Organization: 
                    <input ref={orgRef} type="text" required />
                </label>
                <label style={defaultStyle}>
                    Repo: 
                    <input ref={repoRef} type="text" required />
                </label>
                <input type="submit" />
            </form>
        </div>
    )
}