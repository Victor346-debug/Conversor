
function converter() {
    let dolarInput = document.getElementById("dolar");
    let realInput = document.getElementById("real");

    // Convertendo os valores para números
    let dolar = parseFloat(dolarInput.value);
    let real = parseFloat(realInput.value);

    // Verificando se os valores são números válidos
    if (isNaN(dolar) || isNaN(real)) {
        alert("Insira valores numéricos válidos");
    } else {
        alert(dolar * real);
    }
}