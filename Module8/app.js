const number = [1,2,3];
console.log(number);


const listItems = document.querySelector('li');
console.log(listItems);

const arrayListItems = Array.from(listItems);
console.log(arrayListItems);

const hobbies  = ['Cooking','Sports'];
const personalData = [30,'Max',{moreDetail:[]}];

const analyticsData = [[1,1.5],[-5.4,2.1],5];

for(const data of analyticsData){
    for(const dataPoint of data){
        console.log(dataPoint);
    }
}
