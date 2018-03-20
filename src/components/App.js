import React from 'react';
import Header from './Header';
import Main from './main';
import Footer from './Footer';
import BancosDetails from '../containers/container_Banco_details';



const App = () => (
    <div className="container"> 
        <Header/>
        <Main />
        <BancosDetails/>
        <Footer />
    </div>
)

export default App;


