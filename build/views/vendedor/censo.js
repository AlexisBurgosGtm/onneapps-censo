function getView(){
    let view = {
        tabsClientes :()=>{
            return `
            <div class="panel-container show">
                <div class="panel-content">
                    <ul class="nav nav-pills nav-justified" role="tablist">
                        <li class="nav-item hidden"><a class="nav-link active" data-toggle="tab" href="#panelListado" id="btnTabListado">Listado</a></li>
                        <li class="nav-item hidden"><a class="nav-link" data-toggle="tab" href="#panelNuevo" id="btnTabNuevo">Nuevo</a></li>
                        <li class="nav-item hidden"><a class="nav-link" data-toggle="tab" href="#panelUbicacion" id="btnTabUbicacion">Ubicación</a></li>
                    </ul>
                    <div class="tab-content py-3">

                        <div class="tab-pane fade active show" id="panelListado" role="tabpanel">
                            <div class="row">
                                <div class="col-auto">
                                    <div class="form-group">
                                        <label>Día de Visita</label>
                                        <select class="form-control" id="cmbDiaVisita">
                                        </select>
                                    </div>
                                </div>
                                <div class="col-auto">
                                    <div class="form-group">
                                        <label>Lista</label>
                                        <select class="form-control" id="cmbTipoLista">
                                            <option value="NOENVIADOS">SIN ENVIAR</option>
                                            <option value="PENDIENTES">PENDIENTES DE GENERAR</option>
                                            <option value="ENVIADOS">CLIENTES GENERADOS</option>
                                            <option value="RESUMEN">RESUMEN</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div class="row" id="listadoContainer">
                    
                            </div>

                            <div class="shortcut-menu align-left">
                                <button class="btn btn-success btn-circle btn-xl" id="btnNuevoCliente">
                                    <i class="fal fa-plus"></i>
                                </button>
                            </div>

                        </div>
                        
                        <div class="tab-pane fade" id="panelNuevo" role="tabpanel">
                            

                        </div>

                        <div class="tab-pane fade" id="panelUbicacion" role="tabpanel">
                            <div class="mapcontainer2 col-12" id="mapcontainer"></div>
                            <div class="shortcut-menu align-left">
                                <button class="btn btn-info btn-lg" id="btnNuevoClienteUbicacion">
                                    <i class="fal fa-check"></i>Confirmar Ubicación
                                </button>
                            </div>
                        </div>
   
                    </div>
                </div>
            </div>
            `
        },
        formNuevo:()=>{
            return `
                            <div class="card shadow col-12">
                                <br>        
                                <div class="row">
                                    <div class="col-auto">
                                        <div class="form-group">
                                            <label>Codigo:</label>
                                            <input id="txtCodigo" class="form-control" type="text" placeholder="Código automático"  maxlenght="20">  
                                        </div>
                                    </div>
                                    <div class="col-auto">
                                        <div class="form-group">
                                            <label>NIT:</label>
                                            <input id="txtNit" class="form-control" type="text" placeholder="Escriba el NIT ..."  maxlenght="20">
                                        </div>    
                                    </div>
                                    <div class="col-auto">
                                        <div class="form-group">
                                            <label>Visita:</label>
                                            <select id="cmbVisitaCliente" class="form-control"></select>
                                        </div>    
                                    </div>   
                                    
                                </div>
                                <br>
                                
                                <div class="form-group">
                                    <label>Negocio/Establecimiento:</label>
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                            <select class="form-control" id="cmbTipoNegocio">
                                                
                                            </select>
                                        </div>
                                        <input id="txtNegocio" class="form-control" type="text" placeholder="nombre del negocio"  maxlenght="150">
                                                
                                    </div>
                                </div>

                                                                
                                <br>
                                <div class="form-group">
                                    <label>Nombre y Apellido:</label>
                                    <input id="txtNomcliente" class="form-control" type="text" maxlenght="200" placeholder="nombre completo">
                                </div>

                                <div class="form-group">
                                    <label>Dirección:</label>
                                    <input id="txtDircliente" class="form-control" type="text" maxlenght="250" placeholder="Dirección cliente...">
                                </div>
                                <br>
                                
                                <div class="form-group">
                                    <label>Referencia:</label>
                                    <input id="txtReferencia" class="form-control" type="text" maxlenght="250" placeholder="Referencia del cliente...">
                                </div>
                                <br>

                                <div class="form-group">
                                    <label>Sector:</label>
                                    <select class="form-control col-6" id="cmbSector">
                                        <option value="A">A</option>
                                        <option value="B">B</option>
                                        <option value="C">C</option>
                                        <option value="D">D</option>
                                        <option value="E">E</option>
                                        <option value="F">F</option>
                                        <option value="G">G</option>
                                        <option value="H">H</option>
                                        <option value="I">I</option>
                                        <option value="J">J</option>
                                    </select>
                                </div>
                                <br>

                                <div class="row">
                                    <div class="col-6">
                                        <div class="form-group">
                                            <label>Municipio:</label>
                                            <select id="cmbMunicipio" class="form-control">
                                            </select>
                                        </div>    
                                    </div>
                                    <div class="col-6">
                                        <div class="form-group">
                                            <label>Departamento:</label>
                                            <select id="cmbDepartamento" class="form-control">
                                            </select>
                                        </div>    
                                    </div>
                                </div>
                                <br>
                                <div class="row">
                                    <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                        <div class="form-group">
                                            <label>Vendedor:</label>
                                            <select id="cmbVendedor" class="form-control">
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                    
                                        <div class="form-group">
                                            <label>Telefonos:</label>
                                            <input id="txtTelefono"  maxlength="8" class="form-control" type="number" placeholder="Telefono cliente">
                                        </div>
                                    
                                    </div>
                                </div>
                                <br>
                                <div class="form-group">
                                    <label>Observaciones:</label>
                                    <textarea rows="4" id="txtObs" class="form-control" maxlenght="250"></textarea>
                                </div>
                                <div class="row">
                                    <div class="col-5">
                                        <div class="form-group">
                                            <label>Latitud:</label>
                                            <label class="text-info" id="txtLatitud">0</label>
                                        </div>
                                    </div>
                                    <div class="col-5">
                                        <div class="form-group">
                                            <label>Longitud:</label>
                                            <label class="text-info" id="txtLongitud">0</label>
                                        </div>
                                    </div>
                                    <div class="col-2">
                                        <div class="form-group">
                                            <button class="btn btn-circle btn-danger" id="btnUbicacion">
                                                <i class="fal fa-map-marker"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <br>
                                <br>
                                <div class="row">
                                    <div class="col-6">
                                        <button id="btnCancelar" class="btn btn-warning btn-xl btn-circle shadow" data-dismiss="modal">
                                            <i class="fal fa-angle-double-left"></i>
                                            
                                        </button>
                                    </div>
                                    <div class="col-6">
                                        <button id="btnGuardar" class="btn btn-info btn-xl btn-circle shadow">
                                            <i class="fal fa-save"></i> 
                                            
                                        </button>
                                    </div>
                                </div>
                                <br><br>
                            </div>
            `
        },
    };

    root.innerHTML = view.tabsClientes();
    document.getElementById('panelNuevo').innerHTML = view.formNuevo();
};

