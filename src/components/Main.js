import React from 'react';
import TabContainer from '../containers/ContentContainer';
import ContentContainer from '../containers/TabContainer';

const Main = () => (
  <section className="px-0">
      <ContentContainer />
    <div className="tab-content py-3">
      <TabContainer />
    </div>
  </section>
);
export default Main;

