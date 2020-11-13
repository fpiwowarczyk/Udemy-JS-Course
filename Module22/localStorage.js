const storeBtn = document.getElementById('store-btn');
const retrBtn = document.getElementById('retrieve-btn');

const userId = 'u123';
const user = {
    name: 'Filip',
    age: 23,
    hobbies: ['Bike','Ants']
}

storeBtn.addEventListener('click', () =>{
    let i=0;
    while(i<99999{
        localStorage.setItem(`i${i}`,`u${i}`);
        i++;
    }
});

retrBtn.addEventListener('click', () =>{
    const extractedId = localStorage.getItem('uid');
    const extractedUser = localStorage.getItem('user');
    if(extractedId|| extractedUser) {
        console.log('Got the id - '+extractedId);
        console.log(user);
    } else {
        console.log('Could dont get id or user');

    }
});