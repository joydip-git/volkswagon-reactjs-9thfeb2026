import { createElement } from "react";
export function AppFooter() {
    const footerContent = "<u> &nbsp; Volkswagon, 2026 </u>"

    // const footerHeader = document.createElement('h4')
    // footerHeader.id = 'footerHeader'
    // footerHeader.style.backgroundColor = 'yellow'
    // footerHeader.innerText = footerContent

    //returning a h4 HTML element
    //return footerHeader

    const footerHeader = createElement(
        'h4',
        {
            id: 'footerHeader',
            style: { backgroundColor: 'yellow' }
        },
        [footerContent]
    )

    //returning a DetailedReactHTMLElement for h4 HTML element
    return footerHeader
}