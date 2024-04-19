// Função para criar o modal e adicionar os ouvintes de evento
function createModal() {
  // Criação dos elementos HTML
  var modal = document.createElement('div');
  modal.className = 'modal';
  
  var modalContent = document.createElement('div');
  modalContent.className = 'modal-content';
  
  var logoImg = document.createElement('img');
  logoImg.src = 'https://uploads-ssl.webflow.com/611e7d70d4e879564857dd9d/66154344f41761f4afc3bf7e_albert_logo_com_tagline_1.png';
  logoImg.alt = 'Logo';
  logoImg.width = 148.66;
  logoImg.height = 83.5;
  logoImg.style.marginBottom = '20px'; // Adicionando margem inferior
  
  var cashbackText = document.createElement('p');
  cashbackText.textContent = 'Quer utilizar seu cashback albert?';
  cashbackText.style.marginBottom = '20px'; // Adicionando margem inferior
  
  var cpfInput = document.createElement('input');
  cpfInput.type = 'text';
  cpfInput.placeholder = 'CPF';
  cpfInput.id = 'cpfInput';
  
  var closeButton = document.createElement('button');
  closeButton.textContent = 'Não quero';
  closeButton.className = 'close-button';
  closeButton.style.marginRight = '10px'; // Adicionando espaço entre os botões
  
  var submitButton = document.createElement('button');
  submitButton.textContent = 'Enviar';
  
  // Adicionando elementos ao modal
  modalContent.appendChild(logoImg);
  modalContent.appendChild(cashbackText);
  modalContent.appendChild(cpfInput);
  modalContent.appendChild(submitButton);
  modalContent.appendChild(closeButton);
  modal.appendChild(modalContent);
  
  // Adicionando o modal à página
  document.body.appendChild(modal);
  
  // Adicionando estilo de gradiente apenas ao contorno do input quando estiver em foco
  cpfInput.addEventListener('focus', function() {
    cpfInput.style.border = '2px solid linear-gradient(to right, #ff005a, #ff281e)';
  });
  
  // Removendo o estilo de gradiente quando o input perde o foco
  cpfInput.addEventListener('blur', function() {
    cpfInput.style.border = '2px solid #ccc';
  });
  
  // Adicionando evento de clique ao botão "Não quero" para fechar o modal
  closeButton.addEventListener('click', function() {
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
  }
  
  input[type="text"] {
    width: calc(100% - 24px); /* Leva em conta a largura das bordas */
    padding: 10px;
    margin-bottom: 10px;
    border: 2px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
    transition: border-color 0.3s ease-in-out;
  }
  
  .close-button {
    background-color: #007bff;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .close-button:hover {
    background-color: #0056b3;
  }
  
  button {
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
