const storeBtn = document.getElementById('store-btn');
const retrBtn = document.getElementById('retrieve-btn');


storeBtn.addEventListener('click', () =>{
    const userId = 'u123';
    const user = {name:'Filip',age:'23'};
    document.cookie=`uid=${userId}; max-age=2`;// live for 2 secs
    document.cookie=`user=${JSON.stringify(user)}; expites = date`;// live till date
});

retrBtn.addEventListener('click', () =>{
    const cookieData = document.cookie.split(';');
    const data =cookieData.map(i => {
       return i.trim();
    });
    console.log(data[1].split('=')[1]); // user value
});