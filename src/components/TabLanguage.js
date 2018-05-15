import React from 'react';

const TabLanguage = ({ activeLanguage, setActiveTabLanguage }) => (
    <div className="col-md-1 col-2 nav-tabs" role="tablist">
        <a className={activeLanguage === 'es' ? 'nav-link active subtitle px-1 border border-language border-top-0 border-bottom-0 border-left-0' : 'nav-link subtitle px-1 border border-language border-top-0 border-bottom-0 border-left-0'} data-toggle="tab" role="tab" onClick={() => setActiveTabLanguage('es')}>ES</a>
        <a className="subtitle px-1"
        className={activeLanguage === 'in' ? 'subtitle px-1 active' : 'subtitle px-1'} data-toggle="tab" role="tab" onClick={() => setActiveTabLanguage('in')}>IN</a>
    </div>
);

export default TabLanguage;