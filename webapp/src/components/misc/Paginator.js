import React, { useState } from "react"
import { usePage } from "./PageContext"

export default function Paginator(props) {
    const {page, setPage, incrementPage, decrementPage} = usePage()
    const pages = [1,2,page - 1, page, page + 1, props.maxPage - 1, props.maxPage]
    const pageButtons = pages
        .filter((page, i) => pages.indexOf(page) === i )
        .filter(pageNum => pageNum >=1 && pageNum <= props.maxPage)
        .map(pageNum => 
            <button 
            style={{
                backgroundColor: page===pageNum ? '#0c64d4' : 'transparent',
                color: page===pageNum ? 'white' : 'rgb(50,50,50)'
            }}
            onClick={() => setPage(pageNum)}
            className='paginator-number'>
                {pageNum}
            </button>
        )
    return (
        <div className='d-flex jc-center ai-center mt-big'>
            <button 
            className='paginator-arrow'
            disabled={page===1}
            onClick={decrementPage}>
                {"<   Previous"}
            </button>
            {pageButtons}
            <button 
            className='paginator-arrow'
            disabled={page===props.maxPage}
            onClick={incrementPage}>
                {"Next   >"}
            </button>
        </div>
    )
}