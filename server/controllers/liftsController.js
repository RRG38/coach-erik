//set up just need to change some of variables below

let lifts = [];
let id = 0;

module.exports = {
  read: (req, res) => {
    res.status(200).send(lifts);
  },
  create: (req, res, next) => {
    const { text, time } = req.body;
    lifts.push({ id, text, time });
    id++;
    res.status(200).send(lifts);
  },
  update: (req, res) => {
    const { text } = req.body;
    const updateID = req.params.id;
    const messageIndex = lifts.findIndex(
      (message) => message.id == updateID
    );
    let message = lifts[messageIndex];

    lifts[messageIndex] = {
      id: message.id,
      text: text || message.text,
      time: message.time,
    };

    res.status(200).send(lifts);
  },
  delete: (req, res, next) => {
    const { id } = req.params;
    const index = lifts.findIndex((e) => e.id === +id);
    lifts.splice(index, 1);
    res.status(200).send(lifts);
  },
};