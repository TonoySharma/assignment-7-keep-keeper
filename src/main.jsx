import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { router } from './routes/Routes'
import AllCardProvider from './context/AllCardProvider'




createRoot(document.getElementById('root')).render(
  <StrictMode>
    
     <AllCardProvider>
      
         <RouterProvider router={router} />

        {/* <ToastContainer /> */}
     </AllCardProvider>

  </StrictMode>
)
