import React from "react";

const FAQA = () => {
  return (
    <section className="w-11/12 mx-auto px-4 py-10 mt-5">
      <h2 className="text-2xl font-bold mb-6 text-accent text-center">
        ❓ Frequently Asked Questions
      </h2>

      <div className="space-y-3">

        {/* Q1 */}
        <div className="collapse collapse-plus bg-base-100 shadow rounded-lg">
          <input type="checkbox" />
          <div className="collapse-title text-lg font-medium">
            How do I register on CareerFusion?
          </div>
          <div className="collapse-content">
            <p>
              Click on the <strong>SignUp</strong> option from the navigation bar,
              enter your email and password, verify your email, and your account
              will be created successfully.
            </p>
          </div>
        </div>

        {/* Q2 */}
        <div className="collapse collapse-plus bg-base-100 shadow rounded-lg">
          <input type="checkbox" />
          <div className="collapse-title text-lg font-medium">
            I forgot my password — what should I do?
          </div>
          <div className="collapse-content">
            <p>
              Click on the <strong>Forgot Password</strong> option on the Sign-In
              page. Enter your email, and we will send you a secure password
              reset link.
            </p>
          </div>
        </div>

        {/* Q3 */}
        <div className="collapse collapse-plus bg-base-100 shadow rounded-lg">
          <input type="checkbox" />
          <div className="collapse-title text-lg font-medium">
            Can I apply for jobs without creating an account?
          </div>
          <div className="collapse-content">
            <p>
              No. To apply for jobs and save your activity, creating an account
              is required for security and better experience.
            </p>
          </div>
        </div>

        {/* Q4 */}
        <div className="collapse collapse-plus bg-base-100 shadow rounded-lg">
          <input type="checkbox" />
          <div className="collapse-title text-lg font-medium">
            Are the job listings verified?
          </div>
          <div className="collapse-content">
            <p>
              Yes! All job postings on CareerFusion are verified from trusted
              sources and official company pages before being published.
            </p>
          </div>
        </div>

        {/* Q5 */}
        <div className="collapse collapse-plus bg-base-100 shadow rounded-lg">
          <input type="checkbox" />
          <div className="collapse-title text-lg font-medium">
            How can I contact support?
          </div>
          <div className="collapse-content">
            <p>
              Visit the <strong>Contact Us</strong> page and fill out the form.
              Our team will respond within 24 hours.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FAQA;
