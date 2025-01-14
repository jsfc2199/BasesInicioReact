const apiKey = "C1khQe3Z7R1W2lfTO9myKeuShdqFYSGC";

const request = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`); //fetch api es propio de JS

request
  .then((resp) => resp.json()) //volvemos la respuesta un json
  //desestructuramos la data
  .then(({ data }) => {
    const { url } = data.images.original;

    const img = document.createElement("img"); //creamos un elemento img en el DOM
    img.src = url; //añadimos la url al atributo src del tag img

    document.body.append(img); //pegamos al dom el elemento img
  })
  .catch(console.warn);
