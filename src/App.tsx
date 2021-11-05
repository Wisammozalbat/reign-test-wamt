import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './containers/main/Main';
import Layout from './layout/Layout';

function App() {
  console.log(process.env.REACT_APP_PUBLIC_URL);
  return (
    <BrowserRouter basename={process.env.REACT_APP_PUBLIC_URL}>
      <Layout>
        <Main />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
