// Fuente única de datos para la sección de Sonidos.
// Antes esta información vivía separada en Galley_Images.jsx (imágenes)
// y sounds.jsx (audios), y ambos archivos se mantenían a mano y por separado.
// Si un "nombre" no coincidía exactamente entre los dos archivos, el botón
// copiaba el comando pero NO reproducía sonido (bug silencioso, sin error en consola).
// Con este archivo alcanza con agregar UNA entrada para tener imagen + audio + comando.
//
// Para agregar un sonido nuevo:
// 1. Colocar la imagen en ./gallery y el audio en ./sounds
// 2. Importar ambos acá abajo
// 3. Agregar una línea en soundsData con { id, image, audio }
//
// audio: null significa que todavía no existe el archivo de audio para ese comando
// (la card se muestra igual y el botón copia el comando, pero avisa que no tiene sonido).

import abrechetada from "./gallery/abrachetada.png";
import abuscarla from "./gallery/abuscarla.png";
import acomerla from "./gallery/acomerla.png";
import alight from "./gallery/alight.png";
import ancrababol from "./gallery/ancrababol.png";
import andar from "./gallery/anda.png";
import apaga from "./gallery/apaga.png";
import aplausos from "./gallery/aplausos.png";
import asiestamos from "./gallery/asiestamos.png";
import ayudame from "./gallery/ayudame.png";
import ayuno from "./gallery/ayuno.png";
import azul from "./gallery/azul.png";
import baño from "./gallery/baño.png";
import basta from "./gallery/basta.png";
import belleza from "./gallery/belleza.png";
import blackpink from "./gallery/blackpink.png";
import blackpinkritual from "./gallery/blackpinkritual.png";
import bobo from "./gallery/bobo.png";
import boton from "./gallery/boton.png";
import boton1 from "./gallery/boton1.png";
import boton2 from "./gallery/boton2.png";
import brasil from "./gallery/brasil.png";
import buenasnoches from "./gallery/buenasnoches.png";
import buenastardes from "./gallery/buenastardes.png";
import buendia from "./gallery/buendia.png";
import cerrar from "./gallery/cerrar.png";
import chanchito from "./gallery/chanchito.png";
import chingona from "./gallery/chingona.png";
import chisme from "./gallery/chisme.png";
import corazon from "./gallery/corazon.png";
import corchazo from "./gallery/corchazo.png";
import correperra from "./gallery/correperra.png";
import cuak from "./gallery/cuak.png";
import cucaracha from "./gallery/cucaracha.png";
import dale from "./gallery/dale.png";
import devoraste from "./gallery/devoraste.png";
import dios from "./gallery/dios.png";
import transmiti from "./gallery/ds.png";
import dulzura from "./gallery/dulzura.png";
import elamor from "./gallery/elamor.png";
import elpecho from "./gallery/elpecho.png";
import eltimer from "./gallery/eltimer.png";
import empalmo from "./gallery/empalmo.png";
import empanada from "./gallery/empanada.png";
import encara from "./gallery/encara.png";
import enfocado from "./gallery/enfocado.png";
import escucharon from "./gallery/escucharon.png";
import ese from "./gallery/reprochando.png";
import fenomenal from "./gallery/fenomenal.png";
import florcita from "./gallery/florcita.png";
import fotosintesis from "./gallery/fotosintesis.png";
import friend from "./gallery/friend.png";
import grash from "./gallery/grash.png";
import grita from "./gallery/grita.png";
import habilitar from "./gallery/habilitar.png";
import haytiempo from "./gallery/haytiempo.png";
import hechizo from "./gallery/hechizo.png";
import hicistes from "./gallery/hiciste.png";
import ilegal from "./gallery/ilegal.png";
import inthearea from "./gallery/inthearea.png";
import jojojo from "./gallery/jojojo.png";
import jugar from "./gallery/jugar.png";
import jungkook from "./gallery/jungkook.png";
import lachancla from "./gallery/lachancla.png";
import lapala from "./gallery/lapala.png";
import lapaloma from "./gallery/lapaloma.png";
import lapava from "./gallery/lapava.png";
import laspibas from "./gallery/laspibas.png";
import lautaro from "./gallery/lautaro.png";
import lehizo from "./gallery/lehizo.png";
import levantarse from "./gallery/levantarse.png";
import levantarte from "./gallery/levantarte.png";
import licuado from "./gallery/licuado.png";
import llorar from "./gallery/llorar.png";
import lobo from "./gallery/lobo.png";
import luooz from "./gallery/loouz.png";
import mate from "./gallery/mate.png";
import mecrees from "./gallery/mecrees.png";
import menor from "./gallery/menor.png";
import meter from "./gallery/meter.png";
import micho from "./gallery/micho.png";
import mira from "./gallery/mira.png";
import moderador from "./gallery/moderador.png";
import nanana from "./gallery/nanana.png";
import necesito from "./gallery/necesito.png";
import nojuego from "./gallery/nojugar.png";
import palini from "./gallery/palini.png";
import papapa from "./gallery/papapa.png";
import para from "./gallery/para.gif";
import pato from "./gallery/pato.png";
import pelotudismo from "./gallery/default.png";
import peta from "./gallery/peta.png";
import pium from "./gallery/pium.png";
import placar from "./gallery/placar.png";
import lalala from "./gallery/psico.png";
import puntitos from "./gallery/puntitos.png";
import quevas from "./gallery/quevas.png";
import rechazo from "./gallery/rechazo.png";
import regalar from "./gallery/regalar.png";
import forro from "./gallery/reprochando.png";
import reza from "./gallery/reza.png";
import risa from "./gallery/risa.png";
import rojo from "./gallery/rojo.png";
import sangre from "./gallery/sangre.png";
import pantallita from "./gallery/señalar.png";
import sexo from "./gallery/sexo.png";
import siuuu from "./gallery/siuuu.png";
import siyase from "./gallery/siyase.png";
import sorbito from "./gallery/sorbito.png";
import sorete from "./gallery/sorete.png";
import yaentendi from "./gallery/sorprendido.png";
import supertuna from "./gallery/supertuna.png";
import qpesado from "./gallery/sorprendido1.png";
import unite from "./gallery/plantar.png";
import unite2 from "./gallery/plantar2.png";
import talleres from "./gallery/talleres.png";
import noo from "./gallery/noo.png";
import bingo from "./gallery/bingo.png";
import lek from "./gallery/lek.png";
import ohparty from "./gallery/ohparty.png";
import vacio from "./gallery/vacio.png";
import muriendo from "./gallery/muriendo.png";
import delicia from "./gallery/delicia.png";
import distinta from "./gallery/distinta.png";
import kame from "./gallery/kame.png";
import jhope from "./gallery/jhope.png";
import llorando from "./gallery/llorando.png";
import desloca from "./gallery/desloca.png";
import fire from "./gallery/fire.png";
import kpop from "./gallery/kpop.png";
import sodapop from "./gallery/sodapop.png";
import aesovine from "./gallery/aesovine.png";
import vospodes from "./gallery/vospodes.png";
import blue from "./gallery/blue.png";
import malasvibras from "./gallery/malasvibras.png";
import fantasma from "./gallery/fantasma.png";
import luz from "./gallery/luz.png";
import gretiado from "./gallery/gretiado.png";
import anulo from "./gallery/anulo.png";
import lacuerpo from "./gallery/lacuerpo.png";
import power from "./gallery/power.png";
import deque from "./gallery/deque.png";
import oprem from "./gallery/oprem.png";
import unapaja from "./gallery/unapaja.png";
import hey from "./gallery/hey.png";
import box from "./gallery/box.png";
import sisepudo from "./gallery/sisepudo.png";
import ayuda from "./gallery/ayuda.png";
import besitos from "./gallery/besitos.png";
import buu from "./gallery/buu.png";
import calmate from "./gallery/calmate.png";
import creo from "./gallery/creo.png";
import derecho from "./gallery/derecho.png";
import estirar from "./gallery/estirar.png";
import lasalita from "./gallery/lasalita.png";
import lee from "./gallery/lee.png";
import nonos from "./gallery/nonos.png";
import pin from "./gallery/pin.png";
import ponele from "./gallery/ponele.png";
import quete from "./gallery/quete.png";
import quieto from "./gallery/quieto.png";
import sahumerio from "./gallery/sahumerio.png";
import sali from "./gallery/sali.png";
import tastiste from "./gallery/tastiste.png";
import tecago from "./gallery/tecago.png";
import tequiero from "./gallery/tequiero.png";
import yallego from "./gallery/yallego.png";
import animochicas from "./gallery/animochicas.png";
import rotas from "./gallery/rotas.png";
import mecaigo from "./gallery/mecaigo.png";
import pentakill from "./gallery/pentakill.png";
import jugada from "./gallery/jugada.png";
import elchancho from "./gallery/elchancho.png";
import paralizado from "./gallery/paralizado.png";
import ardillita from "./gallery/ardillita.png";
import salvaste from "./gallery/salvaste.png";
import porsiempre from "./gallery/porsiempre.png";
import doshoras from "./gallery/doshoras.png";
import wandaaa from "./gallery/wandaaa.png";
import berreta from "./gallery/berreta.png";
import acusado from "./gallery/acusado.png";
import revolucion from "./gallery/revolucion.png";
import hijo from "./gallery/mano.png";
import paraq from "./gallery/default.png";

