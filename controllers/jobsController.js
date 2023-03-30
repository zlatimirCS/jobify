import Job from '../models/Jobs.js';
import StatusCodes from 'http-status-codes';
import { BadRequestError, UnAuthenticatedError } from '../errors/index.js';

const createJob = async (req, res) => {
  console.log('aaaaaaaaa usao');
  console.log('req.body', req.body);
  const { position, company } = req.body;

  if (!position || !company) {
    throw new BadRequestError('Please provide all values');
  }

  req.body.createdBy = req.body.user._id;

  const job = await Job.create(req.body);
  res.status(StatusCodes.CREATED).json({ job });
};

const deleteJob = async (req, res) => {
  res.send('delete job');
};

const getAllJobs = async (req, res) => {
  res.send('get all jobs');
};

const updateJob = async (req, res) => {
  res.send('update job');
};

const showStats = async (req, res) => {
  res.send('show stats');
};

export { createJob, deleteJob, getAllJobs, updateJob, showStats };
