import React from "react";
import PageLink from "./navBar/PageLink"
import Button from "./navBar/Button"
import { Link } from "react-router-dom"

export default function NavBar() {
    const NavBarLinks = ["Pull Requests", "Issues", "Marketplace", "Explore" ].map((pageTitle, i)=> (
        <PageLink key={i} title={pageTitle} />
    ))

    return (
        <div className="nav-container">
            <div className="nav-sub-container">
                <div className="d-flex jc-space-around ai-center">
                    <Link to="/">
                        <img 
                            src="https://icon-library.com/images/github-icon-white/github-icon-white-6.jpg" 
                            height={420/10}
                            width={420/10}
                            display="inline"
                        />
                    </Link>
                    <ul style={{display: 'inline', listStyle:'none'}}>
                        {NavBarLinks}
                    </ul>
                </div>
            </div>
            <div>
                <button>Log In</button>
                <button>Register</button>
            </div>
        </div>
    );
}