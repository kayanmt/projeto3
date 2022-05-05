var prompt = require('prompt-sync')();

function aleatorioentre(min, max) {
  let k=Math.random() * (max - min) + min;
  let t=Math.round(k);
  return t;
  }

  function aleatorio() {
    let k = Math.random()*100;
    let l=Math.round (k);
    return l;
  }

  function Morte1 (b){

      b=["Cancer malignino, que pode se espalhar"];
    
     return b;
  }

function envelhecimento(k){
  k=k+(0.334);
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
  a=a+((c*0.14*d)+d);
  b=b-((c*0.3*30)+30);
  let k=[a,b];
  return k;
}
function apostar(k,l,s){
  let resultadoAposta=aleatorio();
  if(resultadoAposta<=49){
    console.log("Voce venceu a aposta e ganhou 2x o valor apostado, e voce gostou disso");
    k=k+l;
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
   console.log("Aprovado");
    a=a+1;
    b=b-15;
    c=c-200;
    let k=[a,b,c];
    return k;
  }
  if(avaliacao<=5){
    console.log("Reprovado");
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
  if(b=="Cancer malignino, que pode se espalhar"){
    let m=aleatorio();
    if(m>=95){
      console.log("parabens voce se curou");
      b=["Nenhuma marca"];
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
  if(b=="Nenhuma marca"){
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
  if(b=="Cancer malignino, que pode se espalhar"){
    let m=aleatorio();
    if(m>=85){
      console.log("parabens voce se curou");
      b=["Nenhuma marca"];
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
  if(b=="Nenhuma marca"){
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
function surto(a,b,c){
  let k=psicologo(a,c);
  a=30;
  c=k[1];
  b=b-40;
  let m= [a,b,c];
  return m;
}


 //texto explicativo
console.log("Voce fez 18 anos e saiu de casa hora de iniciar a vida adulta sozinho, repare que seus status nao necessariamente estao em 100 e que voce nao tem dinheiro nenhum, ate quando voce pode equilibrar tudo e sobreviver?");
 //programa
let personagem = {};
personagem.nome = prompt ("Digite o nome do pernagem: ");
personagem.idade = 18;
personagem.saude = aleatorioentre(50,100);
personagem.dinheiro = 0;
personagem.saude_mental = aleatorioentre(50,100);
personagem.fome =aleatorioentre(50,100);
personagem.marcaDaMorte1=["Nenhuma marca"];
perstatus="vivo";
personagem.estudo=0;
let salario=100;
console.log(personagem);
console.log("Em cada ano voce pode fazer 3 escolhas, jogar 3 ciclos, escolha o que quer fazer: ");
while(perstatus==="vivo"){
  
//digite o que vc quer fazer nesse ciclo
let e=+prompt("Se quiser comer aperte '1', se quiser trabalhar/apostar aperte '2', se quiser estudar aperte 3, se quiser fazer convivencia social aperte 4, se quiser ir ao medico aperte 5, se quiser ir ao psicologo aperte 6, se quiser informcao sobre alguma opcao acima aperte 7, aperte 8 para ver o status do personagem: ")
while(e!=1&&e!=2&&e!=3&&e!=4&&e!=5&&e!=6&&e!=7){
  e=+prompt("Escolha uma das opcoes a seguir: Se quiser comer aperte '1', se quiser trabalhar/apostar aperte '2', se quiser estudar aperte 3, se quiser fazer convivencia social aperte 4, se quiser ir ao medico aperte 5, se quiser ir ao psicologo aperte 6, se quiser informcao sobre alguma opcao acima aperte 7, aperto 8 para ver o status do personagem: ");
}
//informacao
if(e==8){console.log(personagem);}
if(e==7){
  let escolha=+prompt("\n1-comida\n2-trabalho/aposta\n3-estudar\n4-convivencia social\n5-medico\n6-psiclogo\n7-para ver o status do personagem\nSobre o que deseja informacao? ");
if(escolha==1){
console.log("Faz voce nao morrer de fome\n(caso a fome chegue a 0 voce morre, voce perde 10 de fome a cada ciclo),\nexistem 2 opcoes,\ncomida saudavel de custo 50 reais, te da 40 de saude, 20 de saude mental e 30 de fome\n a segunda opcao e comida nao saudavel\nesta custa 10 reais, aumenta em 30 sua saude mental, reduz em 25 sua saude e da mais 50 de fome");
}
if(escolha==2){
console.log("Aqui voce trabalha ou aposta,\ntrabalho te da 100 reais de salario,\n quanto mais estudo voce tem mais voce ganha,\n mas e estressante, logo voce perde 30 de saude mental\n se tiver estudo ocupara cargos mais altos e ficara mais estressado 0,3 em relacao ao 'stress' anterior,\naposta se vencer ganha o valor que apostou no dinheiro,\n e ganha mais 10 de saude mental,\nquando perde perde o valor apostado e perde 5 de saude mental");
}
if(escolha==3){
console.log("Estudar,\nvoce pode reprovar ou passar,\nquanto maior sua saude mental mais chance de ser aprovado,\nse tiver mais estudo ganha mais dinheiro (14% a mais no salario para cada vez que estudou),\nEstudar custara 200 reais,\n se aprovado perdera 15 de saude mental\nse reprovado perdera 30 de saude mental, pois estudar e estressante");
}
if(escolha==4){
console.log("A convivencia social\numa chance de ganhar saude mental sem gastar,\nse der certo ganhara 40 de saude mental\nse falhar perdera 15 de saude mental,\nmas sempre ganhara 20 de saude");
}
if(escolha==5){
console.log("Medico,\nserve para ganhar saude,\nse for num particular custara 300 reais,\ndara 70 de saude\ncaso voce tenha uma marca da morte (cancer nesse caso) voce pode talvez conseguir cura-lo\n(caso sua saude chegue a 0 novamente com a marca da morte voce morre),\no medico pode falhar e se ocorrer voce perdera 20 de saude,\nvoce tambem pode ir ao SUS nao custara nada e tambem pode remover uma marca da morte\ndara 60 de saude caso de certo,\npode haver erro medico (tem mais chance de ocorrer aqui que no particular)\nvoce perdera 30 caso isso ocorra");
}
if(escolha==6){
console.log("Psicologo\ncustara 250 reais\ncurara 60 de saude mental,\na saude mental caso chegue a 0 voce tera um surto\nentao compulsoriamente ira ao psicologo gastando o dinheiro,\ne perdendo 40 de saude, e recuperara apenas 30 de saude mental");
}
if(escolha==7){console.log(personagem);}
e=+prompt("Se quiser comer aperte '1',\nse quiser trabalhar/apostar aperte '2',\nse quiser estudar aperte 3,\nse quiser fazer convivencia social aperte 4,\nse quiser ir ao medico aperte 5,\nse quiser ir ao psicologo aperte 6,\nse quiser informcao sobre alguma opcao acima aperte 7\nse quiser ver o status do personagem pressione 8: ")
while(e!=1&&e!=2&&e!=3&&e!=4&&e!=5&&e!=6&&e!=7){
e=+prompt("Escolha uma das opcoes a seguir:\nSe quiser comer aperte '1',\nse quiser trabalhar/apostar aperte '2',\nse quiser estudar aperte 3,\nse quiser fazer convivencia social aperte 4,\nse quiser ir ao medico aperte 5,\nse quiser ir ao psicologo aperte 6,\nse quiser informcao sobre alguma opcao acima aperte 7\nse quiser ver o status do personagem pressione 8: ");
}
}
//comida
if(e==1){
  
  let comer=+prompt("O que voce quer comer? Aperte '1' para comida saudavel , custo 50 e '2' para comida nao saudavel, custo 10");
   while(comer!=1&&comer!=2){
    comer=+prompt("Tecla inavlida, aperte '1' para comida saudavel , custo 50 e '2' para comida nao saudavel, custo 10");
   }
  if (comer==1){
    if(personagem.dinheiro<50){
      console.log("Voce nao tem dinheiro para comer comida saudavel, escolha novamente o que quer fazer");
      e=+prompt("Se quiser comer aperte '1', se quiser trabalhar/apostar aperte '2', se quiser estudar aperte 3, se quiser fazer convivencia social aperte 4, se quiser ir ao medico aperte 5, se quiser ir ao psicologo aperte 6, se quiser informcao sobre alguma opcao acima aperte 7")
      while(e!=1&&e!=2&&e!=3&&e!=4&&e!=5&&e!=6&&e!=7){
      e=+prompt("Escolha uma das opcoes a seguir: Se quiser comer aperte '1', se quiser trabalhar/apostar aperte '2', se quiser estudar aperte 3, se quiser fazer convivencia social aperte 4, se quiser ir ao medico aperte 5, se quiser ir ao psicologo aperte 6, se quiser informcao sobre alguma opcao acima aperte 7");
      }
    }
    if(personagem.dinheiro>=50){
 let c=comidaSaudavel(personagem.saude,personagem.dinheiro,personagem.saude_mental,personagem.fome);
 personagem.saude=c[0];
 personagem.dinheiro=c[1];
 personagem.saude_mental=c[2];
 personagem.fome=c[3];
}}

if (comer==2){  
  if(personagem.dinheiro<10){
  console.log("Voce nao tem dinheiro para comer comida nao saudavel, selecione outra opcao");
  e=+prompt("Se quiser comer aperte '1', se quiser trabalhar/apostar aperte '2', se quiser estudar aperte 3, se quiser fazer convivencia social aperte 4, se quiser ir ao medico aperte 5, se quiser ir ao psicologo aperte 6, se quiser informcao sobre alguma opcao acima aperte 7")
while(e!=1&&e!=2&&e!=3&&e!=4&&e!=5&&e!=6&&e!=7){
e=+prompt("Escolha uma das opcoes a seguir: Se quiser comer aperte '1', se quiser trabalhar/apostar aperte '2', se quiser estudar aperte 3, se quiser fazer convivencia social aperte 4, se quiser ir ao medico aperte 5, se quiser ir ao psicologo aperte 6, se quiser informcao sobre alguma opcao acima aperte 7");
}}
  if(personagem.dinheiro>=10){
  let c=comidaNaoSaudavel(personagem.saude,personagem.dinheiro,personagem.saude_mental,personagem.fome);
  personagem.saude=c[0];
  personagem.dinheiro=c[1];
  personagem.saude_mental=c[2];
  personagem.fome=c[3];
 }
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
   let resp="s";
   while(resp=="s"){
   if(personagem.dinheiro<=0){
     console.log("Voce nao tem dinheiro para apostar tente outra opcao");
     e=+prompt("Se quiser comer aperte '1', se quiser trabalhar/apostar aperte '2', se quiser estudar aperte 3, se quiser fazer convivencia social aperte 4, se quiser ir ao medico aperte 5, se quiser ir ao psicologo aperte 6, se quiser informcao sobre alguma opcao acima aperte 7")
while(e!=1&&e!=2&&e!=3&&e!=4&&e!=5&&e!=6&&e!=7){
e=+prompt("Escolha uma das opcoes a seguir: Se quiser comer aperte '1', se quiser trabalhar/apostar aperte '2', se quiser estudar aperte 3, se quiser fazer convivencia social aperte 4, se quiser ir ao medico aperte 5, se quiser ir ao psicologo aperte 6, se quiser informcao sobre alguma opcao acima aperte 7");
}
   }
   if(personagem.dinheiro>0){
   let valorApostado=+prompt("Digite o valor a ser apostado: ");
   while(personagem.dinheiro<valorApostado){
    valorApostado=+prompt("Digite o valor a ser apostado, ele deve ser maior ou igual ao dinheiro que  personagem possui: ");
   }
   let result=apostar(personagem.dinheiro,valorApostado,personagem.saude_mental);
   personagem.dinheiro=result[0];
   personagem.saude_mental=result[1];
   resp=prompt("Deseja apostar novamente? Digite 's' para sim e 'n' para nao: ");
   while(resp!="s"&&resp!="n"){
     resp=prompt("Digite 's' para apostar novamente e 'n' para parar de apostar: ");
   }}
 }}}
//estudo
if(e==3){
  if(personagem.dinheiro<200){
    console.log("Voce nao tem dinheiro para estudar, selecione outra opcao");
    e=+prompt("Se quiser comer aperte '1', se quiser trabalhar/apostar aperte '2', se quiser estudar aperte 3, se quiser fazer convivencia social aperte 4, se quiser ir ao medico aperte 5, se quiser ir ao psicologo aperte 6, se quiser informcao sobre alguma opcao acima aperte 7")
while(e!=1&&e!=2&&e!=3&&e!=4&&e!=5&&e!=6&&e!=7){
e=+prompt("Escolha uma das opcoes a seguir: Se quiser comer aperte '1', se quiser trabalhar/apostar aperte '2', se quiser estudar aperte 3, se quiser fazer convivencia social aperte 4, se quiser ir ao medico aperte 5, se quiser ir ao psicologo aperte 6, se quiser informcao sobre alguma opcao acima aperte 7");
}
  }
  if(personagem.dinheiro>=200){
console.log("Voce estuda, se aprovado se aperfeiçoa, fazendo seu salario aumentar 14%, mas e estressante, e custa 200 de dinheiro");
let resultadoEstudo=estudo(personagem.estudo,personagem.saude_mental,personagem.dinheiro);
personagem.estudo=resultadoEstudo[0];
personagem.saude_mental=resultadoEstudo[1];
personagem.dinheiro=resultadoEstudo[2];
}}
//convivencia social
if(e==4){
let sau = convivencia(personagem.saude_mental,personagem.saude);
personagem.saude_mental=sau[0];
personagem.saude=sau[1];
}
//psicologo
if(e==6){
  if(personagem.dinheiro<250){
    console.log("Voce nao tem dinheiro suficiente para um psicologo tente outra opcao");
    e=+prompt("Se quiser comer aperte '1', se quiser trabalhar/apostar aperte '2', se quiser estudar aperte 3, se quiser fazer convivencia social aperte 4, se quiser ir ao medico aperte 5, se quiser ir ao psicologo aperte 6, se quiser informcao sobre alguma opcao acima aperte 7")
while(e!=1&&e!=2&&e!=3&&e!=4&&e!=5&&e!=6&&e!=7){
e=+prompt("Escolha uma das opcoes a seguir: Se quiser comer aperte '1', se quiser trabalhar/apostar aperte '2', se quiser estudar aperte 3, se quiser fazer convivencia social aperte 4, se quiser ir ao medico aperte 5, se quiser ir ao psicologo aperte 6, se quiser informcao sobre alguma opcao acima aperte 7");
}
  }
  if(personagem.dinheiro>=250){
let psic=psicologo(personagem.saude_mental,personagem.dinheiro);
personagem.saude_mental=psic[0];
personagem.dinheiro=psic[1];
}}
//medico
if(e==5){
  let es=+prompt("Se voce quiser ir ao SUS digite '2', se quiser ir ao medico particular digite '1': ");
if(es==1){
  if(personagem.dinheiro<300){
    console.log("Voce nao tem dinheiro suficiente para o medico particular, tente outra opcao");
    e=+prompt("Se quiser comer aperte '1', se quiser trabalhar/apostar aperte '2', se quiser estudar aperte 3, se quiser fazer convivencia social aperte 4, se quiser ir ao medico aperte 5, se quiser ir ao psicologo aperte 6, se quiser informcao sobre alguma opcao acima aperte 7")
while(e!=1&&e!=2&&e!=3&&e!=4&&e!=5&&e!=6&&e!=7){
e=+prompt("Escolha uma das opcoes a seguir: Se quiser comer aperte '1', se quiser trabalhar/apostar aperte '2', se quiser estudar aperte 3, se quiser fazer convivencia social aperte 4, se quiser ir ao medico aperte 5, se quiser ir ao psicologo aperte 6, se quiser informcao sobre alguma opcao acima aperte 7");
}
  }
  if(personagem.dinheiro>=300){
  let med=medico(personagem.saude,personagem.marcaDaMorte1,personagem.dinheiro);
personagem.saude=med[0];
personagem.marcaDaMorte1=med[1];
personagem.dinheiro=med[2];
}}
if(es==2){
  let medSUS=medicoSUS(personagem.saude,personagem.marcaDaMorte1);
personagem.saude=medSUS[0];
personagem.marcaDaMorte1=medSUS[1];

}}

//punicao para saude mental 0
if(personagem.saude_mental<=0){
let sm=surto(personagem.saude_mental,personagem.saude,personagem.dinheiro);
personagem.saude=sm[1];
personagem.dinheiro=sm[2];
personagem.saude_mental=sm[0];
console.log("Voce surtou pela baixa saude mental, compulsoriamente foi ao psicologo, e perdeu saude");}
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
if(personagem.saude<=0&&personagem.marcaDaMorte1=="Nenhuma marca"){
  console.log("Voce negligenciou sua saude, entao a morte 'jogará dados' com voce");
  console.log("Quanto mais jovem voce for menos chance tera de recerber uma 'marca da morte'");
  console.log("Pois se o dado der maior que sua idade voce ganha, boa sorte");
  let r=aleatorio();
  console.log("O resultado foi: ",r);
if (r>personagem.idade){
console.log("voce deu sorte, seu corpo vence a morte, por hora, saude +1");
personagem.saude=1;
}
if(r<=personagem.idade){
personagem.marcaDaMorte1=Morte1(personagem.marcaDaMorte1);
console.log("Voce deu azar e recebeu uma 'marca da morte'")
console.log("Sua 'Marca da morte', e um: ", personagem.marcaDaMorte1);
console.log("Isso deixará efeitos que podem ser removidos com esforço e idas ao medico");
console.log("Enquanto a marca permanecer sua saude sempre voltará para 50 no minimo, ao final do ciclo");
console.log("Se voce atingir 0 de saude com esta marca da morte ainda existindo, voce morre");
personagem.saude=1;
}}
if(personagem.saude<=0&&personagem.marcaDaMorte1=="Cancer malignino, que pode se espalhar"){
  console.log("Voce morreu pela sua segunda marca da morte.");
  perstatus="morto";
}

  // fim de ciclo
  if(personagem.dinheiro<0){
    console.log("Voce esta endividado");
  }
  personagem.idade=envelhecimento(personagem.idade);
  personagem.fome=fome(personagem.fome);
  if(personagem.fome<=0){
    console.log("Voce morreu de fome!");
    perstatus="morto";
  }
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
