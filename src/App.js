import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Category from './pages/category/Category'
import Article from './pages/article/Article'
import './App.css';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path = '/' component = { Home } exact />
                <Route path = '/category/:category' component = { Category } />
                <Route path = '/article/:id' component = { Article } />
            </Switch>
        </BrowserRouter>
    );
}

export default App;