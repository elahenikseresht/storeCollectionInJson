const values = {
  //server port
  PORT: 3000,
  //api response statuses
  STATUS: {
    SUCCESSFUL: 200,
    CLIENT_ERROR: 400,
    SERVER_ERROR: 500,
    REDIRECTS: 300,
  },
  DATABASE_LOCAL: "mongodb://localhost:27017/sakokdev",
  BACKUP_FILE_NAMES:{
    FIELDS:"fields"
  },
  errorResponse: (res, err) => {
    return res.status(values.STATUS.SERVER_ERROR).json({
      message: err.message,
      stack: err.stack,
      success: false,
      data: null,
    });
  },
};

module.exports = values;