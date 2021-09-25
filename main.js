const sharp = require("sharp");
const fs = require("fs");
const basePath = "./original";
const game = 1;

fs.readdir(`${basePath + game}/`, async function (err, files) {
  if (err) {
    return console.log("Unable to scan directory: " + err);
  }

  await Promise.all(
    files.map(async (fileName, index) => {
      await sharp(`${basePath + game}/` + fileName)
        .resize(400, 500)
        .jpeg({ quality: 85 })
        .toFile(`./images/game${game}/` + (index + 1) + ".jpeg");
    })
  );
});
