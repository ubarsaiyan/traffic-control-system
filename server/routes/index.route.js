const express = require('express');
const asyncHandler = require('express-async-handler');
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

module.exports = router;

router.route('/vehicle')
  .post(asyncHandler(addVehicle));

async function addVehicle(req, res) {
  console.log(req, res);
  let vehicle = await vehicleCtrl.insert(req.body);
  res.json(vehicle);
}

router.route('/licence')
  .post(asyncHandler(addLicence));

async function addLicence(req, res) {
  let licence = await licenceCtrl.insert(req.body);
  res.json(licence);
}

router.route('/rto')
  .post(asyncHandler(addRto));

async function addRto(req, res) {
  let rto = await rtoCtrl.insert(req.body);
  res.json(rto);
}

router.route('/street')
  .post(asyncHandler(addStreet));

async function addStreet(req, res) {
  let street = await streetCtrl.insert(req.body);
  res.json(street);
}

router.route('/crossing')
  .post(asyncHandler(addCrossing));

async function addCrossing(req, res) {
  let crossing = await crossingCtrl.insert(req.body);
  res.json(crossing);
}

router.route('/policeStation')
  .post(asyncHandler(addPoliceStation));

async function addPoliceStation(req, res) {
  let policeStation = await policeStationCtrl.insert(req.body);
  res.json(policeStation);
}

router.route('/trafficSignal')
  .post(asyncHandler(addTrafficSignal));

async function addTrafficSignal(req, res) {
  let trafficSignal = await trafficSignalCtrl.insert(req.body);
  res.json(trafficSignal);
}

router.route('/policeOfficer')
  .post(asyncHandler(addPoliceOfficer));

async function addPoliceOfficer(req, res) {
  let policeOfficer = await policeOfficerCtrl.insert(req.body);
  res.json(policeOfficer);
}

router.route('/emergency')
.post(asyncHandler(addEmergency));

async function addEmergency(req, res) {
  let emergency = await emergencyCtrl.insert(req.body);
  res.json(emergency);
}

router.route('/challan')
  .post(asyncHandler(addChallan));

async function addChallan(req, res) {
  let challan = await challanCtrl.insert(req.body);
  res.json(challan);
}
