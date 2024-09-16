function urlContainsCheckout() {
    return window.location.href.includes("/checkout/v3/next/");
}

if (urlContainsCheckout()) {
    // Função para verificar se o usuário está logado
    function isUserLoggedIn() {
        var loggedInElement = document.querySelector('a[href="/account"]');
        return loggedInElement !== null;
    }

    // Função para criar o modal para usuário não logado
    function createNotLoggedInModal() {
        var modal = document.createElement("div");
        modal.className = "modal";

        var modalContent = document.createElement("div");
        modalContent.className = "modal-content";

        var closeButton = document.createElement("span");
        closeButton.textContent = "×";
        closeButton.className = "close-icon";

        var message = document.createElement("p");
        message.textContent = "Para usar seu cashback, faça login ou crie uma conta.";

        modalContent.appendChild(closeButton);
        modalContent.appendChild(message);
        modal.appendChild(modalContent);

        document.body.appendChild(modal);

        closeButton.addEventListener("click", function () {
            document.body.removeChild(modal);
        });
    }

    // Função para criar o modal para usuário logado
    function createLoggedInModal() {
        var modal = document.createElement("div");
        modal.className = "modal";

        var modalContent = document.createElement("div");
        modalContent.className = "modal-content";

        var closeButton = document.createElement("span");
        closeButton.textContent = "×";
        closeButton.className = "close-icon";

        var message = document.createElement("p");
        message.textContent = "Olá, você deseja utilizar seu cashback nesta compra?";

        var checkboxLabel = document.createElement("label");
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkboxLabel.textContent = " Utilizar cashback";
        checkboxLabel.prepend(checkbox);

        modalContent.appendChild(closeButton);
        modalContent.appendChild(message);
        modalContent.appendChild(checkboxLabel);
        modal.appendChild(modalContent);

        document.body.appendChild(modal);

        closeButton.addEventListener("click", function () {
            document.body.removeChild(modal);
        });
    }

    // Função para exibir o modal correto com base no estado de login
    function firstClickHandler() {
        if (isUserLoggedIn()) {
            createLoggedInModal();
        } else {
            createNotLoggedInModal();
        }
        document.removeEventListener("click", firstClickHandler);
    }

    // Adiciona o evento de clique
    document.addEventListener("click", firstClickHandler);

    // Estilos para o modal
    var style = document.createElement("style");
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
            max-width: 350px;
            max-height: 300px;
            z-index: 9999;
        }

        .modal-content {
            text-align: center;
        }

        .close-icon {
            position: fixed;
            top: 10px;
            right: 10px;
            font-size: 20px;
            cursor: pointer;
        }

        .button {
            width: 70%;
            margin-top: 5px;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }

        .overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            z-index: 9998;
        }

        .loading-animation {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: rgba(0, 0, 0, 0.5);
            z-index: 9999;
        }
    `;
    document.head.appendChild(style);
}
