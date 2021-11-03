import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './containers/main/Main';
import Layout from './layout/Layout';

function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </Layout>
  );
}

export default App;
