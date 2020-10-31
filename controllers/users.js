// @desc      Register user
// @route     POST /api/users
// @access    Public
exports.registerUser = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: "Show all bootcamps", hello: req.hello });
};

// @desc      Get a single User
// @route     GET /api/v1/users/:id
// @access    Public
exports.getUser = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Show a single bootcamp ${req.params.id}` });
};

// @desc      Get all users
// @route     GET /api/v1/bootcamps
// @access    Private
exports.getAllUsers = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Create new bootcamps" });
};

// @desc      Update a user
// @route     PUT /api/v1/users/:id
// @access    Private
exports.updateUser = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Update bootcamp ${req.params.id}` });
};

// @desc      Delete user
// @route     DELETE /api/v1/users/:id
// @access    Private
exports.deleteUser = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Delete bootcamp ${req.params.id}` });
};
