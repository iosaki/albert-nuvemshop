  function addParagraph() {
    var couponInput = document.getElementById('coupon-input');
    if (couponInput) {
      var newParagraph = document.createElement('p');
      newParagraph.classList.add('new-paragraph');
      newParagraph.innerText = 'Teste de script';
      couponInput.parentNode.appendChild(newParagraph);
    }
  }

  // Adiciona o parágrafo quando qualquer lugar da página é clicado
  document.addEventListener('click', function() {
    addParagraph();
  });
