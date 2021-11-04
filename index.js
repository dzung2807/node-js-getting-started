// const express = require("express");
// // const proxy = require("express-http-proxy");
const path = require("path");
const PORT = process.env.PORT || 8000;

const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();
app
  .use(express.static(path.join(__dirname, "public")))
  .set("views", path.join(__dirname, "views"))
  .set("view engine", "ejs")
  // .get("/", (req, res) => res.render("pages/index"))
  .use(
    "/",
    createProxyMiddleware({
      target: "https://speech.vinbase.ai",
      changeOrigin: true,
    })
  )
  .listen(PORT, () => console.log(`Listening on ${PORT}`));
// app.listen(3000);

// express()
// .use(express.static(path.join(__dirname, "public")))
// .set("views", path.join(__dirname, "views"))
// .set("view engine", "ejs")
// .get("/", (req, res) => res.render("pages/index"))
//   .use(proxy("/api", { target: "https://speech.vinbase.ai" }))
//   .listen(PORT, () => console.log(`Listening on ${PORT}`));
