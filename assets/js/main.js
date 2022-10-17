// for first we need to stop de default event of send.
const form = document.querySelector('#form');

form.addEventListener('submit', function(event){
    event.preventDefault();
    console.log('Event stopped.');
    const inputPeso = event.target.querySelector('#peso');
    const inputAltura = event.target.querySelector('#altura');
//now we need the values
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if(!peso || !altura){
        setResult('Invalid value!');
        return;
    }
//!peso 'cause Nan is a false value.

    const imc =  getImc(peso, altura);
    const nivelImc = getNivelImc(imc);
    const msg =`Your IMC is ${imc} : ${nivelImc}`;
    setResult(msg);

});

function getNivelImc (imc){
    const nivel = ['Underweight', 'Healthy', 'Overweight', 'Obesity', 'Obesity 2', 'Obesity 3'];
    if (imc >= 39.9) return nivel[5];
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if(imc< 18.5) return nivel[0];

//I'm able to use only if in this case.
}

function getImc(peso, altura){
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

function setResult (msg) {
    const result = document.querySelector('#resultado');
    result.innerHTML = `<p>${msg}</p>`;
}