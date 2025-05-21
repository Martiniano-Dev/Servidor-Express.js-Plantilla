# Este proyecto es para hacer un servidor web básico en [Express.js](https://expressjs.com/).

## 📦 Instalación (sin contar la clonación del proyecto)
[Descargar Node.js](https://nodejs.org/es/download) para su sistema operativo, si es en Linux entonces [Nodesource](https://deb.nodesource.com/) para su distribución

Ahora con el código descargado, en una terminal Git Bash ejecutar el siguiente comando:
```
npm ci
```

Esto descargará las dependencias necesarias (Express y Nodemon)

Para vincular los archivos estáticos (HTML, CSS, etc.) se tendrán que crear dos carpetas:
- Public *(para archivos CSS y multimedia)*
- Views *(para archivos HTML)*

La carpeta tendrá que quedar así:
```
Carpeta raíz/
├── node_modules
|   └── (Varios archivos de las dependencias)
├── public
|   └── (Todos tus archivos CSS y multimedia, por ejemplo carpetas como "imagenes" y "CSS")
├── views
|   └── (Todos tus archivos HTML)
├── app.js
├── package.lock.json
└── package.json
└── LICENCE
└── README.md
```
*Nota: los archivos* `LICENCE` *y* `README.md` *son provenientes de la información del proyecto pero no es código*

## 🖥 Como iniciar y usar
Abrir una terminal Git Bash y escribir el siguiente comando:
```
node app.js
```
una vez iniciado el servidor, para ver la página es ir a tu navegador y a la URL "**localhost:**" y el puerto que hayas puesto en `app.listen(3000, ()=>{`... (3000 sería el puerto pero puede ser otro), entonces en este caso sería **localhost:3000**.


## 🛠 Cosas a modificar dentro del código
En el apartado de rutas dentro de `app.js` se tendrán que modificar a que archivos HTML te redirige

`app.get('/', (req, res) => sendHtmlFile(res, 'home.html'));`

Dependiendo del nombre del HTML tendrás que cambiar el `'home.html'`

## ⚠ En HTML y en otros archivos estáticos no hace falta incluir "public" o "views" al poner la ruta de los archivos
No más las carpetas dentro de estas, por ejemplo:
`src:"/imagenes/banner.jpg"` y no `"/public/imagenes/banner.jpg"`
