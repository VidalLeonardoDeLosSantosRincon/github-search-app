
**Autor:** Vidal De Los Santos

**Versión:** 1.0.0

**Última actualización:** 27/09/2026

[Ver Manual del Paquete de instalación en el repositorio](https://github.com/VidalLeonardoDeLosSantosRincon/github-search-app/blob/master/3-PAQUETE-DE-INSTALACION.md)

---
# Paquete de Instalación: [GitHub Search App](https://github.com/VidalLeonardoDeLosSantosRincon/github-search-app/tree/master)


### Requisitos Mínimos para Ejecución Local
* **Node.js: v18.19.0 o superior (Recomendado Node v20 LTS).** 
    - Para descargar Node.js dirigete a [Node.js](https://nodejs.org/es/download) y descargas la versión que necesites.
    - Una vez instales **Node.js** ve a la terminal y confirma tu versión de Node con el comando ``node --version``.

* **npm: v9.0.0 o superior. (Viene incluído con **Node**)**
    - Una vez instalado **Node.js** ve a la terminal y confirma tu versión de ``npm`` con
    el comando ``npm --version``.

* **Angular CLI: v17.3.0. (Se instala mediante **npm**)**

    - Instala **Angular** mediante ``npm`` con el comando ``npm install -g @angular/cli@17.3.0``

    - Ve a la terminal y confirma tu version de **Angular** con el ``ng version``

    Aquí te dejo el enlace de la documentación [Angular Docs](https://angular.dev/installation) para más detalles sobre Angular como primeros pasos, configuiración, instalacion, etc.

* **Navegador Web: Chrome, Firefox, Edge o Safari en versiones recientes.**

---

## Paquete de Instalación y Despliegue

### Pasos para Ejecutar en Entorno Local
**1. Clonar el repositorio e ingresar a la carpeta**

 En la consola de ``git`` ejecutas

    git clone -b master https://github.com/tu-usuario/github-search-engine.git
    
y luego debes entrar a la carpeta del proyecto con:

    cd github-search-engine

 **NOTA:** es importante que ya tengas git instalado con anterioridad en caso de no tener puedes hacerlo desde la pagina oficial [https://git-scm.com/install/](https://git-scm.com/install/)

##

**2. Instalar dependencias del proyecto**

Una vez ya dentro de la carpeta del proyecto abres la terminal y ejecutas:

     npm install
##

**3. Iniciar servidor de desarrollo**

Una vez terminen de instalarse las dependencias con ``npm install`` ejecutas en la terminal.

    ng serve

##
**4. Abrir el navegador**

Una vez termine de compilar tendras tu app corriendo en el [http://localhost:4200/](http://localhost:4200/).

##

## GitHub Actions (CI/CD Automático)
Actualmente el proyecto cuanta con un archivo ``.github/workflows/deploy-to-pages.yml`` el cual se encarga de desplegar el app a github pages cad que la rama master sufre un cambio.

```yml
name: Deploy Angular to GitHub Pages

on:
  push:
    branches:
      - master # Cambia a 'main' si tu rama principal se llama así

# Variables globales para TODO el workflow
env:
  APP_NAME: 'github-search-app'

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: 'pages'
  cancel-in-progress: true

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    steps:
      # 1. Obtener el código del repositorio
      - name: Checkout repository
        uses: actions/checkout@v4

      # 2. Configurar Node.js (Ajusta la versión según tu proyecto Angular)
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      # 3. Instalar dependencias
      - name: Install dependencies
        run: npm ci

      # 4. Compilar el proyecto de Angular
      # Reemplaza REPOS_NOMBRE con el nombre exacto de tu repositorio en GitHub
      - name: Build Angular App
        run: npx ng build --configuration production --base-href /${{ env.APP_NAME }}/

      # 5. Configurar GitHub Pages
      - name: Setup Pages
        uses: actions/configure-pages@v4

      # 6. Subir los archivos generados como artefacto de Pages
      # Nota: En Angular 17/18/19, los archivos compilados se guardan en dist/<nombre-proyecto>/browser
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist/${{ env.APP_NAME }}/browser' # Ajusta la ruta a la carpeta de salida de tu proyecto

      # 7. Desplegar en GitHub Pages
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4

```
## NOTAS
Esta es la versión que tiene el archivo ``.github/workflows/deploy-to-pages.yml`` al momento de realizado este documento, para una mejor confirmación del contenido actual de este archivo, favor ir a [.github/workflows/deploy-to-pages.yml](https://github.com/VidalLeonardoDeLosSantosRincon/github-search-app/blob/master/.github/workflows/desploy-to-pages.yml).

---