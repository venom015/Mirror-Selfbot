const COLOR = require(`chalk`);

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
  console.log(COLOR.green(`[DEBUG] ` + COLOR.white(...message)));
};

exports.message = message => {
  console.log(COLOR.green(`[Selfbot] ` + COLOR.white(...message)));
};

