// alert("Seja bem vindo");

//document.write("Iniciando em Javascript");

//prompt("digite seu nome");

//resp=confirm("Será que vai chover");

// var a = 5;
// var b = "5 Kg de açucar";

// document.write("O valor da variável A é:" +a);
// document.write("<p>" + "O valor da variável B é:" + b + "</p>");
// document.write("<p>" + "O valor da variável A dividido por 2 é:" + a/2 + "</p>");
// document.write("<p>" + "O valor da variável B dividido por 2 é:" + b/2 + "</p>");

// var  a, inteiro, flutuante;
// a = "45.78 Kg de açucar";
// inteiro = parseInt(a);
// flutuante = parseFloat(a);

// document.write("O valor da variável A é:" +a);
// document.write("<p>" + "O valor numérico inteiro da variável é:" + inteiro + "</p>");
// document.write("<p>" + "O valor da variável A dividido por 2 é:" + inteiro/2 + "</p>");
// document.write("<p>" + "O valor da variável decimal da variávl é:" + flutuante + "</p>");
// document.write("<p>" + "O valor da variável A dividido por 2 é:" + flutuante/2 + "</p>");

// var a, b, c;
//  a= "Olá pessoal ";
// b = "Sejam bem vindos ao JavaScript";
// c = a + b;
// document.write(c);

// a = 6, b = 3, c = 1;
// document.write((a > b) && (b>c));

// a = 6, b = 3, c = 1;
// alert((a > b) || (b == c));

// a = 6, b = 3, c = 1;
// alert(a != b);

// hoje = new Date();
// xDia = hoje.getDay();

// diaSemana = new Array(7);

// diaSemana[0]= "Domingo";
// diaSemana[1]= "Segunda-feira";
// diaSemana[2]= "Terça-feira";
// diaSemana[3]= "Quarta-feira";
// diaSemana[4]= "Quinta-feira";
// diaSemana[5]= "Sexta-feira";
// diaSemana[6]= "Sábado";

// document.write("o número da semana é: " + "" + (xDia +1));
// document.write("<p><b>" + "hoje é: " + diaSemana[xDia]);  


hoje = new Date();
xDia = hoje.getDay();

diaSemana = new Array(7);

diaSemana[0]= "Domingo";
diaSemana[1]= "Segunda-feira";
diaSemana[2]= "Terça-feira";
diaSemana[3]= "Quarta-feira";
diaSemana[4]= "Quinta-feira";
diaSemana[5]= "Sexta-feira";
diaSemana[6]= "Sábado";


pratoDoDia = new Array(7);

pratoDoDia[0]= "Pizza";
pratoDoDia[1]= "Virado à paulista";
pratoDoDia[2]= "Bife a rolê";
pratoDoDia[3]= "feijoada";
pratoDoDia[4]= "Macarrão";
pratoDoDia[5]= "Peixe Frito";
pratoDoDia[6]= "feijoada";

valorDoPrato = new Array(7);

valorDoPrato[0] = "R$ 50,00";
valorDoPrato[1] = "R$ 30,00";
valorDoPrato[2] = "R$ 25,00";
valorDoPrato[3] = "R$ 40,00";
valorDoPrato[4] = "R$ 30,00";
valorDoPrato[5] = "R$ 25,00";
valorDoPrato[6] = "R$ 40,00";


document.write("o número da semana é: " + "" + (xDia +1));
document.write("<p><b>" + "hoje é: " + diaSemana[xDia]); 

document.write("<p>" + "O prato do dia é: " + "" + pratoDoDia[xDia]);

document.write("<p>" + "O valor do prato é: " + "" + valorDoPrato[xDia]);