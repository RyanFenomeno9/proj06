const num = Number(prompt("Digite um número aleatório"));
    let msg = "";

for( let i = 0; i <= num; i++)
{
    msg = `${msg} ${i}`;
}

alert(`${msg}`);