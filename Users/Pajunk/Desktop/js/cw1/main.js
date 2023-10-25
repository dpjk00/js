submit_values = document.querySelector('.submit_values')
result_container = document.querySelector('.result_container')
sum2 = document.querySelector('.sum')
srednia = document.querySelector('.srednia')
min123 = document.querySelector('.min')
max123 = document.querySelector('.max')

if (submit_values) {
    submit_values.addEventListener('click', () => {
        let num1 = Number(document.querySelector("#num1").value)
        let num2 = Number(document.querySelector("#num2").value)
        let num3 = Number(document.querySelector("#num3").value)
        let num4 = Number(document.querySelector("#num4").value)

        sum2.innerHTML = num1 + num2 + num3 + num4
        min123.innerHTML = "Min: " + Math.min(num1, num2, num3, num4)
        max123.innerHTML = "Max: " + Math.max(num1, num2, num3, num4)
        srednia.innerHTML = "Srednia: " + ((num1 + num2 + num3 + num4) / 4)
    })
}