import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ClerkProvider } from '@clerk/clerk-react'
import {dark} from '@clerk/themes'

//import key from Clerk and confirm it's actually there
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
 
if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

//wrap the app rendering in a clerk provider so manage the user state
//also set the theme to dark, because light mode is a travesty
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ClerkProvider publishableKey = {PUBLISHABLE_KEY} 
      appearance={{
        baseTheme: [dark]
      }}>
    <App />
    </ClerkProvider>
  </React.StrictMode>,
)
