// =============================
// ELEMENTOS
// =============================

const inicio = document.getElementById("inicio");
const pagina = document.getElementById("pagina");
const abrir = document.getElementById("abrirRegalo");
const musica = document.getElementById("musica");
const textoCarta = document.getElementById("textoCarta");

// =============================
// ABRIR REGALO
// =============================

abrir.addEventListener("click", () => {

musica.play();

confetti({
particleCount: 220,
spread: 180,
origin: { y: 0.6 }
});

inicio.style.opacity = "0";

setTimeout(() => {

inicio.style.display = "none";
pagina.style.display = "block";

escribirCarta();

}, 900);

});

// =============================
// MENÚ
// =============================

function irA(id){

document.getElementById(id).scrollIntoView({
behavior:"smooth"
});

}

// =============================
// CARTA
// =============================

const carta = `Feliz cumpleaños, mi hermanito. ❤️

Creo que tengo el derecho de decirte así, porque has estado conmigo en las buenas y en las malas. Siempre has sido esa persona que me apaña, que me aconseja cuando más lo necesito y que nunca me ha dejado sola.

En estos cuatro años de amistad me di cuenta de lo que realmente significa la amistad, y para mí ese significado siempre has sido tú.

Quiero decirte que no me arrepiento ni un segundo de haberte hablado ese primer día. Desde entonces hemos vivido tantas cosas juntos, hemos compartido risas, recuerdos y también hemos peleado por tonteras, pero aquí seguimos. Y créeme cuando te digo que no quiero perder nunca tu amistad, mi wachito.

Eres una persona demasiado importante para mí, Feña, de verdad. Te quiero muchísimo, y ese cariño también se ha extendido a tu familia. Siempre me han tratado con mucho cariño y respeto, y les tengo un aprecio gigante a todos. Con el tiempo se han convertido en una segunda familia para mí.

Gracias por cada consejo, por cada risa, por escucharme cuando necesitaba desahogarme y por hacerme sentir acompañada incluso en los días más difíciles. Hay personas que llegan a la vida por un momento, pero tú llegaste para quedarte, y espero de corazón que así siga siendo por muchos años más.

No sé qué nos tenga preparado la vida más adelante, pero sí sé que quiero seguir creando recuerdos contigo, seguir molestándonos, riéndonos de cualquier tontera y apoyándonos como siempre lo hemos hecho. Porque una amistad como la nuestra no se encuentra todos los días, y yo tengo la suerte de haberla encontrado en ti.

Hoy quiero que disfrutes muchísimo tu cumpleaños. Te mereces que este nuevo año de vida venga lleno de alegrías, de salud, de sueños cumplidos y de personas que te quieran tanto como tú las quieres a ellas. Nunca dejes de ser la persona increíble que eres, porque esa forma de ser es la que hace que todos los que te conocemos te valoremos tanto.

Gracias por estos cuatro años de amistad, por estar siempre y por convertirte en ese hermano que la vida no me dio de sangre, pero sí me regaló en el momento indicado.

Te quiero muchísimo, Feña. ❤️

Feliz cumpleaños, mi hermanito. Espero que este sea solo uno de los muchos cumpleaños que tenga la suerte de celebrar contigo.`;

let i = 0;

function escribirCarta(){

if(i < carta.length){

textoCarta.innerHTML += carta.charAt(i);

i++;

setTimeout(escribirCarta,18);

}

}

// =============================
// CORAZONES
// =============================

function crearCorazon(){

const corazon = document.createElement("div");

corazon.className = "corazon";

corazon.innerHTML = "❤️";

corazon.style.left = Math.random()*100 + "vw";

corazon.style.fontSize = (15 + Math.random()*18) + "px";

document.body.appendChild(corazon);

setTimeout(()=>{

corazon.remove();

},8000);

}

setInterval(crearCorazon,600);
