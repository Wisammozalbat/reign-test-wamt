import React from 'react';
import { LoaderContainer } from './LoaderStyle';
import Loader from 'react-loader-spinner';

const LoaderComponent = () => {
  return (
    <LoaderContainer>
      <Loader type="TailSpin" color="#4979ff" />
    </LoaderContainer>
  );
};

export default LoaderComponent;
