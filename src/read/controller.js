export const readController = {
  /**
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   */

  async readData(req, res) {
    return res.send({ message: "Read endpoint is under construction" });
  },
};
