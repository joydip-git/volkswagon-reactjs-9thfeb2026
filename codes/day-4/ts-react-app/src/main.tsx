import { createRoot, type Root } from "react-dom/client"
import App from "./App"

const divElement = document.getElementById('root') as HTMLDivElement

const rootElement: Root = createRoot(divElement)
rootElement.render(<App />)