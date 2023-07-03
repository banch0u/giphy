import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import store from './store/index';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routesArr } from "./routes";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          {routesArr.map((item) => (
            <Route
              exact
              path={item.path}
              key={item.id}
              element={
                <>
                  <item.component />
                </>
              }
            />
          ))}
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

