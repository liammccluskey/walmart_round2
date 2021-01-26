import React, {useEffect, useState} from "react"
import {Link, useLocation} from "react-router-dom"
import NavBar from "./NavBar"
import Header from "./Header"
import Paginator from "./misc/Paginator"
import {PageProvider} from './misc/PageContext'
import IssueCards from './IssueCards'

function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

export default function Issues(props) {
    const {params} = props.match
    const baseAPIurl = 'https://api.github.com/repos'
    const [loading, setLoading] = useState(true)
    const [issues, setIssues] = useState([])
    const [issueCount, setIssueCount] = useState(0)
    const query = useQuery()
    let pageQuery = query.get('page')

    useEffect(async () => {
        const url = `https://api.github.com/search/issues?q=repo:${params.org}/${params.repo}%20is:issue%20&per_page=1`
        const response = await fetch(url)
        const json = await response.json()
        setIssueCount(json.total_count)
        console.log('issue count: ' + issueCount)
    },[])

    useEffect(async () => {
        // Fetch paginated list of issues
        const url = `${baseAPIurl}/${params.org}/${params.repo}/issues?page=${pageQuery}&state=all`
        const response = await fetch(url)
        const json = await response.json()
        
        setIssues(json)
        setLoading(false)
    }, [pageQuery])

    return (
        <div>
            <NavBar />
            <Header org={params.org} repo={params.repo}/>
            <PageProvider>
                {loading ? 
                    <h2>Loading...</h2> : 
                    <IssueCards issues={issues} org={params.org} repo={params.repo}/>
                }
                <Paginator maxPage={Math.floor(issueCount/10) + (issueCount%10===0 ? 0 : 1)}/>
            </PageProvider>
        </div>
    )
}