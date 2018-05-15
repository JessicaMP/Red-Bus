import React from 'react';

const Tab = ({ activeTab, setActiveTab, navs}) => (
	<nav>
		<div className="nav nav-tabs" role="tablist">
			<a className={activeTab === 'online' ? 'nav-link py-1 px-2 active ml-4' : 'nav-link py-1 ml-3'} data-toggle="tab" role="tab" onClick={() => setActiveTab('online')} >{navs[0]}</a>
			<a className={activeTab === 'ofline' ? 'nav-link py-1 px-2 active' : 'nav-link py-1'} data-toggle="tab" role="tab" onClick={() => setActiveTab('ofline')}>{navs[1]}</a>
		</div>
	</nav>
);

export default Tab;