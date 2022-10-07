const app = require('./api');
const { conn, dbSeed } = require('./db');

const syncAndSeed = async () => {
  try {
    // what happens when eith of these fail?
    await conn.authenticate();
    await conn.sync({ force: true });
    dbSeed();
    app.listen('3000', () => console.log('listening on port 3000'));
  } catch (error) {
    console.log(error);
  }
};

syncAndSeed();
