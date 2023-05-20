function validateLogin() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    if (username === 'vitoria_sanches' && password === '1234') {
      document.getElementById('login-mensagem').innerHTML = 'Login com sucesso!';
      document.getElementById('login-mensagem').style.display = 'block';
    } else {
      document.getElementById('login-mensagem').innerHTML = 'Esqueceu a senha? <a href="index.html">Clique aqui</a>.';
      document.getElementById('login-mensagem').style.display = 'block';
    }
  }
  