async function addListeners(){

    GlobalBool = false;

    let cmbDiaVisita = document.getElementById('cmbDiaVisita');
    cmbDiaVisita.innerHTML = f.ComboSemana("LETRAS");
    
    let cmbVisitaCliente = document.getElementById('cmbVisitaCliente');
    cmbVisitaCliente.innerHTML = cmbDiaVisita.innerHTML;

    let cmbTipoLista = document.getElementById('cmbTipoLista');
    cmbTipoLista.addEventListener('change', ()=>{

        switch (cmbTipoLista.value) {
            case 'NOENVIADOS':
                classDb.SelectCenso(cmbDiaVisita.value,GlobalCodUsuario,'listadoContainer');    
                break;
            case 'ENVIADOS':
                fcnCensoListado(GlobalCodSucursal, GlobalCodUsuario, cmbDiaVisita.value, 'listadoContainer');
                break;
            case 'PENDIENTES':
                fcnCensoListadoPendientes(GlobalCodSucursal, GlobalCodUsuario, cmbDiaVisita.value, 'listadoContainer');
                break;
            case 'RESUMEN':
                fcnCensoResumen(GlobalCodSucursal, GlobalCodUsuario, cmbDiaVisita.value, 'listadoContainer');
                break;
            default:
                classDb.SelectCenso(cmbDiaVisita.value,GlobalCodUsuario,'listadoContainer');    
                break;
        }

        /* 
        if(cmbTipoLista.value == 'NOENVIADOS'){
            classDb.SelectCenso(cmbDiaVisita.value,GlobalCodUsuario,'listadoContainer');
        }else{
            fcnCensoListado(GlobalCodSucursal, GlobalCodUsuario, cmbDiaVisita.value, 'listadoContainer');
        }
        */
    })

    let cmbTipoNegocio = document.getElementById('cmbTipoNegocio')
    cmbTipoNegocio.innerHTML = f.getComboTipoClientes();

    let fe = new Date();
    cmbDiaVisita.value = f.getDiaSemana(fe.getDay());
    cmbVisitaCliente.value = f.getDiaSemana(fe.getDay());


    cmbDiaVisita.addEventListener('change',async ()=>{
        cmbVisitaCliente.value = cmbDiaVisita.value;
        //fcnCensoListado(GlobalCodSucursal, GlobalCodUsuario, cmbDiaVisita.value, 'listadoContainer');
        if(cmbTipoLista.value == 'NOENVIADOS'){
            classDb.SelectCenso(cmbDiaVisita.value,GlobalCodUsuario,'listadoContainer');
        }else{
            fcnCensoListado(GlobalCodSucursal, GlobalCodUsuario, cmbDiaVisita.value, 'listadoContainer');
        }

    });

    let btnNuevoClienteUbicacion = document.getElementById('btnNuevoClienteUbicacion');

    let btnNuevoCliente = document.getElementById('btnNuevoCliente');
    btnNuevoCliente.addEventListener('click',()=>{
        document.getElementById('btnTabUbicacion').click();
        
        fcnCleanDataCliente();

        document.getElementById('cmbVendedor').value = GlobalCodUsuario;
        //RE-AJUSTA EL MAPA A LA PANTALLA
        setTimeout(function () {
            try {
                map.invalidateSize();    
            } catch (error) {
                
            }
        }, 500);

    });

    
    btnNuevoClienteUbicacion.addEventListener('click',()=>{
        document.getElementById('btnTabNuevo').click();        
        
        
        
    });

    
    let btnUbicacion = document.getElementById('btnUbicacion');
    btnUbicacion.addEventListener('click',()=>{
        document.getElementById('btnTabUbicacion').click();
        //RE-AJUSTA EL MAPA A LA PANTALLA
        setTimeout(function () {
            try {
                map.invalidateSize();    
            } catch (error) {
                
            }
        }, 500);
    });

    //carga el listado de clientes en el censo
    //fcnCensoListado(GlobalCodSucursal, GlobalCodUsuario, cmbDiaVisita.value, 'listadoContainer');
    classDb.SelectCenso(cmbDiaVisita.value,GlobalCodUsuario,'listadoContainer');

    //carga la ubicación actual y general el mapa
    showUbicacion()
    .then((location)=>{
            let lat = location.coords.latitude.toString();
            let longg = location.coords.longitude.toString();
            map = Lmap(Number(lat),Number(longg));
    });

    let btnCancelar = document.getElementById('btnCancelar');
    btnCancelar.addEventListener('click',()=>{
        fcnCleanDataCliente();
        document.getElementById('btnTabListado').click();
    });

    let btnGuardar = document.getElementById('btnGuardar');
    btnGuardar.addEventListener('click',()=>{
        let cmbTipoLista = document.getElementById('cmbTipoLista');

        if(GlobalBool==false){

           
                //document.getElementById('btnGuardar').innerHTML = '<i class="fal fa-save"></i>';

                f.Confirmacion('¿Está seguro que desea GUARDAR este Cliente?')
                .then((value)=>{
                    if(value==true){

                        document.getElementById('btnGuardar').disabled = true;
                        document.getElementById('btnGuardar').innerHTML = '<i class="fal fa-save fa-spin">'; 

                        fcnGuardarCliente()
                        .then(()=>{
                            GlobalBool = false;
                            document.getElementById('btnTabListado').click();
                            fcnCleanDataCliente();
                            
                            if(cmbTipoLista.value == 'NOENVIADOS'){
                                classDb.SelectCenso(cmbDiaVisita.value,GlobalCodUsuario,'listadoContainer');
                            }else{
                                fcnCensoListado(GlobalCodSucursal, GlobalCodUsuario, cmbDiaVisita.value, 'listadoContainer');
                            };

                            f.Aviso('Cliente Creado exitosamente!!');

                            document.getElementById('btnGuardar').disabled = false;
                            document.getElementById('btnGuardar').innerHTML = '<i class="fal fa-save"></i>';

                        })
                        .catch((error)=>{
                            console.log(error);

                            f.AvisoError('Guardando cliente en el teléfono, deberá enviarse después');
                            //se intenta guardar el cliente localmente dado que no hay conexión al host
                            fcnGuardarClienteLocal()
                            .then(()=>{
                                GlobalBool = false;
                                document.getElementById('btnTabListado').click();   
                                fcnCleanDataCliente();
                            
                                if(cmbTipoLista.value == 'NOENVIADOS'){
                                    classDb.SelectCenso(cmbDiaVisita.value,GlobalCodUsuario,'listadoContainer');
                                }else{
                                    fcnCensoListado(GlobalCodSucursal, GlobalCodUsuario, cmbDiaVisita.value, 'listadoContainer');
                                };

                                f.Aviso('Cliente Creado exitosamente!!');

                                document.getElementById('btnGuardar').disabled = false;
                                document.getElementById('btnGuardar').innerHTML = '<i class="fal fa-save"></i>';
                            })
                            .catch(()=>{
                                document.getElementById('btnGuardar').disabled = false;
                                document.getElementById('btnGuardar').innerHTML = '<i class="fal fa-save"></i>';
                            })
                            
                        })
                        
                    }
                })
            
        }else{
            if(GlobalOnline=='NO'){ //los edita de forma local
                f.Confirmacion('¿Está seguro que desea EDITAR este Cliente?')
                .then((value)=>{
                    if(value==true){
        
                        fcnEditarCliente()
                        .then(()=>{
                            GlobalBool = false;
                            document.getElementById('btnTabListado').click();
                            fcnCleanDataCliente();
    
                            //fcnCensoListado(GlobalCodSucursal, GlobalCodUsuario, cmbDiaVisita.value, 'listadoContainer');
                            classDb.SelectCenso(cmbDiaVisita.value,GlobalCodUsuario,'listadoContainer');
    
                            f.Aviso('Cliente Editado exitosamente!!');
                            document.getElementById('txtCodigo').disabled = false;
                        })
                        .catch(()=>{
                            f.AvisoError('No se pudo editar el cliente, consulte a servicio técnico')
                        })
                        
                    }
                });
            }else{ //los edita Online
                f.Confirmacion('¿Está seguro que desea EDITAR este Cliente en la Nube?')
                .then((value)=>{
                    if(value==true){
        
                        fcnEditarClienteOnline()
                        .then(()=>{
                            GlobalBool = false;
                            document.getElementById('btnTabListado').click();
                            fcnCleanDataCliente();
    
                            fcnCensoListado(GlobalCodSucursal, GlobalCodUsuario, cmbDiaVisita.value, 'listadoContainer');
                            //classDb.SelectCenso(cmbDiaVisita.value,GlobalCodUsuario,'listadoContainer');
    
                            f.Aviso('Cliente Editado exitosamente!!');
                            document.getElementById('txtCodigo').disabled = false;
                        })
                        .catch(()=>{
                            f.AvisoError('No se pudo editar el cliente, consulte a servicio técnico')
                        })
                        
                    }
                });
            }
        }
        
    });

    //VERIFICACION DE CÓDIGO DE CLIENTE
    let txtCodigo = document.getElementById('txtCodigo');
    

    await getComboMunicipios('cmbMunicipio');
    await getComboDepartamentos('cmbDepartamento');  

    await api.comboVendedores(GlobalCodSucursal,'cmbVendedor');
    
    document.getElementById('txtCodigo').disabled = true;

    //inicializa la animación en las tabs
    slideAnimationTabs();

};

