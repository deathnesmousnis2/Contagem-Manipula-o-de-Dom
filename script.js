const contador_dias = document.querySelector('#days')
const contador_horas = document.querySelector('#hours')
const contador_minutos = document.querySelector('#minutes')
const contador_segundos = document.querySelector('#seconds')

const newYear = '01 Jan 2025'

function countdown() {
    const hora_atual = new Date()
    const ano_novo_date = new Date(newYear)
    const base = Math.floor((ano_novo_date - hora_atual) / 1000)

    const day = Math.floor(base / 3600 / 24)
    const hours = Math.floor((base / 3600) % 24)
    const minutes = Math.floor((base / 60) % 60)
    const seconds = Math.floor(base % 60)
    console.log(day, hours, minutes, seconds);
    
    contador_dias.innerHTML = formatTime(day)
    contador_horas.innerHTML = formatTime(hours)
    contador_minutos.innerHTML = formatTime(minutes)
    contador_segundos.innerHTML = formatTime(seconds)
}

function formatTime(time) {
    return time <10?`0${time}`:time
}

setInterval(countdown, 1000)

countdown()