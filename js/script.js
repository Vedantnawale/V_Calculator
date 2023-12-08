let string = "";
let buttons = document.querySelectorAll('button')
Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (a) => {

    if (a.target.innerHTML == "ENTER") {
      string = eval(string)
      document.querySelector('input').value = string;
    }
    else if (a.target.innerHTML == "clear") {
      string = ""
      document.querySelector('input').value = string;
    }
    else if (a.target.innerHTML == "✓") {
      let b = parseInt(string)
      string = Math.sqrt(b)
      document.querySelector('input').value = string;
    }
    else if (a.target.innerHTML == "sqr") {
      string = string*string
      document.querySelector('input').value = string;
    }
    else if (a.target.innerHTML == "%") {
      string = string/100
      document.querySelector('input').value = string;
    }
    else if (a.target.innerHTML == "del") {
      string = string.slice(0,-1)
      document.querySelector('input').value = string;
    }
    else {
      console.log(a.target)
      string = string + a.target.innerHTML;
      document.querySelector('input').value = string;
    }
  })
})