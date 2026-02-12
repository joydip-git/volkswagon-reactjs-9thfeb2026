import { AppRoot } from "./app-root/AppRoot"
import { createRoot } from "react-dom/client";

const placeholder = document.getElementById('placeholder')
const completeDesign = AppRoot()
//placeholder.appendChild(completeDesign)

//createRoot lets you create a root to display React components inside a browser DOM node.
const rootReactElement = createRoot(placeholder)
rootReactElement.render(completeDesign)
