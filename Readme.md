# NBAD Project

* All .html files are placed in the root folder.
* css files are placed in the respective folders.
* js files are placed under the scripts folder.
* use bootstrap cdn v5.
* when adding new page create respective folder and it should have two stylesheets one contains styles of header and footer other is specific styles sheet of that page keep both styles separated.

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

## want to add new Event?
* add it to events.json file everything will be handled.
* Make sure all props id,title,category,host,location,time,descTitle,description are provided.
* incase description contains html use validator so it doesnt break

## Checks
* use validator for .html in https://validator.w3.org/nu/#textarea before pushing.
* Check all links are working.

## Copyrights
* All categories are from - https://www.meetup.com/
* Yoga - https://static.toiimg.com/thumb/92353710.cms?width=680&height=512&imgsize=14294
* Buddhism - https://cdn.thecollector.com/wp-content/uploads/2022/08/Buddhism-religion-philosophy.jpg?
* speak with confidence - https://www.maroonoak.com/wp-content/uploads/2016/05/Public-speaking-with-confidence.jpg 
* How to crack tech interviews with ease? - https://blog.codingblocks.com/content/images/size/w2000/2019/05/1_TPLG-Et63ALYKQ55u8CZYQ.jpeg
* Tech Career meetup for Networking - https://www.profocustechnology.com/wp-content/uploads/2017/02/tech-meetup.jpg
* Bringing blockchain to tech ethusiasts - https://i.ytimg.com/vi/teol3sxMKLo/maxresdefault.jpg