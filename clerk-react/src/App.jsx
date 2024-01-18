import { useState } from 'react'
import './App.css'
import { SignedIn, SignedOut } from "@clerk/clerk-react"
import Home from './Home'
import Login from './Login'

function App() {
 

  return (
    <div style={{margin : "auto"}}>
      <SignedOut>
          <Login />
      </SignedOut>
      <SignedIn>
        <Home />
      </SignedIn>
    </div>
  )
}

export default App
