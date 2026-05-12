let cotacao = 0;
async function cotacaoDolar()
{
    try {
    
    const response = await fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL');
    if(!response.ok){
        throw new Error("Não é possivel carregar o arquivo json");
    }
    const dados = await response.json();
   cotacao = parseFloat(dados.USDBRL.bid)
   document.getElementById("cotacao").innerText = " USD = R$ "+ cotacao;
   
    }
    catch(error){
        console.error(error);
    }
    function realparaDolar() {
        let valor = document.getElementById("real").value;
        document.getElementById("resualtadoDolar").innerText= "R$ " + (valor * cotacao).toFixed(2);

    }  
      console.log(dados);
}
cotacaoDolar()