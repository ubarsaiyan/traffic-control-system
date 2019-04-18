const express = require('express');
const userRoutes = require('./user.route');
const authRoutes = require('./auth.route');

const vehicleCtrl = require('../controllers/vehicle.controller');
const licenceCtrl = require('../controllers/licence.controller');
const rtoCtrl = require('../controllers/rto.controller');
const streetCtrl = require('../controllers/street.controller');
const crossingCtrl = require('../controllers/crossing.controller');
const trafficSignalCtrl = require('../controllers/trafficSignal.controller');
const policeOfficerCtrl = require('../controllers/policeOfficer.controller');
const challanCtrl = require('../controllers/challan.controller');
const emergencyCtrl = require('../controllers/emergency.controller');

const router = express.Router(); 
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

const router = express.Router(); 
router.get('/health-check', (req, res) =>
  res.send('OK')
);

router.use('/auth', authRoutes);
router.use('/user', userRoutes);

router.route('/licence')
  .post(asyncHandler(addLicence));

module.exports = router;

async function addLicence(req, res) {
  let licence = await licenceCtrl.insert(req.body);
  res.json(licence);
}


const router = express.Router(); 
router.get('/health-check', (req, res) =>
  res.send('OK')
);

router.use('/auth', authRoutes);
router.use('/user', userRoutes);

router.route('/rto')
  .post(asyncHandler(addRto));

module.exports = router;

async function addRto(req, res) {
  let rto = await rtoCtrl.insert(req.body);
  res.json(rto);
}

const router = express.Router();

router.get('/health-check', (req, res) =>
  res.send('OK')
);

router.use('/auth', authRoutes);
router.use('/user', userRoutes);

router.route('/street')
  .post(asyncHandler(addStreet));

module.exports = router;

async function addStreet(req, res) {
  let street = await streetCtrl.insert(req.body);
  res.json(street);
}

const router = express.Router(); // eslint-disable-line new-cap

/** GET /health-check - Check service health */
router.get('/health-check', (req, res) =>
  res.send('OK')
);

router.use('/auth', authRoutes);
router.use('/user', userRoutes);

router.route('/policeStation')
  .post(asyncHandler(addPoliceStation));

module.exports = router;

async function addPoliceStation(req, res) {
  let policeStation = await policeStationCtrl.insert(req.body);
  res.json(policeStation);
}

const router = express.Router(); // eslint-disable-line new-cap

/** GET /health-check - Check service health */
router.get('/health-check', (req, res) =>
  res.send('OK')
);

router.use('/auth', authRoutes);
router.use('/user', userRoutes);

router.route('/trafficSignal')
  .post(asyncHandler(addTrafficSignal));

module.exports = router;

async function addTrafficSignal(req, res) {
  let trafficSignal = await trafficSignalCtrl.insert(req.body);
  res.json(trafficSignal);
}

const router = express.Router(); // eslint-disable-line new-cap

/** GET /health-check - Check service health */
router.get('/health-check', (req, res) =>
  res.send('OK')
);

router.use('/auth', authRoutes);
router.use('/user', userRoutes);

router.route('/policeOfficer')
  .post(asyncHandler(addPoliceOfficer));

module.exports = router;

async function addPoliceOfficer(req, res) {
  let policeOfficer = await policeOfficerCtrl.insert(req.body);
  res.json(policeOfficer);
}

const router = express.Router(); // eslint-disable-line new-cap

/** GET /health-check - Check service health */
router.get('/health-check', (req, res) =>
  res.send('OK')
);

router.use('/auth', authRoutes);
router.use('/user', userRoutes);

router.route('/emergency')
.post(asyncHandler(addEmergency));

module.exports = router;

async function addEmergency(req, res) {
  let emergency = await eemergencyCtrl.insert(req.body);
  res.json(emergency);
}

const router = express.Router(); // eslint-disable-line new-cap

/** GET /health-check - Check service health */
router.get('/health-check', (req, res) =>
  res.send('OK')
);

router.use('/auth', authRoutes);
router.use('/user', userRoutes);

router.route('/challan')
  .post(asyncHandler(addChallan));

module.exports = router;

async function addChallan(req, res) {
  let challan = await challanCtrl.insert(req.body);
  res.json(challan);
}


