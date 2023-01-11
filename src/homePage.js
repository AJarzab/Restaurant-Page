import bobaHome from './bobaHome.jpg'

export default function createHome(){
    const container = document.querySelector('.container')

    const textEl = document.createElement('p')
    textEl.textContent = 'Best Boba in your country'
    textEl.classList.add('home-dsc')
    container.appendChild(textEl)

    const text2El = document.createElement('p')
    text2El.textContent = 'Made with passion since 1969'
    text2El.classList.add('home-dsc')
    container.appendChild(text2El)

    const image = document.createElement('img')
    image.src = bobaHome
    image.classList.add('home-img')
    container.appendChild(image)

    const text3El = document.createElement('p')
    text3El.textContent = 'Order online or visit us!'
    text3El.classList.add('home-dsc')
    container.appendChild(text3El)
}
