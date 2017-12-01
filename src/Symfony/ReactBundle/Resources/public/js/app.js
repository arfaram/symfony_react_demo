import React from 'react';
import ReactDOM from "react-dom";
import SymfonyApp from './component/symfony.js';
import CologneApp from './component/cologne.js';

//React.render(<Component/>, document.getElementById('app'));
if(document.getElementById('app'))
    ReactDOM.render(<SymfonyApp/>, document.getElementById('app'));
if(document.getElementById('route'))
ReactDOM.render(<CologneApp/>, document.getElementById('route'));


