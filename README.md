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

    git clone https://github.com/AlejoPacheco52072/52072.git

2. Después nos dirigimos al directorio del proyecto:

     cd 52072

3. Y por ultimo abrimos el visual studio para trabajar con el comando:

    code . (<---- no olvidar el punto, es importante sin el nos abrira visual studio sin los archivos clonados)

![image](https://github.com/user-attachments/assets/40b5439b-9087-4492-ae48-5ba85b56ed58) (ejemplo en GITBASH)

En caso de no seleccionar una carpeta nueva y clonar el repositorio dentro de la misma como en el ejemplo, normalmente el proyecto se encontrara dentro de la carpeta "C:\Users\(usuario en cuestión)" del usuario que lo este ejecutando.

EJ: 

![image](https://github.com/user-attachments/assets/8b5e164f-fd41-46a3-ae41-c5cd52802d82) (ejemplo en CMD)

si bien es "distinto" el proceso es el mismo
