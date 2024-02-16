document.addEventListener('keypress', onKeyPress)
const channel_container = document.querySelector('.channel-content')
const pStart = document.querySelector('.p-start')
const btnStart = document.querySelector('.btn-start')

const play = document.querySelector('.play')

const c1 = document.querySelector('.c1')
const c2 = document.querySelector('.c2')
const c3 = document.querySelector('.c3')
const c4 = document.querySelector('.c4')

const p1 = document.querySelector('.channel-play1')
const p2 = document.querySelector('.channel-play2')
const p3 = document.querySelector('.channel-play3')
const p4 = document.querySelector('.channel-play4')

channels = [[], [], [], []]

timeStart = Date.now()
timeEnd = timeStart + 10 * 1000

currentTime = timeStart

play.addEventListener('click', function() {
  playMelodyFromAllChannels()
})

p1.addEventListener('click', function() {
  playMelodyFromChannel(0)
})

p2.addEventListener('click', function() {
  playMelodyFromChannel(1)
})

p3.addEventListener('click', function() {
  playMelodyFromChannel(2)
})

p4.addEventListener('click', function() {
  playMelodyFromChannel(3)
})

const KeyToSound = {
  'a': document.querySelector('#s1'),
  's': document.querySelector('#s2'),
  'd': document.querySelector('#s3'),
  'f': document.querySelector('#s4'),
  'g': document.querySelector('#s5'),
  'h': document.querySelector('#s6'),
  'i': document.querySelector('#s7'),
  'j': document.querySelector('#s8'),
}

function onKeyPress(event) {
  const sound = KeyToSound[event.key]
  playSound(sound)

  if (Date.now() > timeEnd) return
  data = [event.key, Date.now() - timeStart]
  if (c1.checked == true) channels[0].push(data)
  if (c2.checked == true) channels[1].push(data)
  if (c3.checked == true) channels[2].push(data)
  if (c4.checked == true) channels[3].push(data)
  
}

async function wait(time) {
  await wait(time)
}

function playSound(sound) {
  sound.currentTime = 0
  sound.play()
}

function playMelodyFromAllChannels() {
  timeStart = Date.now()
  timeEnd = timeStart + 10 * 1000
  prev = 0

  oneDimensionChannel = []
  for (let i = 0; i < channels.length; i++)
    for (let j = 0; j < channels[i].length; j++)
      oneDimensionChannel.push(channels[i][j])

  oneDimensionChannel[1].sort()

  for (let i = 0; i < oneDimensionChannel.length; i++) {
    curTime = oneDimensionChannel[i][1]
    wait(curTime - prev)
    setTimeout(() => {
      playSound(KeyToSound[oneDimensionChannel[i][0]])
    }, curTime);
    prev = curTime
  }
}

function playMelodyFromChannel(index) {
  if (channels[index].length === 0) return
  timeStart = Date.now()
  timeEnd = timeStart + 10 * 1000
  prev = 0
  for (let i = 0; i < channels[index].length; i++) {
    curTime = channels[index][i][1]
    wait(curTime - prev)
    setTimeout(() => {
      playSound(KeyToSound[channels[index][i][0]])
    }, curTime);
    prev = curTime
  }

}

btnStart.addEventListener('click', function() {
  timeStart = Date.now()
  timeEnd = timeStart + 10 * 1000
  currentTime = timeStart
  console.log(c1.checked)
  console.log(channels)

  setInterval(showTime, 1000)

})

function showTime() {
  curTime = (timeEnd - Date.now()) / 1000
  if (curTime < 0) {
    pStart.innerHTML = `0/10`
    return
  }
  pStart.innerHTML = `${(timeEnd - Date.now()) / 1000}/10`
}
