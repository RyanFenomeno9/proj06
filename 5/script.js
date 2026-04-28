let a = Number(prompt("Digite um número"));
let b = Number(prompt("Digite outro número"));
let seq = "";

for(let i = a; i <= b; i++)
{
    if(i % 2 == 0)
    {
        seq = `${seq} ${i}`;
    }
}

alert(`${seq}`)