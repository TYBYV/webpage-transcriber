import React from 'react';
import Component from 'views/Component';
import { PropTypes as T } from 'react';


export default class List extends Component {

    static propTypes = {
        header: T.array,
        items: T.array,
    }

    static styles = {
        container: {
            position: 'relative',
        },
        header: {
            top: -1,
            position: '-webkit-sticky',
            margin: 0,
            padding: 16,
            borderTop: 'solid thin #ddd',
            borderBottom: 'solid thin #ddd',
            background: '#F1F1F1',
        },
        list: {
            padding: 0,
            margin: 0,
            listStyle: 'none',
        },
        item: {
            padding: 16,
            paddingLeft: 0,
            marginLeft: 16,
            borderBottom: 'solid thin #ddd',
        },
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
        return (
            <div style={List.styles.header}>
                <div dangerouslySetInnerHTML={{__html:this.props.header[0].html}}/>
            </div>
        );
    }

    renderList() {
        return (
            <ul style={List.styles.list}>
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
