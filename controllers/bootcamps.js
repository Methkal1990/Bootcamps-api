// @desc get all bootcamps
// @route GET /api/v1/bootcamps
// @access Public
exports.getBootcamps = (req, res, next) => {
  res.status(200).json({ success: true, msg: "show all bootcamps"});
};

// @desc get signle bootcamps
// @route GET /api/v1/bootcamps/:id
// @access Public
exports.getBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: "show a bootcamp" });
};

// @desc create new bootcamp
// @route POST /api/v1/bootcamps
// @access Private
exports.postBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: "create a bootcamp" });
};

// @desc Update a bootcamp
// @route PUT /api/v1/bootcamps/:id
// @access Private
exports.updateBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: "update a bootcamp" });
};

// @desc Deletw a bootcamp
// @route DELETE /api/v1/bootcamps/:id
// @access Private
exports.deleteBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: "delete a bootcamp" });
};