function verifyCodigoCliente(codclie){
    
    return new Promise((resolve,reject)=>{
        axios.post('/censo/verificar',{
            sucursal:GlobalCodSucursal,
            codclie:Number(codclie)
        })
        .then((response) => {
            
            let data = response.data;
            if(Number(data.rowsAffected[0])>0){
                reject();
            }else{
                resolve();
            };
        }, (error) => {
            console.log(error);
            reject();
        });          
    });

};

//funcion para guardar el cliente en indexed
function fcnGuardarClienteLocal(){  
    
    return new Promise((resolve,reject)=>{
        let txtNit = document.getElementById('txtNit');
        let cmbTipoNegocio = document.getElementById('cmbTipoNegocio');
        let txtCodigo = document.getElementById('txtCodigo');
        let cmbVisitaCliente = document.getElementById('cmbVisitaCliente');
        let txtNegocio = document.getElementById('txtNegocio'); 
        let txtNomcliente = document.getElementById('txtNomcliente');
        let txtDircliente = document.getElementById('txtDircliente');
        let txtReferencia = document.getElementById('txtReferencia');
        let cmbMunicipio = document.getElementById('cmbMunicipio');
        let cmbDepartamento = document.getElementById('cmbDepartamento');
        let cmbVendedor = document.getElementById('cmbVendedor');
        let txtTelefono = document.getElementById('txtTelefono');
        let txtObs = document.getElementById('txtObs');
        let txtLatitud = document.getElementById('txtLatitud');
        let txtLongitud = document.getElementById('txtLongitud');
        let cmbSector = document.getElementById('cmbSector').value || 'A';

        let data = {
            CODSUCURSAL: GlobalCodSucursal,
            CODVEN: Number(cmbVendedor.value),
            FECHA: f.getFecha(),
            CODCLIE: Number(txtCodigo.value),
            TIPONEGOCIO: cmbTipoNegocio.value,
            NITCLIE:txtNit.value,
            NEGOCIO: f.limpiarTexto(txtNegocio.value),
            NOMCLIE: f.limpiarTexto(txtNomcliente.value), 
            DIRCLIE: f.limpiarTexto(txtDircliente.value), 
            CODMUNI: cmbMunicipio.value.toString(),
            CODDEPTO: cmbDepartamento.value.toString(),
            REFERENCIA: f.limpiarTexto(txtReferencia.value), 
            OBS: f.limpiarTexto(txtObs.value), 
            TELEFONO: txtTelefono.value,
            VISITA: cmbVisitaCliente.value,
            LAT: Number(txtLatitud.innerText),
            LONG: Number(txtLongitud.innerText),
            SECTOR: cmbSector
        };

        classDb.InsertCliente(data)
        .then(()=>{
            resolve();
        })
        .catch(()=>{
            reject();
        })


    });
};

