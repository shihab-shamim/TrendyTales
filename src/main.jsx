
import { createRoot } from 'react-dom/client'
import './index.css'
import router from './router/Router.jsx'
import { RouterProvider } from 'react-router'
import AuthProvider from './provider/AuthProvider.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <>
  <AuthProvider>
    
    <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />

    </QueryClientProvider>

  </AuthProvider>
  </>,
)
