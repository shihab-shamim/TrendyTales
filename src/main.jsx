
import { createRoot } from 'react-dom/client'
import './index.css'
import router from './router/Router.jsx'
import { RouterProvider } from 'react-router'
import AuthProvider from './provider/AuthProvider.jsx'

createRoot(document.getElementById('root')).render(
  <>
  <AuthProvider>
    
    <RouterProvider router={router} />

  </AuthProvider>
  </>,
)
