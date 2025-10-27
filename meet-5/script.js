const getValue = (id) => document.getElementById(id).value;

const confirm = document.getElementById("confirm-alert");
const sendButton = document.getElementById("send-button");

const openConfirm = () => {
  confirm.style.display = "grid";
  sendButton.style.display = "none";
};

const closeConfirm = () => {
  confirm.style.display = "none";
  sendButton.style.display = "block";
};

const sendEmail = (e) => {
  e.preventDefault();

  const name = getValue("name");
  const email = getValue("email");
  const message = getValue("message");
  const errorMessage = document.querySelector(".error-message");
  const confirmSendButton = document.querySelector(".confirm-button");
  const mailtoLink = `mailto:muzaaqi@yahoo.com?subject=Contact from ${name}&body=${message}%0D%0A%0D%0AFrom: ${name} (${email})`;

  if (!name || !email || !message) {
    errorMessage.style.display = "block";
    return;
  } else {
    errorMessage.style.display = "none";
  }

  openConfirm();

  confirmSendButton.onclick = () => {
    window.location.href = mailtoLink;
    closeConfirm();
  };
};