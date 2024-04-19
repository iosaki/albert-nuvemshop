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
