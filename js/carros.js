
var cep = document.getElementById("cep");
var endereco = '';

cep.addEventListener('focusout', function(event){
    event.preventDefault(); // Evita o envio do formulário

    fetch('https://viacep.com.br/ws/' + cep.value + '/json', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        }
    })
        .then((response) => response.json())
        .then((data) => {
            endereco = `Rua: ${data.logradouro}, Bairro: ${data.bairro}, Cidade: ${data.localidade}, UF: ${data.uf}`;
        })
        .catch((error) => console.error('Erro: ', error.message || error))

});


document.getElementById("carroForm").addEventListener("submit",  function(event) {
    event.preventDefault(); // Evita o envio do formulário

    // Obtém os valores dos campos do formulário
    var marca = document.getElementById("marca").value;
    var modelo = document.getElementById("modelo").value;
    var ano = document.getElementById("ano").value;
    var cep = document.getElementById("cep");


    // Cria os elementos HTML para exibir as informações do carro
    var li = document.createElement("li");
    li.className = "carro-item";
    var h2 = document.createElement("h2");
    var img = document.createElement("img");
    var ul = document.createElement("ul");
    var liMarca = document.createElement("li");
    var liModelo = document.createElement("li");
    var liAno = document.createElement("li");
    var liEndereco = document.createElement("li");

    // Define os valores dos elementos criados
    h2.textContent = modelo;
    var images = ["images/img1.jpg", "images/img2.jpg", "images/img3.jpg", "images/img4.jpg", "images/img5.jpg", "images/img6.jpg", "images/img7.jpg","images/img8.jpg", "images/img9.jpg"]; // Add the paths of your images here
    var randomIndex = Math.floor(Math.random() * images.length);
    img.src = images[randomIndex];
    img.alt = modelo;
    liMarca.textContent = "Marca: " + marca;
    liModelo.textContent = "Modelo: " + modelo;
    liAno.textContent = "Ano: " + ano;
    liEndereco.textContent = "Endereço: " + endereco;

    // Adiciona os elementos criados à lista de carros
    ul.appendChild(liMarca);
    ul.appendChild(liModelo);
    ul.appendChild(liAno);
    ul.appendChild(liEndereco);
    li.appendChild(h2);
    li.appendChild(img);
    li.appendChild(ul);
    document.getElementById("listaCarros").appendChild(li);

    // Limpa os campos do formulário
    document.getElementById("marca").value = "";
    document.getElementById("modelo").value = "";
    document.getElementById("ano").value = "";
    document.getElementById("cep").value = "";
});

