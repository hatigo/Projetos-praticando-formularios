const musicasRock = ["duality", "in the end", "highway to hell", "back in black"];
const musicasForro = ["paulinha", "leticia"];
const musicasPop = ["good for you", "blinding lights"];
const musicasSertanejo = ["arranhão", "se for amor"];
const musicasFunk = ["bipolar", "sentadão"];
const form = document.querySelector('form');
const select = document.querySelector('select');
const input = document.querySelector('input');

const estilosMusicais = [{
    estilo: "rock",
    lista: musicasRock
},
{
    estilo: "forro",
    lista:musicasForro
},
{
    estilo: "pop",
    lista: musicasPop
},
{
    estilo: "sertanejo",
    lista: musicasSertanejo
},
{
    estilo: "funk",
    lista: musicasFunk
}];



select.addEventListener('change', function(){

    const estiloEscolhido = estilosMusicais.find(musica => musica.estilo === select.value);
    const indice = Math.floor(Math.random() * estiloEscolhido.lista.length);
    input.classList.remove('escondido');
    input.value = estiloEscolhido.lista[indice];
   
})

form.addEventListener('submit', function(event){
   if(!input.value){
       event.preventDefault();
   }
})