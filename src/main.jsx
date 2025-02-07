import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { JournalApp } from './JournalApp'
import './styles.css'
import { AppTheme } from './theme'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <AppTheme>
            <JournalApp />
        </AppTheme>
    </StrictMode>,
)
