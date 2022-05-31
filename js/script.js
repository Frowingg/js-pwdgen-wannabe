const userName = prompt('Dimmi il tuo nome')
console.log(userName)

const userSurname = prompt('Dimmi il tuo cognome')
console.log(userSurname)

const userFavCol = prompt('Dimmi il tuo colore preferito')
console.log(userFavCol)

const password = userName + userSurname + userFavCol + 21
console.log(password)

document.getElementById('password').innerHTML = password;
