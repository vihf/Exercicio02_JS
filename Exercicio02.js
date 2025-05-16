let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
   function salvarUsuarios() {
     localStorage.setItem('usuarios', JSON.stringify(usuarios));
   }
   function renderizarTabela() {
     const tbody = document.querySelector('#tabelaUsuarios tbody');
     tbody.innerHTML = '';
     usuarios.forEach((usuario, index) => {
       const tr = document.createElement('tr');
       tr.innerHTML = `
<td>${usuario.nome}</td>
<td>${usuario.email}</td>
       `;
       tbody.appendChild(tr);
     });
   }
   function cadastrarUsuario() {
     const nome = document.getElementById('nome').value;
     const email = document.getElementById('email').value;
     const senha = document.getElementById('senha').value;
     if (nome && email && senha) {
       usuarios.push({ nome, email, senha });
       salvarUsuarios();
       renderizarTabela();
       document.getElementById('nome').value = '';
       document.getElementById('email').value = '';
       document.getElementById('senha').value = '';
     } else {
       alert('Preencha todos os campos!');
     }
   }
   function excluirUsuario(index) {
     if (confirm('Tem certeza que deseja excluir este usuário?')) {
       usuarios.splice(index, 1);
       salvarUsuarios();
       renderizarTabela();
     }
   }
   // Carrega usuários ao iniciar
   renderizarTabela();