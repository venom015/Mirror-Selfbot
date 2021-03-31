const COLOR = require(`colors`);

exports.warn = (...message) => {
  console.log(COLOR.yellow(`<aviso>`))
  console.warn(...message);
  console.log(COLOR.yellow(`</aviso>`))
};

exports.error = (...message) => {
  console.log(COLOR.red(`<erro>`))
  console.warn(...message);
  console.log(COLOR.red(`</erro>`))
};

exports.info = (...message) => {
  console.log(COLOR.brightGreen(`[MIRROR] ` + COLOR.white(...message)));
};

exports.message = message => {
  console.log(COLOR.brightGreen(`[Selfbot] ` + COLOR.white(...message)));
};

