import React from "react";

const Hero = () => {
  return (
    <div className="w-11/12 mx-auto mt-10">
      {/* ---------------- HERO SECTION ---------------- */}
      <section className="flex flex-col-reverse lg:flex-row items-center gap-10 py-10">
        {/* TEXT */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
            Build Your Future with <span className="text-primary">CareerFusion</span>
          </h1>

          <p className="mt-4 text-gray-600 max-w-md mx-auto lg:mx-0">
            Explore thousands of job opportunities, discover your perfect role, and connect with
            top global companies — all in one platform.
          </p>

          
        </div>

        {/* IMAGE */}
        <div className="flex-1 flex justify-center">
          <img
            src="https://i.ibb.co.com/q3Tfsg01/banner.png"
            alt="CareerFusion Banner"
            className="w-full max-w-md lg:max-w-xl rounded-xl shadow-xl object-contain"
          />
        </div>
      </section>

      {/* ---------------- HOW IT WORKS ---------------- */}
     <section className="mt-20 py-10">
  <h2 className="text-3xl font-bold text-center mb-10">How It Works</h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {/* Step 1 */}
    <div
      className="bg-base-100 p-6 rounded-xl shadow transition-all duration-500 
                 hover:-translate-y-2 hover:shadow-xl 
                 opacity-0 animate-[fadeInUp_0.8s_ease-out_forwards]"
    >
      <h3 className="text-xl font-semibold mb-2">1. Create Your Profile</h3>
      <p className="text-gray-600">
        Sign up and set up your professional profile so companies can discover your skills and experience.
      </p>
    </div>

    {/* Step 2 */}
    <div
      className="bg-base-100 p-6 rounded-xl shadow transition-all duration-500 
                 hover:-translate-y-2 hover:shadow-xl 
                 opacity-0 animate-[fadeInUp_1s_ease-out_forwards]"
    >
      <h3 className="text-xl font-semibold mb-2">2. Explore Jobs</h3>
      <p className="text-gray-600">
        Browse thousands of jobs from top companies, filtered by category, salary, skills, and more.
      </p>
    </div>

    {/* Step 3 */}
    <div
      className="bg-base-100 p-6 rounded-xl shadow transition-all duration-500 
                 hover:-translate-y-2 hover:shadow-xl 
                 opacity-0 animate-[fadeInUp_1.2s_ease-out_forwards]"
    >
      <h3 className="text-xl font-semibold mb-2">3. Apply & Get Hired</h3>
      <p className="text-gray-600">
        Apply with one click and track your application status directly through CareerFusion.
      </p>
    </div>
  </div>
</section>

    </div>
  );
};

export default Hero;
