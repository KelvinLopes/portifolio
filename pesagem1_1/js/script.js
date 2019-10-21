//Aqui todos os calculos são feitos
function calcularPesagem(){

  var pesoPalete = qndPaletes;
  var qndPaletes = parseInt(document.getElementById('qnd-paletes').value, 10);
  var pesoBalanca = parseInt(document.getElementById('peso-balanca').value, 10);
  var pesoMinuta = parseInt(document.getElementById('peso-minuta').value, 10);
  var resultado = document.getElementById('resultado');
  var alert1 = document.querySelector('#alert1');
  var alert2 = document.querySelector('#alert2');
  var alert3 = document.querySelector('#alert3');
  var alert4 = document.querySelector('#alert4');
  var alert5 = document.querySelector('#alert5');
  var alert6 = document.querySelector('#alert6');
  var kgs     = document.querySelector('#kgs');
  var kgsPeso = document.querySelector('#kg-peso');


    //Cada palete pesa 27 kgs
    pesoPalete = qndPaletes *27;
    resultado.value = (pesoBalanca-pesoPalete-pesoMinuta);
    if(resultado.value == 'NaN'){
      resultado.value = 'Aguardando dados!';
    }
    document.getElementById('kgs').innerHTML= resultado.value;
  /*Assim compara valores do resultado e verifica se o peso balanca e peso minuta são iguais a zero
  sem informar valores neles*/
   if(resultado === pesoBalanca || pesoBalanca=== 0 || pesoMinuta=== 0){
     //  alert('Você deve preencher ao menos os campos: Quantidade de paletes, Peso balança e peso Minuta.\n'+'ッ Caso a carga não tenha paletes informe o valor zero (0).');
     alert2.style.display='block';
     kgsPeso.style.display='none';
     kgs.style.display='none';

     }

    else if(resultado.value ==='Aguardando dados!'){
       //alert('                     ⏳\n'+' Aguardando dados para o calculo...\n'+'Preencha os campos! Se não tiver paletes, informe 0 (zero) para a quantidade de paletes.' );

       alert2.style.display='none';
       alert3.style.display='none';
       alert4.style.display='none';
       alert5.style.display='none';
       alert6.style.display='none';
       alert1.style.display='block';
       kgsPeso.style.display='none';
       kgs.style.display='none';

     }

     else if(resultado.value == 0){
       //alert('                     😁\n'+' Carga ok! '+resultado.value+' KGS' );
       alert2.style.display='none';
       alert3.style.display='none';
       alert4.style.display='none';
       alert5.style.display='none';
       alert1.style.display='none';
       alert6.style.display='block';
       kgsPeso.style.display='block';
       kgs.style.display='block';

     }
     else if (resultado.value <= 27 && resultado.value >= -27) {
       //alert('Carga dentro do permitido!' +resultado.value+' KGS');
       alert2.style.display='none';
       alert4.style.display='none';
       alert5.style.display='none';
       alert6.style.display='none';
       alert1.style.display='none';
       alert3.style.display='block';
       kgsPeso.style.display='block';
       kgs.style.display='block';

     }

     else if(resultado.value < -27 && resultado.value < 0){
       //alert('                     😱\n'+'Alerta! Carga faltante! Avisar expedição!' +resultado.value+' KGS a menos!');
       alert2.style.display='none';
       alert3.style.display='none';
       alert5.style.display='none';
       alert6.style.display='none';
       alert1.style.display='none';
       alert4.style.display='block';
       kgsPeso.style.display='block';
       kgs.style.display='block';

     }
     else if( resultado.value > 27) {
       //alert('                     😨\n'+'Alerta! Carga excedente! Avisar expedição!' +resultado.value+' KGS a mais!');
       alert2.style.display='none';
       alert3.style.display='none';
       alert4.style.display='none';
       alert6.style.display='none';
       alert1.style.display='none';
       alert5.style.display='block';
       kgsPeso.style.display='block';
       kgs.style.display='block';

     }
    console.log(resultado.value);
    
}
calcularPesagem();
resetar();
//Aceitar apenas números
function onlyNumber(num) {

  // Modal para mensagens dos pesos
  var modaldigiteapenasNum = document.getElementById('modaldigitarnum');

  // Botão que abre o modal
  var btnNum = document.getElementById('btnnum');

  //Usa a span do modal para fecha-lo
  var spanNum = document.getElementsByClassName('closenum')[0];

  modaldigiteapenasNum.style.display = 'none'
  var entraNum = /[^0-9,]/;
  entraNum.lastIndex = 0;
  var campo = num;
  if (entraNum.test(campo.value)) {
    campo.value = '';
    //alert('Digite apenas números.')
      modaldigiteapenasNum.style.display = 'block';

}      //Ao clicar na <span> (x),modal é fechado
     spanNum.onclick = function() {
         modaldigiteapenasNum.style.display = 'none';
     }
}
//Limpar campos
function resetar() {

let qndPaletes = document.getElementById('qnd-paletes');
let pesoBalanca =document.getElementById('peso-balanca');
let pesoMinuta = document.getElementById('peso-minuta');
let resultado = document.getElementById('resultado');
let alert1 = document.querySelector('#alert1');
let alert2 = document.querySelector('#alert2');
let alert3 = document.querySelector('#alert3');
let alert4 = document.querySelector('#alert4');
let alert5 = document.querySelector('#alert5');
let alert6 = document.querySelector('#alert6');



qndPaletes.value = 0;
pesoBalanca.value = 0;
pesoMinuta.value = 0;
resultado.value = 0;

alert1.style.display='none';
alert2.style.display='none';
alert3.style.display='none';
alert4.style.display='none';
alert5.style.display='none';
alert6.style.display='none';
calcularPesagem();

}
// Modal para mensagens dos pesos
var modal = document.getElementById('modal');

// Botão que abre o modal
var btn = document.getElementById('btn');

//Usa a span do modal para fecha-lo
var span = document.getElementsByClassName('close')[0];
var kgs = document.getElementsByClassName('kgs');

// Ao clicar modal aparece
btn.onclick = function() {
    modal.style.display = 'block';
}

// Ao clicar na <span> (x),modal é fechado
span.onclick = function() {
    modal.style.display = 'none';
}
// Se ficar o modal fechar, mesmo sendo fora do x
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
//Modal Sobre
var modalSobre = document.getElementById('modalsobre');

// // Modal para mensagem da versão do app
var btnSobre = document.getElementById('sobre');

// Usa a span do modal para fecha-lo
var spanSobre = document.getElementsByClassName('closesobre')[0];

// Ao clicar modal aparece
btnSobre.onclick = function() {
    modalsobre.style.display = 'block';
}

// Ao clicar na <span> (x),modal é fechado
spanSobre.onclick = function() {
    modalsobre.style.display = 'none';
}
// Se ficar o modal fechar, mesmo sendo fora do x
window.onclick = function(event) {
    if (event.target == modalsobre) {
        modalsobre.style.display = 'none';
    }
}

