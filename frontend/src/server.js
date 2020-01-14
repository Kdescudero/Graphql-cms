// Dependencias
import experss from "express";
import next from "next";
import path from "path";

// Settings up Next App
const dev = process.env.NODE_ENV !== "production";
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

// Running Next App
nextApp.prepare().then(() => {
  const app = experss();

  // Public static
  app.use(experss.static(path.join(__dirname, "../public")));

  // Routers
  app.get("/login", (req, res) => {
    return nextApp.render(req, res, "/users/login", req.query);
  });

  app.all("*", (req, res) => {
    return handle(req, res);
  });

  // Listening port 3000
  app.listen(3000);
});
