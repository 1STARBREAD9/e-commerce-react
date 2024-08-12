import React, { Component } from 'react'
import { FaTrash } from "react-icons/fa";

export default class Order extends Component {
    render() {
        return (
            <div class='item'>


                <img src={"./img/" + this.props.item.img} />
                <h2>{this.props.item.title}</h2>
                <p>{this.props.item.desc}</p>
                <b>{this.props.item.prix}</b>
                <FaTrash onClick={() => this.props.onDelete(this.props.item.id)} className='delete' />


            </div>
        )
    }
}
