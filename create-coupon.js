// Criação do modal
function createModal() {
  // Criação dos elementos HTML
  var modal = document.createElement('div');
  modal.className = 'modal';
  
  var modalContent = document.createElement('div');
  modalContent.className = 'modal-content';
  
  var cpfInput = document.createElement('input');
  cpfInput.type = 'text';
  cpfInput.placeholder = 'CPF';
  cpfInput.id = 'cpfInput';
  
  var submitButton = document.createElement('button');
  submitButton.textContent = 'Enviar';
  
  // Adicionando elementos ao modal
  modalContent.appendChild(cpfInput);
  modalContent.appendChild(submitButton);
  modal.appendChild(modalContent);
  
  // Adicionando o modal à página
  document.body.appendChild(modal);
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
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
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
    background-color: #0056b3;
  }
`;
document.head.appendChild(style);
