import React from 'react';
import { useHistory } from 'react-router-dom';
import { AppBar, Button, Toolbar, Typography } from '@material-ui/core';
import './Navigation.css';

const Navigation: React.FC = () => {
  const history = useHistory();
  return (
    <AppBar
      className="navigation-component"
      data-testid="navigation-component"
      position="static"
    >
      <Toolbar>
        <Typography className="navigation-component-title" variant="h4">
          Pierre Developments
        </Typography>
        <Button onClick={() => history.push('/about')}>About</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
