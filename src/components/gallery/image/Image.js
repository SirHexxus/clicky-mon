//  Imported Modules
import React, { Component } from 'react'

//  Styling
import './Image.css';

export default class Image extends Component {
    render(props) {
        const { id, pic } = this.props.image;
        return (
            <div>
                <img data-id={id} src={pic} alt='' />
            </div>
        )
    }
}
