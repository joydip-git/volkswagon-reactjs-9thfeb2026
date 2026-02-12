import { AppFooter } from "../app-footer/AppFooter"
import { AppHeader } from "../app-header/AppHeader"
import { createElement } from "react";

export function AppRoot() {
    const header = AppHeader()
    const footer = AppFooter()

    //const div = document.createElement('div')

    // div.append(
    //     header,
    //     document.createElement('br'),
    //     document.createElement('br'),
    //     document.createElement('br'),
    //     document.createElement('br'),
    //     document.createElement('br'),
    //     footer
    // )

    //returning a div HTML element
    //return div


    const div = createElement(
        'div',
        {},
        [
            header,
            createElement('br'),
            createElement('br'),
            createElement('br'),
            createElement('br'),
            createElement('br'),
            createElement('br'),
            footer
        ]
    )
    //returning a DetailedReactHTMLElement for div HTML element
    return div
}