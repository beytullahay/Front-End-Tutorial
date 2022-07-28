// Break & Continue
// https://www.w3schools.com/js/js_break.asp

const LOREM_LIST = [
  'lorem', 'ipsum', 'dolor', 'amet', 'consectetur,', 'adipisicing', 'elit' 
]

let counter = 0

// for (; counter < 10; counter++) {
//   console.log(counter)
//   if (counter === 5) {break}   // 5 e kadar gel ve dur
// }

// for (; counter < 10; counter++) {
//   if (counter === 5) {continue}  // 5i görünce atladı.  01234678 diye gitti
//   console.log(counter)
// }

const UL_DOM = document.querySelector('#userList')

let index = 0

// for (; index < LOREM_LIST.length; index++) {
//   if (LOREM_LIST[index] == "dolor") {break}  // dolar ise bitir.
//   let LI_DOM = document.createElement('li')  // değil ise 
//   LI_DOM.innerHTML = LOREM_LIST[index]
//   UL_DOM.append(LI_DOM)
// }

for (; index < LOREM_LIST.length; index++) {
  if (LOREM_LIST[index] == "dolor") {continue} // bunu atla
  let LI_DOM = document.createElement('li')
  LI_DOM.innerHTML = LOREM_LIST[index]
  UL_DOM.append(LI_DOM)
}