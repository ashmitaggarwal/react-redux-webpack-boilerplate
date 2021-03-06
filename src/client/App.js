import React from 'react';
import { renderRoutes } from 'react-router-config';
import Header from './containers/header/header.container';

const App = ({ route }) => {
  return (
    <div>
      <Header />
      {renderRoutes(route.routes)}
    </div>
  );
};

export default {
  component: App
};
