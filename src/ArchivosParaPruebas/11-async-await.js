// const getImagenPromesa = () => new Promise( resolve => resolve('https://ajskdhaskjdhajs.com') )
// getImagenPromesa().then( console.log );

const getImagen = async () => {
  //ya no usamos los .then sino que siempre esperamos que algo se resuelva cuando usamos el await
  try {
    const apiKey = "C1khQe3Z7R1W2lfTO9myKeuShdqFYSGC";

    //esperemos a que termine de traer la data en la resp
    const resp = await fetch(
      `http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    );
    const { data } = await resp.json(); //esperamos a que se resuelva la data

    const { url } = data.images.original;

    const img = document.createElement("img");
    img.src = url;
    document.body.append(img);
  } catch (error) {
    // manejo del error
    console.error(error);
  }
};

getImagen();
