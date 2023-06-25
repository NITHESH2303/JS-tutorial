// DOM Manipulation

// GetElementById

// if(typeof document !== 'undefined') {
//     const title = document.getElementById('main-heading1')
//     title.style.color = 'red'
//     console.log(title)
// }

// GetElementByClassName

// if(typeof document !=='undefined'){
//     const listItem = document.getElementsByClassName('list-items')
//     console.log(listItem)
// }

// GetElementByTagName

// if(typeof document !== 'undefined'){
//     const listItem = document.getElementsByTagName('li')
//     console.log(listItem)
// }

// QuerySelector

// if(typeof document != 'undefined'){
//     const container = document.querySelector('div')
//     console.log(container)
// }

// QuerySelectorAll
// if(typeof document !== 'undefined') {
//     const container = document.querySelectorAll('div')
//     console.log(container)
// }

// if(typeof document !== 'undefined'){
//     const listItems = document.querySelectorAll('.list-items')
//     for( let i=0;i<listItems.length;i++){
//         listItems[i].style.fontSize = '2rem'
//     }
//     console.log(listItems)
// }

// Creating Elements

// if(typeof document !== 'undefined'){
//     const ul = document.querySelector('ul')
    // const li = document.createElement('li')
    //
    // // Adding Elements
    //
    // ul.append(li)
    //
    // // Modifying the text
    //
    // li.innerText = 'X-Men'
    //
    // const firstListItem = document.querySelector('.list-items')
    // console.log(firstListItem.innerText)
    // console.log(firstListItem.textContent)
    // console.log(firstListItem.innerHTML)
    
    // Modifying the Attributes and Classes
    
    // li.setAttribute('id','main-heading')
    // li.removeAttribute('id')
    
    // const title = document.querySelector('#main-heading')
    
    // console.log(title.getAttribute('id'))
    
    // li.classList.add('list-items')
    // li.classList.remove('list-items ')
// }

if(typeof document!== "undefined"){
    // Parent Node Traversal

    let ul = document.querySelector('ul')
    // console.log(ul.parentNode.parentNode)
    // console.log(ul.parentElement.parentElement)

    // Child Node Traversal
    
    // console.log(ul.childNodes)
    // console.log(ul.childElementCount)
    // console.log(ul.firstChild)
    // console.log(ul.firstElementChild)
    // console.log(ul.lastChild)
    // console.log(ul.lastElementChild)
    
    // Sibling Node Traversal
    
    let div = document.querySelector('div')
    
    console.log(div.childNodes)
    console.log(ul.previousSibling)
    console.log(ul.nextSibling)
}
