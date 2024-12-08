const form = document.getElementById("form");
let listas = '';
const contatos = [];
const nomeContato = document.getElementById('contato');
const telContato = document.getElementById('telefone');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  adicionarContato();
  AdicionarTabela();

  nomeContato.value = ''
  telContato.value = ''
  
})

function adicionarContato () {

if(contatos.includes(nomeContato.value)){

alert('Esse contato já foi adicionado!')

} else {
  let lista = '<tr>'
  lista += `<td>${nomeContato.value}</td>`
  lista += `<td>${telContato.value}</td>`
  lista += '</tr>'

  contatos.push(nomeContato.value);

  listas += lista;

}
}

function AdicionarTabela() {
  const tabela = document.querySelector('tbody')
  const somarContatos = document.getElementById('somarContatos')

  tabela.innerHTML = listas;
  somarContatos.innerHTML = `# ${contatos.length}`;

}


