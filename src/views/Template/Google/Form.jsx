import React from 'react';
import Component from 'views/Component';
import { PropTypes as T } from 'react';


export default class Form extends Component {

    static propTypes = {
        label: T.string,
        action: T.string,
        method: T.string,
        controls: T.array,
    }

    static styles = {
        form: {},
        input: {
            background: '#f6f6f6',
            padding: '8px 12px',
            border: 'solid thin #ddd',
            borderRadius: 0,
            WebkitAppearance: 'none',
        },
    }

    render() {
        return (
            <form action={this.props.action}
                  method={this.props.method}>
                {this.props.controls.map(this.renderControl, this)}
            </form>
        );
    }

    renderControl(control, i) {
        switch (control.tagName) {
            case 'INPUT': return this.renderInput(control, i);
        }
    }

    renderInput(input, i) {
        return <input
            key={i}
            name={input.name}
            type={input.type}
            defaultValue={input.value}
            placeholder={input.placeholder}
            style={Form.styles.input}
        />;
    }

}
