import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App/App.tsx'
import './scss/main.scss'
import {Provider} from "react-redux";
import {store} from "./_redux";

ReactDOM.createRoot(document.getElementById('input') as HTMLElement).render(
  <React.StrictMode>
      <Provider store={store}>
          <App />
      </Provider>
  </React.StrictMode>,
)
