function customRender(reactElement,container){
    /* This is a very basic implementation of how React renders elements to the DOM.
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttribute('target',reactElement.props.target)
    container.appendChild(domElement)
    */


    // A more generic implementation that can handle any type of element and props
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for(const prop in reactElement.props){
        domElement.setAttribute(prop,reactElement.props[prop])
    }
    container.appendChild(domElement)
}

const reactElement = {
    type: 'a',
    props:{
        href: 'https://www.google.com',
        target: '_blank',
    },
    children: 'Click me to visit google'
}

const mainContainer = document.querySelector('#root')
customRender(reactElement,mainContainer)
