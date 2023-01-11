import map from './map.png'

export default function createContact(){
    const container = document.querySelector('.container')

    const numberEl = document.createElement('p')
    numberEl.textContent = '📞 123 456 789'
    numberEl.classList.add('contact-dsc')
    container.appendChild(numberEl)

    const addressEl = document.createElement('p')
    addressEl.textContent = '🏠 Not a fake address, Nevada, USA'
    addressEl.classList.add('contact-dsc')
    container.appendChild(addressEl)

    const mapEl = document.createElement('img')
    mapEl.src = map
    mapEl.classList.add('contact-img')
    container.appendChild(mapEl)
}