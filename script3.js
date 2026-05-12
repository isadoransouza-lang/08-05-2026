async function buscarDog()
{
    try {
    
    const response = await fetch('https://dog.ceo/api/breeds/image/random ');
    if(!response.ok){
        throw new Error("Não é possivel carregar o arquivo json");
    }
     const dados = await response.json();
     document.getElementById("dog").src = dados.message;
   
    console.log(dados);
    }
    catch(error){
        console.error(error);
    }

}
buscarDog()