import React from 'react';
import Component from 'views/Component';
import { PropTypes as T } from 'react';


export default class Pagination extends Component {

    static propTypes = {
        label: T.string,
        type: T.string,
        items: T.array,
    }

    static styles = {
        list: {
            listStyle: 'none',
            textAlign: 'center',
            padding: '16px 0',
        },
        item: {
            display: 'inline',
            padding: '0 16px',
        },
    }

    render() {
        return (
            <ul style={Pagination.styles.list}>
                {this.props.items.map(this.renderItem)}
            </ul>
        );
    }

    renderItem(item, i) {
        return (
            <li key={i} style={Pagination.styles.item}>
                {item.href
                    ? <a href={item.href}>{item.text.trim()}</a>
                    : <span>{item.text}</span>}
            </li>
        );
    }

}
