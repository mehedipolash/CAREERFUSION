import React, { use } from "react";
import { NavLink } from "react-router";
const companyPromise = fetch("/Companies.json").then((res) => res.json());
const Companies = () => {
  const companies = use(companyPromise);
  // console.log(companies);
  return (
    <div>
      <h2 className="text-xl text-center font-bold">Available Companies</h2>
      <br />
      <div className="grid lg:grid-cols-4 grid-cols-2 mt-5 gap-6">
        {companies.map((company) => (
          <NavLink
            className={
              "btn bg-base-100 font-semibold hover:bg-base-200 border-0 text-green-700 flex items-center gap-8 text-xl"
            }
            key={company.id}
            to={`/company-details/${company.id}`}
          >
            <img
              src={company.logo}
              alt={company.name}
              className="w-8 h-8 object-contain"
            />
            {company.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Companies;
