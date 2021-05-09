import React, { Component } from 'react'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
import { Section } from './Section/Section'
import FontFamily from './Font/FontFamily'
import ColorPicker from './ColorPicker/ColorPicker'
import styles from "./styles.module.css"

export class NavigationBar extends Component {

    render() {
        return (
            <div className={styles.navBar}>
                <ul>
                    <li>
                        <Tippy interactive={true} content={<Section />} placement="bottom" arrow maxWidth={'100%'} trigger="click">
                            <div className={styles.navBarItem}>Resume Sections</div>
                        </Tippy>
                    </li>
                    <li>
                        <Tippy interactive={true} content={<FontFamily />} placement="bottom" arrow maxWidth={'100%'} trigger="click" >
                            <div className={styles.navBarItem}>Theme Fonts</div>
                        </Tippy>
                    </li>
                    <li>
                        <Tippy interactive={true} content={<ColorPicker />} placement="bottom" arrow maxWidth={'100%'} trigger="click" >
                            <div className={styles.navBarItem}>Color</div>
                        </Tippy>
                    </li>
                </ul>
            </div >
        )
    }
}
