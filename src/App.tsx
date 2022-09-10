import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import { Home, Nav, NotFound } from './components';

export const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
};

export const WrappedApp = () => {
  return (
    <HashRouter>
      <Nav />
      <App />
    </HashRouter>
  );
};
