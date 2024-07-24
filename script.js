function fora() {
    var tabuada = document.querySelector('#tabuada')
    tabuada.innerHTML = ''
}

function dentro() {
    var tabuada = document.querySelector('#tabuada')
    var n = document.querySelector('#num').value

    if (n != cont) {
        tabuada.innerHTML = ''
    }

    for (var i = 1; i <= 10; i++) {
            tabuada.innerHTML += `<p class="tabuada">${n} x ${i} = ${n * i}</p>`
    }

    var cont = n;
}