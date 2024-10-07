import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { StrictMode } from 'react'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  
  
<BrowserRouter>
<App />
<Toaster/>
</BrowserRouter>
  
 
);
