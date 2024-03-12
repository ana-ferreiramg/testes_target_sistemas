let array = [0, 1];
function fibonacci(n) {
    if (n <= 1) { return n };

    for (let i = 2; i <= n; i++) {
        array[i] = array[i - 2] + array[i - 1];
    }

    return array;
}

function isFibonacci(num) {
    return array.includes(num) ? true : false;
}

let result = document.getElementById('resultTest2');
let input = document.querySelector('#inputTest2');
let button = document.getElementById('testResult');

button.addEventListener('click', (e) => {
    e.preventDefault();

    let start = Number(input.value);
    fibonacci(start);
    isFibonacci(start) ? result.innerHTML = `O valor pertence a sequência de Fibonacci. A sequência é: ${array.join(', ')}` : result.innerHTML = `O valor não pertence a sequência de Fibonacci. A sequência é: ${array.join(', ')}`;
    input.value = '';
    array = [0, 1];
});
