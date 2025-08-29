


// main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

// Bootstrap CSS & JS
import 'bootstrap/dist/css/bootstrap.min.css';


import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';



import '@fortawesome/fontawesome-free/css/all.min.css';
import './assets/css/dashboard.css';

import 'simple-datatables/dist/style.css';





// React Query
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// Buat instance query client
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      
    {/* React Query Provider */}
    <QueryClientProvider client={queryClient}>
        
      {/* React Router */}
      <BrowserRouter>
        <App />
      </BrowserRouter>

      {/* Devtools untuk debugging React Query */}
      <ReactQueryDevtools initialIsOpen={false} />
          
          
    </QueryClientProvider>
  </React.StrictMode>
);
