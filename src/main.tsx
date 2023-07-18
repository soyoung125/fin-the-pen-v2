import React from 'react';
import ReactDOM from 'react-dom/client';
import router from './app/router.tsx';
import { RouterProvider } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RecoilRoot>
    <RouterProvider router={router} />
  </RecoilRoot>
);
