var app = new Vue({
    el: '#app',
    data: {
        datos:{
          titulo:null,
          descripcion:null
        },
       
        resultado:null,
        //interructor para saber si envio o edito los datos
        swich:false,
       
        // id de una tarea a editar
        unico_id: ' ',
    },
    created: function () {//para pintar lo datos al iniciar  la app vue
      this.recivir();
    },
    methods:{//enviar datos al server con el metodo post y put
        enviar() {
            if(this.swich === false){
            axios.post("http://localhost:5000/API",body= this.datos).then((result) => {
            console.log(result.data);
            this.recivir();
            this.limpiar_caja();
          });
            } else {
              axios.put("http://localhost:5000/API/"+ this.unico_id, body= this.datos ).then((result) => {
                console.log(result.data);
                this.swich = false;
                this.recivir();
                this.limpiar_caja();
              })
              
            }
      
      },
    limpiar_caja(){
      this.datos.titulo= null;
      this.datos.descripcion= null;
    },
      //obtener los datos enviados anteriormente
      recivir(){
        axios.get("http://localhost:5000/API")
        .then((result) => {this.resultado = result.data})
      },
      //borrar los datos 
      borrar(id){
        axios.delete("http://localhost:5000/API/"+ id).then((result)=>{ console.log(result.data); this.recivir();})
      },
      //actualizar los datos
      actualizar(id){
        axios.get("http://localhost:5000/API/" + id)
        .then((result) => {
          this.datos.titulo = result.data.titulo,
          this.datos.descripcion =  result.data.descripcion, 
          this.unico_id = result.data._id,
          this.swich = true       
        })
         
         
      },
     
    
    }
  })

 