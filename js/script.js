const productsContainer = document.getElementById('products');

// Создаёт карточку одного товара
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

  card.appendChild(image);
  card.appendChild(title);
  card.appendChild(text);
  card.appendChild(price);
  card.appendChild(button);
  return card;
}

// Выводит все товары на страницу
function showProducts() {
  for (const product of products) {
    productsContainer.appendChild(createCard(product));
  }
}

showProducts();
