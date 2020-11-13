const storeBtn = document.getElementById('store-btn');
const retrBtn = document.getElementById('retrieve-btn');

const dbRequest = indexedDB.open('StorageDummy', 1);
let db;

dbRequest.onsuccess = function (event) {
    db = event.target.result;
}
dbRequest.onupgradeneeded = function (event) {
     db = event.target.result;

    const objStore = db.createObjectStore('products', {keyPath: 'id'});

    objStore.transaction.oncomplete = function (event) {
        const productsStore = db.transaction('products', 'readwrite').objectStore('products');
        productsStore.add({id: 'p1', title: 'First Prod', price: 99.99});
    }
};

dbRequest.onerror = function (event) {
    console.log('ERROR!');
};
storeBtn.addEventListener('click', () => {
    const userId = 'u123';
    const user = {name: 'Filip', age: '23'};
    if(!db){
        return;
    }
    const productsStore = db.transaction('products','readwrite')
        .objectStore('products');
    productsStore.add({id:'p2'})
});

retrBtn.addEventListener('click', () => {
    const productsStore = db
        .transaction('products','readwrite')
        .objectStore('products');

    const request = productsStore.get('p2');

    request.onsuccess = function(){
        console.log(request.result);
    }
});