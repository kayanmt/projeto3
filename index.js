var prompt = require('prompt-sync')();

function aleatorioentre(min, max) {
    return Math.random() * (max - min) + min;
  }

  function aleatorio() {
    let k = Math.random()*100;
    let l=Math.round (k);
    return l;
  }

  function Morte0(){
    let k= aleatorioentre(0,2);
    return k;

  }

  function Morte1 (k){
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
  k=k+(1/3);
  return k;
}

function fome(f){
  f=f-10;
  return f;
}

function comidaSaudavel(k,j,l,c){
  k=k+40;
  j=j-30;
   l=l+20;
    c=c+30;
 let a=[k, j, l, c];
 return a;

}
function comidaNaoSaudavel(k,j,l,c){
  k=k-25;
   j=j-10;
    l=l+30;
     c=c+50;
  let a=[k, j, l, c];
  return a;

  }
function trampo (a,b,c,d){
  a=a+((c*0,14*d)+d);
  b=b-((c*0,3*30)+30);
  let k=[a,b];
  return k;
}
function apostar(k,l,s){
  let resultadoAposta=aleatorio();
  if(resultadoAposta<=49){
    console.log("Voce venceu a aposta e ganhou 2x o valor apostado, e voce gostou disso");
    k=k+l*2;
    s=s+10;
    let c=[k,s];
    return c;
  }
  if(resultadoAposta>=50){
    console.log("Voce perdeu a aposta, e voce fica estressado com isso");
    s=s-5;
    k=k-l;
    let c=[k,s];
    return c;
  }
}

function estudo(a,b,c){
  let avaliacao=0;
  if(b>=50){
    avaliacao=aleatorioentre(3,10);
  }
  if(b<50){
    avaliacao=aleatorioentre(0,8);
  }
  if (avaliacao>5){
    a=a+1;
    b=b-15;
    c=c-200;
    let k=[a,b,c];
    return k;
  }
  if(avaliacao<=5){
b=b-30;
c=c-200;
let k=[a,b,c];
return k;
  }
}
function convivencia (a,b){
let k = aleatorio();
let l=[];
if (k>=30){
  console.log("A convivencia deu certo, mais 40 de saude_mental e 20 de saude");
  a=a+40;
  b=b+20;
  l=[a,b];
  return l;
}
if(k<30){
  console.log("A convivencia deu errado, mas voce saiu -15 de saude mental, mais 20 de saude");
  a=a-15;
  b=b+20;
  l=[a,b];
  return l;
}
}
function medicoSUS(a,b){
  let k=[];
  let g=aleatorio();
  if(b>=0&&b<=2){
    let m=aleatorio();
    if(m>=95){
      console.log("parabens voce se curou");
      b=3;
      a=a+60;
      k=[a,b];
      return k;
    }
    if(m<95){
      console.log("Voce ainda esta com a marca da morte, mas ganha saude");
      b=b;
      a=a+60;
      k=[a,b];
      return k;
    }

  }
  if(b==3){
  if(g>=20){
    console.log("tudo certo");
    a=a+60;
    b=b;
    k=[a,b];
    return k;
  }
  if(g<20){
    console.log("Erro medico");
    a=a-30;
    b=b;
    k=[a,b];
    return k;
  }
}}

function medico(a,b,c){
  let f=[];
  let g=aleatorio();
  if(b>=0&&b<=2){
    let m=aleatorio();
    if(m>=85){
      console.log("parabens voce se curou");
      b=3;
      a=a+70;
      c=c-300;
      f=[a,b,c];
      return f;
    }
    if(m<85){
      console.log("Voce ainda esta com a marca da morte, mas ganha saude");
      b=b;
      a=a+70;
      c=c-300;
      f=[a,b,c];
      return f;
    }

  }
  if(b==3){
  if(g>=10){
    console.log("tudo certo");
    a=a+70;
    b=b;
    c=c-300;
    f=[a,b,c];
      return f;

  }
  if(g<10){
    console.log("Erro medico");
    a=a-20;
    b=b;
    c=c-300;
    f=[a,b,c];
      return f;
  }
 
}}

function psicologo(a,b){
a=a+60;
b=b-250;
let c=[a,b];
return c;
}


 //texto explicativo
console.log("Voce fez 18 anos e saiu de casa hora de iniciar a vida adulta sozinho, repare que seus status nao necessariamente estao em 100 e que voce nao tem dinheiro nenhum, ate quando voce pode equilibrar tudo e sobreviver?");
 //programa