import abrechetadaAudio from "./sounds/!abrachetada.mp3";
import abuscarlaAudio from "./sounds/!abuscarla.mp3";
import acomerlaAudio from "./sounds/!comerla.mp3";
import alightAudio from "./sounds/!alight.mp3";
import ancrababolAudio from "./sounds/!ancrababol.mp3";
import andaAudio from "./sounds/!anda.mp3";
import apagaAudio from "./sounds/!apaga.mp3";
import aplausosAudio from "./sounds/!aplausos.mp3";
import asiestamosAudio from "./sounds/!asiestamos.mp3";
import ayudameAudio from "./sounds/!ayudame.mp3";
import ayunoAudio from "./sounds/!ayuno.mp3";
import azulAudio from "./sounds/!azul.mp3";
import bañoAudio from "./sounds/!gota.mp3";
import bastaAudio from "./sounds/!basta.mp3";
import bellezaAudio from "./sounds/!belleza.mp3";
import blackpinkAudio from "./sounds/!blackpink.mp3";
import blackpinkritualAudio from "./sounds/!blackpinkritual.mp3";
import boboAudio from "./sounds/!bobo.mp3";
import tukiAudio from "./sounds/!tuki.mp3";
import tuki1Audio from "./sounds/!tuki1.mp3";
import tuki2Audio from "./sounds/!tuki2.mp3";
import brasilAudio from "./sounds/!brasil.mp3";
import buenasnochesAudio from "./sounds/!buenasnoches.mp3";
import buenastardesAudio from "./sounds/!buenastardes.mp3";
import buendiaAudio from "./sounds/!buendia.mp3";
import cerrarAudio from "./sounds/!cerrar.mp3";
import chanchitoAudio from "./sounds/!chanchito.mp3";
import chingonaAudio from "./sounds/!chingona.mp3";
import chismeAudio from "./sounds/!chisme.mp3";
import corazonAudio from "./sounds/!corazon.mp3";
import corchazoAudio from "./sounds/!corchazo.mp3";
import correperraAudio from "./sounds/!correperra.mp3";
import cuakAudio from "./sounds/!cuak.mp3";
import cucarachaAudio from "./sounds/!cucaracha.mp3";
import daleAudio from "./sounds/!dale.mp3";
import devorasteAudio from "./sounds/!devoraste.mp3";
import diosAudio from "./sounds/!dios.mp3";
import transmitiAudio from "./sounds/!ds.mp3";
import dulzuraAudio from "./sounds/!dulzura.mp3";
import elamorAudio from "./sounds/!elamor.mp3";
import elpechoAudio from "./sounds/!elpecho.mp3";
import eltimerAudio from "./sounds/!eltimer.mp3";
import empalmoAudio from "./sounds/!empalmo.mp3";
import empanadaAudio from "./sounds/!empanada.mp3";
import encaraAudio from "./sounds/!encara.mp3";
import enfocadoAudio from "./sounds/!concentrado.mp3";
import escucharonAudio from "./sounds/!escucharon.mp3";
import eseAudio from "./sounds/!ese.mp3";
import fenomenalAudio from "./sounds/!fenomenal.mp3";
import florcitaAudio from "./sounds/!florcita.mp3";
import fotosintesisAudio from "./sounds/!fotosintesis.mp3";
import friendAudio from "./sounds/!friend.mp3";
import grashAudio from "./sounds/!grash.mp3";
import gritaAudio from "./sounds/!grita.mp3";
import habilitarAudio from "./sounds/!gota.mp3";
import haytiempoAudio from "./sounds/!haytiempo.mp3";
import hechizoAudio from "./sounds/!hechizo.mp3";
import hicistesAudio from "./sounds/!hicistes.mp3";
import hijoAudio from "./sounds/!hijo.mp3";
import ilegalAudio from "./sounds/!ilegal.mp3";
import intheareaAudio from "./sounds/!inthearea.mp3";
import jojoAudio from "./sounds/!jojo.mp3";
import jugarAudio from "./sounds/!jugar.mp3";
import jungkookAudio from "./sounds/!jungkook.mp3";
import lachanclaAudio from "./sounds/!lachancla.mp3";
import lapalaAudio from "./sounds/!lapala.mp3";
import lapalomaAudio from "./sounds/!lapaloma.mp3";
import lapavaAudio from "./sounds/!lapava.mp3";
import laspibasAudio from "./sounds/!laspibas.mp3";
import lautaroAudio from "./sounds/!lautaro.mp3";
import lehizoAudio from "./sounds/!lehizo.mp3";
import levantarseAudio from "./sounds/!levantarse.mp3";
import levantarteAudio from "./sounds/!levantarte.mp3";
import licuadoAudio from "./sounds/!licuado.mp3";
import llorarAudio from "./sounds/!llorar.mp3";
import loboAudio from "./sounds/!lobo.mp3";
import luoozAudio from "./sounds/!luooz.mp3";
import mateAudio from "./sounds/!mate.mp3";
import mecreesAudio from "./sounds/!mecrees.mp3";
import menorAudio from "./sounds/!menor.mp3";
import meterAudio from "./sounds/!meter.mp3";
import michoAudio from "./sounds/!micho.mp3";
import miraAudio from "./sounds/!mira.mp3";
import nananaAudio from "./sounds/!nanana.mp3";
import necesitoAudio from "./sounds/!necesito.mp3";
import nojuegoAudio from "./sounds/!nojuego.mp3";
import paliniAudio from "./sounds/!palini.mp3";
import papapaAudio from "./sounds/!papapa.mp3";
import paraAudio from "./sounds/!para.mp3";
import paraqAudio from "./sounds/!paraq.mp3";
import patoAudio from "./sounds/!pato.mp3";
import pelotudismoAudio from "./sounds/!pelotudismo.mp3"
import petaAudio from "./sounds/!peta.mp3";
import piumAudio from "./sounds/!pium.mp3";
import placarAudio from "./sounds/!placar.mp3";
import lalalaAudio from "./sounds/!lalala.mp3";
import puntitosAudio from "./sounds/!puntitos.mp3";
import quevasAudio from "./sounds/!quevas.mp3";
import rechazoAudio from "./sounds/!rechazo.mp3";
import regalarAudio from "./sounds/!regalar.mp3";
import forroAudio from "./sounds/!forro.mp3";
import rezaAudio from "./sounds/!reza.mp3";
import risaAudio from "./sounds/!risa.mp3";
import rojoAudio from "./sounds/!rojo.mp3";
import sangreAudio from "./sounds/!sangre.mp3";
import sexoAudio from "./sounds/!sexo.mp3";
import siuuuAudio from "./sounds/!siuuu.mp3";
import siyaseAudio from "./sounds/!siyase.mp3";
import sorbitoAudio from "./sounds/!sorbito.mp3";
import soreteAudio from "./sounds/!sorete.mp3";
import yaentendiAudio from "./sounds/!yaentendi.mp3";
import supertunaAudio from "./sounds/!supertuna.mp3";
import qpesadoAudio from "./sounds/!qpesado.mp3";
import uniteAudio from "./sounds/!unite.mp3";
import unite2Audio from "./sounds/!unite2.mp3";
import talleresAudio from "./sounds/!talleres.mp3";
import nooAudio from "./sounds/!noo.mp3";
import bingoAudio from "./sounds/!bingo.mp3";
import lekAudio from "./sounds/!lek.mp3";
import ohpartyAudio from "./sounds/!ohparty.mp3";
import vacioAudio from "./sounds/!vacio.mp3";
import muriendoAudio from "./sounds/!muriendo.mp3";
import deliciaAudio from "./sounds/!delicia.mp3";
import distintaAudio from "./sounds/!distinta.mp3";
import kameAudio from "./sounds/!kame.mp3";
import jhopeAudio from "./sounds/!jhope.mp3";
import llorandoAudio from "./sounds/!llorando.mp3";
import deslocaAudio from "./sounds/!desloca.mp3";
import fireAudio from "./sounds/!fire.mp3";
import kpopAudio from "./sounds/!kpop.mp3";
import sodapopAudio from "./sounds/!sodapop.mp3";
import aesovineAudio from "./sounds/!aesovine.mp3";
import vospodesAudio from "./sounds/!vospodes.mp3";
import blueAudio from "./sounds/!blue.mp3";
import malasvibrasAudio from "./sounds/!malasvibras.mp3";
import fantasmaAudio from "./sounds/!fantasma.mp3";
import luzAudio from "./sounds/!luz.mp3";
import gretiadoAudio from "./sounds/!gretiado.mp3";
import anuloAudio from "./sounds/!anulo.mp3";
import lacuerpoAudio from "./sounds/!lacuerpo.mp3";
import powerAudio from "./sounds/!power.mp3";
import dequeAudio from "./sounds/!deque.mp3";
import opremAudio from "./sounds/!oprem.mp3";
import unapajaAudio from "./sounds/!unapaja.mp3";
import heyAudio from "./sounds/!hey.mp3";
import boxAudio from "./sounds/!box.mp3";
import sisepudoAudio from "./sounds/!sisepudo.mp3";
import ayudaAudio from "./sounds/!ayuda.mp3";
import besitosAudio from "./sounds/!besitos.mp3";
import buuAudio from "./sounds/!buu.mp3";
import calmateAudio from "./sounds/!calmate.mp3";
import creoAudio from "./sounds/!creo.mp3";
import derechoAudio from "./sounds/!derecho.mp3";
import estirarAudio from "./sounds/!estirar.mp3";
import lasalitaAudio from "./sounds/!lasalita.mp3";
import leeAudio from "./sounds/!lee.mp3";
import nonosAudio from "./sounds/!nonos.mp3";
import pinAudio from "./sounds/!pin.mp3";
import poneleAudio from "./sounds/!ponele.mp3";
import queteAudio from "./sounds/!quete.mp3";
import quietoAudio from "./sounds/!quieto.mp3";
import sahumerioAudio from "./sounds/!sahumerio.mp3";
import saliAudio from "./sounds/!sali.mp3";
import tastisteAudio from "./sounds/!tastiste.mp3";
import tecagoAudio from "./sounds/!tecago.mp3";
import tequieroAudio from "./sounds/!tequiero.mp3";
import yallegoAudio from "./sounds/!yallego.mp3";
import animochicasAudio from "./sounds/!animochicas.mp3";
import rotasAudio from "./sounds/!rotas.mp3";
import mecaigoAudio from "./sounds/!mecaigo.mp3";
import pentakillAudio from "./sounds/!pentakill.mp3";
import jugadaAudio from "./sounds/!jugada.mp3";
import elchanchoAudio from "./sounds/!elchancho.mp3";
import paralizadoAudio from "./sounds/!paralizado.mp3";
import ardillitaAudio from "./sounds/!ardillita.mp3";
import salvasteAudio from "./sounds/!salvaste.mp3";
import porsiempreAudio from "./sounds/!porsiempre.mp3";
import doshorasAudio from "./sounds/!doshoras.mp3";
import wandaaaAudio from "./sounds/!wandaaa.mp3";
import berretaAudio from "./sounds/!berreta.mp3";
import acusadoAudio from "./sounds/!acusado.mp3";
import revolucionAudio from "./sounds/!revolucion.mp3";
import pantallitaAudio from "./sounds/!pantallita.mp3"; 

