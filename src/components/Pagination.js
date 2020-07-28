import React from 'react'
import Pages from './Pages'

export default function Pagination(props) {
    let clickHandle = event => {
        if (event.target.id === 'next-page' && props.currentPage < props.pageCount - 1) {
            props.changePage(props.currentPage + 1);
        }

        if (event.target.id === 'prev-page' && props.currentPage > 0) {
            props.changePage(props.currentPage - 1);
        }
    }

    return (
        <div className="pagination">
            <button id='prev-page' onClick={clickHandle}>{'<'}</button>
            <Pages
                pageCount={props.pageCount}
                currentPage={props.currentPage}
                changePage={props.changePage}
            />
            <button id='next-page' onClick={clickHandle}>{'>'}</button>
        </div>
    )
}