import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { SignOutButton, SignInButton, SignedIn, SignedOut } from "@clerk/clerk-react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {dark} from '@clerk/themes'
import GoalsPage from './GoalsPage'

function App() {

  return (
    <div style={{margin : "auto"}}>
      <SignedOut>
        <div id="login-div-background">
        <SignInButton />
        </div>
        
      </SignedOut>
      <SignedIn>
        <GoalsPage />
      </SignedIn>
    </div>
  )
}

export default App
