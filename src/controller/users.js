const userModel = require("../models/users");

const getAllUser = async (req, res) => {
  try {
    const [data] = await userModel.getAllUser();
    res.json({
      message: "GET users",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      ServerMessage: error,
    });
  }
};

const createUser = async (req, res) => {
  const { body } = req;
  try {
    await userModel.createUser(body);
    res.json({
      messgae: "POST user success",
      data: body,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Internal Server Error",
      ServerMessage: error.message,
    });
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  try {
    await userModel.updateuser(body, id);
    res.json({
      message: "PATCH user success",
      data: {
        id: id,
        ...body,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Internal Server Error",
      ServerMessage: error.message,
    });
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    await userModel.deleteUser(id);
    res.json({
      message: "OK",
      data: null,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Internal Server Error",
      ServerMessage: error.message,
    });
  }
};

module.exports = {
  getAllUser,
  createUser,
  updateUser,
  deleteUser,
};
