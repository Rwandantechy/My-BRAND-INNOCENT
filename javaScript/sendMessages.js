const sentMessages = document.getElementById("sendMeMessage");
const sendAmessage = async (e) => {
  e.preventDefault();
  const message = {
    Name: sentMessages.sendername.value,
    email_address: sentMessages.senderemail.value,
    message_body: sentMessages.sendermessage.value,
    date: new Date(),
  };
  await fetch("https://lazy-puce-fawn-yoke.cyclic.app/messages", {
    method: "POST",
    body: JSON.stringify(message),
    headers: { "Content-Type": "application/json" },
  });
  window.location.replace("/index.html");
};
sentMessages.addEventListener("submit", sendAmessage);
