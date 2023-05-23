import React from "react";
import banner from "../assests/banner image copy.png";
import logo from "../assests/Asset 3@4x-8.png";
import back from "../assests/Group 217.png";
import icon from "../assests/Group 110.png";
import { useState } from "react";

function LandingPage() {
  const [formErrors, setFormErrors] = useState({});
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: "",
    company: "",
    state: "",
    describe: "",
    preferred: "",
    message: "",
    terms: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validateForm();

    if (Object.keys(errors).length === 0) {
      // No errors, submit the form
      setFormErrors({});
      setSubmitted(true);
      // Perform form submission or other actions
      // ...
    } else {
      // Errors found, update the formErrors state
      setFormErrors(errors);
    }
  };

  const validateForm = () => {
    const errors = {};

    // Validate first name
    if (formData.firstName.trim() === "") {
      errors.firstName = "First name is required";
    }

    // Validate last name
    if (formData.lastName.trim() === "") {
      errors.lastName = "Last name is required";
    }

    // Validate email
    if (formData.email.trim() === "") {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }

    // Validate contact number
    if (formData.contactNumber.trim() === "") {
      errors.contactNumber = "Contact number is required";
    }

    // Validate company
    if (formData.company.trim() === "") {
      errors.company = "Company is required";
    }
    // Validate state
    if (formData.state.trim() === "") {
      errors.state = "State is required";
    }

    // Validate describe
    if (formData.describe.trim() === "") {
      errors.describe = "Description is required";
    }

    return errors;
  };

  return (
    <div>
      <div className="relative h-screen flex banner">
        <div>
          <img src={logo} alt="logo" className="absolute top-10 left-[8rem] " />
          <img
            src={banner}
            alt="banner"
            className="w-full h-full banner"
          />
          <div className="absolute top-[34%] left-[8rem] font-bold w-[32rem] text-3xl font-serif text-gray-900">
            <span>Take your graphics protection</span> <br />
            <span>to the next level with DOL</span>
            <br /> <span>Max overlaminates</span>
            <br />
            <br />
            <span className="font-thin text-gray-600">
              Pair with MPI 1105 wrapping film
            </span>
            <br />
            <span className="font-thin text-gray-600">
              for ramped up protection
            </span>
            <div className="flex justify-between">
              <div className="flex flex-col items-center w-16">
                <div className="flex bg-black rounded-full p-2 mx-2">
                  <img src={icon} className="w-6 h-6" alt="icon" />
                </div>
                <p className=" text-xs mt-2">Maximum Durability</p>
              </div>
              <div className="flex flex-col items-center ml-2  w-16">
                <div className="flex bg-black rounded-full p-2">
                  <img src={icon} className="w-6 h-6" alt="icon" />
                </div>
                <p className="text-xs mt-2">Enhanced Appearance</p>
              </div>
              <div className="flex flex-col items-center ml-2  ">
                <div className="flex bg-black rounded-full p-2 ">
                  <img src={icon} className="w-6 h-6" alt="icon" />
                </div>
                <p className="text-xs mt-2">High Gloss</p>
              </div>
            </div>
          </div>

          <div className="relative h-screen truck">
            <img src={back} alt="truck" className="w-full h-full" />
            <div className="absolute top-[19%] left-[8rem]">
              <span className="text-4xl font-bold">
                DOL Max Overlaminate Films
              </span>
              <br />
              <span>
                Printed graphics deserve maximum protection. DOL Max is the
                solution.
              </span>
              <br />
              <br />
              <span className="font-semibold text-gray-900">
                Features and benefits:
              </span>

              <ul className="list-disc">
                <br />
                <li>
                  Premium vertical durability of up to 7 years and up to 2 years
                  horizontal <br />
                  <span>durability protection</span>
                </li>
                <br />
                <li>
                  The high gloss finish enhances the appearance of graphics and
                  adds a <br />
                  <span>special touch to help your graphics standout</span>
                </li>
                <br />
                <li>
                  Our digital overlaminates can be used on a variety of
                  substrates <br />
                  <span>
                    including banners, vehicle graphics, outdoor signage, and
                    more
                  </span>
                </li>
              </ul>
              <button className="bg-[#f26621] text-white text-lg px-[24px] py-[3px] rounded-md mt-6">
                Inquire now &rarr;
              </button>
            </div>
          </div>
        </div>
        <div className="form-container absolute inset-0 flex items-center justify-center">
        <div className="absolute left-[700px] top-[10%] w-[37%] bg-white shadow-xl rounded-lg opacity-100">
          <form className="p-8 space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-10" onSubmit={handleSubmit}>
            <h1 className="text-2xl font-bold mb-4">
              Connect With Us <br />
              <span className="text-gray-600 text-sm">
                for outstanding protective overlaminates
              </span>
            </h1>

            <div className="flex space-x-4 mb-4">
              <div className="w-1/2">
                <label
                  htmlFor="firstName"
                  className="block font-semibold text-gray-900 text-sm"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="w-full border-gray-300 border rounded-md px-4 py-2 text-sm"
                  value={formData.firstName}
                  onChange={(e) =>
                    setFormData({ ...formData, firstName: e.target.value })
                  }
                />
                {formErrors.firstName && (
                  <div className="text-red-500">{formErrors.firstName}</div>
                )}
              </div>

              <div className="w-1/2">
                <label
                  htmlFor="lastName"
                  className="block font-semibold text-gray-900 text-sm"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="w-full border-gray-300 border rounded-md px-4 py-2 text-sm"
                  value={formData.lastName}
                  onChange={(e) =>
                    setFormData({ ...formData, lastName: e.target.value })
                  }
                />
                {formErrors.lastName && (
                  <div className="text-red-500">{formErrors.lastName}</div>
                )}
              </div>
            </div>

            <div className="flex space-x-4 mb-4">
              <div className="w-1/2">
                <label
                  htmlFor="email"
                  className="block font-semibold text-gray-900 text-sm"
                >
                  Email
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="w-full border-gray-300 border rounded-md px-4 py-2 text-sm"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
                {formErrors.email && (
                  <div className="text-red-500">{formErrors.email}</div>
                )}
              </div>

              <div className="w-1/2">
                <label
                  htmlFor="contactNumber"
                  className="block font-semibold text-gray-900 text-sm"
                >
                  Contact Number
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="w-full border-gray-300 border rounded-md px-4 py-2 text-sm"
                  value={formData.contactNumber}
                  onChange={(e) =>
                    setFormData({ ...formData, contactNumber: e.target.value })
                  }
                />
                {formErrors.contactNumber && (
                  <div className="text-red-500">{formErrors.contactNumber}</div>
                )}
              </div>
            </div>

            <div className="flex space-x-4 mb-4">
              <div className="w-1/2">
                <label
                  htmlFor="company"
                  className="block font-semibold text-gray-900 text-sm"
                >
                  Company
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="w-full border-gray-300 border rounded-md px-4 py-2 text-sm"
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                />
                {formErrors.company && (
                  <div className="text-red-500">{formErrors.company}</div>
                )}
              </div>

              <div className="w-1/2">
                <label
                  htmlFor="state"
                  className="block font-semibold text-gray-900 text-sm"
                >
                  State
                </label>
                <select
                  id="state"
                  className="w-full border-gray-300 border rounded-md px-4 py-2 text-sm"
                  value={formData.state}
                  onChange={(e) =>
                    setFormData({ ...formData, state: e.target.value })
                  }
                >
                  <option value="">select state</option>
                  <option value="state1">Califonia</option>
                  <option value="state2">State 2</option>
                  <option value="state3">State 3</option>
                </select>
                {formErrors.state && (
                  <div className="text-red-500">{formErrors.state}</div>
                )}
              </div>
            </div>

            <div>
              <div>
                <label
                  htmlFor="describe"
                  className="block font-semibold text-gray-900 text-sm"
                >
                  How would you describe yourself
                </label>
                <select
                  id="describe"
                  className="w-full border-gray-300 border rounded-md px-4 py-2 text-sm"
                  value={formData.describe}
                  onChange={(e) =>
                    setFormData({ ...formData, describe: e.target.value })
                  }
                >
                  <option value="">select</option>
                  <option value="option1">Installer</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>
                {formErrors.describe && (
                  <div className="text-red-500">{formErrors.describe}</div>
                )}
              </div>
            </div>

            <div className="mb-4">
              <label
                htmlFor="message"
                className="block font-semibold text-gray-900 text-sm"
              >
                Additional Information
              </label>
              <textarea
                id="message"
                className="w-full border-gray-300 border rounded-md px-4 py-2 text-sm"
                rows="2"
              ></textarea>
            </div>

            <div className="mb-4">
              <label htmlFor="terms" className="flex items-center">
                <input type="checkbox" id="terms" className="mr-2" />
                <span className="text-gray-900 text-sm">
                  I'd like to receive promotions, product information and
                  service offers from Avery Dennison.
                </span>
              </label>
            </div>

            <button
              type="submit"
              className="bg-[#f26621] text-white text-lg px-[24px] py-[3px] mx-28 rounded-md mt-2"
              disabled={submitted}
            >
              Submit
            </button>
            {submitted ? (
              <div className="text-green-500 font-semibold">
                Thank you for submitting the form!
              </div>
            ) : null}
          </form>
        </div>
        </div>
      </div>
     
    </div>
  );
}

export default LandingPage;
