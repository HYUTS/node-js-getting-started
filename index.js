const cool = require("cool-ascii-faces");
const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 5000;

express()
  .use(express.static(path.join(__dirname, "public")))
  .set("views", path.join(__dirname, "views"))
  .set("view engine", "ejs")
  .get("/", (req, res) => res.render("pages/index"))
  .get("/cool", (req, res) => res.send(cool()))
  .get("/times", (req, res) => res.send(showTimes()))
  .get("/test", (req, res) => res.send(test()))
  .get("/commands", (req, res) => res.send(commands()))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));

showTimes = () => {
  let result = "";
  const times = process.env.TIMES || 5;
  for (i = 0; i < times; i++) {
    result += i + " ";
  }
  return result;
};

test = () => {
  return process.env.TEST;
};

commands = () => {
  return `git add .
  git commit -m "Add cool face API"
  git push heroku main`
  // Minimal parser
  // function htmlParse(raw) {
  //   return new DOMParser().parseFromString(raw, "text/html");
  // }
  // // Minimal fetch
  // fetch("/")
  //   .then((e) => e.text())
  //   .then((e) => {
  //     let html = htmlParse(e);
  //     console.log(html);
  //     document.body.innerHTML = html;
  //     return html;
  //   });
};
