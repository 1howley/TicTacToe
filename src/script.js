var verifica = true 

window.onload = function trocaCor() {

  const buttons = document.querySelectorAll(".jogo input[type=button]");

  buttons.forEach(button => {
  button.addEventListener("click", function(e) {

  if ( document.getElementById(e.srcElement.id).title === "" ) {
    if ( verifica === true ){
      document.body.style.setProperty('--colorgame', 'red')
      button.style.backgroundColor = "rgb(0, 128, 0)";
      document.getElementById(e.srcElement.id).title = "green"
      verifica = !verifica
      verificar()
    } else if ( verifica === false ){  
      document.body.style.setProperty('--colorgame', 'green')
      button.style.backgroundColor = "rgb(255, 0, 0)";
      document.getElementById(e.srcElement.id).title = "red"
      verifica = !verifica
      verificar()
    } else {
      
    }
  }

  });
  });
}
function verificar() {
  var linha = false
  var coluna = false
  var diagonal = false
  let btn1 = document.getElementById("btn1")
  let btn2 = document.getElementById("btn2")
  let btn3 = document.getElementById("btn3")
  let btn4 = document.getElementById("btn4")
  let btn5 = document.getElementById("btn5")
  let btn6 = document.getElementById("btn6")
  let btn7 = document.getElementById("btn7")
  let btn8 = document.getElementById("btn8")
  let btn9 = document.getElementById("btn9")

  if ( linha === false ) {
    if ( btn1.title != "" && btn1.title === btn2.title && btn1.title === btn3.title ) {
      alert(btn1.title + ' ganhou')
      linha = true
    } else if ( btn4.title != "" && btn4.title === btn5.title && btn4.title === btn6.title) {
      alert(btn4.title + ' ganhou')
      linha = true
    } else if ( btn7.title != "" && btn7.title === btn8.title && btn7.title === btn9.title) {
      alert(btn7.title + ' ganhou')
      linha = true
    } 
  }
  if ( coluna === false ) {
    if ( btn1.title != "" && btn1.title === btn4.title && btn1.title === btn7.title ) {
      alert(btn1.title + ' ganhou')
      coluna = true
    } else if ( btn2.title != "" && btn2.title === btn5.title && btn2.title === btn8.title) {
      alert(btn2.title + ' ganhou')
      coluna = true
    } else if ( btn3.title != "" && btn3.title === btn6.title && btn3.title === btn9.title) {
      alert(btn3.title + ' ganhou')
      coluna = true
    } 
  }
  if ( diagonal === false ) {
    if ( btn1.title != "" && btn1.title === btn5.title && btn1.title === btn9.title ) {
      alert(btn1.title + ' ganhou')
      diagonal = true
    } else if ( btn3.title != "" && btn3.title === btn5.title && btn3.title === btn7.title) {
      alert(btn3.title + ' ganhou')
      diagonal = true
    }
  }
}
