// FUNÇÃO BOTÃO DE ACESSO PAGINA JOIN
function joinButton(event) {
    console.log("Clicou no botão para acessar página Join.");

    location.href = "./join.html";
}

// FUNÇÃO DE ACESSO PAGINA LOGIN
function clickLogar() {
    console.log("Clicou no botão para acessar página de Login.");

    location.href = "./join.html";
}


// axios.defaults.baseURL = "https://backend-lista-recados.herokuapp.com/";
axios.defaults.baseURL = "http://localhost:8080/";

// FUNÇÃO DE ADICIONAR RECADO
async function saveNewUser(event) {
    event.preventDefault();

    const username = document.getElementById("usernameInput").value;
    const password = document.getElementById("passwordInput").value;

    const { data } = await axios.post('/user', {
        username: username,
        password: password
    });

    const message = `Usuário adicionado com sucesso! Bem vinda(o), ${username}! ☻`;

    alert(message)
    console.log(message);
}

// FUNÇÃO PARA LOGAR USUÁRIO
async function loginUser(event) {
    event.preventDefault();

    const username = document.getElementById("userLogin").value;
    const password = document.getElementById("passwordLogin").value;

    let loged = false;

    const users = await axios.get('/user');

    if (user.username == username.value && user.password == password.value) {
        loged = true;
        checkedLoged(true);
    } else {
        checkedLoged(false);
    }
    
    if (!loged) {
        alert('Dados inválidos!');
    }

    console.log('Usuário logado com sucesso!');
}

function checkLoged(loged) {
    if (loged) {
        console.log(`User loged: ${loged}. `);
        
        const loginPageExposed = document.getElementById("loginPage");
        const joinPageExposed = document.getElementById("joinPage");
        const anottationPageExposed = document.getElementById("anottationPage");

        loginPageExposed.style.display = "none";
        joinPageExposed.style.display = "none";
        anottationPageExposed.style.display = "flex";
    } else {
        loginPageExposed.style.display = "flex";
        joinPageExposed.style.display = "none";
        anottationPageExposed.style.display = "none";
    }
}

checkLoged(false);


// const link = "https://backend-lista-recados.herokuapp.com/user";

// // FUNÇÃO DE ADICIONAR USUARIO
// axios
//     .get("https://backend-lista-recados.herokuapp.com/user")








// function adicionarUsuario(event) {
//     event.preventDefault();

//     const username = document.getElementById('usernameInput');
//     const password = document.getElementById('passwordInput');
//     const repeatPassword = document.getElementById('repeatPasswordInput');

//     if (password.value !== repeatPassword.value) {
//         alert('Senhas são diferentes!');
//         return false;
//     }

//     let usuarioInvalido = false;
//     let listaUsuarios = [];
//     let usuario = {
//         username: username.value,
//         password: md5(password.value),
//     };

//     if (localStorage.listaUsuarios) {
//         listaUsuarios = JSON.parse(localStorage.listaUsuarios);
//     }

//     for (let item of listaUsuarios) {
//         if (item.username === usuario.username) {
//             usuarioInvalido = true;
//         }
//     }

//     if (usuarioInvalido) {
//         alert('Usuário já existe!');
//         return false;
//     }

//     listaUsuarios.push(usuario);
//     localStorage.setItem('listaUsuarios', JSON.stringify(listaUsuarios));

//     alert('Seu usuário foi salvo com sucesso!');
//     return true;
// }

function logarUsuario(event) {
    event.preventDefault();

    const username = document.getElementById('userLogin');
    const password = document.getElementById('passwordLogin');

    let usuarioInvalido = true;
    let usuario = {
        username: username.value,
        password: md5(password.value),
    };

    if (!localStorage.listaUsuarios) {
        alert('Usuário não cadastrado!');
        window.location.href = "./index.html";
    }

    const listaUsuarios = JSON.parse(localStorage.getItem('listaUsuarios'));

    for (let item of listaUsuarios) {
        if (item.username === usuario.username && item.password === usuario.password) {
            usuarioInvalido = false;
        }
    }

    if (usuarioInvalido) {
        alert('Usuário ou senha inválidos!');
        return false;
    }

    window.location.href = "./recados.html";
}

function atualizaTabela() {
	let tabela = document.getElementById('tabela');

	$("#tabela tr").remove(); 

	listaRecados = JSON.parse(localStorage.listaRecados);

	for (var item in listaRecados) {
		$('#tabela').append('<tr><td scope="row">' + listaRecados[item].id + '</td><td>' + listaRecados[item].descricao + '</td><td>' + listaRecados[item].detalhamento + '</td><td><div class="btn-group" role="group" aria-label="Basic example"><button id="apagarRecado" onclick="apagarRecado(' + item + ')" type="button" class="btn btn-danger">Limpar</button><button id="editarBtn" onclick="editarRecado(' + item + ')" type="button" class="btn btn-success">Editar</button></div></td></tr>');
    }

}

// function adicionarRecado(event) {
//     event.preventDefault();

//     let descricao = document.getElementById('descricaoRecado');
//     let detalhamento = document.getElementById('detalhesRecado');

// 	let listaRecados = [];
// 	var sequencia = 0;



//     console.log(descricao.value);
//     console.log(detalhamento.value);



// 	if (localStorage.listaRecados) {
//         listaRecados = JSON.parse(localStorage.listaRecados);
//     }



// 	for (var item in listaRecados) {
// 		sequencia = listaRecados[item].id;
// 	}
// 	sequencia++;


// 	let recado = ({
// 		id: sequencia,
// 		descricao: descricao.value,
// 		detalhamento: detalhamento.value
// 	});

// 	listaRecados.push(recado);
//     localStorage.setItem('listaRecados', JSON.stringify(listaRecados));


// 	//JSON.parse(localStorage.tbRecados);
// 	//console.log(localStorage.tbRecados);

//     console.log('Recado adicionado com sucesso.');

// 	atualizaTabela();

//     alert('Recado adicionado!');
// }

// function apagarRecado(x) {

// 	listaRecados = JSON.parse(localStorage.listaRecados);
// 	var listaRecadosAux = [];

// 	for (var item in listaRecados) {
// 		if (item != x)
// 		{
// 			listaRecadosAux.push(listaRecados[item]);
// 		}
// 	}

// 	localStorage.removeItem("listaRecados");
// 	localStorage.setItem('listaRecados', JSON.stringify(listaRecadosAux));

// 	alert('Recado deletado!');

// 	atualizaTabela();

// }

// function editarRecado(x) {

// 	listaRecados = JSON.parse(localStorage.listaRecados);
// 	var listaRecadosAux = [];

// 	var descricao;
// 	var detalhamento;

// 	descricao = prompt('Informe a descrição:');
// 	detalhamento = prompt('Informe a detalhamento:');

// 	for (var item in listaRecados) {
// 		if (item == x)
// 		{
// 			listaRecados[item].descricao = descricao;
// 			listaRecados[item].detalhamento = detalhamento;

// 		}

// 		listaRecadosAux.push(listaRecados[item]);
// 	}

// 	localStorage.removeItem("listaRecados");
// 	localStorage.setItem('listaRecados', JSON.stringify(listaRecadosAux));

// 	alert('Recado alterado!');

// 	atualizaTabela();
