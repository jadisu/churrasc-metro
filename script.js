let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");


function carnePP(duracao) {
  
    if(duracao >= 6) {
      return 650;
    }else{
      return 400;
    }
  }
  
  function cervejaPP(duracao) {
    
    if(duracao >= 6) {
      return 2000;
    }else{
      return 1200;
    }
  }
  
  function bebidasPP(duracao) {
    
    if(duracao >= 6) {
      return 1500;
    }else{
      return 1000;
    }
  }

  function calcular(){

    let adultos = inputAdultos.Value;
    let criancas = inputCriancas.Value;
    let duracao = inputDuracao.Value;

    let qdtTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) * criancas);
    let qdtTotalCerveja = cervejaPP(duracao) * adultos;
    let qdtTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao) * criancas);

    console.log(qdtTotalBebidas)




    resultado.innerHTML = `<p>${qdtTotalCarne} Kg de Carne</p>`
    resultado.innerHTML += `<p>${qdtTotalCerveja}ml de Cerveja</p>`
    resultado.innerHTML += `<p>${qdtTotalBebidas}ml de Bebidas</p>`

}