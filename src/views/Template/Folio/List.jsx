import React from 'react';
import Component from 'views/Component';
import { PropTypes as T } from 'react';


export default class List extends Component {

    static propTypes = {
        header: T.array,
        items: T.array,
    }

    state = {
        collapsed: true,
    }

    static styles = {
        container: {
            position: 'relative',
        },
        header: {
            position: '-webkit-sticky',
            top: 50,
            margin: 0,
            padding: 16,
            background: 'white',
            transition: '.3s',
            borderTop: 'solid thin #ddd',
            boxShadow: '0 3px 10px rgba(0, 0, 0, .2)',
        },
        headerCollapsed: {
            boxShadow: '0 0 0 rgba(0, 0, 0, 0)',
        },
        list: {
            overflow: 'hidden',
            margin: 0,
            padding: 16,
            listStyle: 'none',
            transition: '.3s',
            maxHeight: 9999,
            background: '#f1f1f1',
        },
        listCollapsed: {
            maxHeight: 0,
            padding: '0 16px',
        },
        item: {
            margin: '16px 0',
        },
    }

    toggle = (event) => {
        this.setState({ collapsed: !this.state.collapsed });
        event.preventDefault();
    }

    render() {
        return (
            <div style={List.styles.container}>
                {this.renderHeader()}
                {this.renderList()}
            </div>
        );
    }

    renderHeader() {
        const style = {
            ...List.styles.header,
            ...this.state.collapsed? List.styles.headerCollapsed : {} };
        return (
            <div style={style}
                 onClick={this.toggle}>
                <div dangerouslySetInnerHTML={{__html:this.props.header[0].html}}/>
            </div>
        );
    }

    renderList() {
        const style = {
            ...List.styles.list,
            ...this.state.collapsed? List.styles.listCollapsed : {} };
        return (
            <ul style={style}>
                {this.props.items.map(this.renderItem)}
            </ul>
        );
    }

    renderItem(item, i) {
        return (
            <li key={i} style={List.styles.item}>
                <div dangerouslySetInnerHTML={{__html:item.html}}/>
            </li>
        );
    }

}
