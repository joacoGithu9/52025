# Analizador de Gramática

La gramática es un mini‑lenguaje imperativo muy sencillo, pensado para ilustrar el flujo completo de compilador/interprete (lexing → parsing → AST → codegen → ejecución).

  ## Requisitos
  
1. Node.js (v16+) desde la página oficial https://nodejs.org/es
   
2. Java Runtime (JRE) para ANTLR4, la version utilizada para el desarrolo de este proyecto es "java version "24.0.1" 2025-04-15" (recomendada para su ejecuccion)
   
3. Descargar Visual Studio Code https://code.visualstudio.com/
   
4. Descargar e instalar Git desde la página oficial https://git-scm.com/downloads
   
---

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

En caso de tener algun error por ej el `inputs/EJINPUTINCORRECTO.txt` se nos mostrara como:

![image](https://github.com/user-attachments/assets/eb6f35f9-ad07-4d5e-8bd2-ef6b47bfa85b)

mostrandonos el error al final

## ¿Qué hace el programa?

1. **Análisis léxico y sintáctico**  
   Se analiza el código fuente (desde `input.txt`) y se informa si es válido o contiene errores. Si hay errores, se muestra la línea y la causa.

2. **Tabla de lexemas-tokens**  
   Se imprime una tabla con todos los lexemas detectados y su tipo de token correspondiente (por ejemplo: identificadores, palabras clave, símbolos, literales, etc.).

3. **Árbol de análisis sintáctico (AST)**  
   Se construye e imprime una representación jerárquica de la estructura del código fuente. Este árbol permite visualizar cómo está compuesto el programa según las reglas gramaticales.

4. **Interpretación y traducción a JavaScript**  
   El programa traduce el código fuente escrito en GraLang a código JavaScript equivalente, y luego lo ejecuta directamente en consola, permitiendo entradas por teclado y mostrando salidas.

---

Este proyecto fue realizado para la materia Sintaxis y Semantica de los lenguajes por el alumno Joaquin Mansilla (Legajo 52025)

