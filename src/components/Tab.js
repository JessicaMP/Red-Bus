import React from 'react';

const Tab = ({ activeTab, setActiveTab }) => (
	<nav>
		<div className="nav nav-tabs" role="tablist">
			<a className={activeTab === 'online' ? 'nav-link py-1 px-3 active ml-4' : 'nav-link py-1 ml-3'} data-toggle="tab" role="tab" onClick={() => setActiveTab('online')} >Banca por Internet</a>
			<a className={activeTab === 'ofline' ? 'nav-link py-1 px-3 active' : 'nav-link py-1'} data-toggle="tab" role="tab" onClick={() => setActiveTab('ofline')}>Pagar en efectivo</a>
		</div>
	</nav>
);

export default Tab;