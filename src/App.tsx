import React from 'react';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Navigation from './components/Navigation/Navigation';

const App: React.FC = () => {
  return (
    <div>
      <Navigation />
      <Home />
      <Footer />
    </div>
  );
};

export default App;
