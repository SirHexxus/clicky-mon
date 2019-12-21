//  Imported Modules
import React, { Component } from 'react';

//  Components
import Answer from './answer/Answer';
import Logo from './logo/Logo';
import Score from './score/Score'

export default class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <Logo />
                <Answer isCorrect={true}/>
                <Score />
            </React.Fragment>
        )
    }
}
