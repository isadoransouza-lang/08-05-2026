async function buscarPais()
{
    try {
    const pais = document.getElementById("pais").value;
    const response = await fetch(' https://restcountries.com/v3.1/name/${pais}');
    if(!response.ok){
        throw new Error("Não é possivel carregar o arquivo json");
    }
    const dados = await response.json();
   document.getElementById("nome").innerText = dados[0].name.cammon;
   document.getElementById("bandeira").src = dados[0].flags.png;
   document.getElementById("capital").innerText = "Capital:  "+ dados[0].capital[0];
   document.getElementById("populacao").innerText = "População:  "+ dados[0].population;
   console.log(dados);
    }
    catch(error){
        console.error(error);
    }

}
buscarPais()