function sendPayload(email, cartId) {
    const userEmail = document.getElementById('reviewBlockContentEmail').textContent;
    const payload = {
        cart_id: cartId,
        email: email,
    };

    // Use Fetch API or any preferred library to send POST request
    fetch("https://hook.us1.make.com/wzmj4fu7dw7brhwpkclvi33kfuok92yk", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log("Payload sent:", data);
        })
        .catch((error) => {
            console.error("Error sending payload:", error);
        });
}


function urlContainsCheckout() {
    return window.location.href.includes("/checkout/v3/next/");
}

if (urlContainsCheckout()) {
    // Function to create the modal
    function createModal() {
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

        var cashbackInfo = document.createElement("p");
        // Get the cashback value and replace "XX" in the text
        cashbackInfo.textContent = "Hey! Tem cashback na sua carteira e você pode usá-lo como parte do pagamento.\nSeu saldo disponível para uso é de R$XX.";
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

        closeButton.addEventListener("click", function() {
            document.body.removeChild(modal);
        });

        // Event listener for "Não quero usar agora" button
        noButton.addEventListener("click", function() {
            sendPayload(userEmail, getCartIdFromUrl()); // Replace with function to get cartId

        });


        // Add overlay layer
        var overlay = document.createElement("div");
        overlay.className = "overlay";
        document.body.appendChild(overlay);

        // Show loading animation
        var loadingAnimation = document.createElement("div");
        loadingAnimation.className = "loading-animation";
        loadingAnimation.innerHTML = "<div class='loader'></div>";
        document.body.appendChild(loadingAnimation);

        // Wait 3 seconds and reload page without cache
        setTimeout(function() {
            document.body.removeChild(overlay);
            document.body.removeChild(loadingAnimation);
            location.reload(true);
        }, 3000);
    });
}

function firstClickHandler() {
    createModal();
    document.removeEventListener("click", firstClickHandler);
}

document.addEventListener("click", firstClickHandler);

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

    .yes-button {
      background: linear-gradient(to right, #ff005a, #ff281e);
    }

    .no-button {
      background: white;
      color: #ff005a;
      border: 1px solid #ff281e;
    }

    .yes-button:hover {
      background: linear-gradient(to right, rgba(255, 0, 90, 0.8), rgba(255, 40, 30, 0.8));
    }

    .no-button:hover {
      background: linear-gradient(to right, rgba(255, 0, 90, 0.08), rgba(255, 40, 30, 0.08));
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

    .loader {
      border: 4px solid #f3f3f3;
      border-radius: 50%;
      border-top: 4px solid #ff005a;
      width: 50px;
      height: 50px;
      -webkit-animation: spin 2s linear infinite; 
      animation: spin 2s linear infinite;
    }

    @-webkit-keyframes spin {
      0% { -webkit-transform: rotate(0deg); }
      100% { -webkit-transform: rotate(360deg); }
    }

    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `;
document.head.appendChild(style);
}
