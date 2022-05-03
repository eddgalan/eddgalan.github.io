let dataCertificados = {
  "java": {
    "title": "Java",
    "descrip": "Mediante un examen de conocimientos de Java logré acreditar esta certificación. El examen cubría temas básicos del lenguaje: Lectura de datos, estructuras condicionales, estructuras cíclicas, tipos de datos y funciones.",
    "pathImg": "./img/certificaciones/Develop-FundamentosDeJava.PNG"
  },
  "command_line": {
    "title": "Línea de comandos en Linux",
    "descrip": "Fue un curso introductorio a la línea de comandos de Linux. Aprendí a usar algunos comandos básicos del sistema como navegar entre directorios, crear archivos y directorios, instalar algunas aplicaciones, hacer uso del administrador de paquetes, incluso aprendí a editar archivos con el editor Vim.",
    "pathImg": "./img/certificaciones/Platzi-TerminalComandos.PNG"
  },
  "git": {
    "title": "Git y Github",
    "descrip": "Un curso muy completo para aprender a usar Git y GitHub. Sé usar los comandos más importantes de Git para poder crear repositorios, descargarlos, subir cambios, descargar cambios, trabajar con ramas, hacer merge-request, entre otras acciones.",
    "pathImg": "./img/certificaciones/Platzi-CursoProfesionalDeGityGithub.PNG"
  },
  "fund_python": {
    "title": "Python Básico",
    "descrip": "Ya había manejado Python anteriormente, pero no había tomado algún curso. Aprendí su sintaxis, sus fundamentos y además pude crear algunos programas sencillos en consola.",
    "pathImg": "./img/certificaciones/Platzi-CursoBasicoDePython.PNG"
  },
  "web_dev": {
    "title": "Desarrollo Web 2.0",
    "descrip": "Fue un curso muy completo sobre desarrollo web, el curso abordaba tecnologías como HTML, CSS, Javascript, jQuery y PHP. Desarrollé algunos sitios web sencillos con las tecnologías antes mencionadas.",
    "pathImg": "./img/certificaciones/Udemy-CursoDeDesarrolloWebCompleto2_0.PNG"
  },
  "poo_javascript": {
    "title": "Programación Orientada a Objetos en Javascript",
    "descrip": "El curso abordó temas como clases, objetos, herencia, propiedades prototype, etc. Fue un curso breve, pero comprendí cómo funciona la POO en Javascript. De manera personal desarrollé algunos ejercicios.",
    "pathImg": "./img/certificaciones/DevCode-POOJavaSCript.jpeg"
  },
  "docker": {
    "title": "Docker, de principiante a experto",
    "descrip": "Fue un curso muy completo para aprender Docker, me encantó este curso. Aprendí muchas cosas cobre esta tecnología, aprendía a crear imágenes, contenedores, conectar los contenedores a redes de Docker, crear diferentes tipos de volúmenes, conectar varios servicios con Docker-compose, etc.",
    "pathImg": "./img/certificaciones/Udemy-DockerDePrincipianteAExperto.PNG"
  },
  "scrum": {
    "title": "SCRUM Developer",
    "descrip": "Comprendí cómo trabajar bajo una metodología ágil como SCRUM.",
    "pathImg": "./img/certificaciones/SCRUMDEV-SDPC.PNG"
  },
}

$(document).ready(function (){
  $("div[data-target='#modal-constancia']").click(function(){
    let certificado = $(this).attr("data-certif");
    $("h4[name='certificaciones']").empty();
    $("h4[name='certificaciones']").append("Certificaciones | "+ dataCertificados[certificado]['title']);
    $("p[name='certificacion-descrip']").empty();
    $("p[name='certificacion-descrip']").append(dataCertificados[certificado]['descrip']);
    $("img[name='certificado-img']").attr("src", dataCertificados[certificado]['pathImg']);
  });
});
