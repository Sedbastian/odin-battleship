- ### Crear repo en github.com

- ### Clonarlo con git clone

- ### Ir al directorio y:

```bash
npm init
npm install webpack webpack-cli --save-dev
mkdir src
mkdir dist
cd dist
touch index.html
cd ..
cd src
touch index.js style.css
```

- ### Para q Git ignore node_modules:

```bash
cd ..
echo node_modules> .gitignore
```

- ### Cambios a `package.json`:

  - Quitar línea: "main": "index.js",
  - Agregar: "private": true,
  - Agregar script: "build": "webpack",

- ### Crear configuracion webpack:

```bash
touch webpack.config.js
```

- ### Contenido:

```javascript
const path = require("path");

module.exports = {
  mode: "production",
  entry: {
    index: "./src/index.js"
  },
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource"
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)\$/i,
        type: "asset/resource"
      }
    ]
  }
};
```

- ### Linkear script en dist/index.html:

Agregar en `<head>`:

```html
<script src="main.js" defer></script>
```

- ### Instalar style-loader y css-loader

```bash
npm install --save-dev style-loader css-loader
```

- ### Importar style.css en src/index.js:

```javascript
import "./style.css";
```

- ### Para empezar un módulo:

Archivo `uxLifri.js`:

```javascript
function primeraFuncion() {
  console.log("Hola");
}

export { primeraFuncion };
```

Y en `index.js`:

```javascript
import "./style.css";
import { primeraFuncion } from "./uxLifri.js";

primeraFuncion();
```

- ### Modo Development con webpack-dev-server:

  - Instalar `webpack-dev-server`:

    ```bash
    npm install --save-dev webpack-dev-server
    ```

  - Editar en `webpack.config.js`:

Cambiar a: `mode: 'development',`

Agregar:

```javascript
devtool: 'inline-source-map',
devServer: {
static: './dist',
},
```

Y si hay mas de un entry point en una página HTML (si no hay, aparentemente no hace falta), agregar:

```javascript
optimization: {
runtimeChunk: 'single',
},
```

- ### Entonces, asi queda: webpack.config.js

```javascript
const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.js"
  },
  devtool: "inline-source-map",
  devServer: {
    static: "./dist"
  },
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource"
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)\$/i,
        type: "asset/resource"
      }
    ]
  }
};
```

- ### Para usar webpack-dev-server se puede agregar un script a package.json:

  ```json
  "start": "webpack serve --open",
  ```

- ### O ejecutarlo con (automaticamente abre la página en el navegador):

  ```bash
  npx webpack serve --open
  ```

- ### Warning: webpack-dev-server doesn't write any output files after compiling. Instead, it keeps bundle files in memory and serves them as if they were real files mounted at the server's root path.

- ### Para importar una imagen:

  - Agregar a src/index.js:

  ```javascript
  import Icon from "./icon.png";
  const myIcon = new Image();
  myIcon.src = Icon;
  element.appendChild(myIcon);
  ```

- ### By default, the current version of Jest will not recognize ES6 import statements. In order for you to be able to use ES6 modules for this project you may do the following:

  - Install the @babel/preset-env package

    ```bash
    npm i -D @babel/preset-env
    ```

  - Create a .babelrc file in the project’s root with the following lines of code:

    ```javascript
    { "presets": ["@babel/preset-env"] }
    ```

  - Instalar Jest:

  ```bash
  npm install --save-dev jest
  ```

- ### GitHub Pages:

Sometimes you want to have a subdirectory on the master branch be the root directory of a repository’s gh-pages branch.
Primero ejecutar:

```bash
npx webpack
```

y luego:

```bash
git subtree push --prefix dist origin gh-pages
```

- ### favicon

Instalar HtmlWebpackPlugin:

```bash
$ npm install --save-dev html-webpack-plugin
```

Agregar a `webpack.config.js`:

```javascript
plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
      title: "Battleship",
      favicon: "src/favicon.svg",
      publicPath: "./"
    })
  ],
```
