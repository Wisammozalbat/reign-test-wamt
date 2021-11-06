import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Main from './containers/main/Main';
import Layout from './containers/layout/Layout';

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