let personagem = {};
personagem.nome = prompt ("Digite o nome do pernagem: ");
personagem.idade = 18;
personagem.saude = aleatorio();
personagem.dinheiro = 0;
personagem.saude_mental = aleatorio();
personagem.fome = aleatorio();
personagem.marcaDaMorte1=("Nenhuma marca");
perstatus="vivo";
personagem.estudo=0;
let salario=100;
while(perstatus==="vivo"){
  console.log(personagem);
//digite o que vc quer fazer nesse ciclo
console.log("Em cada ano voce pode fazer 3 escolhas, jogar 3 ciclos, escolha o que quer fazer: ");
let e=+prompt("Se quiser comer aperte '1', se quiser trabalhar/apostar aperte '2', se quiser estudar aperte 3, se quiser fazer convivencia social aperte 4, se quiser ir ao medico aperte 5, se quiser ir ao psicologo aperte 6, se quiser informcao sobre alguma opcao acima aperte 7")
//informacao
if(e==7){
  let escolha=+prompt("\n1-comida\n2-trabalho/aposta\n3-estudar\n4-convivencia social\n5-medico\n6psiclogo\nSobre o que deseja informacao? ");
if(escolha==1){

}
if(escolha==2){

}
if(escolha==3){

}
if(escolha==4){

}
if(escolha==5){

}
if(escolha==6){

}
}
//comida
if(e==1){
  let comer=+prompt("O que voce quer comer? Aperte '1' para comida saudavel , custo 50 e '2' para comida nao saudavel, custo 10");
   while(comer!=1&&comer!=2){
    comer=+prompt("Tecla inavlida, aperte '1' para comida saudavel , custo 50 e '2' para comida nao saudavel, custo 10");
   }
  if (comer==1){
 let c=comidaSaudavel(personagem.saude,personagem.dinheiro,personagem.saude_mental,personagem.fome);
 personagem.saude=c[0];
 personagem.dinheiro=c[1];
 personagem.saude_mental=c[2];
 personagem.fome=c[3];
}
if (comer==2){
  let c=comidaNaoSaudavel(personagem.saude,personagem.dinheiro,personagem.saude_mental,personagem.fome);
  personagem.saude=c[0];
  personagem.dinheiro=c[1];
  personagem.saude_mental=c[2];
  personagem.fome=c[3];
 }
}

//trabalho, apostas
if(e==2){
let trapos=+prompt("Para trabalhar aperte '1', para apostar aperte '2'");
while(trapos!=1&&trapos!=2){
  trapos=+prompt("Tecla inavlida, aperte '1' para trabalhar e '2' para apostar");
 }
 if(trapos ==1){
   console.log("Voce trabalha, e isso e estressante, mas rende algum dinheiro");
   let y=trampo(personagem.dinheiro,personagem.saude_mental,personagem.estudo,salario);
   personagem.dinheiro=y[0];
   personagem.saude_mental=y[1];
 }
 if (trapos ==2){
   let valorApostado=+prompt("Digite o valor a ser apostado: ");
   let result=apostar(personagem.dinheiro,valorApostado,personagem.saude_mental);
   personagem.dinheiro=result[0];
   personagem.saude_mental=result[1];
 }}
//estudo
if(e==3){
console.log("Voce estuda, se aprovado se aperfeiçoa, fazendo seu salario aumentar 14%, mas e estressante, e custa 200 de dinheiro");
let resultadoEstudo=estudo(personagem.estudo,personagem.saude_mental,personagem.dinheiro);
personagem.estudo=resultadoEstudo[0];
personagem.saude_mental=resultadoEstudo[1];
personagem.dinheiro=resultadoEstudo[2];
}
//convivencia social
if(e==4){
let sau = convivencia(personagem.saude_mental,personagem.saude);
personagem.saude_mental=sau[0];
personagem.saude=sau[1];
}
//psicologo
if(e==6){
let psic=psicologo(personagem.saude_mental,personagem.dinheiro);
personagem.saude_mental=psic[0];
personagem.dinheiro=psic[1];
}
//medico
if(e==5){
if(es==1){
  let med=medico(personagem.saude,personagem.marcaDaMorte1,personagem.dinheiro);
personagem.saude=med[0];
personagem.marcaDaMorte1=med[1];
personagem.dinheiro=med[2];
}
if(es==2){
  let med=medicoSUS(personagem.saude,personagem.marcaDaMorte1,personagem.dinheiro);
personagem.saude=med[0];
personagem.marcaDaMorte1=med[1];
personagem.dinheiro=med[2];
}}

//punicao para saude mental 0

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
if(personagem.saude==0){
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
  let mm=Morte0();
personagem.marcaDaMorte1=Morte1(mm);
console.log("Voce deu azar e recebeu uma 'marca da morte'")
console.log("Sua 'Marca da morte', e um: ", Morte1(mm));
console.log("Isso deixará efeitos que podem ser removidos com esforço e idas ao medico");
console.log("Enquanto a marca permanecer sua saude sempre voltará para 50 no minimo, ao final do ciclo");
console.log("Se voce atingir 0 de saude com esta marca da morte ainda existindo, voce morre");

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
if(personagem.saude>50&&personagem.marcaDaMorte1!=("Nenhuma marca")){
  personagem.saude=50;
}
}
console.log("Voce Morreu, veja os status do seu personagem");
console.log(personagem);
