const socket = io();
const form = document.getElementById('form');
const input = document.getElementById('input');
const messages = document.getElementById('messages');

function login() {
  const username = document.getElementById('username').value.trim();
  if (!username) return alert("Masukkan nama dulu!");

  socket.emit('set username', username);
  document.getElementById('login').style.display = 'none';
  document.getElementById('chat').style.display = 'block';
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (input.value) {
    socket.emit('chat message', input.value);
    input.value = '';
  }
});