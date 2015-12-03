import React from 'react';
import Component from 'views/Component';
import Content from './Content';
import Pagination from './Pagination';
import TitleBar from './TitleBar';
import SearchForm from './SearchForm';
import List from './List';
import { PropTypes as T } from 'react';


export default class FolioTemplate extends Component {

    static propTypes = {
        payload: T.object.isRequired,
        onSwitchTemplate: T.func,
    }

    static styles = {
        container: {
            fontFamily: 'Helvetica, sans-serif',
            fontWeight: 300,
            lineHeight: 1.5,
            fontSize: 14,
            color: '#333',
        },
        templateSwitcher: {
            display: 'block',
            padding: '8px 16px',
            margin: '32px auto',
        },
    }

    render() {
        const {payload} = this.props;
        const {roles} = payload;

        return (
            <div style={FolioTemplate.styles.container}>
                <TitleBar text='Google Movie Search'
                          onClickMenu={this.toggleSidebar}/>
                {roles.search
                    ? <SearchForm {...roles.search[0]}/>
                    : null}

                <Content subject={roles.subject[0].text}>
                    {roles.content
                        ? roles.content.map((x, i) => <List key={i} {...x}/>)
                        : null}
                    {roles.pagination
                        ? <Pagination {...roles.pagination[0]}/>
                        : null}
                </Content>

                <button style={FolioTemplate.styles.templateSwitcher}
                        onClick={this.props.onSwitchTemplate}>
                    Switch template
                </button>
            </div>
        );
    }

}
