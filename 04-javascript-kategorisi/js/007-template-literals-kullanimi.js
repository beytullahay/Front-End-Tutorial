// ********** Template Literals Kullanimi ********** 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

let username = "Beytullah"
const DOMAIN = "gmail.com"

let email = username + "@" + DOMAIN

 console.log("Merhaba", username, "sitemize hosgeldin \n mail adresin:", email)

let info = `
Merhaba ${username} sitemize hosgeldin.. 
mail adresin: ${email}

mail adresinin uzunlugu: ${email.length}
borcunuz: ${(2 + 3) * 10} TL
gunun saat bilgisi : ${new Date().getHours()}:${new Date().getMinutes()}

kisa isminiz: ${username[0]}
`

console.log(info)