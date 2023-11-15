module.exports = function (app) {
  const API_ENDPOINT = "/api";
  const API_VERSION = "v1";

  app.use(`${API_ENDPOINT}/${API_VERSION}/todos`, require("./todos"));

  // catch all route to show 404 error whe all other roputes fail
  app.all("*", (req, res) => {
    res.sendStatus(404);
  });
};
