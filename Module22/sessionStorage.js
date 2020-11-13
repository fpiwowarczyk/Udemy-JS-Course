const storeBtn = document.getElementById('store-btn');
const retrBtn = document.getElementById('retrieve-btn');

const userId = 'u123';
const user = {
    name: 'Filip',
    age: 23,
    hobbies: ['Bike','Ants']
}

storeBtn.addEventListener('click', () =>{
    sessionStorage.setItem('uid',userId);
    sessionStorage.setItem('user',JSON.stringify(user));
});

retrBtn.addEventListener('click', () =>{
    const extractedId = sessionStorage.getItem('uid');
    const extractedUser = sessionStorage.getItem('user');
    if(extractedId|| extractedUser) {
        console.log('Got the id - '+extractedId);
        console.log(user);
    } else {
        console.log('Could dont get id or user');

    }
});