import React from "react"
import {Link} from "react-router-dom"

/*
    Used for pages outside of the scope of this problem
*/

export default function PageLink(props) {
    return (
        <li style={{ display:'inline' }}>
            <Link 
            className='nav-link'
            style={{textDecoration:'none'}} 
            to={'/nreq/' + props.title}
            >
                {props.title}
            </Link>
        </li>
    )
}