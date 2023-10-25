import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Sound } from './routes/Sound';
import { Sounds } from './routes/Sounds';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='sounds' element={<Sounds />} />
        <Route path='sounds/:publicSoundIndex' element={<Sound />} />
        <Route path='*' element={<Navigate to='/sounds' />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
