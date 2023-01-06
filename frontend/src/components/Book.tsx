import React, { useState } from "react"
import { IBook } from "../model"


interface BookProps {
    book: IBook
}

export function Book(props: BookProps) {

    return (
        <div>
            <h1>{ props.book.title }</h1>
            {/* <p>{ props.book.autor }</p>
            <p>{ props.book.date }</p>
            <p>{ props.book.cut_id }</p> */}
        </div>
    )
}