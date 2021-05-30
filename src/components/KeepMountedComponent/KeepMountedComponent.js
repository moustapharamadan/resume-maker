import React, { Component } from 'react'

const isEmptyChildren = (children) => { return !children };

export class KeepMountedComponent extends Component {
    render() {
        const emptyChildren = isEmptyChildren(this.props.children);

        if (!emptyChildren) {
            this.children = this.props.children;
        }

        return (
            <div style={{ display: emptyChildren ? "none" : null }}>
                {this.children}
            </div>
        );
    }
}


