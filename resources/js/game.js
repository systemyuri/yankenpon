const ELECCION_PIEDRA=1;
const ELECCION_PAPEL=2;
const ELECCION_TIJERA=3;

const RESULTADO_GANO_PC=1;
const RESULTADO_GANO_JUGADOR=2;
const RESULTADO_EMPATE=0;

let puntajeJugador=0;
let puntajePC=0;

function seleccionarPC(){
    let className="";
    let opcion = parseInt(Math.random()*4);
    if(opcion==0){
        opcion=1;
    }
    
    switch(opcion){
        case ELECCION_PIEDRA: className="opcion opcionPiedra"; break;
        case ELECCION_PAPEL: className="opcion opcionPapel"; break;
        case ELECCION_TIJERA: className="opcion opcionTijera"; break;
    }
    document.getElementById("opcionPC").className=className;
    return opcion;
}

function evaluarJugada(opcionPC, opcionJugador){
    let resultado = RESULTADO_EMPATE;    
    switch(opcionPC){
        case ELECCION_PIEDRA:
            switch(opcionJugador){
                case ELECCION_TIJERA: 
                    resultado=RESULTADO_GANO_PC;
                    break;
                case ELECCION_PAPEL: 
                    resultado=RESULTADO_GANO_JUGADOR;
                    break;
                default:
                    break;
            }
            break;
        case ELECCION_PAPEL: 
            switch(opcionJugador){
                case ELECCION_PIEDRA: 
                    resultado=RESULTADO_GANO_PC;
                    break;
                case ELECCION_TIJERA: 
                    resultado=RESULTADO_GANO_JUGADOR;
                    break;
                default:
                    break;
            }
            break;
        case ELECCION_TIJERA:
            switch(opcionJugador){
                case ELECCION_PAPEL: 
                    resultado=RESULTADO_GANO_PC;
                    break;
                case ELECCION_PIEDRA: 
                    resultado=RESULTADO_GANO_JUGADOR;
                    break;
                default:
                    break;
            }
            break;
        default:
            break;    
    }
    return resultado;
}

function elegirGanador(opcionPC, opcionJugador){    
    let mensaje;
    let className="";
    try{
        switch(evaluarJugada(opcionPC,opcionJugador)){
            case RESULTADO_GANO_PC:        
                puntajePC++;
                mensaje="Perdio con la Maquina.";
                className="mensajePerdedor";
                break;
            case RESULTADO_GANO_JUGADOR:
                puntajeJugador++;
                mensaje="Gano a la Maquina.";
                className="mensajeGanador";
                break;
            default:
                mensaje="Empato con la Maquina.";
                puntajePC++;
                puntajeJugador++;
                className="mensajeEmpate";
                break;
        }
        document.getElementById("resultadoJugador").innerHTML=puntajeJugador;
        document.getElementById("resultadoPC").innerHTML=puntajePC;
        document.getElementById("estado").innerHTML=mensaje;
        document.getElementById("estado").className=className;
    }catch(err){
        alert(err);
    }
}

function seleccionar(opcion){
    let className="";
    let opcionPC;
    switch(opcion){
        case ELECCION_PIEDRA: className="opcion opcionPiedra"; break;
        case ELECCION_PAPEL: className="opcion opcionPapel"; break;
        case ELECCION_TIJERA: className="opcion opcionTijera"; break;
    }
    document.getElementById("opcionJugador").className=className;

    opcionPC = seleccionarPC();

    elegirGanador(opcionPC, opcion);
}

function reiniciar(){
    puntajeJugador=0;
    puntajePC=0;    
    document.getElementById("opcionJugador").className="opcion"; 
    document.getElementById("opcionPC").className="opcion"; 
    document.getElementById("resultadoJugador").innerHTML=puntajeJugador;
    document.getElementById("resultadoPC").innerHTML=puntajePC;
    document.getElementById("estado").innerHTML="ELIJE UNA OPCION:";
    document.getElementById("estado").className="";
}