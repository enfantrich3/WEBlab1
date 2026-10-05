const productsContainer = document.getElementById('products');
const cartList = document.getElementById('cart-list');
const cartEmpty = document.getElementById('cart-empty');
const cartTotal = document.getElementById('cart-total');

// корзина
let cart = [];

// карточка товара
function createCard(product) {
  const card = document.createElement('article');
  card.className = 'card';

  const image = document.createElement('img');
  image.className = 'card-image';
  image.src = product.image;
  image.alt = product.name;

  const title = document.createElement('h2');
  title.className = 'card-title';
  title.textContent = product.name;

  const text = document.createElement('p');
  text.className = 'card-text';
  text.textContent = product.description;

  const price = document.createElement('p');
  price.className = 'card-price';
  price.textContent = product.price + ' ₽';

  const button = document.createElement('button');
  button.className = 'card-button';
  button.textContent = 'Добавить в корзину';
  button.addEventListener('click', function () {
    addToCart(product);
  });

  card.appendChild(image);
  card.appendChild(title);
  card.appendChild(text);
  card.appendChild(price);
  card.appendChild(button);
  return card;
}

// вывод каталога
function showProducts() {
  for (const product of products) {
    productsContainer.appendChild(createCard(product));
  }
}

// добавить в корзину
function addToCart(product) {
  let item = null;
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].id === product.id) {
      item = cart[i];
    }
  }

  if (item) {
    item.count = item.count + 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      count: 1
    });
  }

  showCart();
}

// удалить из корзины
function removeFromCart(id) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].id === id) {
      cart.splice(i, 1);
      break;
    }
  }

  showCart();
}

// сумма
function getTotal() {
  let total = 0;
  for (const item of cart) {
    total = total + item.price * item.count;
  }
  return total;
}

// вывод корзины
function showCart() {
  cartList.textContent = '';

  for (const item of cart) {
    const li = document.createElement('li');
    li.className = 'cart-item';

    const name = document.createElement('span');
    name.textContent = item.name;

    const count = document.createElement('span');
    count.textContent = item.count + ' шт.';

    const sum = document.createElement('span');
    sum.textContent = item.price * item.count + ' ₽';

    const removeButton = document.createElement('button');
    removeButton.className = 'cart-remove';
    removeButton.textContent = 'Удалить';
    removeButton.addEventListener('click', function () {
      removeFromCart(item.id);
    });

    li.appendChild(name);
    li.appendChild(count);
    li.appendChild(sum);
    li.appendChild(removeButton);
    cartList.appendChild(li);
  }

  // если пусто
  if (cart.length === 0) {
    cartEmpty.style.display = 'block';
  } else {
    cartEmpty.style.display = 'none';
  }
  cartTotal.textContent = getTotal();
}

showProducts();
showCart();
