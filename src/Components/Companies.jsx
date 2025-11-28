import React, { use } from "react";
import { NavLink } from "react-router";

const companyPromise = fetch("/Companies.json").then((res) => res.json());

const Companies = () => {
  const companies = use(companyPromise);

  return (
    <div className="bg-zinc-200 rounded-lg p-5">
      {/* <h2 className="text-2xl text-center font-bold underline pb-5">
        Available Companies
      </h2> */}

      {/* <h2
        className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center text-transparent bg-clip-text bg-[#E85959] pb-6 
                animate-bounce-slow max-w-full overflow-hidden"
      >
        Available Companies
      </h2> */}

      <h2
        className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center text-transparent bg-clip-text bg-linear-to-r from-[#E85959] via-[#FF6B6B] to-[#E85959] pb-6 
              animate-bounce hover:animate-pulse transition-all duration-300 max-w-full overflow-hidden bg-size[200%_auto] hover:scale-105"
      >
        Available Companies
      </h2>

      <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6">
        {companies.map((company) => (
          <NavLink
            key={company.id}
            to={`/company-details/${company.id}`}
            className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center hover:shadow-xl transition-shadow"
          >
            <img
              src={company.logo}
              alt={company.name}
              className="w-16 h-16 object-contain mb-3"
            />
            <h3 className="text-lg font-bold text-center">{company.name}</h3>
            <p className="text-sm text-gray-500">{company.industry}</p>
            <p className="text-sm text-gray-500">{company.location}</p>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Companies;
