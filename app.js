class Prodcuto{
    constructor(nombre,precio,ano){
        this.nombre=nombre;
        this.precio=precio;
        this.ano=ano;
    }

}
class UI{
    agregarProducto(producto){
        const listaProductos=document.getElementById('listaProductos');
        const elemento=document.createElement('div');
        elemento.innerHTML=`
            <div class="card text-center mb-4">
                <div class="card-body">
                    <strong> Producto </strong>: ${producto.nombre}
                    <strong> Precio Producto </strong> : ${producto.precio}
                    <strong> Año del Producto </strong> : ${producto.ano}
                    <a href="#" name="eliminar" class="btn btn-danger"> delete</a>
                </div>
            </div>
        `;
        listaProductos.appendChild(elemento);
    }
    limpiarFormulario(){
        document.getElementById('formularioProducto').reset();
    }
    eliminarProducto(elemento){
        if(elemento.name==='eliminar'){
            elemento.parentElement.parentElement.parentElement.remove();
        }
    }
    mostrarMensaje(mensaje,ClaseCss){
       const div=document.createElement('div');
       div.className=`alert alert-${ClaseCss} mt-2`
       div.appendChild(document.createTextNode(mensaje));
       //mostrando en el DOM 
       const container=document.querySelector('.container');
       const app= document.querySelector('#App');
       container.insertBefore(div,app);
       setTimeout(function(){
           document.querySelector('.alert').remove();
       },3000);
    }
}

//eventos del dom, cuando el usuario da un click en un boton o tipe en input o carga por primera vez
document.getElementById('formularioProducto')
.addEventListener('submit',function(e){
    const nombre=document.getElementById('nombre').value;
    const precio=document.getElementById('precio').value;
    const ano=document.getElementById('año').value;
    
    const producto=new Prodcuto(nombre,precio,ano);
    const ui=new UI();
    if(nombre===''|| precio===''||ano===''){
        return ui.mostrarMensaje('Complete los datos estupido','danger');
    }

    
    ui.agregarProducto(producto);
    ui.limpiarFormulario();

    ui.mostrarMensaje('Producto agregado satisfactoriamente','success')
    e.preventDefault();
});

document.getElementById('listaProductos')
.addEventListener('click',function(e){
    const ui= new UI();
    ui.eliminarProducto(e.target);
    ui.mostrarMensaje('Producto elminado', 'success');
});