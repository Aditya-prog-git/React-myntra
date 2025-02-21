import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App.jsx'
import Bag from './routes/Bag.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './routes/Home.jsx'
import {Provider} from 'react-redux'
import "bootstrap/dist/css/bootstrap.min.css"
import myntraStore from './store/index.js'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home />},
      {
        path: "/bag",
        element: <Bag />,
        /*action: createPostAction,*/
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={myntraStore}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
