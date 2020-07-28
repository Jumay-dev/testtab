import React from 'react'

export default function Pages(props) {
    let clickHandle = event => {
        props.changePage(+event.target.dataset.page)
    }


    let pages = []
    
    for (let i = 0; i < props.pageCount; i++) {
        pages[i] = (
            <button
                key={i}
                className={i === props.currentPage ? 'current' : ''}
                data-page={i}
                onClick={clickHandle}
            >
                {i + 1}
            </button>
        )
    }


    return (
        <>
            {pages}
        </>
    )
}