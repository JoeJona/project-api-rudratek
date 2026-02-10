const Project = require("../model/project");

// CREATE
exports.createProject = async (req, res) => {
  try {
    const project = await Project.create(req.body);
    res.status(201).json(project);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get ALL + Search by Project Name + Filter by Status
exports.getProjects = async (req, res) => {
  const { name, status, sort, order} = req.query;
  const filter = {}
  if (name) {
    filter.name =  new RegExp(name, "i")
  }
  if (status) {
    filter.status =  status
  }
  const projects = await Project.find(filter)
  .sort({ [sort || "createdDate"]: order === "desc" ? 1 : -1 });
  res.json(projects);
};

// Get ONE By Id
exports.getProjectById = async (req, res) => {
  const project = await Project.findOne({id : req.params.id});
  if (!project) return res.status(404).json({ message: "Project not found" });
  res.json(project);
};

// UPDATE Project
exports.updateProject = async (req, res) => {
  const user = await Project.findOneAndUpdate(
    {id : req.params.id},
    {$set: req.body, updatedDate: new Date()},
    { new: true }
  );
  res.json(user);
};

// DELETE Project
exports.deleteProject = async (req, res) => {
  await Project.findByIdAndDelete(req.params.id);
  res.json({ message: "User deleted" });
};
