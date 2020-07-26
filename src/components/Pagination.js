import React from 'react'

export default function Pagination(props) {
    let clickHandle = event => {
        if (event.target.id === 'next-page' && this.props.currentPage < this.props.pageCount - 1) {
            props.changePage(props.currentPage + 1);
        }

        if (event.target.id === 'prev-page' && this.props.currentPage > 0) {
            props.changePage(props.currentPage - 1);
        }
    }

    return (
        <div className="pagination">
            <button id='prev-page' onClick={clickHandle}>{'<'}</button>
            <p>{props.currentPage + 1} of {props.pageCount}</p>
            <button id='next-page' onClick={clickHandle}>{'>'}</button>
        </div>
    )
}