//funcion para enviar el cliente online
function fcnGuardarCliente(){  
    console.log('guardado online')
    return new Promise((resolve,reject)=>{
        let txtNit = document.getElementById('txtNit');
        let cmbTipoNegocio = document.getElementById('cmbTipoNegocio');
        let txtCodigo = document.getElementById('txtCodigo');
        let cmbVisitaCliente = document.getElementById('cmbVisitaCliente');
        let txtNegocio = document.getElementById('txtNegocio'); 
        let txtNomcliente = document.getElementById('txtNomcliente');
        let txtDircliente = document.getElementById('txtDircliente');
        let txtReferencia = document.getElementById('txtReferencia');
        let cmbMunicipio = document.getElementById('cmbMunicipio');
        let cmbDepartamento = document.getElementById('cmbDepartamento');
        let cmbVendedor = document.getElementById('cmbVendedor');
        let txtTelefono = document.getElementById('txtTelefono');
        let txtObs = document.getElementById('txtObs');
        let txtLatitud = document.getElementById('txtLatitud');
        let txtLongitud = document.getElementById('txtLongitud');
        let cmbSector = document.getElementById('cmbSector').value || 'A';

        axios.post('/censo/nuevocliente',{
            sucursal:GlobalCodSucursal,
            codven:cmbVendedor.value,
            fecha:f.getFecha(),
            codclie:txtCodigo.value,
            tiponegocio:cmbTipoNegocio.value,
            nitclie:txtNit.value,
            negocio: f.limpiarTexto(txtNegocio.value),
            nomclie: f.limpiarTexto(txtNomcliente.value), 
            dirclie: f.limpiarTexto(txtDircliente.value), 
            codmun:cmbMunicipio.value,
            coddepto:cmbDepartamento.value,
            referencia: f.limpiarTexto(txtReferencia.value), 
            obs: f.limpiarTexto(txtObs.value), 
            telefono:txtTelefono.value,
            visita:cmbVisitaCliente.value,
            lat:txtLatitud.innerText,
            long:txtLongitud.innerText,
            sector: cmbSector
        })
        .then((response) => {
            
            let data = response.data;
            if(Number(data.rowsAffected[0])>0){
                resolve();
            }else{
                reject();
            };
        }, (error) => {
            console.log(error);
            reject();
        });      


    });
};

