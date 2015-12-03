import React from 'react';
import Component from 'views/Component';
import { PropTypes as T } from 'react';


export default class Sidebar extends Component {

    static propTypes = {
        children: T.node,
        open: T.bool,
        onClose: T.func,
        onSwitchTemplate: T.func,
    }

    static styles = {
        sidebar: {
            boxSizing: 'border-box',
            position: 'fixed',
            overflowY: 'scroll',
            WebkitOverflowScrolling: 'touch',
            padding: '0 16px',
            top: 0,
            width: '90%',
            height: '100%',
            transition: '.3s',
            transform: 'translateX(-100%)',
            background: 'white',
        },
        open: {
            transform: 'translateX(0)',
            boxShadow: '0 10px 10px rgba(0, 0, 0, .2)',
        },
        overlay: {
            position: 'fixed',
            top: 0, bottom: 0,
            left: 0, right: 0,
            transition: '.3s',
            zIndex: 2,
            visibility: 'hidden',
            background: 'rgba(0, 0, 0, 0)',
        },
        overlayOpen: {
            background: 'rgba(0, 0, 0, .2)',
            visibility: 'visible',
        },
        templateSwitcher: {
            display: 'block',
            padding: '8px 16px',
            margin: '32px auto',
        },
    }

    render() {
        const style = {
            ...Sidebar.styles.sidebar,
            ...(this.props.open? Sidebar.styles.open : {}),
        };
        const overlayStyle = {
            ...Sidebar.styles.overlay,
            ...(this.props.open? Sidebar.styles.overlayOpen : {}),
        };
        return (
            <div style={overlayStyle}
                 onClick={this.props.onClose}>
                <div style={style}
                     onClick={e => e.stopPropagation()}>
                    {this.props.children}
                    <button style={Sidebar.styles.templateSwitcher}
                            onClick={this.props.onSwitchTemplate}>
                        Switch template
                    </button>
                </div>
            </div>
        );
    }

}
