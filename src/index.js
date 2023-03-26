import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css';
import { Home } from './Home/Home';
import { RecipeAdd } from './RecipeAdd/RecipeAdd';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "add-recipe",
    element: <RecipeAdd />,
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

