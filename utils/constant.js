exports.exportLimit = 300;

exports.excludeKeys = {
  _id: 0,
  act: 0,
  updatedAt: 0,
  __v: 0,
  "services.values._id": 0,
  "services._id": 0,
  ref: 0,
  tags: 0,
};

exports.includeNgoFields = {
  act: 1,
  name: 1,
  region: 1,
  bbmp: 1
};
