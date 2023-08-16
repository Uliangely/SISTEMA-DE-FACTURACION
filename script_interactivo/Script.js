const fs = require('fs'); // Módulo para manejar archivos
const inquirer = require('inquirer'); // Módulo para preguntas interactivas

// Leer archivo
const archivo = fs.readFileSync('ejemplo.txt', 'utf-8');

// Convertir contenido del archivo en un arreglo
const arreglo = archivo.split('\n');

// Objeto para guardar información
let informacion = {
  arreglo: arreglo,
  datoPersonal: '',
};

// Función async para preguntar información personal
async function preguntar() {
  const respuestas = await inquirer.prompt([
    {
      type: 'input',
      name: 'nombre',
      message: '¿Cuál es tu nombre?',
    },
    {
      type: 'input',
      name: 'edad',
      message: '¿Cuál es tu edad?',
    },
  ]);
  informacion.datoPersonal = `${respuestas.nombre} tiene ${respuestas.edad} años.`;
}

// Función para guardar información en un archivo
function guardarInformacion() {
  const contenido = JSON.stringify(informacion, null, ' ');
  fs.writeFileSync('informacion.json', contenido);
}

async function main() {
  await preguntar();
  guardarInformacion();
  console.log('Información guardada en archivo');
}

// Ejecutar programa
main();
