document.getElementById('main-heading').innerText = 'Fruit World';

document.getElementById('main-heading').style.color = 'orange';

document.getElementById('basket-heading').style.color = 'green';

var thanks = document.getElementById('thanks');
var paragraph = document.createElement('p');
paragraph.innerText = 'Please visit us again.';
thanks.appendChild(paragraph);