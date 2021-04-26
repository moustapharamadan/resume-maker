import React, { Component } from 'react'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional

export class NavigationBar extends Component {

    render() {
        return (
            <div>
                <ul>
                    <li><Tippy  interactive={true} 
                                content="Hello"
                                ><button>My button</button></Tippy></li>
                </ul>
            </div>
        )
    }
}
