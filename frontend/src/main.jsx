import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { SearchContext1Provider } from './assets/components/context/SearchContext1.jsx'
import App from './App.jsx'
import './index.css'
import { AuthContextProvider } from './assets/components/context/AuthContext.jsx'




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SearchContext1Provider>
      <AuthContextProvider>
    <App />
    </AuthContextProvider>
    </SearchContext1Provider>
  </StrictMode>,
)
