// Criar elementos HTML dinamicamente
var container = document.createElement('div');
container.className = 'container';

var ball = document.createElement('div');
ball.className = 'ball';
ball.textContent = 'A';

var popup = document.createElement('div');
popup.className = 'popup';
popup.id = 'popup';
popup.style.bottom = '0';
popup.style.visibility = 'hidden';

var closeBtn = document.createElement('span');
closeBtn.className = 'close';
closeBtn.textContent = 'X';
closeBtn.addEventListener('click', closePopup);

var message = document.createElement('p');
message.textContent = 'Aqui tem cashback do Albert! Para utilizar faça o login com o mesmo e-mail.';

var button = document.createElement('button');
button.textContent = 'Quero me cadastrar';
button.addEventListener('click', redirectToLogin);

popup.appendChild(closeBtn);
popup.appendChild(message);
popup.appendChild(button);

container.appendChild(ball);
container.appendChild(popup);

document.body.appendChild(container);

function showPopup() {
  var popupHeight = popup.offsetHeight;
  var ballHeight = ball.offsetHeight;
  popup.style.visibility = 'visible';
  popup.style.bottom = 'calc(100% + 80px - ' + (popupHeight + ballHeight) + 'px)';
}

function closePopup() {
  popup.style.visibility = 'hidden';
}

function redirectToLogin() {
  // Redirecionar para a página de login
  // window.location.href = 'pagina_de_login.html';
}

// Adicionar evento de hover na bola para mostrar o popup
ball.addEventListener('mouseover', showPopup);
