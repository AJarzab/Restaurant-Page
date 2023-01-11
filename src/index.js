import './style.css'
import createWebsite from './pageLoad'
import createHome from './homePage'
import createMenu from './menuPage'
import createContact from './contactPage'

window.onload = createWebsite()
window.onload = createHome()


const container = document.querySelector('.container')
const navButtons = document.querySelectorAll('.btn-nav')

navButtons.forEach(btn => {
    btn.addEventListener('click', (e)=>{
        document.querySelector('.btn-nav.active').classList.remove('active')
        e.target.classList.add('active')
        if (e.target.classList.contains('home')){
            container.innerHTML =''
            createHome()
        } else if (e.target.classList.contains('menu')){
            container.innerHTML =''
            createMenu()
        } else if (e.target.classList.contains('contact')){
            container.innerHTML =''
            createContact()
        }
    })
    
});