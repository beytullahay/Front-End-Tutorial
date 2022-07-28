// Local Storage Islemleri:
// Eger tutacagimiz bilgi object ise JSON.stringify ile objeyi string yapiya cevirebiliriz.

let user = {userName: "hakanyalcinkaya", isActive: true}
console.log(user)
localStorage.setItem('userInfo', JSON.stringify(user) )  // neden yaptık? dizi veya obje
													     // kaydedemiyorduk Local o yüzden Json'a çevirdik
													     // şimdi String oldu hepsi


let userInfo = localStorage.getItem('userInfo') // bilgiyi al
userInfo = JSON.parse(userInfo)                 // JSON'du bilgi ve onu çevir 
console.log(userInfo)


// 2. egzersiz:
let items = [1,2,3, user]
// localStorage.setItem('newItems', items) // hatali :(
localStorage.setItem('newItems', JSON.stringify(items))

let newItems = JSON.parse( localStorage.getItem('newItem') ) //JSON Parse ile localStorage icindeki bilginin cekilip kullanilmasi..
