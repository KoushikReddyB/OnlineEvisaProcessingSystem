import React, { useState } from 'react';
import Navbar2 from './Navbar2';
const Apply = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    surname: '',
    givenName: '',
    gender: '',
    townOfBirth: '',
    countryOfBirth: '',
    citizenship: '',
    religion: '',
    educationalQualification: '',
    acquisition: '',
    // Add more form fields here
  });

  // Handle form field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
  };

  return (
    <div>
      <Navbar2 />
      <h2>Applicant Details Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="surname">Surname (as given in passport)</label>
          <input type="text" id="surname" name="surname" value={formData.surname} onChange={handleInputChange} required />
        </div>
        <div>
          <label htmlFor="givenName">Given name (as given in passport)</label>
          <input type="text" id="givenName" name="givenName" value={formData.givenName} onChange={handleInputChange} required />
        </div>
        <div>
          <label htmlFor="gender">Gender</label>
          <select id="gender" name="gender" value={formData.gender} onChange={handleInputChange} required>
            <option value="">-- Select One --</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="townOfBirth">Town/City of birth</label>
          <input type="text" id="townOfBirth" name="townOfBirth" value={formData.townOfBirth} onChange={handleInputChange} required />
        </div>
        <div>
          <label htmlFor="countryOfBirth">Country of Birth</label>
          <select id="countryOfBirth" name="countryOfBirth" value={formData.countryOfBirth} onChange={handleInputChange} required>
            <option value="">-- Select One --</option>
            {/* Add options for country of birth */}
          </select>
        </div>
        <div>
          <label htmlFor="citizenship">Citizenship/National ID No</label>
          <input type="text" id="citizenship" name="citizenship" value={formData.citizenship} onChange={handleInputChange} required />
        </div>
        <div>
          <label htmlFor="religion">Religion</label>
          <select id="religion" name="religion" value={formData.religion} onChange={handleInputChange} required>
            <option value="">-- Select One --</option>
            <option value="Hindu">Hindu</option>
            <option value="Muslim">Muslim</option>
            <option value="Christian">Christian</option>
            <option value="Buddhist">Buddhist</option>
            <option value="Other">Other</option>
          </select>
        </div>
        {/* Add more form fields here */}
        <div>
          <label htmlFor="educationalQualification">Educational Qualification</label>
          <select id="educationalQualification" name="educationalQualification" value={formData.educationalQualification} onChange={handleInputChange} required>
            <option value="">-- Select One --</option>
            <option value="High School">High School</option>
            <option value="Bachelor's Degree">Bachelor's Degree</option>
            <option value="Master's Degree">Master's Degree</option>
            <option value="PhD">PhD</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="acquisition">Did you acquire nationality by birth or naturalisation?</label>
          <select id="acquisition" name="acquisition" value={formData.acquisition} onChange={handleInputChange} required>
            <option value="">-- Select One --</option>
            <option value="By Birth">By Birth</option>
            <option value="By Naturalisation">By Naturalisation</option>
          </select>
        </div>
        <button type="submit">Next Page</button>
      </form>
      {/* Add other sections similarly */}
    </div>
  );
};

export default Apply;
