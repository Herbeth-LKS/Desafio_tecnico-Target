function verificarFibonacci() {
    const num = parseInt(document.getElementById("numInput").value);
    const resultado = document.getElementById("resultado");

    if (isNaN(num)) {
        resultado.textContent = "Por favor, insira um número válido.";
        return;
    }

    let a = 0;
    let b = 1;

    if (num === 0 || num === 1) {
        resultado.textContent = `${num} pertence à sequência de Fibonacci.`;
        resultado.style.color = "green";
        return;
    }

    let fib = 0;
    while (fib < num) {
        fib = a + b;
        a = b;
        b = fib;
    }

    if (fib === num) {
        resultado.textContent = `${num} pertence à sequência de Fibonacci.`;
        resultado.style.color = "green";
    } else {
        resultado.textContent = `${num} não pertence à sequência de Fibonacci.`;
        resultado.style.color = "red";
    }
}
