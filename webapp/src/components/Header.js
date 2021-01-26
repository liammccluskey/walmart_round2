import React from "react"

export default function Header(props) {
    const headerButtons = ['Watch', 'Star', 'Fork'].map((title, i) => (
        <button key={i} className='header-button'>{title}</button>
    ))
    const headerPages = ['Code', 'Issues', 'Pull Requests', 'Actions', 'Projects', 'Wiki', 'Security', 'Insights']
        .map((title, i) => (
            <button 
                key={i} 
                className='header-page-button'
            >
                {title}
            </button>
        ))
    return (
        <div className='header-container'>
            <div className="d-flex jc-space-between ms-default ai-center">
                <h3 className="org-repo-name d-inline">{props.org + " / " + props.repo}</h3>
                <div>{headerButtons}</div>
            </div>
            <div className="d-flex jc-flex-start ms-default">
                {headerPages}
            </div>
        </div>
        
    )
}