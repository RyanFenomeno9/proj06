let num = Number(prompt("Digite um número aleatório"));
let tab = "";
let v = 0;

for(let i = 1; i <=10; i++)
{
    v = i*num;
    tab = `${tab}\n ${v}`;
}

alert(`A tabuada do seu número é: ${tab}`);