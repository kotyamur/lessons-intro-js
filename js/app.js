const card = document.querySelector(".card");
const title = document.getElementById("title");
const listLinks = document.querySelectorAll(".card-list a");
const testBtn = document.querySelector("#testbtn");

// function hello() {
//     let name = 'Kate';
//     let message = 'Hello ' + name;
//     console.log(message);
// }
// hello();

// function simpleMath(a, b) {
//     let result = a + b;
//     console.log(result);
// }
// simpleMath(3, 5);

// function simpleMath(a, b) {
//     let result = a + b;
//     return result;
// }
// let sum = simpleMath(3, 5);
// console.log(sum);

window.addEventListener("scroll", function() {
    checkScroll();
});

// document.addEventListener("DOMContentLoaded", function() {
//     checkScroll();
// });
// короткая запись
document.addEventListener("DOMContentLoaded", checkScroll);

function checkScroll() {
    let scrollPos = window.scrollY;
    if(scrollPos > 0) {
        card.classList.add('card--pink');
    } else {
        card.classList.remove('card--pink');
    }
};

testBtn.addEventListener("click", function() {
    console.log("clicked");
});

// listLinks.forEach(linkItem => {
//     linkItem.addEventListener("click", function() {
//         console.log(linkItem.text);
//     });
// });

for(let linkItem of listLinks) {
    linkItem.addEventListener("click", function() {
        console.log(linkItem.text);
    });
}

const tabsBtn = document.querySelectorAll(".tabs-btn");
const tabItems = document.querySelectorAll(".tabs-item");

tabsBtn.forEach(onTabClick);

function onTabClick(item) {
    item.addEventListener("click", function() {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);

        if (! currentBtn.classList.contains('btn-active')) {
            tabsBtn.forEach(function(item) {
                item.classList.remove('btn-active');
            });
            tabItems.forEach(function(item) {
                item.classList.remove('active');
            });
    
            currentBtn.classList.add('btn-active');
            currentTab.classList.add('active');
        }
    });
}

document.querySelector(".tabs-btn").click();

// let num = 1;
// while (num  < 6) {
//     console.log(num);
// 	num++;
// }
// for (let num = 1; num < 6; num++) {
//     console.log(num);
// }
// for (let num = 0; num < 3; num++) {
// 	console.log(`Число: ${num}`);
// }
// let num = 0;
// while (num  < 3) {
//         console.log(`Число: ${num}`);
//     	num++;
// }
//Цикл №1
// firstFor: for (let num = 0; num < 2; num++) {
// 	//Цикл №2
// 	for (let size = 0; size < 3; size++) {
//         if (size == 1) break firstFor;
// 		console.log(size);
// 	}
// }




