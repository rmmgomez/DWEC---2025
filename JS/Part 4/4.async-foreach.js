const urls = ['url1', 'url2', 'url3']; // URLs simuladas

async function procesarUrls() {
  console.log("Inicio del forEach");
  urls.forEach(async (url) => {
    // await aquí no pausa el bucle forEach
    const resultado = await new Promise(res => setTimeout(() => res(`Procesado ${url}`), 1000));
    console.log(resultado);
  });
  console.log("Fin del forEach (esta línea aparece casi inmediatamente)");
}

console.error("forEach no devuelve una promesa, por lo que no hay nada que await pueda esperar. Las operaciones se disparan, pero el programa principal no las espera.");
procesarUrls();