

let lifts = [];
let id = 0;

module.exports = {
  read: (req, res) => {
    res.status(200).send(lifts);
  },
  create: (req, res, next) => {
    const { name, reps, sets, weight, date } = req.body;
    lifts.push({ id, name, reps, sets, weight, date });
    id++;
    res.status(200).send(lifts);
  },
  update: (req, res) => {
    const { name, reps, sets, weight, date } = req.body;
    const updateID = req.params.id;
    const liftIndex = lifts.findIndex(
      (lifts) => lifts.id == updateID
    );
    let lift = lifts[liftIndex];

    lifts[liftIndex] = {
      id: lift.id,
      name: name || lift.name,
      reps: reps || lift.reps,
      sets: sets || lift.sets,
      weight: weight || lift.weight,
      date: date || lift.date
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