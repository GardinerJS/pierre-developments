import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import './Navigation.css';

const Navigation: React.FC = () => {
  return (
    <AppBar
      className="navigation-component"
      data-testid="navigation-component"
      position="static"
    >
      Pierre Developments
    </AppBar>
  );
};

export default Navigation;
