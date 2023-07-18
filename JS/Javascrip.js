

window.onload = function () {
    var ultimaLetra = "";
    var ultimoNumero = "";
    let a = document.getElementById("mostrar-letras");
    let num = document.getElementById("mostrar-numeros");

    let btnA_1 = document.querySelector(".A");
    let btnB_2 = document.querySelector(".B");
    let btnC_3 = document.querySelector(".C");
    let btnD_4 = document.querySelector(".D");
    let btnE_5 = document.querySelector(".E");
    let btnF_6 = document.querySelector(".F");
    let btnG_7 = document.querySelector(".G");
    let btnH_8 = document.querySelector(".H");
    let btnI_9 = document.querySelector(".I");
    let btnJ_0 = document.querySelector(".J");

    let changeLetras = function (letraNumero) {
        if (ultimaLetra == "" && letraNumero == "A") {
            a.innerHTML = letraNumero;
            ultimaLetra = letraNumero;
            return;
        }
        if (ultimaLetra == "A" && letraNumero == "B") {
            a.innerHTML = a.innerHTML + letraNumero;
            ultimaLetra = letraNumero;
            return;
        }

        if (ultimaLetra == "B" && letraNumero == "C") {
            a.innerHTML = a.innerHTML + letraNumero;
            ultimaLetra = letraNumero;
            return;
        }
        if (ultimaLetra == "C" && letraNumero == "D") {
            a.innerHTML = a.innerHTML + letraNumero;
            ultimaLetra = letraNumero;
            return;
        }
        if (ultimaLetra == "D" && letraNumero == "E") {
            a.innerHTML = a.innerHTML + letraNumero;
            ultimaLetra = letraNumero;
            return;
        }
        if (ultimaLetra == "E" && letraNumero == "F") {
            a.innerHTML = a.innerHTML + letraNumero;
            ultimaLetra = letraNumero;
            return;
        }
        if (ultimaLetra == "F" && letraNumero == "G") {
            a.innerHTML = a.innerHTML + letraNumero;
            ultimaLetra = letraNumero;
            return;
        }
        if (ultimaLetra == "G" && letraNumero == "H") {
            a.innerHTML = a.innerHTML + letraNumero;
            ultimaLetra = letraNumero;
            return;
        }
        if (ultimaLetra == "H" && letraNumero == "I") {
            a.innerHTML = a.innerHTML + letraNumero;
            ultimaLetra = letraNumero;
            return;
        }
        if (ultimaLetra == "I" && letraNumero == "J") {
            a.innerHTML = a.innerHTML + letraNumero;
            ultimaLetra = letraNumero;
            return;
        }

        alert("Faltan letras o ya està la letra");
    }



    let changeNumeros = function (letraNumero) {
        if (ultimoNumero == "" && letraNumero == "1") {
            num.innerHTML = letraNumero;
            ultimoNumero = letraNumero;
            return;
        }
        if (ultimoNumero == "1" && letraNumero == "2") {
            num.innerHTML = num.innerHTML + letraNumero;
            ultimoNumero = letraNumero;
            return;

        }
        if (ultimoNumero == "2" && letraNumero == "3") {
            num.innerHTML = num.innerHTML + letraNumero;
            ultimoNumero = letraNumero;
            return;
        }
        if (ultimoNumero == "3" && letraNumero == "4") {
            num.innerHTML = num.innerHTML + letraNumero;
            ultimoNumero = letraNumero;
            return;
        }
        if (ultimoNumero == "4" && letraNumero == "5") {
            num.innerHTML = num.innerHTML + letraNumero;
            ultimoNumero = letraNumero;
            return;

        }
        if (ultimoNumero == "5" && letraNumero == "6") {
            num.innerHTML = num.innerHTML + letraNumero;
            ultimoNumero = letraNumero;
            return;
        }
        if (ultimoNumero == "6" && letraNumero == "7") {
            num.innerHTML = num.innerHTML + letraNumero;
            ultimoNumero = letraNumero;
            return;

        }
        if (ultimoNumero == "7" && letraNumero == "8") {
            num.innerHTML = num.innerHTML + letraNumero;
            ultimoNumero = letraNumero;
            return;
        }
        if (ultimoNumero == "8" && letraNumero == "9") {
            num.innerHTML = num.innerHTML + letraNumero;
            ultimoNumero = letraNumero;
            return;
        }
        if (ultimoNumero == "9" && letraNumero == "0") {
            num.innerHTML = num.innerHTML + letraNumero;
            ultimoNumero = letraNumero;
            return;
        }

        alert("Faltan nùmeros o ya està el nùmero");
    }

    btnA_1.onclick = function () {
        if (ultimaLetra == "J") {
            changeNumeros("1");
        } else {
            changeLetras("A");

        }

    }
    btnB_2.onclick = function () {
        if (ultimaLetra == "J") {
            changeNumeros("2");
        } else {
            changeLetras("B");

        }
    }
    btnC_3.onclick = function () {
        if (ultimaLetra == "J") {
            changeNumeros("3");
        } else {
            changeLetras("C");

        }
    }
    btnD_4.onclick = function () {
        if (ultimaLetra == "J") {
            changeNumeros("4");
        } else {
            changeLetras("D");

        }
    }
    btnE_5.onclick = function () {
        if (ultimaLetra == "J") {
            changeNumeros("5");
        } else {
            changeLetras("E");

        }
    }
    btnF_6.onclick = function () {
        if (ultimaLetra == "J") {
            changeNumeros("6");
        } else {
            changeLetras("F");

        }
    }
    btnG_7.onclick = function () {
        if (ultimaLetra == "J") {
            changeNumeros("7");
        } else {
            changeLetras("G");

        }
    }
    btnH_8.onclick = function () {
        if (ultimaLetra == "J") {
            changeNumeros("8");
        } else {
            changeLetras("H");

        }
    }
    btnI_9.onclick = function () {
        if (ultimaLetra == "J") {
            changeNumeros("9");
        } else {
            changeLetras("I");

        }
    }
    btnJ_0.onclick = function () {
        if (ultimaLetra == "J") {
            changeNumeros("0");
        } else {
            changeLetras("J");

        }
    }
}
