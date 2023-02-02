import './index.css'
import { MantineProvider } from '@mantine/core'
import App from './App'
import React from 'react'
import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
    <React.StrictMode>
        <MantineProvider withGlobalStyles withNormalizeCSS>
            <App />
        </MantineProvider>
    </React.StrictMode>
)
