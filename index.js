const data = require("./information.js");
var cowsay = require("cowsay");

console.log(
  cowsay.say({
    text: `${data.data.name} from the ${data.data.campus} de Bdx, and this is a cute cow (see the eyes)`,
    e: "óÒ",
    r: false,
  })
);
