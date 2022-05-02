var prompt = require('prompt-sync')();

function aleatorioentre(min, max) {
    return Math.random() * (max - min) + min;
  }

  function aleatorio() {
    let k = Math.random()*100;
    let l=Math.round (k);
    return l;
  }

  function Morte1 (){
    let k= aleatorioentre(0,2);
    let M=("");
    if(k==0){
       M=("Cancer malignino, que pode se espalhar");
    }
      if(k==1){
         M=("Acidente vascular cerebral, gerou sequelas");
      }
        if(k==2){
           M=("Ataque cardiaco, que gerou problemas cardiacos");
        }
        return M;
  }

function envelhecimento(k){
  return k++;
}

function fome(f){
  f=f-10;
}

function comidaSaudavel(k,j,l,m){
k=k+25;
j=j-50;
l=l+30;
m=m+30;
console.log("Voce se sente bem, +25 de saude e +30 de saude mental");
}
function comidaNaoSaudavel(k,j,l,c){
  k=k-25;
  j=j-10;
  l=l+20;
  c=c+50;
  console.log("Voce se sente feliz, porem seu corpo sofre um pouco");
  }


 //texto explicativo
let personagem = {};
personagem.nome = prompt ("Digite o nome do pernagem: ");
personagem.idade = 0;
personagem.saude = aleatorio();
personagem.dinheiro = 0;
personagem.saude_mental = aleatorio();
personagem.fome = aleatorio();
personagem.marcaDaMorte1=("Nenhuma marca");
perstatus="vivo";
while(perstatus==="vivo"){
  console.log(personagem);
//digite o que vc quer fazer nesse ciclo


//comida
if(e==1){
  let comer=prompt("O que voce quer comer? Aperte '1' para comida saudavel , custo 50 e '2' para comida nao saudavel, custo 10");
if (comer==1){
 comidaSaudavel(personagem.saude,personagem.dinheiro,personagem.saude_mental,personagem.fome);
}
if (comer==2){
  comidaSaudavel(personagem.saude,personagem.dinheiro,personagem.saude_mental,personagem.fome);
 }
}

//trabalho, apostas
//estudo
//convivencia social
//psicologo
//medico
//familia???
//religiao +saude mental +-social se colocar social, crise religiosa como evento?????????
//casa updatiar a casa da bonus em saude e saude mental???

// controlando imortalidade
if (personagem.idade>=70){
  personagem.saude=personagem.saude-50;
  console.log("Pela idade avancada seu corpo comeca a te atrapalhar: -50 de saude");
}
if (personagem.idade>=100){
  personagem.saude=personagem.saude-85;
  console.log("Seu corpo ja esta cansado: -85 de saude");
}

//marca da morte1
if(saude==0){
  console.log("Voce negligenciou sua saude, entao a morte 'jogará dados' com voce");
  console.log("Quanto mais jovem voce for menos chance tera de recerber uma 'marca da morte'");
  console.log("Pois se o dado der maior que sua idade voce ganha, boa sorte");
  let r=aleatorio();
  console.log("O resultado foi: ",r);
if (r>personagem.idade){
console.log("voce deu sorte, seu corpo vence a morte, por hora, saude +1");
personagem.saude++;
}
if(r<=personagem.idade){
console.log("Voce deu azar e recebeu uma 'marca da morte'")
console.log("Sua 'Marca da morte', e um: ", Morte1());
console.log("Isso deixará efeitos que podem ser removidos com esforço e idas ao medico");
console.log("Enquanto a marca permanecer sua saude sempre voltará para 50 no minimo, ao final do ciclo");
console.log("Se voce atingir 0 de saude com esta marca da morte ainda existindo, voce morre");
personagem.marcaDaMorte1=Morte1();
}}
if(personagem.saude==0&&personagem.marcaDaMorte1!=("Nenhuma marca")){
  console.log("Voce morreu pela sua segunda marca da morte.");
  perstatus="morto";
}
  if(fome==0){
    console.log("Voce morreu de fome!");
    perstatus="morto";
  }

  // fim de ciclo
  personagem.idade=envelhecimento(personagem.idade);
  personagem.fome=fome(personagem.fome);
if (personagem.saude>100){
  personagem.saude=100;
}
if (personagem.fome>100){
  personagem.fome=100;
}
if (personagem.saude_mental>100){
  personagem.saude_mental=100;
}
}
console.log("Voce Morreu, veja os status do seu personagem");
console.log(personagem);
