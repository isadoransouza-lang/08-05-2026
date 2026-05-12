async function buscarDog()
{
    try {
    const cidade = document.getElementById("cidade").value;
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&appid=873551a7852e2858f0ccdcadfa74bed9')
    if(!response.ok){
        throw new Error("Não é possivel carregar o arquivo json");
    }
     const dados = await response.json();
    document.getElementById("nomeCidade").innerText = dados.name;
    document.getElementById("descricao").innerText = "Clima: "+ dados.weather[0].description;
    document.getElementById("temperatura").innerText = "Temperatura Atual: "+ dados.main.temp + "°C";
    document.getElementById("sensacao").innerText = "Sensação Térmica: " + dados.main.feels_like + "°C";
    document.getElementById("tempMin").innerText = "Temperatura Mínima: " + dados.main.temp_min + "°C";
    document.getElementById("tempMax").innerText = "Temperatura Máxima: " + dados.main.temp_max + "°C";
    document.getElementById("umidade").innerHTML = "Umidade: " + dados.main.humidity + "%";

    const icone = dados.weather[0].icon;

    document.getElementById("icone").src =  ` https://openweathermap.org/payload/api/media/file/${icone}2x.png`;
    console.log(dados);
    }
    catch(error){
        console.error(error);
    }

}
buscarDog()