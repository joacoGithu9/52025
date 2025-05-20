# Analizador de Gramática

La gramática es un mini‑lenguaje imperativo muy sencillo, pensado para ilustrar el flujo completo de compilador/interprete (lexing → parsing → AST → codegen → ejecución).

  ## Requisitos
  
1. Node.js (v16+) desde la página oficial https://nodejs.org/es
   
2. Java Runtime (JRE) para ANTLR4, la version utilizada para el desarrolo de este proyecto es "java version "24.0.1" 2025-04-15" (recomendada para su ejecuccion)
   
3. Descargar Visual Studio Code https://code.visualstudio.com/
   
4. Descargar e instalar Git desde la página oficial https://git-scm.com/downloads

## Configuracion Inicial

Estas instrucciones se pueden ejecutar en cualquiera de los siguientes entornos de línea de comandos:

- **Windows PowerShell**
- **Símbolo del sistema (CMD) en Windows**
- **GitBash**
- **ETC**
  
### Pasos

1. Primero clonamos el repositorio dentro de una carpeta cualquiera (en el caso del ejemplo una llamada "prueba"):

    git clone https://github.com/joacoGithu9/52025.git

2. Después nos dirigimos al directorio del proyecto:

     cd 52025

3. Y por ultimo abrimos el visual studio para trabajar con el comando:

    code . (<---- no olvidar el punto, es importante sin el nos abrira visual studio sin los archivos clonados)

![image](https://github.com/user-attachments/assets/8cf45251-a842-4aee-8188-1c0f833b4f64) 

 ## Uso Básico del proyecto

Una vez configurado el proyecto, podemos ejecutar el analizador de la siguiente forma:

1. Asegurarnos de tener los archivos de entrada en la carpeta `inputs/`. Dentro del input.txt (`inputs/input.txt`). 

![image](https://github.com/user-attachments/assets/61225003-7bc0-4bde-b3ef-f05174de8b0c)

Contamos con 4 ejemplos, (2 correctos, 2 incorrectos dentro de la misma carpeta) que podemos reemplazar dentro del `inputs/input.txt` para poder probar

![image](https://github.com/user-attachments/assets/e6b193dc-7ca5-4d13-bffd-e527a5506a7e)

2. Una vez ya tenemos el `input.txt` con el ejemplo deseado ejecutamos el programa con Node.js desde la terminal de vs code (Ir a **Terminal > Nuevo terminal** en la barra superior) dentro de la terminal colocamos:

   node index.js

![image](https://github.com/user-attachments/assets/67692201-7704-4aca-9730-6aa15d704a20)

El resultado en un ejemplo correcto deberia verse como la imagen pasada

![image](https://github.com/user-attachments/assets/d67944e0-4b33-4f0a-992d-927004f12a98)

En caso de tener algun error por ej el `inputs/EJINPUTINCORRECTO.txt` se nos mostrara como:

![image](https://github.com/user-attachments/assets/eb6f35f9-ad07-4d5e-8bd2-ef6b47bfa85b)

mostrandonos el error al final

## El programa muestra:

-  Una tabla con los lexemas y sus respectivos tokens.
  
-  Errores de sintaxis, si los hubiera, con línea y descripción.
  
-  El árbol de análisis sintáctico en formato textual.
  
-  La traducción del código fuente a JavaScript.
  
-  La ejecución del código traducido en consola.
  
 (El sistema valida la sintaxis, genera una tabla de tokens, construye y muestra el árbol de análisis sintáctico, y finalmente traduce el código fuente a JavaScript para interpretarlo y ejecutar su lógica.)


  ---

## Comentarios Finales

Este proyecto fue desarrollado para la materia de Sintaxis y Semántica de los Lenguajes por el alumno Alejo Pacheco (legajo 52072)

El repositorio contiene los archivos necesarios para compilar y ejecutar el proyecto, junto con pasos que nos permiten la correcta ejeccucion del mismo.

Gracias por su tiempo. 🙂

