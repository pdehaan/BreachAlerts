"use strict";

const AppConstants = require("./app-constants").init();

const express = require("express");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const sessions = require("client-sessions");

const EmailUtils = require("./email-utils");
const OAuthRoute = require("./routes/oauth");
const UserRoute = require("./routes/user");

const app = express();
app.use(bodyParser.json());
app.use(express.static("public"));
// app.use(helmet());
app.use(sessions({
  cookieName: "session",
  secret: AppConstants.COOKIE_SECRET,
  duration: 15 * 60 * 1000, // 15 minutes
  activeDuration: 5 * 60 * 1000, // 5 minutes
}));

app.get("/", (req, res) => {
  res.send("blurts-server v0.01a");
});

app.use("/oauth", OAuthRoute);
app.use("/user", UserRoute);

EmailUtils.init().then(() => {
  app.listen(AppConstants.PORT, () => {
    console.log(`Listening on ${AppConstants.PORT}`);
  });
}).catch(error => {
  console.error(error);
});
