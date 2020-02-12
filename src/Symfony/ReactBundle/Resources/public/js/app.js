import React from 'react';
import ReactDOM from "react-dom";
import SymfonyApp from './component/symfony.js';
import BlogApp from './component/blog.js';
import ProductsApp from './component/products';

//React.render(<Component/>, document.getElementById('app'));
if(document.getElementById('app'))
    ReactDOM.render(<SymfonyApp/>, document.getElementById('app'));
if(document.getElementById('blog'))
    ReactDOM.render(<BlogApp/>, document.getElementById('blog'));
if(document.getElementById('products'))
    ReactDOM.render(<ProductsApp/>, document.getElementById('products'));


