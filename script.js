var seats = [[false, true, false, true, true, true, false, true, false], 
             [false, true, false, false, true, false, true, true, true],
             [true, true, true, true, true, true, false, true, false],
             [true, true, true, false, true, false, false, true, false]]
var selSeat = -1

function initSeats() {
    // Inicializar a aparência de todas as poltronas
    for (var i = 0; i < seats.length; i++) {
      for(var j = 0; j < seats[i].length; j++){
        if (seats[i] [j]) {
            //Define a poltrona como disponível
            document.getElementById("seat" + (i * seats[i].length + j)).src = "assets/seat_avail.png"
            document.getElementById("seat" + (i * seats[i].length + j)).alt = "Available seat"
        }
        else {
            // Define a poltrona como indiponível
            document.getElementById("seat" + (i * seats[i].length + j)).src = "assets/seat_unavail.png"
            document.getElementById("seat" + (i * seats[i].length + j)).alt = "Unavailable seat"
        }
      }
    }
}


function findSeats() {
    // Se a poltrona já estiver marcada, reinicializar todas as poltronas para removê-las
    if (selSeat >= 0) {
        selSeat = -1
        initSeats()
    }

    // Pesquisa por todas as disponibilidades de poltronas
    var i = 0, finished = false

    while (i < seats.length && !finished) {
       for(var j = 0; j < seats[i].length; j++){
           // Verifica se a poltrona atual está disponível
        if (seats[i] [j] && seats[i] [j + 1] && seats[i] [j + 2]) {

            // Define a marcação da poltrona e atualiza sua aparência
            selSeat = i * seats[i].length + j
            document.getElementById("seat" + (i * seats[i].length + j)).src = "assets/seat_select.png"
            document.getElementById("seat" + (i * seats[i].length + j)).alt = "Your seat"
            document.getElementById("seat" + (i * seats[i].length + j + 1)).src = "assets/seat_select.png"
            document.getElementById("seat" + (i * seats[i].length + j + 1)).alt = "Your seat"
            document.getElementById("seat" + (i * seats[i].length + j + 2)).src = "assets/seat_select.png"
            document.getElementById("seat" + (i * seats[i].length + j + 2)).alt = "Your seat"

            // Avisa o usuário para aceitar a poltrona
            var accept = confirm("Seats " + (j + 1) + " through " + (j + 3) +
             " in the row " + (i + 1) + " are available. Accept?")

            if (accept) {
                //O usuário aceitou a poltrona, então damos por encerrado
                finished = true
                break
            }
            else {
                // O usuário rejeitou a poltrona, então desfaz a marcação e continua procurando
                selSeat = - 1
                document.getElementById("seat" + (i * seats[i].length + j)).src = "assets/seat_avail.png"
                document.getElementById("seat" + (i * seats[i].length + j)).alt = "Available seat"
                document.getElementById("seat" + (i * seats[i].length + j + 1)).src = "assets/seat_avail.png"
                document.getElementById("seat" + (i * seats[i].length + j + 1)).alt = "Available seat"
                document.getElementById("seat" + (i * seats[i].length + j + 2)).src = "assets/seat_avail.png"
                document.getElementById("seat" + (i * seats[i].length + j + 2)).alt = "Available seat"
            }
       }
        }

        // Aumenta o contador do loop
        i++
    }
}