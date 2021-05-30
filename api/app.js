//Importa servidor
const server = require('./src/routes.js')
//importa conexión con DB
const { conn } = require('./src/db');

const port = 3001;

//Se sincroniza Node con la BD
conn.sync({ force: false }).then(() => {
    server.listen(port, () => {
        console.log(`Listening at http://localhost:${port}`)
      });
});