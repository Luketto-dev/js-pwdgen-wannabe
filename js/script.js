const nome = prompt("quel'è il tuo nome");
const surname = prompt("qual'è il tuo cognome");
const color = prompt("quel è il tuo colore preferito")
const anno = 22;

const user = document.getElementById("user")


user.innerHTML = `${nome}${surname}${color}${anno}`
