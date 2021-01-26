import React, { useEffect } from "react"
import { usePage } from "./misc/PageContext"
import { Link, useHistory } from 'react-router-dom'

const srcOpen = 'https://assets.stickpng.com/images/5aa78e207603fc558cffbf19.png'
const srcClosed = 'https://cdn0.iconfinder.com/data/icons/octicons/1024/issue-closed-512.png'

export default function IssueCards(props) {
    const {page} = usePage()
    const history = useHistory()

    function handleClickIssue(issueNumber) {
        history.push(`/issueinfo/${props.org}/${props.repo}/${issueNumber}`)
        console.log('issuecards: did push issueinfo')
    }

    return (
        <div className='issues-container'>
            {props.issues
                .slice(page%3==0 ? 20 : (page%3-1)*10, Math.min(page%3==0 ? 30 : page%3*10, props.issues.length))
                .map((issue, i) => (
                    <div 
                    key={issue.id} 
                    className='issue-container d-flex jc-flex-between ai-center'
                    onClick={() => handleClickIssue(issue.number)}
                    >
                        <img style={{margin: '15px'}}src={issue.state==='open' ? srcOpen : srcClosed}height='30px' width='30px'/>
                        <h4>{issue.title}</h4>
                        <p>{`#${issue.number} ${issue.state == 'open' ? 'opened' : 'closed'} by ${issue.user.login}`}</p>
                    </div>
                ))
            }
        </div>
    )
}