//EditCliente localmente
function fcnEditarCliente(){  
    
    return new Promise((resolve,reject)=>{
        let txtNit = document.getElementById('txtNit');
        let txtCodigo = document.getElementById('txtCodigo');
        let cmbVisitaCliente = document.getElementById('cmbVisitaCliente');
        let cmbTipoNegocio = document.getElementById('cmbTipoNegocio');
        let txtNegocio = document.getElementById('txtNegocio'); 
        let txtNomcliente = document.getElementById('txtNomcliente');
        let txtDircliente = document.getElementById('txtDircliente');
        let txtReferencia = document.getElementById('txtReferencia');
        let cmbMunicipio = document.getElementById('cmbMunicipio');
        let cmbDepartamento = document.getElementById('cmbDepartamento');
        let cmbVendedor = document.getElementById('cmbVendedor');
        let txtTelefono = document.getElementById('txtTelefono');
        let txtObs = document.getElementById('txtObs');
        let txtLatitud = document.getElementById('txtLatitud');
        let txtLongitud = document.getElementById('txtLongitud');
        let cmbSector = document.getElementById('cmbSector').value || 'A';

        let data = {
            CODVEN:Number(cmbVendedor.value),
            NITCLIE:txtNit.value,
            TIPONEGOCIO:cmbTipoNegocio.value,
            NEGOCIO: f.limpiarTexto(txtNegocio.value),
            NOMCLIE: f.limpiarTexto(txtNomcliente.value), 
            DIRCLIE: f.limpiarTexto(txtDircliente.value), 
            CODMUNI:cmbMunicipio.value.toString(),
            CODDEPTO:cmbDepartamento.value.toString(),
            REFERENCIA: f.limpiarTexto(txtReferencia.value), 
            OBS: f.limpiarTexto(txtObs.value), 
            TELEFONO:txtTelefono.value.toString(),
            VISITA:cmbVisitaCliente.value,
            LAT: Number(txtLatitud.innerText),
            LONG: Number(txtLongitud.innerText),
            SECTOR:cmbSector
        };
    
        classDb.EditCliente(data, Number(txtCodigo.value))
        .then(()=>{
            resolve();
        })
        .catch(()=>{
            reject();
        })

    });
};

//Edit cliente online
function fcnEditarClienteOnline(){  
    //f.AvisoError('Estamos trabajando en la edición del cliente')
    //return;
    return new Promise((resolve,reject)=>{
        let txtNit = document.getElementById('txtNit');
        let txtCodigo = document.getElementById('txtCodigo');
        let cmbVisitaCliente = document.getElementById('cmbVisitaCliente');
        let cmbTipoNegocio = document.getElementById('cmbTipoNegocio');
        let txtNegocio = document.getElementById('txtNegocio'); 
        let txtNomcliente = document.getElementById('txtNomcliente');
        let txtDircliente = document.getElementById('txtDircliente');
        let txtReferencia = document.getElementById('txtReferencia');
        let cmbMunicipio = document.getElementById('cmbMunicipio');
        let cmbDepartamento = document.getElementById('cmbDepartamento');
        let cmbVendedor = document.getElementById('cmbVendedor');
        let txtTelefono = document.getElementById('txtTelefono');
        let txtObs = document.getElementById('txtObs');
        let txtLatitud = document.getElementById('txtLatitud');
        let txtLongitud = document.getElementById('txtLongitud');
        let cmbSector = document.getElementById('cmbSector').value || 'A';

        axios.post('/censo/editarcliente',{
            sucursal:GlobalCodSucursal,
            codven:cmbVendedor.value,
            fecha:f.getFecha(),
            codclie:txtCodigo.value,
            nitclie:txtNit.value,
            tiponegocio:cmbTipoNegocio.value,
            negocio: f.limpiarTexto(txtNegocio.value),
            nomclie: f.limpiarTexto(txtNomcliente.value), 
            dirclie: f.limpiarTexto(txtDircliente.value), 
            codmun:cmbMunicipio.value,
            coddepto:cmbDepartamento.value,
            referencia: f.limpiarTexto(txtReferencia.value), 
            obs: f.limpiarTexto(txtObs.value), 
            telefono:txtTelefono.value,
            visita:cmbVisitaCliente.value,
            lat:txtLatitud.innerText,
            long:txtLongitud.innerText,
            sector: cmbSector
        })
        .then((response) => {
            
            let data = response.data;
            if(Number(data.rowsAffected[0])>0){
                resolve();
            }else{
                reject();
            };
        }, (error) => {
            console.log(error);
            reject();
        });      


    });
};

