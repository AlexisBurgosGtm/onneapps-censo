let root = document.getElementById('root');
let rootMenu = document.getElementById('rootMenu');

let lbMenuTitulo = document.getElementById('lbMenuTitulo');
let rootMenuLateral = document.getElementById('rootMenuLateral');
const showMenuLateral =(titulo)=>{ $("#modalMenu").modal('show'); lbMenuTitulo.innerText = titulo;};
const hideMenuLateral =()=>{ $("#modalMenu").modal('hide'); lbMenuTitulo.innerText = '';};

let divUsuario = document.getElementById('divUsuario');
let lbTipo = document.getElementById('lbTipo');

divUsuario.innerText = "DESCONECTADO";
lbTipo.innerText = "Inicie sesión";



let GlobalCodUsuario = 99999;
let GlobalUsuario = 'ONNE';
let GlobalNivelUser = 0;
let GlobalTipoUsuario ='';
let GlobalSelectedDia ='';
let GlobalBool = false;
let GlobalOnline = 'NO'; //SI o NO para indicar si estoy editando Online


let GlobalSelectedForm = '';

let map; //mapa de leaflet
let GlobalGpsLat = 0;
let GlobalGpsLong = 0;
let GlobalSelectedId;
let GlobalSelectedCodigo;
let GlobalSelectedFecha;
let GlobalCoddoc = 'PED01';
let GlobalTotalDocumento = 0;
let GlobalTotalCostoDocumento = 0;
let GlobalCodBodega = '01';
let GlobalTipoCobro = 'TERMINAR';

let GlobalSelectedCodven = 0;

let GlobalSelectedCodCliente;
let GlobalSelectedNomCliente;
let GlobalSelectedDirCliente;


let GlobalSelectedApp = '';

let GlobalSistema = 'ISC';

let GlobalLoader = `
                <div>
                    <div class="spinner-border text-secondary" role="status"><span class="sr-only">Loading...</span></div>
                    <div class="spinner-border text-secondary" role="status"><span class="sr-only">Loading...</span></div>
                    <div class="spinner-border text-secondary" role="status"><span class="sr-only">Loading...</span></div>
                    <div class="spinner-border text-secondary" role="status"><span class="sr-only">Loading...</span></div>
                </div>
                `



let GlobalToken = '';
let GlobalCodSucursal = '';
let GlobalEmpnit = '';
let GlobalEmpNombre = '';