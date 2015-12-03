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
            position: '-webkit-sticky',
            zIndex: 2,
            top: 0,
            margin: 0,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'stretch',
            justifyContent: 'space-between',
            padding: '8px 16px',
            background: '#f1f1f1',
            borderTop: 'solid thin #ddd',
            borderBottom: 'solid thin #ddd',
        },
        q: {
            padding: '8px 0',
            flex: '1 0 0',
            border: 'none',
            background: 'transparent',
            borderRadius: 0,
            WebkitAppearance: 'none',
        },
        submit: {
            padding: '8px 0',
            color: '#5384ED',
            border: 'none',
            borderRadius: 0,
            WebkitAppearance: 'none',
            background: 'transparent',
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
