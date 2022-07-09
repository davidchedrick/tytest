// const secondLi = document.getElementById('second-li');
const firstLi = document.querySelectorAll("p");
console.log('firstLi: ', firstLi);

firstLi.forEach(item => item.style.color = "red")
// firstLi.style.color = "red";
// secondLi.style.color = "blue";
