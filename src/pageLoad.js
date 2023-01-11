export default function createWebsite(){
    const contentEl = document.getElementById('content')

    const headerEl = document.createElement('header')
    headerEl.classList.add('header')
    contentEl.appendChild(headerEl)
    
    const logoEl = document.createElement('div')
    logoEl.classList.add('logo')
    headerEl.appendChild(logoEl)
    
    const h1Logo = document.createElement('h1')
    h1Logo.textContent = 'BOBA CAFE'
    logoEl.appendChild(h1Logo)
    
    const navEl = document.createElement('nav')
    navEl.classList.add('nav')
    headerEl.appendChild(navEl)
    
    const homeBtn = document.createElement('button')
    homeBtn.innerText='Home'
    homeBtn.classList.add('btn-nav')
    homeBtn.classList.add('home')
    homeBtn.classList.add('active')
    navEl.appendChild(homeBtn)
    
    const menuBtn = document.createElement('button')
    menuBtn.innerText='Menu'
    menuBtn.classList.add('btn-nav')
    menuBtn.classList.add('menu')
    navEl.appendChild(menuBtn)
    
    const contactBtn = document.createElement('button')
    contactBtn.innerText='Contact'
    contactBtn.classList.add('btn-nav')
    contactBtn.classList.add('contact')
    navEl.appendChild(contactBtn)
    
    const mainEl = document.createElement('main')
    mainEl.classList.add('main')
    contentEl.appendChild(mainEl)
    
    const divContainer = document.createElement('div')
    divContainer.classList.add('container')
    mainEl.appendChild(divContainer)
    
    const footerEl = document.createElement('footer')
    footerEl.classList.add('footer')
    contentEl.appendChild(footerEl)
    
    const textFooter = document.createElement('p')
    textFooter.textContent = 'Copyright © 2023 AJarzab'
    footerEl.appendChild(textFooter)
    
    const linkFooter = document.createElement('a')
    linkFooter.href = 'https://github.com/AJarzab'
    footerEl.appendChild(linkFooter)
    
    const logoFooter = document.createElement('i')
    logoFooter.classList.add('fab')
    logoFooter.classList.add('fa-github')
    linkFooter.appendChild(logoFooter)
}