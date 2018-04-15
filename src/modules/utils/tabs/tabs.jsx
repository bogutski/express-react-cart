import React, { Component } from 'react';
import { TabContent, TabLink, Tabs as ReduxTabs } from 'react-tabs-redux';

class Tabs extends Component {
  render() {
    const { tabs } = this.props;

    return (
      <ReduxTabs renderActiveTabContentOnly>
        <ul className="nav nav-tabs">
          {tabs.map(el => (
            <li key={el.name} className="nav-item">
              <TabLink
                activeClassName="active"
                className="nav-link"
                to={el.name}
                default={el.default}
              >{el.label}
              </TabLink>
            </li>))}
        </ul>

        <div className="pt-3">
          {tabs.map(el => (
            <TabContent key={el.name} for={el.name}>{el.content}</TabContent>
          ))}
        </div>

      </ReduxTabs>
    );
  }
}

Tabs.defaultProps = {
  tabs: [{}],
};


export default Tabs;
