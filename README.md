# ¿Cómo iniciar la aplicación? Tenemos 2 formas

---

### 1) Nos ubicamos individualmente en cada carpeta y corremos los comandos correspondientes:

---

* **Para iniciar servidor:** Nos ubicamos en *sistema-contable\Back-Develop* y ejecutamos **'npm run dev'**
  
  (Requiere Node en el equipo: https://nodejs.org/en/download)
  
* **Para iniciar aplicación:** Nos ubicamos en *sistema-contable\Front-Develop* y ejecutamos **'ng serve'**

  (Requiere Angular en el equipo: https://angular.io/cli)

---

### 2) Ejecutamos un script que corre ambos servicios:

---

* Nos ubicamos en *\sistema-contable* y ejecutamos **'node iniciarServicios.js'** (Requerimos las dependencias anteriores)

# Pros y Contras

---

* Si ejecutamos los comandos de forma independiente tenemos mejor manejo de errores (Por ejemplo errores en conexiones a la base de datos o errores de Angular).
  
* Si ejecutamos los comandos mediante el script, no tenemos buen manejo de errores pero evitamos abrir 2 terminales.

---

# Sobre "Sistema Contable API Documentation"

---

## CONTEXTO   

* Se ha aplicado el módulo swagger-ui-express que nos permite generar una interfaz gráfica para documentar nuestra API (ver documentación oficial en: https://swagger.io/docs/)

* Es útil para tener presentables las rutas a utilizar cómo también saber que respuesta esperar de las peticiones o que información se requiere pasar como argumento.
  
## DEPENDENCIAS

* npm install swagger-jsdoc swagger-ui-express
---

# Ejemplo de uso

<br>

Ingresamos a http://localhost:3000 y damos click en botón **"Ver Documentación de la API'"**
  
![](https://github.com/camilabarce/sistema-contable/blob/develop/Back-Develop/Ignorar/1.png)

<br>

Veremos listas desplegables pertenecientes a cada área de nuestro proyecto que contienen sus rutas correspondientes y sus métodos de acceso
  
![](https://github.com/camilabarce/sistema-contable/blob/develop/Back-Develop/Ignorar/2.png)

![](https://github.com/camilabarce/sistema-contable/blob/develop/Back-Develop/Ignorar/3.png)

<br>

Para testear, simplemente presionamos en **Try it out**

![](https://github.com/camilabarce/sistema-contable/blob/develop/Back-Develop/Ignorar/4.png)

Cargamos los parámetros o un body (En caso de que los requiera) y damos en **Execute**

![](https://github.com/camilabarce/sistema-contable/blob/develop/Back-Develop/Ignorar/5.png)

<br>

Y finalmente obtenemos la respuesta correspondiente

![](https://github.com/camilabarce/sistema-contable/blob/develop/Back-Develop/Ignorar/6.png)
