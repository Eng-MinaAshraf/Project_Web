
const productsContainer = document.querySelector('.products');
fetch('https://fakestoreapi.com/products')
  .then(response => {
    if (!response.ok) {
      throw new Error('فشل في جلب البيانات من الخادم');
    }
    return response.json();
  })
  .then(data => {
    data.forEach(product => {
      const productCard = document.createElement('div');
      productCard.className = 'product-card';
      productCard.innerHTML = `
        <img src="${product.image}" alt="${product.title}" style="width: 100%; height: 50%; object-fit: contain; margin-bottom: 10px;">
        <div class="product-title">${product.title}</div>
        <div class="product-desc">${product.description.substring(0, 80)}...</div>
        <div class="price">$${product.price}</div>
        <button class="add-to-cart">
          <i class="fas fa-cart-plus"></i>
          <span>إضافة للسلة</span>
        </button>
      `;
      productsContainer.appendChild(productCard);
    });
  })
  .catch(error => {
    productsContainer.innerHTML = `<p style="color: red;">حدث خطأ أثناء تحميل المنتجات: ${error.message}</p>`;
    console.error('Fetch Error:', error);
  });

