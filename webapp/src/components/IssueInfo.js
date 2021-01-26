import React, { useEffect, useState } from "react"
import NavBar from "./NavBar"
import Header from './Header'

const srcOpen = 'https://assets.stickpng.com/images/5aa78e207603fc558cffbf19.png'
const srcClosed = 'https://cdn0.iconfinder.com/data/icons/octicons/1024/issue-closed-512.png'

export default function IssueInfo(props) {
    const { params } = props.match
    const [issueData, setIssueData] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(async () => {
        const url = `https://api.github.com/repos/${params.org}/${params.repo}/issues/${params.number}`
        const response = await fetch(url)
        const json = await response.json()
        setIssueData(json)
        console.log(json)
        setLoading(false)
    }, [])

    return (
        <div>
            <NavBar />
            <Header org={params.org} repo={params.repo}/>
            {loading || !issueData ? 
                <h1>Loading...</h1> :
                <div className='issues-container'>
                    <div className='d-flex jc-space-between ai-center ms-default'>
                        <h3>{issueData.title}</h3>
                        <p>{`# ${issueData.number}`}</p>
                    </div>
                    <div className='d-flex jc-flex-start ai-center ms-default'>
                        <img style={{margin: '15px'}}src={issueData.state==='open' ? srcOpen : srcClosed}height='30px' width='30px'/>
                        <p>
                            <strong style={{color: 'rgb(100,100,100)'}}>{issueData.user.login}</strong> {issueData.state==='open' ? 'opened ' : 'closed ' }
                            this issue on {issueData.updated_at} - - {issueData.comments} comments
                        </p>
                    </div>
                    <div className='issueinfo-body'>
                        <p style={{display:'inline'}}><strong style={{color: 'rgb(100,100,100)'}}>{issueData.user.login}</strong> commented on {issueData.created_at}</p>
                        <div className='d-flex jc-flex-start ai-center'>
                            <p style={{textAlign:'left'}}>{issueData.body}</p>
                        </div>
                    </div>
                </div>
                
            }
            
        </div>

    )
}