const form = document.getElementById('form-atividade');
const nomes =[];
const numeros=[];
let linhas=' ';
const seloverde='<img src="./images/seloverde.png" alt="seloverde"/>'

form.addEventListener('submit', function(e){
    e.preventDefault();
    adicionalinha();
    atualizatabela();
});

function adicionalinha(){
    const inputnome= document.getElementById('nome-pessoa');
    const inputnumero= document.getElementById('numero-pessoa');

    if(nomes.includes(inputnome.value)){
        alert(`O nome ${inputnome.value} já foi inserido`);
    }    
    else{
        nomes.push(inputnome.value);
        numeros.push(parseFloat(inputnumero));

        let linha = '<tr>';
        linha += `<td>${inputnome.value}</td>`;
        linha += `<td>[55+] ${inputnumero.value}</td>`;
        linha += `<td>${seloverde}</td>`;
        linha += '</tr>';

        linhas += linha;
    }
    inputnome.value=' ';
    inputnumero.value=' ';
}

function atualizatabela(){
    const corpotabela = document.querySelector('tbody');
    corpotabela.innerHTML=linhas;
}