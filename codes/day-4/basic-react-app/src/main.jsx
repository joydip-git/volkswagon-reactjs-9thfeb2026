import { createRoot } from "react-dom/client"
import App from "./App"

//const app = App()
const div = document.getElementById('placeholder')
const root = createRoot(div)
// root.render(app)
root.render(<App />)