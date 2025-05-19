# Analizador de Gramática
 Herramienta para analizar código según la gramática, implementada con ANTLR4.
 La  función de este analizador es ser una especie de programa de saludo personalizado:
 Leer un nombre desde el teclado
 Llamar a una función que imprime "Hola, " seguido del nombre ingresado

  ## Componentes de la Gramática

  1. <programa>	     Un conjunto de funciones.
  2. <funcion>	      Declaración de función con nombre, parámetros y un bloque de instrucciones.
  3. <parametros>	   Lista de identificadores separados por comas.
  4. <instrucciones>	Lista de instrucciones como leer, escribir o asignacion.
  5. <leer>	         Entrada de datos por consola.
  6. <escribir>	     Salida de datos.
  7. <asignacion>	   Asignación de valores a variables.
  8. <expresion>	    Puede ser un número, una cadena o un identificador (variable).
  9. <identificador>	Letras y guiones bajos, similar a los nombres de variables en C/Python.
  10.<numero>	       Enteros positivos.
  11. <cadena>	       Texto entre comillas dobles.


  ## Requisitos
1. Node.js (v16+)
2. npm (incluido con Node.js)
3. Java Runtime (JRE) para ANTLR4
4. Visual Studio
 ## Configuración de inicio
   En una ventana de comandos ( cmd o powershell):
   1. Clonar el repositorio:
      DEJO ESPACIO LA CONCHA DE DIOS
   2. Entro al director donde se encuentra el proyecto:
       cd 52025
   3. Abre VS (Visual Studio) Code para trabajar con el código del proyecto
       code.
      ACÁ VA ALGO
   4. Debería estar dentro de VS con el proyecto abierto
   5. # Uso Básico
   1. Modificar el input
       ACÁ VA ALGO
   Editar el archivo input.txt con tu código
   Así debería quedar:
       ACÁ VA ALGO
   2. Ejecutar el analizador en la terminal de VS node index.js
       ACÁ VA ALGO
      El programa mostrará:
   1.Tabla de tokens/lexemas

   2.Árbol de derivación

   3.Los resultados que devuelve dados por el intérprete

   4.Errores de sintaxis (si existen)

Ejemplo de como debería salir: 
   ACÁ VA ALGO
   Puse estos ejemplos, ya que mi tema no tiene ejemplos para probar.
        ACÁ VA ALGO
    
   
