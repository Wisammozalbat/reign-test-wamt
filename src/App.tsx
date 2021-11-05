import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './containers/main/Main';
import Layout from './layout/Layout';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Main />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