function getDataCliente(codigo,nit,tiponegocio,negocio,nombre,direccion,referencia,codmun,coddepto,obs,codven,visita,latitud,longitud,telefono,online,sector){
    GlobalOnline = online;
    f.Confirmacion('¿Está seguro que desea EDITAR este cliente?')
    .then((value)=>{
        if(value==true){
            GlobalBool = true;
            
            document.getElementById('txtCodigo').value = codigo;
            document.getElementById('txtCodigo').disabled = true;

            document.getElementById('cmbTipoNegocio').value = tiponegocio;
            document.getElementById('txtNit').value = nit;
            document.getElementById('cmbVisitaCliente').value = visita;
            document.getElementById('txtNegocio').value = negocio; 
            document.getElementById('txtNomcliente').value = nombre;
            document.getElementById('txtDircliente').value = direccion;
            document.getElementById('txtReferencia').value = referencia;
            document.getElementById('cmbMunicipio').value = codmun;
            document.getElementById('cmbDepartamento').value = coddepto;
            document.getElementById('cmbVendedor').value = codven;
            document.getElementById('txtTelefono').value = telefono;
            document.getElementById('txtObs').value = obs;
            document.getElementById('txtLatitud').innerText = latitud;
            document.getElementById('txtLongitud').innerText = longitud;
            document.getElementById('cmbSector').value = sector;

            document.getElementById('btnTabNuevo').click();
            if(online=="SI"){

            }else{

            }
        }
    });

};

function fcnCleanDataCliente(){
    
            document.getElementById('txtNit').value = "CF";
            document.getElementById('txtCodigo').value = "";
            document.getElementById('cmbTipoNegocio').value = "TIENDITA";
            document.getElementById('txtNegocio').value = ""; 
            document.getElementById('txtNomcliente').value = "";
            document.getElementById('txtDircliente').value = "";
            document.getElementById('txtReferencia').value = "";
            document.getElementById('txtTelefono').value = "";
            document.getElementById('txtObs').value = "SN";

};

function showUbicacion(){
    //let lat ='0'; let longg = '0';
    return new Promise((resolve,reject)=>{
        try {
            navigator.geolocation.getCurrentPosition(function (location) {
                //lat = location.coords.latitude.toString();
                //longg = location.coords.longitude.toString();
                resolve(location);
                //map = Lmap(Number(lat),Number(long));
            })
        } catch (error) {
            reject();
        }
    })

};

function Lmap(lat,long){
    //INICIALIZACION DEL MAPA            
      var osmUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      osmAttrib = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      osm = L.tileLayer(osmUrl, {center: [lat, long],maxZoom: 20, attribution: osmAttrib});    
      let mapa = L.map('mapcontainer').setView([lat, long], 18).addLayer(osm);

      L.marker([lat, long], {draggable:'true'})
        .addTo(mapa)
        .bindPopup(`Marque la posición GPS del cliente nuevo`, {closeOnClick: false, autoClose: false})
        .openPopup()
        .on("dragend",function(e) {
            this.openPopup();
            var position = e.target._latlng;
            //console.log(e.target._latlng);
            //obtiene la posición del evento
            document.getElementById('txtLatitud').innerText = position.lat;
            document.getElementById('txtLongitud').innerText = position.lng;
           });
     
    //establece las coordenadas iniciales en los labels
    document.getElementById('txtLatitud').innerText = lat.toString();
    document.getElementById('txtLongitud').innerText = long.toString();
    
    return mapa;
  
};

function iniciarVistaVendedorCenso(){
    getView();
    addListeners();
};

function iniciarMapa(){
    
    try {
        navigator.geolocation.getCurrentPosition(function (location) {
            lat = location.coords.latitude.toString();
            long = location.coords.longitude.toString();
            var map = L.map('map').setView([Number(lat), Number(long)], 13);

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);
            
            L.marker([51.5, -0.09]).addTo(map)
                .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
                .openPopup();
        })
    } catch (error) {
        f.AvisoError(error.toString());
    }

    
    
};

function fcnCensoListado(sucursal, codven, visita, idContainer){
    let container = document.getElementById(idContainer);
    container.innerHTML = GlobalLoader;
    
    let strdata = '';
    let tbl = `<div class="table-responsive col-12">
                <br>
                <div class="form-group">
                    <input type="text" class="form-control shadow" id="txtBuscar" placeholder="Escriba para buscar...">
                </div>
                <br>
                    <table class="table table-responsive table-hover table-striped" id="tblCensoOnline">
                        <thead class="bg-trans-gradient text-white">
                            <tr>
                                <td>Código/NIT</td>
                                <td>Cliente/Dirección</td>
                                <td>Teléfono</td>
                            </tr>
                        </thead>
                        <tbody id="tblListado">`;

    let tblfoot = `</tbody></table></div>`;

    axios.post('/censo/listaclientes', {
            sucursal: sucursal,
            codven:codven,
            visita:visita        
    })
    .then((response) => {
        const data = response.data.recordset;
        
        data.map((rows)=>{
            if(rows.STATUS=='GENERADO'){
                strdata = strdata + `<tr class="cursormano border-bottom">
                <td>${rows.NITCLIE}
                    <br>
                    <small>Código: <b>${rows.CODCLIE}</b> </small>
                </td>

                <td>${rows.NOMCLIE}
                        <br>
                    <small><b>${rows.TIPONEGOCIO}-${rows.NEGOCIO}</b></small>
                        <br class="border-bottom">
                    <small>${rows.DIRCLIE},${rows.MUNICIPIO}</small>
                </td>
                <td>
                    ${rows.TELEFONO}
                </td>
                <td>
                    <button class="btn btn-warning btn-sm"
                    onclick="alert('No se puede editar un Cliente ya generado, por favor, solicite el cambio en oficina')">
                        <i class="fal fa-edit"></i>
                        Edit
                    </button>
                </td>

            </tr>`
            }
        })
        /*
        <td>
            <button class="btn btn-warning btn-sm btn-circle" onclick="getDataCliente('${rows.CODCLIE}','${rows.NITCLIE}','${rows.TIPONEGOCIO}','${rows.NEGOCIO}','${rows.NOMCLIE}','${rows.DIRCLIE}','${rows.REFERENCIA}','${rows.CODMUN}','${rows.CODDEPTO}','${rows.OBS}','${rows.CODVEN}','${rows.VISITA}','${rows.LAT}','${rows.LONG}','${rows.TELEFONO}')">
                <i class="fal fa-edit"></i>Edit
            </button>
        </td>
        */
       //dibuja la tabla
        container.innerHTML = tbl + strdata + tblfoot;
        
        //asigna el listener al filtro
        document.getElementById('txtBuscar').addEventListener('keyup',(e)=>{
            f.crearBusquedaTabla('tblCensoOnline','txtBuscar');
        })
    }, (error) => {
        f.AvisoError('No se puede obtener la lista de clientes');
        strdata = '';
        container.innerHTML = '';
    });

};


