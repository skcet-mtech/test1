const form = document.getElementById('loginForm');
const responseText = document.getElementById('response');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // Retrieve form values
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Simple validation (frontend-only example)
  if (username === 'admin' && password === '12345') {
	responseText.style.color = 'green';
	responseText.textContent = 'Login successful!';
  } else {
	responseText.style.color = 'red';
	responseText.textContent = 'Invalid username or password.';
  }
});
