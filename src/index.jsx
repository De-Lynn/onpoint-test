import {createRoot} from "react-dom/client"
import { App } from "./components/App"
import './css/index.scss'

const root = document.getElementById('root')

window.addEventListener('scroll', () => {
    let scrollDistance = window.scrollX
    console.log(scrollDistance)
})

if (!root) {
    throw new Error('root not found')
}

const container = createRoot(root)

container.render(<App />)