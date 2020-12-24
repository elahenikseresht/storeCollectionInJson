const express = require("express");
const router = express.Router();
const fields_controller = require("../controllers/fields_controller");

router.get("/store/json", fields_controller.storeFieldsInJsonFile);

module.exports = router;
