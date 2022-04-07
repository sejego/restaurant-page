export default loadMenu;


let foods = {'Chicken pita souvlaki': 4.99, 'Pork pita souvlaki': 3.99,
        'Falafel pita': 5.99, 'Chicken gyros pita': 4.99, 'Pork Gyros pita': 3.99,
        'Pita with sausage': 4.50, 'Grilled halloumi': 2.50, 'Extra french fries': 1.49,
        'Tiropita/Spanakopita 1pcs': 0.59, 'Keftedes': 3.29};
let drinks = {'Mythos beer': 2.50, 'Alfa beer': 2.50, 'Fix beer': 2.50,
              'Coca-Cola/Fanta/Sprite 0.5l': 2.0, 'Ouzo 200ml': 7.90, 'Tsipouro 200ml': 9.0};

let desserts = {'Baklava 5pcs': 4.70, 'Galaktoboureko': '4.49', 'Trigonakia 3pcs': '2.99'}
let menu = {'Main dishes': foods, 'Drinks': drinks, 'Desserts': desserts};

function loadMenu(content) {

  const menuDiv = document.createElement('div');
  menuDiv.id = 'tab-content';

  // iterate thru dictionary
  for (const [key, value] of Object.entries(menu)) {

    const menuSection = document.createElement('h2');
    menuSection.textContent = key;
    menuDiv.appendChild(menuSection);
    injectFoodsToMenu(value, menuDiv);
  }
  content.appendChild(menuDiv);
}

function injectFoodsToMenu(f, menuDiv) {
  for (const [key, value] of Object.entries(f)) {
    const menuElement = document.createElement('div');
    menuElement.classList.add('menu-div');
    const product = document.createElement('div');
    const price = document.createElement('div');
    product.textContent = key;
    price.textContent = value + ' €';
    menuElement.appendChild(product);
    menuElement.appendChild(price);
    menuDiv.appendChild(menuElement);
  }
}