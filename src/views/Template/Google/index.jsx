import React from 'react';
import Component from 'views/Component';
import Header from './Header';
import Sidebar from './Sidebar';
import Content from './Content';
import Filter from './Filter';
import Pagination from './Pagination';
import TitleBar from './TitleBar';
import SearchForm from './SearchForm';
import List from './List';
import { PropTypes as T } from 'react';


export default class GoogleTemplate extends Component {

    static propTypes = {
        payload: T.object.isRequired,
        onSwitchTemplate: T.func,
    }

    static styles = {
        container: {
            position: 'absolute',
            top: 0, left: 0, right: 0,
            fontFamily: 'Avenir, sans-serif',
            fontSize: 14,
            lineHeight: 1.5,
        },
    }

    state = {
        sidebarOpen: false,
    }

    toggleSidebar = () => {
        this.setState({ sidebarOpen: !this.state.sidebarOpen });
    }

    render() {
        const {payload} = this.props;
        const {roles} = payload;

        return (
            <div style={GoogleTemplate.styles.container}>
                <Sidebar open={this.state.sidebarOpen}
                         onClose={this.toggleSidebar}
                         onSwitchTemplate={this.props.onSwitchTemplate}>
                    {roles.filters
                        ? roles.filters.map((x, i) => <Filter key={i} {...x}/>)
                        : null}
                </Sidebar>

                <div style={GoogleTemplate.styles.content}>
                    <Header>
                        <TitleBar text='Google Movie Search'
                                  onClickMenu={this.toggleSidebar}/>
                        {roles.search
                            ? <SearchForm {...roles.search[0]}/>
                            : null}
                    </Header>

                    <Content subject={roles.subject[0].text}>
                        {roles.content
                            ? roles.content.map((x, i) => <List key={i} {...x}/>)
                            : null}
                        {roles.pagination
                            ? <Pagination {...roles.pagination[0]}/>
                            : null}
                    </Content>
                </div>
            </div>
        );
    }

}
