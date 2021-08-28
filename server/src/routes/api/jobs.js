const express = require('express');
const router = express.Router();
const authorization = require('../../middlewares/authorization');

const Job = require('../../models/Job');

const { ADMIN, COMPANY, STUDENT } = require('../../constants/roles');

router.get('/userJobs', authorization, (req, res) => {
  const { _id, role } = req.user;

  Job.find({ _creatorId: _id })
    .then(jobs => res.status(200).send(jobs))
    .catch(error => res.status(400).send({ message: error.message }));

});

router.get('/', authorization, (req, res) => {
  const { _id, role } = req.user;

  Job.find({})
    .then(jobs => res.status(200).send(jobs))
    .catch(error => res.status(400).send({ message: error.message }));

});

router.post('/', authorization, (req, res) => {
  const { _id, role } = req.user;
  const { title, description, section } = req.body;

  const job = new Job({
    _creatorId: _id,
    title,
    description,
    section,
    status,
    folderLink
  });

  job
    .save()
    .then(data => res.status(200).send(data))
    .catch(error => res.status(400).send({ message: error.message }));
});

router.get('/:id', authorization, (req, res) => {
  const { _id, role } = req.user;

  if (role === COMPANY)
    return Job.find({ _id: req.params.id, _companyId: _id })
      .then(job => res.status(200).send(job))
      .catch(error => res.status(400).send({ message: error.message }));

  Job.findById(req.params.id)
    .then(job => res.status(200).send(job))
    .catch(error => res.status(400).send({ message: error.message }));
});

router.patch('/:id/apply', authorization, (req, res) => {
  const { _id, role } = req.user;

  if (role === ADMIN)
    return res.status(401).send({ message: 'Access denied.' });

  Job.findById(req.params.id)
    .then(job => {
      const plainJob = job.toObject();
      const applicants = plainJob.applicants;
      applicants.push(_id);

      return Job.updateOne({ _id: req.params.id }, { $set: { applicants } });
    })
    .then(success => res.status(200).send(success.nModified.toString()))
    .catch(error => res.status(400).send({ message: error.message }));
});

router.delete('/:id', authorization, (req, res) => {
  const { _id, role } = req.user;

  Job.deleteOne({ _id: req.params.id })
    .then(success => res.status(200).send(success.deletedCount.toString()))
    .catch(error => res.status(400).send({ message: error.message }));

});

module.exports = router;
