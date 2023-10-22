import { ADD_JOB, REMOVE_JOB } from './index';

export const addJob = (job: any) => ({
  type: ADD_JOB,
  payload: job
});

export const removeJob = (jobId: any) => ({
  type: REMOVE_JOB,
  payload: jobId
});