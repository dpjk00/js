document.addEventListener('keypress', onKeyPress)
const channel_container = document.querySelector('.channel-content')

channel_id = 1
channels = []

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
}

function playSound(sound) {
    sound.currentTime = 0
    sound.play()
}

function add_channel() {
    const p = document.createTextNode(`Channel ${channel_id++}`)

    const delete_button = document.createElement('button')
    delete_button.classList.add('delete-button')

    const channel = document.createElement('div')
    channel.appendChild(p)
    channel.appendChild(delete_button)
    channel.classList.add('channel')
    channel_container.appendChild(channel);
    channels.add(channel)
}

function delete_channel() {
    
}

function update_channels() {

}