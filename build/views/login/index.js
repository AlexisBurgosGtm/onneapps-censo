function getView(){
    let view = {
        login : ()=>{
            return `         
            <div class="col-md-4 col-sm-12 col-lg-4 col-lx-4">
                <div class="card card-rounded shadow">

                 
                    
                    <div class="card-body">              
                        
                        <hr class="solid">

                        <div class="row">
                            <div class="col-auto">
                                <img src="../favicon.png" width="70" height="70">
                            </div>

                            <div class="col-auto" align="left">
                                <br>
                                <h2 class="text-info negrita text-left">Inicio Censo</h2>
                            </div>
                        </div>
                        
                        
                        <hr class="solid">
                   
                        <div class="input-group">
                            <label></label>
                            <div class="input-group-prepend">
                                <span class="input-group-text">
                                    <i class="fal fa-globe"></i>
                                </span>
                            </div>
                            <input class="form-control border-secondary border-top-0 border-right-0 border-left-0" type="text" id="txtToken" placeholder="Escriba su token..." required="true">
                            <div class="input-group-append">
                                <button class="btn btn-info hand" id="btnGetToken">
                                    <i class="fal fa-arrow-right"></i>
                                </button>
                            </div>
                        </div>

                        <form class="" id="frmLogin" autocomplete="off">
                            <div class="form-group">
                                <label class="negrita text-info">Empresa:</label>
                                <select class="form-control negrita" id="cmbSucursal">
                                    
                                </select>
                            </div>
                            <div class="form-group">
                                <label class="negrita text-info">Usuario:</label>
                                <input class="form-control" type="text" id="txtUser" placeholder="Escriba su usuario" required="true">
                            </div>
                            <div class="form-group">
                                <label class="negrita text-info">Contraseña:</label>
                                <input class="form-control" type="password" id="txtPass" placeholder="Escriba su contraseña" required="true">
                            </div>
                            <div class="form-group" align="right">
                                <button class="btn btn-outline-info btn-xl btn-circle shadow"  type="submit" id="btnIniciar">
                                    <i class="fal fa-unlock"></i>
                                </button>
                            </div>
                        </form>
                        
                        <hr class="solid">

                   
                    </div>

                </div>
            </div>           
            `
        },
        hablar:()=>{
            return `<div class="row">
                <input class="form-control" type="text" id="txtHablar">
                <button class="btn btn-danger" onclick="f.hablar(document.getElementById('txtHablar').value);">Hablar</button>
            </div>` 
        },
        modalComandos :()=>{
            return `
        <div class="modal fade" id="modalComandos" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <label class="modal-title text-danger h3" id="">Datos del Cobro</label>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true"><i class="fal fa-times"></i></span>
                        </button>
                    </div>
        
                    <div class="modal-body">
                        <div class="row">
                            <input type="text" class="form-control" id="txtQry" placeholder="no tocar si no sabes">
                            <button class="btn btn-secondary" id="btnQry">Consultar</button>
                        </div>
                        <div class="row">
                            <div class="card" id="rootQry"></div>
                        </div>
                        <br><br>
                        <div class="row">
                            <button class="btn btn-danger" onclick="f.setReminder('hola mundo desde el pasado',2);">
                                Probar recordatorio
                            </button>
                        
                     
                        </div>          
                    </div>

                </div>
            </div>
        </div>
            `
        }
    };

    root.innerHTML = view.login() + view.modalComandos();
};

function addListeners(){
   

    let frmLogin = document.getElementById('frmLogin');
    let btnIniciar = document.getElementById('btnIniciar');
    frmLogin.addEventListener('submit',(e)=>{
        e.preventDefault();

        btnIniciar.disabled = true;
        btnIniciar.innerHTML = '<i class="fal fa-unlock fa-spin"></i>';
        
        api.empleadosLogin(frmLogin.cmbSucursal.value,frmLogin.txtUser.value,frmLogin.txtPass.value)
        .then(()=>{
            
        })
        .catch(()=>{
            btnIniciar.disabled = false;
            btnIniciar.innerHTML = '<i class="fal fa-unlock"></i>'
        });
    });


  
   
    let userContainer = document.getElementById('frmLogin');
    userContainer.style = "visibility:hidden;"

    let btnGetToken = document.getElementById('btnGetToken');
    btnGetToken.addEventListener('click',()=>{

        let txtToken = document.getElementById('txtToken').value || 'SN';
        if(txtToken=='SN'){
            f.AvisoError('Escriba su Token');
            return;
        };

        btnGetToken.innerHTML = '<i class="fal fa-arrow-right fa-spin"></i>';
        btnGetToken.disabled = true;

        getSucursalesToken(txtToken)
        .then((data)=>{
            console.log(data);
            userContainer.style = "visibility:visible;";
            let str = '';
            data.recordset.map((r)=>{
                GlobalToken = txtToken;
                GlobalCodSucursal = r.CODSUCURSAL;
                GlobalEmpnit = r.CODSUCURSAL;
                GlobalEmpNombre = r.NOMBRE;
                str += `
                    <option value='${r.CODSUCURSAL}'>${r.NOMBRE}</option>
                `
            });
             //carga las sucursales directamente desde código
            document.getElementById('cmbSucursal').innerHTML = str;
            btnGetToken.innerHTML = '<i class="fal fa-arrow-right"></i>';
            btnGetToken.disabled = false;
        })
        .catch(()=>{
                document.getElementById('cmbSucursal').innerHTML = '';
                f.AvisoError('No se pudo verificar el token');
                btnGetToken.innerHTML = '<i class="fal fa-arrow-right"></i>';
                btnGetToken.disabled = false;
                userContainer.style = "visibility:false;";
        })
    });

};

function InicializarVista(){
   getView();
   addListeners();
    
  
};


function getSucursalesToken(token){
    return new Promise((resolve,reject)=>{
        axios.get('/usuarios/sucursales',{
            params: {
                token: token  
            }  
        })
        .then((response) => {
            let data = response.data;
            if(data.rowsAffected[0]=="1"){
                 console.log('resolve')
                resolve(data);
            }else{
                console.log('reject');
                reject();
              
            };
        }, (error) => {
            console.log(error);
            reject();
        });          
    });
};
