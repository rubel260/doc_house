import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router-dom";
import { Router } from "./routes/Router.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthProvider from "./Providers/AuthProvider.jsx";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Toaster } from "react-hot-toast";
// Create a client
const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
  <HelmetProvider>
     <AuthProvider>
      <QueryClientProvider client={queryClient}>
      <div className="max-w-11/12 mx-auto">
        <RouterProvider router={Router}></RouterProvider>
        <Toaster></Toaster>
      </div>
    </QueryClientProvider>
  </AuthProvider>
  </HelmetProvider>
  </StrictMode>
);
