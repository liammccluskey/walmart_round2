import React, { useContext, useEffect, useState } from "react"
import { useHistory } from "react-router-dom"

const PageContext = React.createContext()

export function usePage() {
    return useContext(PageContext)
} 

export function PageProvider({children}) {
    const [page, setPage] = useState(1)
    const history = useHistory()

    const incrementPage = () => {
        setPage(curr => curr + 1)
    }

    const decrementPage = () => {
        setPage(curr => curr - 1)
    }

    useEffect(() => {
        history.push(`${window.location.pathname}?page=${page%3==0 ? page/3 : (Math.floor(page/3) + 1)}`)
    },[page])
    
    return (
        <PageContext.Provider value={{page, setPage, incrementPage, decrementPage}} >
            {children}
        </PageContext.Provider>
    )

}