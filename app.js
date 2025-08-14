const regExp = /^\d+$/;

const containsOnlyDigits = (str) => {
    return regExp.test(str);
}

console.log(containsOnlyDigits("12345")); // true
console.log(containsOnlyDigits("12a45")); // false
 // task 2

setInterval(() => {
    console.log("Прошла секунда");
},1000)

// task 3
const count = () => {
    let i = 1;
    const interval = setInterval(() => {
        console.log(i++)
        if (i === 11) {
            clearInterval(interval);
        }
    },1000);

    return interval;
}
count()
// task 4

const block = document.querySelector('.block');

block.addEventListener('click', (e) => {
    block.classList.toggle("bg")
})
// task 5

const request = new XMLHttpRequest()
request.open('GET', "data.json");
request.setRequestHeader("Content-type", "application/json");
request.send()
request.onload = () => {
    console.log(request.response)
}


