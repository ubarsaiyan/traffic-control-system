const express = require('express');
const userRoutes = require('./user.route');
const authRoutes = require('./auth.route');

const vehicleCtrl = require('../controllers/vehicle.controller');

const router = express.Router(); // eslint-disable-line new-cap

/** GET /health-check - Check service health */
router.get('/health-check', (req, res) =>
  res.send('OK')
);

router.use('/auth', authRoutes);
router.use('/user', userRoutes);

router.route('/vehicles')
  .post(asyncHandler(addVehicle));

module.exports = router;

async function addVehicle(req, res) {
  let vehicle = await vehicleCtrl.insert(req.body);
  res.json(vehicle);
}
