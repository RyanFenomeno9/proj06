
let prova = 0;
for(let i = 1; i <= 5; i++)
{
    let nota = Number(prompt(`Digite a nota da sua ${i}º prova`));
    prova = prova + nota;
}

prova = prova/5;
alert(`Sua média é ${prova}`);