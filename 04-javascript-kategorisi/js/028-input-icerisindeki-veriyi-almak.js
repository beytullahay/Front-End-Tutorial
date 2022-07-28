// INPUT icindeki degeri(value) almak

let formDOM = document.querySelector("#userForm")
formDOM.addEventListener('submit', formSubmit)


function formSubmit(event) {
    event.preventDefault() // default islemi engelledik... yani her submite bastıgımda sayfa yenilenmesin
                           // sadace işlemleri yapsın
    console.log("islem gerceklesti")
    
    let scoreInputDOM = document.querySelector('#score')
    console.log(scoreInputDOM.value)
    localStorage.setItem('score', scoreInputDOM.value)  // inputtan veriyi alıp storageye kaydediyor.
}