import React from 'react';
import Component from 'views/Component';
import Form from './Form';
import Nav from './Nav';
import { PropTypes as T } from 'react';


export default class Filter extends Component {

    static propTypes = {
        label: T.string,
        type: T.string,
        items: T.array,
    }

    static styles = {
        container: {
            margin: '32px 0',
        },
        label: {
            padding: '8px 0',
            margin: 0,
            marginBottom: 16,
            fontWeight: 'normal',
            color: '#888',
            borderBottom: 'solid 2px #ddd',
        },
        filter: {
            padding: 0,
            listStyle: 'none',
        },
    }

    render() {
        return (
            <div style={Filter.styles.container}>
                {this.renderLabel()}
                {this.renderFilter()}
            </div>
        );
    }

    renderLabel() {
        if (this.props.label) {
            return (
                <h3 style={Filter.styles.label}>
                    {this.props.label}
                </h3>
            );
        }
    }

    renderFilter() {
        switch (this.props.type) {
            case 'nav': return <Nav {...this.props}/>;
            case 'form': return <Form {...this.props}/>;
        }
    }

}
