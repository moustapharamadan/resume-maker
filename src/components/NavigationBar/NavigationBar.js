import React, { Component } from 'react'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
import { Section } from './Section/Section'

export class NavigationBar extends Component {

    render() {
        return (
            <div>
                <ul>
                    <Section />
                    <li><Tippy interactive={true}
                        content={<Section />}
                    ><button>My button</button></Tippy></li>
                </ul>
            </div>
        )
    }
}
