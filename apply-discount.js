document.addEventListener('DOMContentLoaded', function() {
    // Função para verificar se a URL contém a seção de checkout
    function urlContainsCheckout() {
        return window.location.href.includes("/checkout/v3/next/");
    }

    // Função para verificar a presença de "Cashback albert" na página
    function isCashbackAlbertPresent() {
        const elements = document.querySelectorAll('body *');
        for (let element of elements) {
            if (element.textContent.includes('Cashback albert')) {
                console.log('Cashback Albert encontrado:', element);
                return element;
            }
        }
        console.log('Cashback Albert não encontrado.');
        return null;
    }

    // Função para criar o modal
    function createModal() {
        const cashbackElement = isCashbackAlbertPresent();
        if (!cashbackElement) {
            console.log('Cashback Albert não está presente na página.');
            return;
        }

        var url = window.location.href;
        var cartIdIndex = url.indexOf("/checkout/v3/next/") + "/checkout/v3/next/".length;
        var cartIdEndIndex = url.indexOf("/", cartIdIndex);
        var cartId = url.substring(cartIdIndex, cartIdEndIndex);

        if (!cartId) {
            console.error("CartID não encontrado na URL.");
            return;
        }

        var modal = document.createElement("div");
        modal.className = "modal";

        var modalContent = document.createElement("div");
        modalContent.className = "modal-content";

        var closeButton = document.createElement("span");
        closeButton.textContent = "×";
        closeButton.className = "close-icon";

        var logoImg = document.createElement("img");
        logoImg.src = "https://uploads-ssl.webflow.com/611e7d70d4e879564857dd9d/66154344f41761f4afc3bf7e_albert_logo_com_tagline_1.png";
        logoImg.alt = "Logo";
        logoImg.width = 148.66;
        logoImg.height = 83.5;

        var cashbackText = cashbackElement.textContent.trim();
        var cashbackInfo = document.createElement("p");
        cashbackInfo.textContent = `Hey! Tem cashback na sua carteira e você pode usá-lo como parte do pagamento.\nSeu saldo disponível para uso é de ${cashbackText}.`;
        cashbackInfo.style.marginBottom = "20px";

        var yesButton = document.createElement("button");
        yesButton.textContent = "Quero usar nessa compra";
        yesButton.classList.add("button", "yes-button");

        var noButton = document.createElement("button");
        noButton.textContent = "Não quero usar agora";
        noButton.classList.add("button", "no-button");

        modalContent.appendChild(closeButton);
        modalContent.appendChild(logoImg);
        modalContent.appendChild(cashbackInfo);
        modalContent.appendChild(yesButton);
        modalContent.appendChild(noButton);
        modal.appendChild(modalContent);

        document.body.appendChild(modal);

        closeButton.addEventListener("click", function () {
            document.body.removeChild(modal);
        });

        // Estilização do modal
        appendModalStyles();
    }

    function appendModalStyles() {
        var style = document.createElement("style");
        style.textContent = `...`; // Adicione aqui os estilos que você já tem definidos
        document.head.appendChild(style);
    }

    // Iniciar o script se estiver no checkout
    if (urlContainsCheckout()) {
        createModal();
    }
});
