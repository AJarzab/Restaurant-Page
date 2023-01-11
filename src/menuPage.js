import boba1 from './boba1.jpg'
import boba2 from './boba2.jpg'
import boba3 from './boba3.jpg'
import boba4 from './boba4.jpg'

export default function createMenu(){
    const container = document.querySelector('.container')

    const grid = document.createElement('div')
    grid.classList.add('grid')
    container.appendChild(grid)

    // MENU ITEM NR 1
    const menuItem1 = document.createElement('div')
    menuItem1.classList.add('menu-item')
    grid.appendChild(menuItem1)

    const menuItem1img = document.createElement('img')
    menuItem1img.src = boba1
    menuItem1img.classList.add('menu-img')
    menuItem1.appendChild(menuItem1img)

    const menuItem1dsc = document.createElement('p')
    menuItem1dsc.innerText = 'Brown sugar milk tea with boba'
    menuItem1dsc.classList.add('menu-dsc')
    menuItem1.appendChild(menuItem1dsc)

    // MENU ITEM NR 2
    const menuItem2 = document.createElement('div')
    menuItem2.classList.add('menu-item')
    grid.appendChild(menuItem2)

    const menuItem2img = document.createElement('img')
    menuItem2img.src = boba2
    menuItem2img.classList.add('menu-img')
    menuItem2.appendChild(menuItem2img)

    const menuItem2dsc = document.createElement('p')
    menuItem2dsc.innerText = 'Cosmo kiwi with peach boba'
    menuItem2dsc.classList.add('menu-dsc')
    menuItem2.appendChild(menuItem2dsc)

    // MENU ITEM NR 3
    const menuItem3 = document.createElement('div')
    menuItem3.classList.add('menu-item')
    grid.appendChild(menuItem3)

    const menuItem3img = document.createElement('img')
    menuItem3img.src = boba3
    menuItem3img.classList.add('menu-img')
    menuItem3.appendChild(menuItem3img)

    const menuItem3dsc = document.createElement('p')
    menuItem3dsc.innerText = 'Honeydew smoothie with boba'
    menuItem3dsc.classList.add('menu-dsc')
    menuItem3.appendChild(menuItem3dsc)

    // MENU ITEM NR 4
    const menuItem4 = document.createElement('div')
    menuItem4.classList.add('menu-item')
    grid.appendChild(menuItem4)

    const menuItem4img = document.createElement('img')
    menuItem4img.src = boba4
    menuItem4img.classList.add('menu-img')
    menuItem4.appendChild(menuItem4img)

    const menuItem4dsc = document.createElement('p')
    menuItem4dsc.innerText = 'Strawberry milk tea with strawberry boba'
    menuItem4dsc.classList.add('menu-dsc')
    menuItem4.appendChild(menuItem4dsc)


}
