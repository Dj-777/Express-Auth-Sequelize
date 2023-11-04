let pageNotFoundController = {};

pageNotFoundController.apiRoute = (req, res) => {
  return res.status(404).json({
    error: "404 Route not found",
  });
};

module.exports = { pageNotFoundController };
