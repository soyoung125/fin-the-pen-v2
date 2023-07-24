/* eslint-disable @typescript-eslint/no-floating-promises */
import React from 'react';
import ReactDOM from 'react-dom/client';
import router from './app/router.tsx';
import { RouterProvider } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { worker } from './mocks/browser';
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const queryClient = new QueryClient();

async function main() {
  // msw 세팅 시작
  await worker.start({
    serviceWorker: {
      url: '/fin-the-pen-web-v2/mockServiceWorker.js',
    },
    onUnhandledRequest: 'bypass',
  });
  // msw 세팅 끝
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <RouterProvider router={router} />
      </RecoilRoot>
    </QueryClientProvider>
  );
}

main();
