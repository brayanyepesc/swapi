import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './router/routes'
import { NavbarLayout } from './components/templates'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NavbarLayout>
      <RouterProvider router={router} />
    </NavbarLayout>
  </React.StrictMode>,
)
