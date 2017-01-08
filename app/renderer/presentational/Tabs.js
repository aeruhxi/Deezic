import React from 'react';

const Tabs = ({ children, tabData }) => {
  return (
    <div className="mdl-tabs mdl-js-tabs mdl-js-ripple-effect custom_tabs">
      <div className="mdl-tabs__tab-bar custom_tab-bar">
        { tabData.map(tab => (
          <a
            key={ tab.keyID }
            href={ `#${tab.id}` }
            className={'mdl-tabs__tab custom-tab' + (tab.active ? ' is-active' : '')}>
            { tab.title }
          </a>
        )) }
      </div>
      { children }
    </div>
  );
};

export default Tabs;
