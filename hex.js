const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];


const values = document.querySelector('.value');
const btn = document.querySelector('.btn');


    
btn.addEventListener('click', function () {
    let join = '#';
    for (let i = 0; i < 6; i++){
        join += hex[getRandom()];
        console.log(join);
    }

    document.body.style.backgroundColor = join
    values.textContent = join
})

function getRandom() {
    return Math.floor(Math.random() * hex.length)
}