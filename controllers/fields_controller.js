const global_values = require("../global_values");
const field = require("../models/field_model");
const main_controller = require("./main_controller");

exports.storeFieldsInJsonFile = async (req, res) => {
  try {
    const fields = await field.find({}).select("-_id");
await main_controller.storeJsObjectToJsonFile(
      fields,
      global_values.BACKUP_FILE_NAMES.FIELDS
    );
      return res.status(global_values.STATUS.SUCCESSFUL).json({
        data: {},
        message: "فیلد با موفقیت ذخیره شد.",
        success: true,
      });

  } catch (error) {
    global_values.errorResponse(res, error);
  }
};
