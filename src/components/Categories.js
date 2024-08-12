import React, { Component } from 'react'


export class Categories extends Component {
    

    constructor(props) {
        super(props)
        this.state = {
            categories: [
                 {
                    key:'all',
                    name:'Tous'


                 },
                 {
                    key:'animal',
                    name:'Animaux'


                 },
                 {
                    key:'chambre',
                    name:'Chambre decor'

                 },
                 {
                    key:'nature',
                    name:'Nature',


                 }
                 
            ]
        }
    }


render() {
  return (
    <div className='categories'  > Categories :
    {this.state.categories.map(el => (
<div  key={el.key} onClick={() => this.props.chosenCategory(el.key)}>{el.name}</div>

     
    ))} </div>
    )
  }
}

export default Categories