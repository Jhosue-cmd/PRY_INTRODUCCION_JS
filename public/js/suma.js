function calcular_suma() {
    // acceder a los valores de los inputs
    let n1 = document.getElementById("numero_uno").value;
    let n2 = document.getElementById("numero_dos").value;
    // convertirlos a numeros flotantes y realizar la suma
    let resultado = parseFloat(n1) + parseFloat(n2);

    // mostrar el resultado en el elemento con id "txt_resultado"

    let h1_resultado = document.getElementById("txt_resultado");
    h1_resultado.innerText = "La suma es: " + resultado;
}
