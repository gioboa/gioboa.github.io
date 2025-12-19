import '@qwik.dev/core/qwikloader.js'

import { render } from '@qwik.dev/core'
import { App } from './app.tsx'
import './index.css'

render(document.getElementById('app') as HTMLElement, <App />)
