const fs = require("fs");

exports.storeJsObjectToJsonFile = (obj, fileName) => {
  let data = JSON.stringify(obj);
  fs.writeFile(`${__dirname}/../backups/${fileName}.json`, data, (err) => {
    if (err) throw err;
    //TODO check How can you set a way that send error to client when an error happen insted of return false.
    console.log("Data written to file");
  });
};
