/* 1 Crie um array contendo 10 valores de salário e utilizando o método map() atribua
um aumento de 15% para salários até 2000 e um aumento de 10% para salários acima
de 2000. */

const salarios = [1000, 1500, 2000, 2500, 3000, 3500, 4000, 4500, 5000, 5500];
const salariosMultiplicados = salarios.map(salario => {
  
  if (salario <= 2000) {
    return salario * 1.15; 

  } else {
    return salario * 1.10;
  }
});

/* 2 e 3 - Utilizando o array de resultado do exercício anterior, crie um novo array, usando o
método filter(), contendo somente os salários superiores a 2500. Utilizando o array de resultado do exercício anterior, usando o método reduce(),
some os valores.*/

const salarios = [1000, 1500, 2000, 2500, 3000, 3500, 4000, 4500, 5000, 5500];
const salariosMultiplicados = salarios.map(salario => {

  if (salario <= 2000) {
    return salario * 1.15;

  } else {
    return salario * 1.10;
  }
});

const salarioMaior2500 = salariosMultiplicados.filter(salario => salario > 2500);
const somaSalarioMaior2500 = salarioMaior2500.reduce((valorsoma, salario) => valorsoma + salario, 0);



