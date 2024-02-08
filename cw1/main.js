num1 = document.querySelector('.num1')
num2 = document.querySelector('.num2')
num3 = document.querySelector('.num3')
num4 = document.querySelector('.num4')

submit_values = document.querySelector('.submit_values')
result_container = document.querySelector('.result_container')
sum2 = document.querySelector('.sum')
srednia = document.querySelector('.srednia')
min123 = document.querySelector('.min')
max123 = document.querySelector('.max')

num1.addEventListener('keyup', function() {
  let num1 = Number(document.querySelector("#num1").value)
  let num2 = Number(document.querySelector("#num2").value)
  let num3 = Number(document.querySelector("#num3").value)
  let num4 = Number(document.querySelector("#num4").value)

  sum2.innerHTML = `Suma: ${num1 + num2 + num3 + num4}`
  min123.innerHTML = "Min: " + Math.min(num1, num2, num3, num4)
  max123.innerHTML = "Max: " + Math.max(num1, num2, num3, num4)
  srednia.innerHTML = "Srednia: " + ((num1 + num2 + num3 + num4) / 4)
})

num2.addEventListener('keyup', function() {
  let num1 = Number(document.querySelector("#num1").value)
  let num2 = Number(document.querySelector("#num2").value)
  let num3 = Number(document.querySelector("#num3").value)
  let num4 = Number(document.querySelector("#num4").value)

  sum2.innerHTML = `Suma: ${num1 + num2 + num3 + num4}`
  min123.innerHTML = "Min: " + Math.min(num1, num2, num3, num4)
  max123.innerHTML = "Max: " + Math.max(num1, num2, num3, num4)
  srednia.innerHTML = "Srednia: " + ((num1 + num2 + num3 + num4) / 4)
})

num3.addEventListener('keyup', function() {
  let num1 = Number(document.querySelector("#num1").value)
  let num2 = Number(document.querySelector("#num2").value)
  let num3 = Number(document.querySelector("#num3").value)
  let num4 = Number(document.querySelector("#num4").value)

  sum2.innerHTML = `Suma: ${num1 + num2 + num3 + num4}`
  min123.innerHTML = "Min: " + Math.min(num1, num2, num3, num4)
  max123.innerHTML = "Max: " + Math.max(num1, num2, num3, num4)
  srednia.innerHTML = "Srednia: " + ((num1 + num2 + num3 + num4) / 4)
})

num4.addEventListener('keyup', function() {
  let num1 = Number(document.querySelector("#num1").value)
  let num2 = Number(document.querySelector("#num2").value)
  let num3 = Number(document.querySelector("#num3").value)
  let num4 = Number(document.querySelector("#num4").value)

  sum2.innerHTML = `Suma: ${num1 + num2 + num3 + num4}`
  min123.innerHTML = "Min: " + Math.min(num1, num2, num3, num4)
  max123.innerHTML = "Max: " + Math.max(num1, num2, num3, num4)
  srednia.innerHTML = "Srednia: " + ((num1 + num2 + num3 + num4) / 4)
})

if (submit_values) {
  submit_values.addEventListener('click', () => {
    let num1 = Number(document.querySelector("#num1").value)
    let num2 = Number(document.querySelector("#num2").value)
    let num3 = Number(document.querySelector("#num3").value)
    let num4 = Number(document.querySelector("#num4").value)

    sum2.innerHTML = `Suma: ${num1 + num2 + num3 + num4}`
    min123.innerHTML = "Min: " + Math.min(num1, num2, num3, num4)
    max123.innerHTML = "Max: " + Math.max(num1, num2, num3, num4)
    srednia.innerHTML = "Srednia: " + ((num1 + num2 + num3 + num4) / 4)
  })
}