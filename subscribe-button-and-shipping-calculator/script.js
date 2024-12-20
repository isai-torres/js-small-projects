// Subscribe Button
function subscribe() {
  const subscribeButton = document.querySelector('.js-subscribe-button');

  if (subscribeButton.innerText === 'Subscribe') {
    subscribeButton.innerHTML = 'Subscribed';
    
  } else {
    subscribeButton.innerHTML = 'Subscribe';
  }
}  

// Shipping Calculator
function calculateTotal() {
  const inputElement = document.querySelector('.js-calculate-button');
  let cost = Number(inputElement.value);

  if (cost <= 40) {
    cost += 10;
  }

  document.querySelector('.js-total').innerHTML = `$${cost}`;
}

// Calculate Total by pressing Enter key
function handleCostKeydown(event) {
  if (event.key === 'Enter') { 
    calculateTotal();
  }
}

//Reset Button
function resetTotal() {
  document.querySelector('.js-calculate-button').value = '';
  document.querySelector('.js-total').innerHTML = '';
}