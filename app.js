//Dentro de la carpeta raiz tiene que haber una carpeta llamada "public" para imagenes CSS y mas contenido y "views" para HTML, todo esto para archivos estaticos
//Sino este código tendrá que ser modificado para que haga efecto

const express = require('express');
const app = express();
const path = require('path')

app.listen(3000, ()=>{
    console.log("Servidor ubicado en: localhost:3000");
});
console.log(__dirname)

app.use(express.static(path.join(__dirname, 'public'))); //Hace que el codigo también busque en la carpeta public para cargar
//  ↑   ↑   ↑   ↑   ↑   ↑   ↑   ↑   ↑   ↑   ↑   ↑   ↑
 ///////////////////////////////////////////////////////////////////////////////
// En el HTML NO HARA FALTA PONER "/public/" AL INICIO DE LOS SRCs            //
// Por ejemplo: src:"/imagenes/banner.jpg" y no "/public/imagenes/banner.jpg" //
///////////////////////////////////////////////////////////////////////////////

// Función reutilizable para enviar archivos HTML
const sendHtmlFile = (res, fileName) => {

    const filePath = path.join(__dirname, 'views', fileName);

    res.sendFile(filePath, (err) => {

        if (err) { //esto es por si ocurre un error
            console.error(`Error al enviar ${fileName}:`, err);
            res.status(err.status || 500).send("Error al cargar la página.");
        }

    });
};

// Rutas
//Cambiar home.html por el html que se desee y la parte de '/' cambiar a la ruta que se desee si no quiere que sea la principal, ej: '/home'
app.get('/', (req, res) => sendHtmlFile(res, 'home.html'));