const soundsData = [
  { id: "abrechetada", image: abrechetada, audio: abrechetadaAudio },
  { id: "abuscarla", image: abuscarla, audio: abuscarlaAudio },
  { id: "acomerla", image: acomerla, audio: acomerlaAudio },
  { id: "alight", image: alight, audio: alightAudio },
  { id: "ancrababol", image: ancrababol, audio: ancrababolAudio },
  { id: "anda", image: andar, audio: andaAudio },
  { id: "apaga", image: apaga, audio: apagaAudio },
  { id: "aplausos", image: aplausos, audio: aplausosAudio },
  { id: "asiestamos", image: asiestamos, audio: asiestamosAudio },
  { id: "ayudame", image: ayudame, audio: ayudameAudio },
  { id: "ayuno", image: ayuno, audio: ayunoAudio },
  { id: "azul", image: azul, audio: azulAudio },
  { id: "baño", image: baño, audio: bañoAudio },
  { id: "basta", image: basta, audio: bastaAudio },
  { id: "belleza", image: belleza, audio: bellezaAudio },
  { id: "blackpink", image: blackpink, audio: blackpinkAudio },
  { id: "blackpinkritual", image: blackpinkritual, audio: blackpinkritualAudio },
  { id: "bobo", image: bobo, audio: boboAudio },
  { id: "tuki", image: boton, audio: tukiAudio },
  { id: "tuki1", image: boton1, audio: tuki1Audio },
  { id: "tuki2", image: boton2, audio: tuki2Audio },
  { id: "brasil", image: brasil, audio: brasilAudio },
  { id: "buenasnoches", image: buenasnoches, audio: buenasnochesAudio },
  { id: "buenastardes", image: buenastardes, audio: buenastardesAudio },
  { id: "buendia", image: buendia, audio: buendiaAudio },
  { id: "cerrar", image: cerrar, audio: cerrarAudio },
  { id: "chanchito", image: chanchito, audio: chanchitoAudio },
  { id: "chingona", image: chingona, audio: chingonaAudio },
  { id: "chisme", image: chisme, audio: chismeAudio },
  { id: "corazon", image: corazon, audio: corazonAudio },
  { id: "corchazo", image: corchazo, audio: corchazoAudio },
  { id: "correperra", image: correperra, audio: correperraAudio },
  { id: "cuak", image: cuak, audio: cuakAudio },
  { id: "cucaracha", image: cucaracha, audio: cucarachaAudio },
  { id: "dale", image: dale, audio: daleAudio },
  { id: "devoraste", image: devoraste, audio: devorasteAudio },
  { id: "dios", image: dios, audio: diosAudio },
  { id: "transmiti", image: transmiti, audio: transmitiAudio },
  { id: "dulzura", image: dulzura, audio: dulzuraAudio },
  { id: "elamor", image: elamor, audio: elamorAudio },
  { id: "elpecho", image: elpecho, audio: elpechoAudio },
  { id: "eltimer", image: eltimer, audio: eltimerAudio },
  { id: "empalmo", image: empalmo, audio: empalmoAudio },
  { id: "empanada", image: empanada, audio: empanadaAudio },
  { id: "encara", image: encara, audio: encaraAudio },
  { id: "enfocado", image: enfocado, audio: enfocadoAudio },
  { id: "escucharon", image: escucharon, audio: escucharonAudio },
  { id: "ese", image: ese, audio: eseAudio },
  { id: "fenomenal", image: fenomenal, audio: fenomenalAudio },
  { id: "florcita", image: florcita, audio: florcitaAudio },
  { id: "fotosintesis", image: fotosintesis, audio: fotosintesisAudio },
  { id: "friend", image: friend, audio: friendAudio },
  { id: "grash", image: grash, audio: grashAudio },
  { id: "grita", image: grita, audio: gritaAudio },
  { id: "habilitar", image: habilitar, audio: habilitarAudio },
  { id: "haytiempo", image: haytiempo, audio: haytiempoAudio },
  { id: "hechizo", image: hechizo, audio: hechizoAudio },
  { id: "hicistes", image: hicistes, audio: hicistesAudio },
  { id: "ilegal", image: ilegal, audio: ilegalAudio },
  { id: "inthearea", image: inthearea, audio: intheareaAudio },
  { id: "jojojo", image: jojojo, audio: jojoAudio },
  { id: "jugar", image: jugar, audio: jugarAudio },
  { id: "jungkook", image: jungkook, audio: jungkookAudio },
  { id: "lachancla", image: lachancla, audio: lachanclaAudio },
  { id: "lapala", image: lapala, audio: lapalaAudio },
  { id: "lapaloma", image: lapaloma, audio: lapalomaAudio },
  { id: "lapava", image: lapava, audio: lapavaAudio },
  { id: "laspibas", image: laspibas, audio: laspibasAudio },
  { id: "lautaro", image: lautaro, audio: lautaroAudio },
  { id: "lehizo", image: lehizo, audio: lehizoAudio },
  { id: "levantarse", image: levantarse, audio: levantarseAudio },
  { id: "levantarte", image: levantarte, audio: levantarteAudio },
  { id: "licuado", image: licuado, audio: licuadoAudio },
  { id: "llorar", image: llorar, audio: llorarAudio },
  { id: "lobo", image: lobo, audio: loboAudio },
  { id: "luooz", image: luooz, audio: luoozAudio },
  { id: "hijo", image: hijo, audio: hijoAudio },
  { id: "mate", image: mate, audio: mateAudio },
  { id: "mecrees", image: mecrees, audio: mecreesAudio },
  { id: "menor", image: menor, audio: menorAudio },
  { id: "meter", image: meter, audio: meterAudio },
  { id: "micho", image: micho, audio: michoAudio },
  { id: "mira", image: mira, audio: miraAudio },
  { id: "moderador", image: moderador, audio: null },
  { id: "nanana", image: nanana, audio: nananaAudio },
  { id: "necesito", image: necesito, audio: necesitoAudio },
  { id: "nojuego", image: nojuego, audio: nojuegoAudio },
  { id: "palini", image: palini, audio: paliniAudio },
  { id: "pantallita", image: pantallita, audio: pantallitaAudio },
  { id: "papapa", image: papapa, audio: papapaAudio },
  { id: "para", image: para, audio: paraAudio },
  { id: "paraq", image: paraq, audio: paraqAudio },
  { id: "pato", image: pato, audio: patoAudio },
  { id: "pelotudismo", image: pelotudismo, audio: pelotudismoAudio },
  { id: "peta", image: peta, audio: petaAudio },
  { id: "pium", image: pium, audio: piumAudio },
  { id: "placar", image: placar, audio: placarAudio },
  { id: "lalala", image: lalala, audio: lalalaAudio },
  { id: "puntitos", image: puntitos, audio: puntitosAudio },
  { id: "quevas", image: quevas, audio: quevasAudio },
  { id: "rechazo", image: rechazo, audio: rechazoAudio },
  { id: "regalar", image: regalar, audio: regalarAudio },
  { id: "forro", image: forro, audio: forroAudio },
  { id: "reza", image: reza, audio: rezaAudio },
  { id: "risa", image: risa, audio: risaAudio },
  { id: "rojo", image: rojo, audio: rojoAudio },
  { id: "sangre", image: sangre, audio: sangreAudio },
  { id: "sexo", image: sexo, audio: sexoAudio },
  { id: "siuuu", image: siuuu, audio: siuuuAudio },
  { id: "siyase", image: siyase, audio: siyaseAudio },
  { id: "sorbito", image: sorbito, audio: sorbitoAudio },
  { id: "sorete", image: sorete, audio: soreteAudio },
  { id: "yaentendi", image: yaentendi, audio: yaentendiAudio },
  { id: "supertuna", image: supertuna, audio: supertunaAudio },
  { id: "qpesado", image: qpesado, audio: qpesadoAudio },
  { id: "unite", image: unite, audio: uniteAudio },
  { id: "unite2", image: unite2, audio: unite2Audio },
  { id: "talleres", image: talleres, audio: talleresAudio },
  { id: "noo", image: noo, audio: nooAudio },
  { id: "bingo", image: bingo, audio: bingoAudio },
  { id: "lek", image: lek, audio: lekAudio },
  { id: "ohparty", image: ohparty, audio: ohpartyAudio },
  { id: "vacio", image: vacio, audio: vacioAudio },
  { id: "muriendo", image: muriendo, audio: muriendoAudio },
  { id: "delicia", image: delicia, audio: deliciaAudio },
  { id: "distinta", image: distinta, audio: distintaAudio },
  { id: "kame", image: kame, audio: kameAudio },
  { id: "jhope", image: jhope, audio: jhopeAudio },
  { id: "llorando", image: llorando, audio: llorandoAudio },
  { id: "desloca", image: desloca, audio: deslocaAudio },
  { id: "fire", image: fire, audio: fireAudio },
  { id: "kpop", image: kpop, audio: kpopAudio },
  { id: "sodapop", image: sodapop, audio: sodapopAudio },
  { id: "aesovine", image: aesovine, audio: aesovineAudio },
  { id: "vospodes", image: vospodes, audio: vospodesAudio },
  { id: "blue", image: blue, audio: blueAudio },
  { id: "malasvibras", image: malasvibras, audio: malasvibrasAudio },
  { id: "fantasma", image: fantasma, audio: fantasmaAudio },
  { id: "luz", image: luz, audio: luzAudio },
  { id: "gretiado", image: gretiado, audio: gretiadoAudio },
  { id: "anulo", image: anulo, audio: anuloAudio },
  { id: "lacuerpo", image: lacuerpo, audio: lacuerpoAudio },
  { id: "power", image: power, audio: powerAudio },
  { id: "deque", image: deque, audio: dequeAudio },
  { id: "oprem", image: oprem, audio: opremAudio },
  { id: "unapaja", image: unapaja, audio: unapajaAudio },
  { id: "hey", image: hey, audio: heyAudio },
  { id: "box", image: box, audio: boxAudio },
  { id: "sisepudo", image: sisepudo, audio: sisepudoAudio },
  { id: "ayuda", image: ayuda, audio: ayudaAudio },
  { id: "besitos", image: besitos, audio: besitosAudio },
  { id: "buu", image: buu, audio: buuAudio },
  { id: "calmate", image: calmate, audio: calmateAudio },
  { id: "creo", image: creo, audio: creoAudio },
  { id: "derecho", image: derecho, audio: derechoAudio },
  { id: "estirar", image: estirar, audio: estirarAudio },
  { id: "lasalita", image: lasalita, audio: lasalitaAudio },
  { id: "lee", image: lee, audio: leeAudio },
  { id: "nonos", image: nonos, audio: nonosAudio },
  { id: "pin", image: pin, audio: pinAudio },
  { id: "ponele", image: ponele, audio: poneleAudio },
  { id: "quete", image: quete, audio: queteAudio },
  { id: "quieto", image: quieto, audio: quietoAudio },
  { id: "sahumerio", image: sahumerio, audio: sahumerioAudio },
  { id: "sali", image: sali, audio: saliAudio },
  { id: "tastiste", image: tastiste, audio: tastisteAudio },
  { id: "tecago", image: tecago, audio: tecagoAudio },
  { id: "tequiero", image: tequiero, audio: tequieroAudio },
  { id: "yallego", image: yallego, audio: yallegoAudio },
  { id: "animochicas", image: animochicas, audio: animochicasAudio },
  { id: "rotas", image: rotas, audio: rotasAudio },
  { id: "mecaigo", image: mecaigo, audio: mecaigoAudio },
  { id: "pentakill", image: pentakill, audio: pentakillAudio },
  { id: "jugada", image: jugada, audio: jugadaAudio },
  { id: "elchancho", image: elchancho, audio: elchanchoAudio },
  { id: "paralizado", image: paralizado, audio: paralizadoAudio },
  { id: "ardillita", image: ardillita, audio: ardillitaAudio },
  { id: "salvaste", image: salvaste, audio: salvasteAudio },
  { id: "porsiempre", image: porsiempre, audio: porsiempreAudio },
  { id: "doshoras", image: doshoras, audio: doshorasAudio },
  { id: "wandaaa", image: wandaaa, audio: wandaaaAudio },
  { id: "berreta", image: berreta, audio: berretaAudio },
  { id: "acusado", image: acusado, audio: acusadoAudio },
  { id: "revolucion", image: revolucion, audio: revolucionAudio },
];

export default soundsData;
