import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Failsafe for direct SPA navigation or cache fallback
if (typeof window !== 'undefined' && (window.location.pathname === '/teleprompter' || window.location.pathname === '/teleprompter/')) {
  window.location.replace('/teleprompter/index.html');
} else {
  createRoot(document.getElementById('root')).render(<App />)
}
