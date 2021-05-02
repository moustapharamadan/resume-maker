import React, { Component } from 'react'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
import { Section } from './Section/Section'
import styles from "./styles.module.css"

export class NavigationBar extends Component {

    render() {
        return (
            <div>
                <ul>
                    <li>
                        <Tippy interactive={true} content={<Section />} placement="bottom" arrow maxWidth={'100%'}>
                            <div className="navBarItem">Resume Sections</div>
                        </Tippy>
                    </li>
                    <li>
                        <Tippy interactive={true} content={<div >Hello</div>} placement="bottom" arrow maxWidth={'100%'}>
                            <div className="navBarItem">Hey</div>
                        </Tippy>
                    </li>
                </ul>
            </div >
        )
    }
}
