import React, { Component } from 'react'

export class Answer extends Component {
    state = {
        message: [
            'You Have Chosen... Wisely',
            'You Have Chosen... Poorly'
        ]
    }

    render(props) {
        if(this.props.isCorrect) {
            return (
                <div className='correctAnswer'>
                    {this.state.message[0]}
                </div>
            )
        }
        else {
            return (
                <div className='correctAnswer'>
                    {this.state.message[0]}
                </div>
            )
        }
    }
}

export default Answer
