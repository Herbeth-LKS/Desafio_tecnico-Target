function verificarLetraA() {
    const texto = document.getElementById("textInput").value;
    const resultado = document.getElementById("resultado");

    if (texto.length === 0) {
        resultado.textContent = "Por favor, insira uma string válida.";
        return;
    }

    const ocorrencias = texto.match(/a/gi);  

    if (ocorrencias) {
        resultado.textContent = `A letra 'a' aparece ${ocorrencias.length} vez(es) na string.`;
        resultado.style.color = "green";
    } else {
        resultado.textContent = `A letra 'a' não foi encontrada na string.`;
        resultado.style.color = "red";
    }
}
