// array filter kullanimi
// https://developer.mozilla.org/tr/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

// 5 harften fazla olanlar (6) ??
const PRODUCTS = ["Mic", "Cable", "Speaker", "Desktop PC", "Server", "Mouse", "Keyboard"]

const NEW_PRODUCTS = PRODUCTS.filter(item => item.length > 5) // 5 harften fazla olanları yazdıracagız
console.log(NEW_PRODUCTS) // ekrana yazdır yan yana hepsini yazdırdı tek seferde


// aktif kullaniciları bulan yeni bir örnek
const USERS = [
  {fullName: "Ayse Sumer", isActive: false},
  {fullName: "Ahmet Urgan", isActive: true},
  {fullName: "Asya Basar", isActive: true},
  {fullName: "Aksel Durmaz", isActive: false},
]


// burada filtreleme ve yazdırma işlemi
// const ACTIVE_USERS = USERS.filter(user => user.isActive === true) // 1.yöntem
const ACTIVE_USERS = USERS.filter(user => user.isActive )
console.log(ACTIVE_USERS)