function fcnCensoListadoPendientes(sucursal, codven, visita, idContainer){
    let container = document.getElementById(idContainer);
    container.innerHTML = GlobalLoader;
    
    let strdata = '';
    let tbl = `<div class="table-responsive col-12">
                <br>
                <div class="form-group">
                    <input type="text" class="form-control shadow" id="txtBuscar" placeholder="Escriba para buscar...">
                </div>
                <br>
                    <table class="table table-responsive table-hover table-striped" id="tblCensoOnline">
                        <thead class="bg-trans-gradient text-white">
                            <tr>
                                <td>Código/NIT</td>
                                <td>Cliente/Dirección</td>
                                <td>Teléfono</td>
                            </tr>
                        </thead>
                        <tbody id="tblListado">`;

    let tblfoot = `</tbody></table></div>`;

    axios.post('/censo/listaclientes', {
            sucursal: sucursal,
            codven:codven,
            visita:visita        
    })
    .then((response) => {
        const data = response.data.recordset;
        
        data.map((rows)=>{
            if(rows.STATUS=='PENDIENTE'){
                strdata = strdata + `<tr class="cursormano border-bottom">
                <td>${rows.NITCLIE}
                    <br>
                    <small>Código: <b>${rows.CODCLIE}</b> </small>
                </td>

                <td>${rows.NOMCLIE}
                        <br>
                    <small><b>${rows.TIPONEGOCIO}-${rows.NEGOCIO}</b></small>
                        <br class="border-bottom">
                    <small>${rows.DIRCLIE},${rows.MUNICIPIO}</small>
                </td>
                <td>
                    ${rows.TELEFONO}
                </td>
                <td>
                    <button class="btn btn-warning btn-sm"
                    onclick="getDataCliente('${rows.CODCLIE}','${rows.NITCLIE}','${rows.TIPONEGOCIO}','${rows.NEGOCIO}','${rows.NOMCLIE}','${rows.DIRCLIE}','${rows.REFERENCIA}','${rows.CODMUN}','${rows.CODDEPTO}','${rows.OBS}','${rows.CODVEN}','${rows.VISITA}','${rows.LAT}','${rows.LONG}','${rows.TELEFONO}','SI','${rows.SECTOR}')">
                        <i class="fal fa-edit"></i>
                        Edit
                    </button>
                </td>

            </tr>`
            }
        })
        /*
        <td>
            <button class="btn btn-warning btn-sm btn-circle" onclick="getDataCliente('${rows.CODCLIE}','${rows.NITCLIE}','${rows.TIPONEGOCIO}','${rows.NEGOCIO}','${rows.NOMCLIE}','${rows.DIRCLIE}','${rows.REFERENCIA}','${rows.CODMUN}','${rows.CODDEPTO}','${rows.OBS}','${rows.CODVEN}','${rows.VISITA}','${rows.LAT}','${rows.LONG}','${rows.TELEFONO}')">
                <i class="fal fa-edit"></i>Edit
            </button>
        </td>
        */
       //dibuja la tabla
        container.innerHTML = tbl + strdata + tblfoot;
        
        //asigna el listener al filtro
        document.getElementById('txtBuscar').addEventListener('keyup',(e)=>{
            f.crearBusquedaTabla('tblCensoOnline','txtBuscar');
        })
    }, (error) => {
        f.AvisoError('No se puede obtener la lista de clientes');
        strdata = '';
        container.innerHTML = '';
    });

};


function getComboMunicipios(idContainer){
    let contenedor = document.getElementById(idContainer);
    let strdata = '';
    
    axios.get('/censo/municipios', {
        params:{
            sucursal: GlobalCodSucursal
        }
    })
    .then((response) => {
        const data = response.data.recordset;
        data.map((rows)=>{
                strdata = strdata + `<option value='${rows.CODMUNI}'>${rows.DESMUNI}</option>`
        })
        contenedor.innerHTML = strdata;        
    }, (error) => {
        contenedor.innerHTML = strdata;        
    });
};

function getComboDepartamentos(idContainer){
    let contenedor = document.getElementById(idContainer);
    let strdata = '';
    
    axios.get('/censo/departamentos', {
        params:{
            sucursal: GlobalCodSucursal
        }
    })
    .then((response) => {
        const data = response.data.recordset;       
        data.map((rows)=>{
                strdata = strdata + `<option value='${rows.CODDEPTO}'>${rows.DESDEPTO}</option>`
        })
        contenedor.innerHTML = strdata;            
    }, (error) => {
        contenedor.innerHTML = strdata;        
    });
};

