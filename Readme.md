# NBAD Project

* All .html files are placed in the root folder.
* All css files are placed in the styles folder.
* All js files are placed under the scripts folder.
* use local style library instead of cdn.

## For HTML File

* use the following boiler plate code to include bootstrap styles.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Lab1</title>
    <!-- Bootstrap cdn links -->
    <link
      rel="stylesheet"
      href="./bootstrap-5.3.1-dist/css/bootstrap.min.css"
    />
    <script src="./bootstrap-5.3.1-dist/js/bootstrap.bundle.min.js"></script>
    <!-- css files -->
    <!-- js files -->
  </head>
  <body>
    <!-- header section -->
    <!-- main section -->
    <!-- footer section -->
  </body>
</html>
```

* import neccessary styles and scripts.
* use defer attribute for scripts.
* include comments for better understanding.
* dont use inline or internal stylings always use external stylesheets.

## Checks
* use validator for .html in https://validator.w3.org/nu/#textarea before pushing.
* Check all links are working.