import { createElement } from "react";
export function AppHeader() {
    //data
    const title = 'welcome to web component'

    //event handler function
    const mouseOverHandler = () => window.alert('hello')

    //dynamic design
    //const header = document.createElement('h2')
    // header.id = 'mainHeader'
    // header.innerText = title
    // header.style.backgroundColor = 'burlywood'
    // header.addEventListener('mouseover', mouseOverHandler)

    const header = createElement(
        'h2',
        {
            id: 'mainHeader',
            style: { backgroundColor: 'burlywood' },
            onMouseOver: mouseOverHandler
        },
        [title]
    )
    // header.id = 'mainHeader'
    // header.innerText = title
    // header.style.backgroundColor = 'burlywood'
    // header.addEventListener('mouseover', mouseOverHandler)

    //returning a h2 HTML element
    //return header

    //returning a DetailedReactHTMLElement for h2 HTML element
    return header
}