function sendCliente(id,nit,tiponegocio,negocio,nombre,direccion,referencia,codmun,coddepto,obs,codven,visita,latitud,longitud,telefono,fecha,sector){
    f.Confirmacion('¿Está seguro que desea Enviar este Cliente?')
    .then((value)=>{
        if(value==true){
                axios.post('/censo/nuevocliente',{
                    sucursal:GlobalCodSucursal,
                    codven:Number(codven),
                    fecha:fecha.toString(),
                    codclie:0,
                    tiponegocio:tiponegocio.toString(),
                    nitclie:nit.toString(),
                    negocio: f.quitarCaracteres(negocio,'"'," pulg",true),
                    nomclie: f.quitarCaracteres(nombre,'"'," pulg",true), 
                    dirclie: f.quitarCaracteres(direccion,'"'," pulg",true), 
                    codmun:codmun.toString(),
                    coddepto:coddepto.toString(),
                    referencia: f.quitarCaracteres(referencia,'"'," pulg",true), 
                    obs: f.quitarCaracteres(obs,'"'," pulg",true), 
                    telefono:telefono.toString(),
                    visita:visita.toString(),
                    lat:Number(latitud),
                    long:Number(longitud),
                    sector: sector
                })
                .then((response) => {
                    
                    let data = response.data;
                    if(Number(data.rowsAffected[0])>0){
                        f.hablar('Cliente enviado con éxito!!');
                        f.Aviso('Cliente enviado con éxito!!');
                        //elimina el cliente de la base de datos local
                        classDb.DeleteClienteSilent(id);
                        //recarga la lista de clientes
                        let cmbDiaVisita = document.getElementById('cmbDiaVisita');
                        classDb.SelectCenso(cmbDiaVisita.value,GlobalCodUsuario,'listadoContainer');
                    }else{
                        f.hablar('No pude conectarme al servidor');
                        f.AvisoError('No pude conectarme al servidor');
                    };
                }, (error) => {
                    f.hablar('No pude conectarme al servidor');
                    f.AvisoError('No pude conectarme al servidor');
                });      
        }
    
    });

};

function slideAnimationTabs(){
    //inicializa el slide de las tabs en censo
    $('a[data-toggle="tab"]').on('hide.bs.tab', function (e) {
        var $old_tab = $($(e.target).attr("href"));
        var $new_tab = $($(e.relatedTarget).attr("href"));

        if($new_tab.index() < $old_tab.index()){
            $old_tab.css('position', 'relative').css("right", "0").show();
            $old_tab.animate({"right":"-100%"}, 300, function () {
                $old_tab.css("right", 0).removeAttr("style");
            });
        }
        else {
            $old_tab.css('position', 'relative').css("left", "0").show();
            $old_tab.animate({"left":"-100%"}, 300, function () {
                $old_tab.css("left", 0).removeAttr("style");
            });
        }
    });

    $('a[data-toggle="tab"]').on('show.bs.tab', function (e) {
        var $new_tab = $($(e.target).attr("href"));
        var $old_tab = $($(e.relatedTarget).attr("href"));

        if($new_tab.index() > $old_tab.index()){
            $new_tab.css('position', 'relative').css("right", "-2500px");
            $new_tab.animate({"right":"0"}, 500);
        }
        else {
            $new_tab.css('position', 'relative').css("left", "-2500px");
            $new_tab.animate({"left":"0"}, 500);
        }
    });

    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        // your code on active tab shown
    });
};

function fcnCensoResumen(sucursal, codven, visita, idContainer){
    let container = document.getElementById(idContainer);
    container.innerHTML = GlobalLoader;
    
    let strdata = '';
    let tbl = `<div class="table-responsive col-12">
                    <table class="table table-responsive table-hover table-striped">
                        <thead class="bg-green text-white">
                            <tr>
                                <td>Municipio</td>
                                <td>Fecha</td>
                                <td>Total</td>
                                <td></td>
                            </tr>
                        </thead>
                        <tbody id="">`;

    let tblfoot = `</tbody></table></div>`;

    axios.post('/censo/resumenclientes', {
            sucursal: sucursal,
            codven:codven
    })
    .then((response) => {
        const data = response.data.recordset;
        
        data.map((rows)=>{
                strdata = strdata + `<tr class="cursormano border-bottom">
                    <td>
                        ${rows.MUNICIPIO}
                    </td>
                    <td>
                        ${rows.FECHA.replace('T00:00:00.000Z','')}
                    </td>
                    <td>
                        ${rows.TOTAL}
                    </td>
                    <td>
                    </td>
                </tr>`
        })
        /*
        <td>
            <button class="btn btn-warning btn-sm btn-circle" onclick="getDataCliente('${rows.CODCLIE}','${rows.NITCLIE}','${rows.TIPONEGOCIO}','${rows.NEGOCIO}','${rows.NOMCLIE}','${rows.DIRCLIE}','${rows.REFERENCIA}','${rows.CODMUN}','${rows.CODDEPTO}','${rows.OBS}','${rows.CODVEN}','${rows.VISITA}','${rows.LAT}','${rows.LONG}','${rows.TELEFONO}')">
                <i class="fal fa-edit"></i>Edit
            </button>
        </td>
        */
        container.innerHTML = tbl + strdata + tblfoot;
        
    }, (error) => {
        f.AvisoError('No se puede obtener la lista de clientes');
        strdata = '';
        container.innerHTML = '';
    });

};