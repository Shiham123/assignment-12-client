import React from 'react';
import ReactDOM from 'react-dom/client';
import './main.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Router';
import { AppProvider } from './AppContext/context';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AppProvider>
        <div className="bg-colorThree">
          <RouterProvider router={router} />
        </div>
      </AppProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
