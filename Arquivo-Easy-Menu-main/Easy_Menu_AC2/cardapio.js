var decreaseBtns = document.getElementsByClassName('decrease-btn');
var increaseBtns = document.getElementsByClassName('increase-btn');
var quantityInputs = document.getElementsByClassName('quantity');
var addToCartBtns = document.getElementsByClassName('add-to-cart-btn');
var cartItems = document.getElementById('cart-items');
var cartTotal = document.getElementById('cart-total');
var total = 0;

for (var i = 0; i < decreaseBtns.length; i++) {
  decreaseBtns[i].addEventListener('click', function() {
    var currentInput = this.nextElementSibling;
    var currentValue = parseInt(currentInput.value);
    if (currentValue > 0) {
      currentInput.value = currentValue - 1;
    }
  });
}

for (var i = 0; i < increaseBtns.length; i++) {
  increaseBtns[i].addEventListener('click', function() {
    var currentInput = this.previousElementSibling;
    var currentValue = parseInt(currentInput.value);
    currentInput.value = currentValue + 1;
  });
}

for (var i = 0; i < addToCartBtns.length; i++) {
  addToCartBtns[i].addEventListener('click', function() {
    var currentInput = this.previousElementSibling.previousElementSibling;
    var quantity = parseInt(currentInput.value);
    var item = currentInput.id;
    var price = parseFloat(this.getAttribute('data-price'));
    var name = this.getAttribute('data-nome');
    
    if (quantity > 0) {
      var cartItem = document.createElement('li');
      cartItem.textContent = name + ' - Quantidade: ' + quantity + ' - Valor: R$ ' + (price * quantity).toFixed(2);
      
      var removeButton = document.createElement('button');
      removeButton.textContent = 'Remover item';
      removeButton.classList.add('remove-item-btn');
      removeButton.addEventListener('click', function() {
        cartItems.removeChild(cartItem);
        total -= price * quantity;
        updateCartTotal();
      });
      
      cartItem.appendChild(removeButton);
      cartItems.appendChild(cartItem);
      
      total += price * quantity;
      updateCartTotal();
    }
  });
}

function updateCartTotal() {
  cartTotal.textContent = 'Total: R$ ' + total.toFixed(2);
}

