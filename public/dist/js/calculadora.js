function capturar(arg) {
    const numero = arg.dataset.valor;
    const caja_texto_resultado = document.getElementById("txt_caja_resultado");
    const valorActual = caja_texto_resultado.value;
    
    const caracteresPermitidos = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '.', '=', '/', 'X'];
    
    if (caracteresPermitidos.includes(numero)) {
        if (numero === '=') {
            operar(valorActual, caja_texto_resultado);
            window.ultimaOperacionRealizada = true;
            return;
        }
        
        if (numero === '0' && window.ultimaOperacionRealizada) {
            caja_texto_resultado.value = '0';
            window.ultimaOperacionRealizada = false;
            return;
        }
        const ultimoCaracter = valorActual[valorActual.length - 1];
        const operadores = ['+', '-', '/', 'X'];
        
        
        if (operadores.includes(numero) && operadores.includes(ultimoCaracter)) {
            return;
        }
        
        if (numero === '.') {
            const partes = valorActual.split(/[\+\-\/X]/);
            const ultimaParte = partes[partes.length - 1];
            if (ultimaParte.includes('.')) {
                return;
            }
        }
        window.ultimaOperacionRealizada = false;
        caja_texto_resultado.value += numero;
    }
}

function operar(expresion, caja_texto_resultado) {
    try {
        const expresionCambiada = expresion.replace(/X/g, '*');
        const resultado = eval(expresionCambiada);
        caja_texto_resultado.value = resultado;
    } catch (error) {
        caja_texto_resultado.value = 'Error';
    }
}