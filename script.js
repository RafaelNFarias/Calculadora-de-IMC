function calcularIMC() {
   let peso = document.getElementById('peso').value;
   let altura = document.getElementById('altura').value;

    if (peso === '' || altura === '') {
        alert("Por favor, preencha ambos os campos!");
        return;
    }
    peso = parseFloat(peso);
    altura = parseFloat(altura);

   let imc = peso / (altura * altura);

    document.getElementById('resultado').innerText = "Seu IMC é: " + imc.toFixed(2);
}