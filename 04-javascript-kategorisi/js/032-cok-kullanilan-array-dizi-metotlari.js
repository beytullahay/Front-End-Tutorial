// Cok Kullanilan Array(Dizi) Metotlari ve Array icinde Array
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// https://www.w3schools.com/js/js_array_methods.asp

let items = [1, 2, 3, 4, 5] 

// Array icinde Array:
let femaleUsers = ["Ayse", "Hulya", "Merve"]
let maleUsers = ["Ahmet", "Hasan", "Mehmet"]

items.unshift(femaleUsers) // items başına femaleUsers dizisini ekledik

items.push(maleUsers)  // İtems sonuna maleUsers dizisini ekledik

console.log(items)     // items dizisini yazdırdık (femaleUsers,1,,2,3,4,5,maleUsers)

console.log(items.length)    // çıktı 7 olur. 2 dizi 5 sayı
console.log(items[0].length) // Array icindeki istedigimiz Array'in length bilgisini aldik
console.log(items[0][0])     // Ayse bilgisine ulastik 
 



// Array icerisinden oge ayirmak -> splice(pos, item?)
let newItems = items.splice(2, 4)   // items içinde 2. diziden başlasın 4 tane olsun dizi 
console.log("newItems: ", newItems) //(2,3,4,5)
console.log("items: ", items)       // kalanlarda burada olsun (femaleUsers,1,maleUsers)


// Array icerisindeki ogenin index bilgisini bulmak -> indexOf('value')
items.unshift("lorem")
items.push("ipsum") 
console.log( items.indexOf("ipsum") )

// Array Kopyalamak -> slice, [...ES6]
copyItems = items.slice() // kopyalama yapti
copyItems.pop() // son ogeyi cikarttik
console.log("copyItems", copyItems) // burada son öge eksik
console.log("items", items)         // burada ögeler tam

let es6Items = [...items] // es6 ve sonrasinda gelen kopyalama islemi
console.log(es6Items)

// Iki Array Bilgisini Birlestirmek -> [...ES6, ...ES6]
let allUsers = [...femaleUsers, ...maleUsers] // es6 birden fazla array yapisini birlestirmek
console.log(allUsers)

// Array icerisindeki bilgiyi String'e cevirmek -> toString, join
console.log(allUsers.toString())
console.log(allUsers.join(" --- ")) // her bir string arası --- oluyor


// Istedigimiz Index Bilgisine Oge Eklemek -> splice(index, 0, value)
allUsers.splice(allUsers.length -1, 0, "Melissa") // en sonununcuda 1 önce, Melissa yazdırdık. 
                                                  // 0 parçalama anlamına geliyor
allUsers.splice(Math.floor( allUsers.length / 2 ), 0, "Lorem") // tam ortasına lprem ekledik
                                                               // math.floor virgülden sonrasını yuvarlar.
console.log(allUsers)