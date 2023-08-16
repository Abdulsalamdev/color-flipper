const colors = ["green", "red", "blue","black", "pink", "white","rgba(133,122,200)", "#f15025"];


const values = document.querySelector('.value');
const btns = document.querySelector('.btn');

btns.addEventListener('click', function () { 
    const randomNumber = getRandom()
    document.body.style.backgroundColor = colors[randomNumber]
    values.textContent = colors[randomNumber]
})

function getRandom() {
    return Math.floor(Math.random() * colors.length)
}