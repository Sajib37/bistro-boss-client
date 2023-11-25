import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Router from "./Componets/Routes/Router/Router";
import { HelmetProvider } from "react-helmet-async";
import AuthProvider from "./Componets/AuthProvider/AuthProvider";

// tanstack query
import {
    QueryClient,
    QueryClientProvider,
} from "@tanstack/react-query";

// Create a client
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <AuthProvider>
            <QueryClientProvider client={queryClient}>
                <HelmetProvider>
                    <RouterProvider router={Router} />
                </HelmetProvider>
            </QueryClientProvider>
        </AuthProvider>
    </React.StrictMode>
);
