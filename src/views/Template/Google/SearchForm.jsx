import React from 'react';
import Form from './Form';
import {PropTypes as T}  from 'react';


export default class SearchForm extends Form {

    static propTypes = {
        label: T.string,
        action: T.string,
        method: T.string,
        controls: T.array,
    }

    static styles = {
        form: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'stretch',
            justifyContent: 'space-between',
            padding: 16,
            borderBottom: 'solid thin #ddd',
        },
        q: {
            padding: 8,
            flex: '1 0 0',
            border: 'solid thin #ddd',
            borderRadius: 0,
            WebkitAppearance: 'none',
        },
        submit: {
            padding: '8px 16px',
            color: 'white',
            border: 'none',
            borderRadius: 0,
            WebkitAppearance: 'none',
            background: '#5384ED',
        },
    }

    render() {
        return (
            <form action={this.props.action}
                  method={this.props.method}
                  style={SearchForm.styles.form}>
                {this.props.controls.map(this.renderControl, this)}
            </form>
        );
    }

    renderControl(control, i) {
        switch (control.name) {
            case 'q': return this.renderQ(control, i);
            case 'submit': return this.renderSubmit(control, i);
            default: return super.renderControl(control, i);
        }
    }

    renderQ(control, i) {
        return (
            <input
                key={i}
                name={control.name}
                type={control.type}
                defaultValue={control.value}
                placeholder={control.placeholder}
                style={SearchForm.styles.q}
            />
        );
    }

    renderSubmit(control, i) {
        return (
            <button
                key={i}
                name={control.name}
                type={control.type}
                defaultValue={control.value}
                placeholder={control.placeholder}
                style={SearchForm.styles.submit}
            >Search</button>
        );
    }

}
