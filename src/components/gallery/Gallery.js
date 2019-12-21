//  Imported Modules
import React, { Component } from 'react';

//  Components
import Image from './image/Image';

//  Styling
import './Gallery.css'

export default class Gallery extends Component {
    state = {
        images: [
            {
                id: 1,
                pic: '/assets/images/pikachu.png'
            },
            {
                id: 2,
                pic: '/assets/images/bulbasaur.png'
            },
            {
                id: 3,
                pic: '/assets/images/chikorita.png'
            }, {
                id: 4,
                pic: '/assets/images/eevee.png'
            }, {
                id: 5,
                pic: '/assets/images/horsea.png'
            }, {
                id: 6,
                pic: '/assets/images/phanpy.png'
            }, {
                id: 7,
                pic: '/assets/images/pichu.png'
            }, {
                id: 8,
                pic: '/assets/images/sandshrew.png'
            }, {
                id: 9,
                pic: '/assets/images/totodile.png'
            }
        ]
    }
    render() {
        return (
            <div className="container">
                {this.state.images.map(image => (<Image key={image.id} image={image} />))}
            </div>
        )
    }
}
