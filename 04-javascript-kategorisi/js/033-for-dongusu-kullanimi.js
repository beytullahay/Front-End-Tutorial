// For Dongusu
// https://developer.mozilla.org/tr/docs/Web/JavaScript/Guide/Loops_and_iteration

 

let users = ["Lorem", "Ipsum", "Dolor", ]

// for (let index = 0; index < 10; index++) {
//   console.log(index)
// }

// let index = 0

// for (; index < 10; index++) {
//   console.log(index)
// }

// üstte konsola yazdırmıştık burada 
// sayfaya yazdırmayı deniyeceğiz
// userlist id'sini yazdık
const userListDOM = document.querySelector('#userList')

for (index = 0; index < users.length; index++) {
  // li olusturuduk
  const liDOM = document.createElement('li')
  liDOM.innerHTML = users[index]
  userListDOM.appendChild(liDOM) // userListDom'a yazdırmamız gerekiyormuş
}