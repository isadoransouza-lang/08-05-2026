async function exibirValores()
{
    try {
    
    const response = await fetch('https://dog.ceo/api/breeds/image/random ');
    if(!response.ok){
        throw new Error("Não é possivel carregar o arquivo json");
    }
    const dados = await response.json();
    const messagem = document.getElementById(`messagem`);
    const status = document.getElementById(`status`);
    messagem.innerHTML = dados.message;
    status.innerHTML = dados.status;
    console.log(dados);
    }
    catch(error){
        console.error(error);
    }

}
exibirValores()