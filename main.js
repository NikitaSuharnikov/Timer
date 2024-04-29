//Получение значений времени
const hourElement = document.querySelector('.hour')
const minuteElement = document.querySelector('.minute')
const secondElement = document.querySelector('.second')
const milisecondElement = document.querySelector('.milisecond')

//Получение значений кнопок
const startButton = document.querySelector('.start')
const stopButton = document.querySelector('.stop')
const clearButton = document.querySelector('.clear')

//Кнопки
startButton.addEventListener('click', () => {
  clearInterval(interval)
  interval = setInterval(startTimer,10)
})

stopButton.addEventListener('click', () => {
  clearInterval(interval) 
})

clearButton.addEventListener('click', () => {
  clearInterval(interval)
  hour = 0
  minute = 0
  second = 0
  milisecond = 0
  hourElement.textContent = '00'
  minuteElement.textContent = '00'
  secondElement.textContent = '00'
  milisecondElement.textContent = '00'

})

//Переменные
let hour = 0,
  minute = 0,
  second = 0,
  milisecond = 0,
  interval

function startTimer() {
  //Милисекунды
  milisecond++
  if(milisecond <9) {
    milisecondElement.innerText = '0' + milisecond
  }

  if(milisecond >9) {
    milisecondElement.innerText = milisecond
  }

  if(milisecond >99){
    second++
    secondElement.innerText = '0' + second
    milisecond = 0
    milisecondElement.innerText = '0' + milisecond
  }
  //Секунды
  if(second < 9) {
    secondElement.innerText = '0' + second
  }

  if(second > 9) {
    secondElement.innerText = second
  }

  if(second > 59) {
    minute++
    minuteElement.innerText = '0' + minute
    second = 0
    secondElement.innerText = '0' + second
  }
  //Минуты
  if(minute < 9) {
    minuteElement.innerText = '0' + minute
  }

  if(minute > 9) {
    minuteElement.innerText =  minute
  }

  if(minute > 59) {
    hour++
    hourElement.innerText = '0' + hour
    minute = 0
    minuteElement.innerText = '0' + minute
  }

  //Часы
  if(hour < 9) {
    hourElement.innerText = '0' + hour
  }

  if(hour > 9) {
    minuteElement.innerText = minute
  }

}

