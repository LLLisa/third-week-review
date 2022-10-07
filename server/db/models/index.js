const conn = require('../conn');
const User = require('./User');
const School = require('./School');
const { users, schools } = require('../seedData');

const dbSeed = async () => {
  try {
    const moe = await User.create({
      name: 'Moe',
      age: 48,
      email: 'lonelybartender@maeux.com',
      isSimpson: false,
      //why can't we assign a schoolId here?
    });

    //bulkcreate?
    //unused variables?
    const [homer, marge, bart, lisa, maggie, nelson, milhouse, gil, grimey] =
      await User.bulkCreate(users);
    const [springfieldElem, springfieldCC] = await School.bulkCreate(schools);

    bart.schoolId = springfieldElem.id;
    lisa.schoolId = springfieldElem.id;
    nelson.schoolId = springfieldElem.id;
    milhouse.schoolId = springfieldElem.id;
    marge.schoolId = springfieldCC.id;
    moe.schoolId = springfieldCC.id;
    gil.schoolId = springfieldCC.id;
    grimey.schoolId = springfieldCC.id;

    //what is addClassmate?
    bart.addClassMate(nelson.id);
    bart.addClassMate(milhouse.id);
    bart.addClassMate(lisa.id);

    //Promise.all()?
    await Promise.all([
      bart.save(),
      lisa.save(),
      nelson.save(),
      milhouse.save(),
      marge.save(),
      moe.save(),
      gil.save(),
      grimey.save(),
    ]);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { User, School, dbSeed };
