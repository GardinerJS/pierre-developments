import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <div className="footer-component" data-testid="footer-component">
      Copyright &copy; 2020: Joshua Gardiner{' '}
      <a href="https://github.com/GardinerJS/pierre-developments">
        <GitHubIcon color="inherit" fontSize="small" />
      </a>
    </div>
  );
};

export default Footer;
