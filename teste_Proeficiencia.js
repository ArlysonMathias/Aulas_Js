const prompt = require("prompt-sync")();

let tempo = 7.0;
let dormir = false
let gentileza = 0;
let fim = false
let reputacao = 0

console.log("\t Bem vindo ao jogo de Ficção Interativa.");
console.log("Este jogo tem como objetivo simular o dia-a-dia do personagem.");
let comeco = prompt("Aperte C para começar: ");

if (comeco == "C" || comeco == "c") {
  // Cena 1 - O início do dia
  function cena1(escolha) {
    console.log("Você acorda às 7hrs da manhã e pensa no que fazer a seguir: ");
    console.log(" Opção 1: Tomar banho e ir para o serviço. ");
    console.log(" Opção 2: Olhar as notícias do dia. ");
    console.log(" Opção 3: Voltar a dormir. ");
    let opcao = parseInt(prompt("\n Digite sua opção: "));

    if (opcao == 1) {
      console.log("Você toma banho se arruma e sai para o trabalho.");
      console.log(
        "Mas se logo se vê em um engarrafamento e se arrepende de não ter lido as notícias do trânsito."
      );
      console.log("Você acaba chegando atrasado no serviço.");
      tempo = tempo + 2.0;
    } else if (opcao == 2) {
      console.log(
        "Você lê as notícias do dia e acaba percebendo um congestionamento em uma avenida muito usada."
      );
      console.log(
        "Você toma banho se arruma e sai para o trabalho e evita aquele trajeto e consegue chegar mais cedo no serviço."
      );
      tempo = tempo + 1.0;
    } else if (opcao == 3) {
      console.log("Você volta a dormir e perde a hora de ir para o trabalho.");
      tempo = tempo + 5.0;
      dormir = true
    } else {
      console.log("Opcção inválida.\n");
      return cena1(escolha);
    }
  }

  //Cena 2 - acontece se você dormir
  function cena2(escolha){
    console.log("Você dormiu demais e perdeu a hora de ir para o trabalho.")
    console.log("Você tem as seguintes opções: ")
    console.log("Opção 1: ir para o trabalho e inventar uma desculpa.")
    console.log("Opção 2: ficar em casa.")
    opcao = parseInt(prompt("Qual a sua escolha? "))

    if(opcao == 1){
      console.log("Você vai para o serviço e inventa uma desculpa para o atraso.")
     
    }else if(opcao == 2){
      console.log("Você resolve ficar em casa e não ir para o trabalho.");
      tempo = tempo + 10.0
      fim = true
     
    }else{
      console.log("Opcão inválida.")
      return cena2(escolha)
    }

  }
  //Cena 3 - após a manhã
  function cena3(escolha) {
    console.log("Logo após a manhã de serviço, chegou a hora do almoço.");
    console.log(
      "Você vai para um restaurante próximo do serviço para almoçar."
    );
    console.log(
      "Ao chegar na porta do restaurante você é parado por um mendigo pedindo comida."
    );
    console.log("\n O que você faz? ");
    console.log(
      "Opção 1: Você convida o mendigo para almoçar e paga o almoço pra ela."
    );
    console.log("Opção 2 :Você diz que não tem dinheiro.");
    console.log("Opção 3: Você ignora o mendigo e entra no restaurante.");
    opcao = parseInt(prompt("Qual a sua escolha? "));

    if (opcao == 1) {
      console.log("Você convida o mendigo para almoçar e paga o seu almoço.");
      console.log(
        "O mendigo agradece e diz que está com muita fome por não ter comido nada no último dia."
      );
      console.log("Você almoça junto com o mendigo.");
      gentileza++;
      
    } else if (opcao == 2) {
      console.log("O mendigo olha decepcionado e se retira.");
      console.log("Você almoça sozinho.");
      
    } else if (opcao == 3) {
      console.log(
        "Você ignora o mendigo e  entra no restaurante sob o olhar das outras pessoas."
      );
      console.log("Você almoça sozinho.");

    } else {
      console.log("Opcção inválida.\n");
      return cena3(escolha);
    }
    
  }
  //Cena 4 - após o almoco - alternativa
  function cena4 (escolha){

    console.log("Você termina de almoçar e olha para o relógio e percebe que ainda está no seu horário de almoço.")
    console.log("O que você faz? ")
    console.log("Opção 1: Você volta para o serviço para não se atrasar.")
    console.log("Opção 2: Você resolve ir para um sorveteria para comprar um 'tira gosto'.")
    console.log("Opção 3: Você resolve ir dormir")

    opcao = parseInt(prompt("Qual a sua escolha? "))

    if (opcao == 1){
      console.log("Você volta para o serviço e não se atrasa.")
      tempo = tempo + 1.0

    }else if (opcao == 2){
      console.log("Você vai para a soverteria e acaba perdendo a hora.")
      console.log("Você chega atrasado no serviço.")
      reputacao = reputacao -1
      tempo = tempo + 2.0

    }else if(opcao == 3){
      console.log("Você resolve tirar um cochilo e acaba se atrasando para o serviço.")
      reputacao = reputacao -1
      tempo = tempo+ 3.0

    }else{
      console.log("Opcão inválida. Digite novamente: ")
      return cena4(escolha)
    }
  }
  //Cena 5 -Fim do dia
  function cena5(escolha) {

    console.log("Chegou o fim do expediente.");
    console.log("Seu chefe chama você para sua sala.");
    console.log("Você vai sem saber se é uma coisa boa ou não.");

    if (gentileza > 0 && reputacao >= 0) {
      console.log(
        "Seu chefe começa um discurso sobre as políticas da empresa."
      );
      console.log(
        "E durante seu discurso fala que viu a cena onde você ajudou o mendigo e lhe parabeniza pela ação."
      );
      console.log(
        "Diz que é exatamente esse tipo de funcionario que a emprese precisa. Alguem se preocupa com os outros e resolve lhe dar uma promoção para usa-lo como exemplo para os demais funcionários."
      );
      console.log("Gentileza gera gentileza.");
      console.log(
        "\nVocê volta pra casa feliz. Onde uma pequena ação acabou por ser vista e recompensado por isso."
      );

      tempo = tempo + 10.0;
    } else if(gentileza>0 && reputacao<0){
      console.log(
        "Seu chefe começa um discurso sobre as políticas da empresa."
      );
      console.log(
        "E durante seu discurso fala que viu a cena onde você ajudou o mendigo e lhe parabeniza pela ação."
      );
      console.log(
        "Diz que é exatamente esse tipo de funcionario que a emprese precisa. Alguem se preocupa com os outros, porém, lhe adverte sobre atrasos e que isso não é legal para a postura de um funcionário."
      );
      console.log(
        "Você volta para casa pensativo, no que poderia ter feito melhor nesse dia."
      )
    }else if (gentileza< 0 && reputacao == 0){

      console.log(
        "Seu chefe começa um discurso sobre as políticas da empresa."
      );

        console.log(
          "Lhe fala sobre como a empresa se preocupa com sua imagem e com a imagem de seus funcionários e diz que está desapontado."
        );

        console.log(
          "Você volta para casa pensativo, no que poderia ter feito melhor nesse dia."
        )
      }else{
        console.log(
          "Seu chefe começa um discurso sobre as políticas da empresa."
        );

        console.log(
          "Lhe fala sobre como a empresa se preocupa com sua imagem e com a imagem de seus funcionários e diz que está desapontado."
        );

        console.log("O seu chefe também lhe adverte sobre atrasos.")

        console.log(
          "Você volta para casa pensativo, no que poderia ter feito melhor nesse dia."
        )
      }



      tempo = tempo + 10;
    }
  
  
  cena1();
  if (dormir){
    cena2();
  } 
  if (fim == false ){
  cena3();
  cena4();
  cena5();
  }

if (tempo >= 18.0) {
  console.log("Já são 18 hrs e o dia acabou.\n Fim de jogo.");
  }
}
