const { User, School } = require('../db');
const router = require('express').Router();

//localhost:3000/users/
router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.send(users);
  } catch (error) {
    next(error);
  }
});

//this route looks great, but what might go wrong with it?
router.get('/:id', async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);
    res.send(user);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const newUser = await User.create(req.body);
    //what if there is a user that exists by that name?
    res.send(newUser);
  } catch (error) {
    next(error);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const user = await User.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.send(user);
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);
    await user.destroy();
    res.send(user);
  } catch (error) {
    next(error);
  }
});

router.get('/isEnrolled/:id', async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);
    res.send(user.isEnrolled());
  } catch (error) {
    next(error);
  }
});

module.exports = router;

//curl -X <request type> -d <data> -H <headers> <url>

//POST request
//curl -X POST -H "Content-Type: application/json" -d '{"name": "Barney", "email": "smelltheflowers@gmail.com"}' 'localhost:3000/users'

//PUT request
//curl -X PUT -d '{"age":"29"}' -H "Content-Type: application/json" localhost:3000/users/7
