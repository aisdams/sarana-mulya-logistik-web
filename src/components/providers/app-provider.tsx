import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { ToastContainer } from 'react-toastify';
import ProgressBarProvider from './progress-bar-provider';

type AppProviderProps = {
  children: React.ReactNode;
};

const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <>
      <ProgressBarProvider>
        {children}
        <ToastContainer
          position="top-right"
          autoClose={4000}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </ProgressBarProvider>
    </>
  );
};

export default AppProvider;
