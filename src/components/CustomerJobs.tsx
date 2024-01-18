import React from "react";
import { Job } from "../types/customer";
interface CustomerjobsProps {
  jobs: Job[];
}

const CustomerJobs: React.FC<CustomerjobsProps> = ({ jobs }) => {
  return (
    <div className="jobsList">
      {jobs.map((job) => (
        <div>{job.duration}</div>
      ))}
    </div>
  );
};

export default CustomerJobs;
