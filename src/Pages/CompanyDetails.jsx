import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router";
import { motion, AnimatePresence } from "framer-motion";

const CompanyDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();

  const company = data.find((item) => item.id == id);

  const [selectedJob, setSelectedJob] = useState(null);

  if (!company) {
    return (
      <h2 className="text-center text-red-500 text-xl py-10">
        Company not found
      </h2>
    );
  }

  return (
    <div className="w-11/12 mx-auto py-10">

      {/* ---------- Company Info with Animation ---------- */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-base-100 p-6 rounded-lg shadow mb-10"
      >
        <div className="flex flex-col md:flex-row items-center gap-6 justify-center">
          <img
            src={company.logo}
            alt={company.name}
            className="w-24 h-24 object-contain"
          />

          <div>
            <h1 className="text-3xl font-bold">{company.name}</h1>
            <p className="text-gray-600">{company.industry}</p>
            <p className="text-gray-600">{company.location}</p>
          </div>
        </div>
      </motion.div>

      {/* ---------- Jobs List ---------- */}
      <h2 className="text-2xl font-semibold mb-4">Available Jobs</h2>

      <div className="grid grid-cols-1 gap-5">
        {company.jobs.map((job) => (
          <motion.div
            key={job.id}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-white p-5 rounded shadow cursor-pointer border hover:border-primary"
          >
            <h3 className="text-xl font-semibold">{job.title}</h3>

            <div className="text-gray-600 flex flex-col gap-1 mt-1">
              <p>
                <strong>Job Type:</strong> {job.jobType}
              </p>
              <p>
                <strong>Salary:</strong> {job.salary}
              </p>
            </div>

            <button
              onClick={() => setSelectedJob(job)}
              className="btn btn-outline btn-primary w-fit mt-3"
            >
              Details
            </button>
          </motion.div>
        ))}
      </div>

      {/* ---------- Modal (Animated) ---------- */}
      <AnimatePresence>
        {selectedJob && (
          <motion.dialog
            open
            className="modal modal-open"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="modal-box max-w-2xl"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.25 }}
            >
              <img
                src={selectedJob.bannerImage}
                alt={selectedJob.title}
                className="w-full h-48 object-cover rounded"
              />

              <h3 className="text-2xl font-bold mt-4">{selectedJob.title}</h3>

              <div className="mt-3 text-gray-700">
                <p>
                  <strong>Location:</strong> {selectedJob.location}
                </p>
                <p>
                  <strong>Job Type:</strong> {selectedJob.jobType}
                </p>
                <p>
                  <strong>Salary:</strong> {selectedJob.salary}
                </p>
              </div>

              <p className="mt-4 leading-relaxed">{selectedJob.description}</p>

              <h4 className="text-lg font-semibold mt-4">Requirements:</h4>
              <ul className="list-disc ml-6 text-gray-700">
                {selectedJob.requirements.map((req, idx) => (
                  <li key={idx}>{req}</li>
                ))}
              </ul>

              <div className="modal-action">
                <a
                  href={company.website}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-success"
                >
                  Apply
                </a>

                <button
                  onClick={() => setSelectedJob(null)}
                  className="btn btn-error"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.dialog>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CompanyDetails;
