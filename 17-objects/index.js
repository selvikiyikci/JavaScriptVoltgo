/* let customers = ["emin", ["asus", "monster", "dell", [10, 20, 30]]];
/* console.log(`ürün: ${customer1[1][0]} fiyatı: $${customer1[1][3][0]}`);
*/

let customer1 = {
    "ad": "Emin",
    "soyad": "Başbayan",
    "yas": 25,
    "sehir": "İstanbul",
    "products": [
        "laptop", "car", "phone"]

};


let customer2 = {
    "ad": "Nur",
    "soyad": "Başbayan",
    "yas": 25,
     "sehir": "İstanbul",
     "products":
     {
        "phone": "Iphone6",
        "price": 10
     }
    
};

let customer3 = {
    "ad": "Bedirhan",
    "soyad": "Başbayan",
    "yas": 25,
    "sehir": "İstanbul"
};

let musteriler = [
    customer1,
    customer2,
    customer3

]

let urunler = [
    {
        "id": 1,
        "urunAdi": "huawei",
        "fiyati": 10
    },
    {
        "id": 2,
        "urunAdi": "apple",
        "fiyati": 20
    },
    {
        "id": 3,
        "urunAdi": "vestel",
        "fiyati": 30
    },

]

//console.log(typeof customer1);
console.log(urunler[2].fiyati);