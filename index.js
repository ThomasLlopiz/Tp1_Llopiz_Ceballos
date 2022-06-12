const app = Vue.createApp({
    data (){
        return{
            nombre: '',
            apellido: '',
            dias: 0,
            monto: '',
            porcentaje: 0,
            resultado: 0,
            montoFinal: 0,
            gananciaFinal: 0,
            contador: 0,
        }
    },
    methods:{
        calcularMostrarMonto() {
            this.validarDias;
            this.montoFinal = this.monto+this.monto*this.dias/360*this.porcentaje/100;
            return this.montoFinal;
        },
        invertir(){
            let validarNombre  = this.validarNombre;
            let validarApellido = this.validarApellido;
            let validarMonto = this.validarMonto;
            if(typeof validarNombre === 'string') {alert(validarNombre);}
            else if(typeof validarApellido === 'string') {alert(validarApellido);}
            else if(typeof validarMonto === 'string') {alert(validarMonto);}
            else if (this.dias === 0) {alert("Seleccione un día");}
            else {this.resultado = this.calcularMostrarMonto(); this.contador=1;}  
        },
        reinvertir(){  
            if (this.contador === 1) {
                this.validarDias;
                this.gananciaFinal = this.resultado+this.resultado*this.dias/360*this.porcentaje/100;
                this.resultado=this.gananciaFinal;
                return this.gananciaFinal;
            }        
        },
        borrarDatos(){
            this.nombre = "";
            this.apellido = "";
            this.monto = '';
            this.dias = 0; 
            this.resultado = 0;
            this.gananciaFinal = 0;
        },
    },
    computed: {  
        validarNombre(){
            if (this.nombre.trim() === '') {return 'Debe ingresar un nombre valido';}
            return true;
        },
        validarApellido(){
            if (this.apellido.trim() === '') {return 'Debe ingresar un apellido valido';} 
            return true;
        },
        validarMonto(){
            if (this.monto === '') {return 'Debe ingresar un monto valido';}
            else if (this.monto < 1000){return 'Debe ingresar un monto valido';}
            else if (this.monto === 0){return 'Debe ingresar un monto valido';} 
            return true;
        },
        validarDias(){
            if (this.dias>=30 && this.dias<=60) {this.porcentaje=40;} 
            else if (this.dias>61 && this.dias<=120) {this.porcentaje=45;}
            else if (this.dias>=121 && this.dias<360) {this.porcentaje=50;}
            else if (this.dias>=360) {this.porcentaje=65;} 
            return this.porcentaje;
        },
    }
});
app.mount('#app');