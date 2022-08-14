import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Sound } from './pages/Sound';
import { Catalog } from './pages/Catalog';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='sounds' element={<Catalog />} />
        <Route path='sounds/:publicSoundIndex' element={<Sound />} />
        <Route path='*' element={<Navigate to='/sounds' />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
