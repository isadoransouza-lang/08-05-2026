async function exibirValores()
{
    try {
    
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=lagarto&units=metric&appid=873551a7852e2858f0ccdcadfa74bed9');
    if(!response.ok){
        throw new Error("Não é possivel carregar o arquivo json");
    }
    const dados = await response.json();
    const nome = document.getElementById(`name`);
    const idade = document.getElementById(`high`);
    nome.innerHTML = dados.name;
    idade.innerHTML = dados.high;
    console.log(dados);
    }
    catch(error){
        console.error(error);
    }

}
exibirValores()