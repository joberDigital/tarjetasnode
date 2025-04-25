const fs = require('fs');
const path = require('path');

const personajes = [
  {
    key: "victor-hugo",
    nombre: "Victor Hugo",
    descripcion: "Autor de Los Miserables y figura clave del romanticismo francés.",
    imagen: "https://lh3.googleusercontent.com/d/1nM2E4HYA7Rus52G4q8mN2rgVhz_k59Fz"
  },
  {
    key: "newton",
    nombre: "Isaac Newton",
    descripcion: "Descubridor de la gravedad y autor de Principia Mathematica.",
    imagen: "https://lh3.googleusercontent.com/d/1nM2E4HYA7Rus52G4q8mN2rgVhz_k59Fz"
  },
  {
    key: "albert-einstein",
    nombre: "Albert Einstein",
    descripcion: "Científico popular del siglo XX",
    imagen: "https://lh3.googleusercontent.com/d/1Pk-cqpcoQFlGxUifQJcLJoFHgwWf9Cdw"
  }
];

// Crea carpeta si no existe
const outputDir = path.join(__dirname, 'tarjetas');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

personajes.forEach(personaje => {
  const html = `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${personaje.nombre}</title>

  <!-- OG tags -->
  <meta property="og:title" content="${personaje.nombre}" />
  <meta property="og:description" content="${personaje.descripcion}" />
  <meta property="og:image" content="${personaje.imagen}" />
  <meta property="og:url" content="tarjetas/${personaje.key}.html" />
  <meta property="og:type" content="website" />

  <link rel="stylesheet" href="css/style.css" />
</head>
<body>
  <div class="contenedor">
    <div class="card-two-columns">
      <div class="col col-left">
        <div class="subtitulo">${personaje.nombre}</div>
        <img src="${personaje.imagen}" class="card-img" />
      </div>
      <div class="col col-right">
        <p class="parrafo">${personaje.descripcion}</p>
        <a class="facebook" href="https://www.facebook.com/sharer/sharer.php?u=tarjetas/${personaje.key}.html" target="_blank">
          Compartir en Facebook
        </a>
      </div>
    </div>
  </div>
</body>
</html>
  `.trim();

  const filePath = path.join(outputDir, `${personaje.key}.html`);
  fs.writeFileSync(filePath, html, 'utf8');
  console.log(`✅ Tarjeta generada: ${personaje.key}.html`);
});

console.log('\n🎉 ¡Todas las tarjetas han sido generadas!');