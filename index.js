var prompt = require('prompt-sync')();

function aleatorioentre(min, max) {
    return Math.random() * (max - min) + min;
  }
  function aleatorio() {
    let k = Math.random()*100;
    let l=Math.round (k);
    return l;
  }
 


let m="s";
let personagem = {};
personagem.nome = prompt ("Digite o nome do pernagem: ");
personagem.idade = 0;
personagem.saude = aleatorio();
personagem.dinheiro = 0;
personagem.saude_mental = aleatorio();
personagem.amigos = [];
personagem.inimigos = [];
personagem.fome = aleatorio();
personagem.famila=[];
m=prompt("O personagem tem familiares? Digite 's' para sim e 'n' para nao: ");
while(m!=="s"&&m!=="n"){
    m=prompt("O personagem tem familiares? Digite 's' para sim e 'n' para nao: ");
}
while(m==="s"){
    let f= prompt ("Digite o nome do familiar do personagem: ");
   personagem.familia.push(f);
    m=prompt("O personagem tem mais familiares? Digite 's' para sim e 'n' para nao: ");
    while(m!=="s"&&m!=="n"){
        m=prompt("O personagem tem mais familiares? Digite 's' para sim e 'n' para nao: ");
    }
}
personagem.formacao = [];
console.log(personagem);
perstatus="vivo";
while(perstatus==="vivo"){

}

