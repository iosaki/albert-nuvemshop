// Função para criar o modal e adicionar os ouvintes de evento
function createModal() {
  // Criação dos elementos HTML
  var modal = document.createElement('div');
  modal.className = 'modal';
  
  var modalContent = document.createElement('div');
  modalContent.className = 'modal-content';
  
  var closeButton = document.createElement('span');
  closeButton.textContent = 'X';
  closeButton.className = 'close-button';
  
  var logoImg = document.createElement('img');
  logoImg.src = 'https://uploads-ssl.webflow.com/611e7d70d4e879564857dd9d/66154344f41761f4afc3bf7e_albert_logo_com_tagline_1.png';
  logoImg.alt = 'Logo';
  logoImg.width = 148.66;
  logoImg.height = 83.5;
  logoImg.style.marginBottom = '20px'; // Adicionando margem inferior
  
  var cashbackText = document.createElement('p');
  cashbackText.textContent = 'Para utilizar e ganhar cashback pelo Albert, realize o login na plataforma. Lembre-se que o e-mail que você utiliza no Albert deve ser o mesmo, ok?!';
  cashbackText.style.marginBottom = '20px'; // Adicionando margem inferior
  
  var okButton = document.createElement('button');
  okButton.textContent = 'OK, entendi!';
  
  // Adicionando elementos ao modal
  modalContent.appendChild(closeButton);
  modalContent.appendChild(logoImg);
  modalContent.appendChild(cashbackText);
  modalContent.appendChild(okButton);
  modal.appendChild(modalContent);
  
  // Adicionando o modal à página
  document.body.appendChild(modal);
  
  // Adicionando evento de clique ao botão de fechar o modal
  closeButton.addEventListener('click', function() {
    document.body.removeChild(modal);
  });
  
  // Adicionando evento de clique ao botão "OK, entendi!" para fechar o modal
  okButton.addEventListener('click', function() {
    document.body.removeChild(modal);
  });
}

// Função para exibir o modal quando o usuário clicar na tela pela primeira vez
function firstClickHandler() {
  createModal();
  document.removeEventListener('click', firstClickHandler);
}

// Adicionando o listener para o primeiro clique na tela
document.addEventListener('click', firstClickHandler);

// Estilos CSS para o modal
var style = document.createElement('style');
style.textContent = `
  .modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
    padding: 20px;
    max-width: 400px;
  }
  
  .modal-content {
    text-align: center;
    position: relative;
  }
  
  .close-button {
    position: absolute;
    top: 5px;
    right: 5px;
    font-size: 20px;
    cursor: pointer;
  }
  
  button {
    display: block; /* Botões agora são exibidos em blocos */
    width: 100%; /* Ocupam a largura total do contêiner */
    margin-top: 5px; /* Espaçamento entre os botões */
    background: linear-gradient(to right, #ff005a, #ff281e);
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:hover {
    background: linear-gradient(to right, #ff005a, #ff281e);
  }
`;
document.head.appendChild(style);

