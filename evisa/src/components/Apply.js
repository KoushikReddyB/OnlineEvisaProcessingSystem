import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Typed from 'typed.js';
import { gsap } from 'gsap';
import gov from '../assests/img11.png';
import expert from '../assests/expert.jpeg';
import img from '../assests/img0.jpg';
import Bvisa from '../assests/Buss_Visa.png';
import Tvisa from '../assests/tvisa.png';
import sectrans from '../assests/sectrans.png';
import logo from '../assests/logo.png';
import gr from '../assests/gr.jpeg';
import tra from '../assests/trans.jpeg';
import mvisa from '../assests/mvisa.png';
import cvisa from '../assests/cvisa.png';
import Support from '../assests/support.jpg';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function Apply() {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    navigate('/home'); // Navigate to Apply2 page
  };
  return (
    <div>
      <div className="navbar-logo-left">
        <div className="navbar-logo-left-container shadow-three w-nav">
          <div className="container">
            <div className="navbar-wrapper">
              <a href="#" className="navbar-brand w-nav-brand">
                <img src={logo} loading="lazy" width="66" alt="" />
              </a>
              <div className="text-block">eVisaIndia</div>
              <nav role="navigation" className="nav-menu-wrapper w-nav-menu">
                <ul role="list" className="nav-menu-two w-list-unstyled">
                  <li><a href="#" className="nav-link">About eVisaIndia</a></li>
                  <li><Link to="/apply" className="nav-link">Apply-E-Visa</Link></li>
                  <li><Link to="/faq" className="nav-link">FAQ's</Link></li>
                  <li><div className="nav-divider"></div></li>
                  <li className="mobile-margin-top-10">
                    <Link to="/apply" className="button-primary w-button">Apply-Now</Link>
                  </li>
                </ul>
              </nav>
              <div className="menu-button w-nav-button">
                <div className="w-icon-nav-menu"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="hero-subscribe-right">
        <div className="container">
          <div className="hero-wrapper">
            <h1>Apply for E-Visa</h1>
            <form>
              <div>
                <label htmlFor="surname">Surname (as given in passport):</label>
                <input type="text" id="surname" name="surname" required />
              </div>
              <div>
                <label htmlFor="givenName">Given name (as given in passport):</label>
                <input type="text" id="givenName" name="givenName" required />
              </div>
              <div>
                <label htmlFor="gender">Gender:</label>
                <select id="gender" name="gender" required>
                  <option value="">-- select one --</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="cityOfBirth">Town/City of birth:</label>
                <input type="text" id="cityOfBirth" name="cityOfBirth" required />
              </div>
              <div>
                <label htmlFor="countryOfBirth">Country of Birth:</label>
                <select id="countryOfBirth" name="countryOfBirth" required>
                  <option value="">-- select one --</option>
                  {/* Populate with country options */}
                  <option value="Afghanistan">Afghanistan</option>
                <option value="Albania">Albania</option>
                <option value="Algeria">Algeria</option>
                <option value="Andorra">Andorra</option>
                <option value="Angola">Angola</option>
                <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                <option value="Argentina">Argentina</option>
                <option value="Armenia">Armenia</option>
                <option value="Australia">Australia</option>
                <option value="Austria">Austria</option>
                <option value="Azerbaijan">Azerbaijan</option>
                <option value="Bahamas">Bahamas</option>
                <option value="Bahrain">Bahrain</option>
                <option value="Bangladesh">Bangladesh</option>
                <option value="Barbados">Barbados</option>
                <option value="Belarus">Belarus</option>
                <option value="Belgium">Belgium</option>
                <option value="Belize">Belize</option>
                <option value="Benin">Benin</option>
                <option value="Bhutan">Bhutan</option>
                <option value="Bolivia">Bolivia</option>
                <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                <option value="Botswana">Botswana</option>
                <option value="Brazil">Brazil</option>
                <option value="Brunei">Brunei</option>
                <option value="Bulgaria">Bulgaria</option>
                <option value="Burkina Faso">Burkina Faso</option>
                <option value="Burundi">Burundi</option>
                <option value="Cabo Verde">Cabo Verde</option>
                <option value="Cambodia">Cambodia</option>
                <option value="Cameroon">Cameroon</option>
                <option value="Canada">Canada</option>
                <option value="Central African Republic">Central African Republic</option>
                <option value="Chad">Chad</option>
                <option value="Chile">Chile</option>
                <option value="China">China</option>
                <option value="Colombia">Colombia</option>
                <option value="Comoros">Comoros</option>
                <option value="Congo (Brazzaville)">Congo (Brazzaville)</option>
                <option value="Costa Rica">Costa Rica</option>
                <option value="Côte d'Ivoire">Côte d'Ivoire</option>
                <option value="Croatia">Croatia</option>
                <option value="Cuba">Cuba</option>
                <option value="Cyprus">Cyprus</option>
                <option value="Czechia">Czechia</option>
                <option value="Democratic Republic of the Congo">Democratic Republic of the Congo</option>
                <option value="Denmark">Denmark</option>
                <option value="Djibouti">Djibouti</option>
                <option value="Dominica">Dominica</option>
                <option value="Dominican Republic">Dominican Republic</option>
                <option value="East Timor">East Timor</option>
                <option value="Ecuador">Ecuador</option>
                <option value="Egypt">Egypt</option>
                <option value="El Salvador">El Salvador</option>
                <option value="Equatorial Guinea">Equatorial Guinea</option>
                <option value="Eritrea">Eritrea</option>
                <option value="Estonia">Estonia</option>
                <option value="Eswatini">Eswatini</option>
                <option value="Ethiopia">Ethiopia</option>
                <option value="Fiji">Fiji</option>
                <option value="Finland">Finland</option>
                <option value="France">France</option>
                <option value="Gabon">Gabon</option>
                <option value="Gambia">Gambia</option>
                <option value="Georgia">Georgia</option>
                <option value="Germany">Germany</option>
                <option value="Ghana">Ghana</option>
                <option value="Greece">Greece</option>
                <option value="Grenada">Grenada</option>
                <option value="Guatemala">Guatemala</option>
                <option value="Guinea">Guinea</option>
                <option value="Guinea-Bissau">Guinea-Bissau</option>
                <option value="Guyana">Guyana</option>
                <option value="Haiti">Haiti</option>
                <option value="Honduras">Honduras</option>
                <option value="Hungary">Hungary</option>
                <option value="Iceland">Iceland</option>
                <option value="India">India</option>
                <option value="Indonesia">Indonesia</option>
                <option value="Iran">Iran</option>
                <option value="Iraq">Iraq</option>
                <option value="Ireland">Ireland</option>
                <option value="Israel">Israel</option>
                <option value="Italy">Italy</option>
                <option value="Jamaica">Jamaica</option>
                <option value="Japan">Japan</option>
                <option value="Jordan">Jordan</option>
                <option value="Kazakhstan">Kazakhstan</option>
                <option value="Kenya">Kenya</option>
                <option value="Kiribati">Kiribati</option>
                <option value="Kosovo">Kosovo</option>
                <option value="Kuwait">Kuwait</option>
                <option value="Kyrgyzstan">Kyrgyzstan</option>
                <option value="Laos">Laos</option>
                <option value="Latvia">Latvia</option>
                <option value="Lebanon">Lebanon</option>
                <option value="Lesotho">Lesotho</option>
                <option value="Liberia">Liberia</option>
                <option value="Libya">Libya</option>
                <option value="Liechtenstein">Liechtenstein</option>
                <option value="Lithuania">Lithuania</option>
                <option value="Luxembourg">Luxembourg</option>
                <option value="Madagascar">Madagascar</option>
                <option value="Malawi">Malawi</option>
                <option value="Malaysia">Malaysia</option>
                <option value="Maldives">Maldives</option>
                <option value="Mali">Mali</option>
                <option value="Malta">Malta</option>
                <option value="Marshall Islands">Marshall Islands</option>
                <option value="Mauritania">Mauritania</option>
                <option value="Mauritius">Mauritius</option>
                <option value="Mexico">Mexico</option>
                <option value="Micronesia">Micronesia</option>
                <option value="Moldova">Moldova</option>
                <option value="Monaco">Monaco</option>
                <option value="Mongolia">Mongolia</option>
                <option value="Montenegro">Montenegro</option>
                <option value="Morocco">Morocco</option>
                <option value="Mozambique">Mozambique</option>
                <option value="Myanmar">Myanmar</option>
                <option value="Namibia">Namibia</option>
                <option value="Nauru">Nauru</option>
                <option value="Nepal">Nepal</option>
                <option value="Netherlands">Netherlands</option>
                <option value="New Zealand">New Zealand</option>
                <option value="Nicaragua">Nicaragua</option>
                <option value="Niger">Niger</option>
                <option value="Nigeria">Nigeria</option>
                <option value="North Korea">North Korea</option>
                <option value="North Macedonia">North Macedonia</option>
                <option value="Norway">Norway</option>
                <option value="Oman">Oman</option>
                <option value="Pakistan">Pakistan</option>
                <option value="Palau">Palau</option>
                <option value="Palestine">Palestine</option>
                <option value="Panama">Panama</option>
                <option value="Papua New Guinea">Papua New Guinea</option>
                <option value="Paraguay">Paraguay</option>
                <option value="Peru">Peru</option>
                <option value="Philippines">Philippines</option>
                <option value="Poland">Poland</option>
                <option value="Portugal">Portugal</option>
                <option value="Qatar">Qatar</option>
                <option value="Romania">Romania</option>
                <option value="Russia">Russia</option>
                <option value="Rwanda">Rwanda</option>
                <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                <option value="Saint Lucia">Saint Lucia</option>
                <option value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option>
                <option value="Samoa">Samoa</option>
                <option value="San Marino">San Marino</option>
                <option value="São Tomé and Príncipe">São Tomé and Príncipe</option>
                <option value="Saudi Arabia">Saudi Arabia</option>
                <option value="Senegal">Senegal</option>
                <option value="Serbia">Serbia</option>
                <option value="Seychelles">Seychelles</option>
                <option value="Sierra Leone">Sierra Leone</option>
                <option value="Singapore">Singapore</option>
                <option value="Slovakia">Slovakia</option>
                <option value="Slovenia">Slovenia</option>
                <option value="Solomon Islands">Solomon Islands</option>
                <option value="Somalia">Somalia</option>
                <option value="South Africa">South Africa</option>
                <option value="South Korea">South Korea</option>
                <option value="South Sudan">South Sudan</option>
                <option value="Spain">Spain</option>
                <option value="Sri Lanka">Sri Lanka</option>
                <option value="Sudan">Sudan</option>
                <option value="Suriname">Suriname</option>
                <option value="Sweden">Sweden</option>
                <option value="Switzerland">Switzerland</option>
                <option value="Syria">Syria</option>
                <option value="Taiwan">Taiwan</option>
                <option value="Tajikistan">Tajikistan</option>
                <option value="Tanzania">Tanzania</option>
                <option value="Thailand">Thailand</option>
                <option value="Togo">Togo</option>
                <option value="Tonga">Tonga</option>
                <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                <option value="Tunisia">Tunisia</option>
                <option value="Turkey">Turkey</option>
                <option value="Turkmenistan">Turkmenistan</option>
                <option value="Tuvalu">Tuvalu</option>
                <option value="Uganda">Uganda</option>
                <option value="Ukraine">Ukraine</option>
                <option value="United Arab Emirates">United Arab Emirates</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="United States">United States</option>
                <option value="Uruguay">Uruguay</option>
                <option value="Uzbekistan">Uzbekistan</option>
                <option value="Vanuatu">Vanuatu</option>
                <option value="Vatican City">Vatican City</option>
                <option value="Venezuela">Venezuela</option>
                <option value="Vietnam">Vietnam</option>
                <option value="Yemen">Yemen</option>
                <option value="Zambia">Zambia</option>
                <option value="Zimbabwe">Zimbabwe</option>
                </select>
              </div>
              <div>
                <label htmlFor="citizenshipID">Citizenship/National ID No:</label>
                <input type="text" id="citizenshipID" name="citizenshipID" required />
              </div>
              <div>
                <label htmlFor="religion">Religion:</label>
                <select id="religion" name="religion" required>
                  <option value="">-- select one --</option>
                  {/* Populate with religion options */}
                  <option value="ordinary">HINDU</option>
  <option value="official">CHRISTIAN</option>
  <option value="diplomatic">MUSLIM</option>
  <option value="service">BUDDHISM</option>
  <option value="special">JAINISM</option>
  <option value="special">SIKHISM</option>
  <option value="special">PREFER NOT TO SAY</option>
                </select>
              </div>
              <div>
                <label htmlFor="identificationMarks">Visible Identification Marks:</label>
                <input type="text" id="identificationMarks" name="identificationMarks" required />
              </div>
              <div>
                <label htmlFor="qualification">Educational Qualification:</label>
                <select id="qualification" name="qualification" required>
                  <option value="">-- select one --</option>
                  {/* Populate with qualification options */}
                  <option value="">-- select one --</option>
  <option value="high">High School Diploma or Equivalent</option>
  <option value="associate">Associate's Degree</option>
  <option value="bachelor">Bachelor's Degree (e.g., B.A., B.Sc.)</option>
  <option value="master">Master's Degree(e.g., M.A., M.S.)</option>
  <option value="doctorate">Doctorate or Ph.D.</option>
  <option value="professional">Professional Degree (e.g., M.D., J.D.)</option>
  <option value="college">Some College, No Degree</option>
  <option value="vocational">Vocational or Technical Certificate</option>
  <option value="high school">High School In Progress</option>
  <option value="progress">College In Progress</option>
  <option value="others">Other (Specify)</option>
                </select>
              </div>
              <div>
                <label htmlFor="nationalityAcquisition">Did you acquire nationality by birth or naturalisation?</label>
                <select id="nationalityAcquisition" name="nationalityAcquisition" required>
                  <option value="">-- select one --</option>
<option value="">-- select one --</option>
  <option value="birth">By Birth</option>
  <option value="descent">By Descent</option>
  <option value="naturalisation">By Naturalization</option>
  <option value="marriage">By Marriage</option>
  <option value="adoption">By Adoption</option>
  <option value="others">By Other Means</option>
                </select>
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </section>
      <section className="hero-subscribe-right">
      <div className="container">
        <div className="hero-wrapper">
          <h1>Apply for E-Visa</h1>
          <form onSubmit={handleSubmit}>
          <div class="form-group">
            <label for="passportType">Passport Type*</label>
            <select id="passportType" name="passportType">
                <option value="Passport Type">Passport Type</option>
                <option value="Regular or Ordinary Passport">Regular or Ordinary Passport</option>
                <option value="Diplomatic Passport">Diplomatic Passport</option>
                <option value="Official Passport">Official Passport</option>
                <option value="Special or Service Passport">Special or Service Passport</option>
                <option value="Emergency Passport">Emergency Passport</option>
                <option value="Child Passport">Child Passport</option>
                <option value="Temporary Passport">Temporary Passport</option>
                <option value="Biometric Passport">Biometric Passport</option>
                <option value="Multiple-Entry Passport">Multiple-Entry Passport</option>
                <option value="Immigrant Passport">Immigrant Passport</option>
                <option value="Refugee Travel Passport">Refugee Passport</option>
                <option value="Stateless Travel Passport">Stateless Passport</option>
            </select><br></br>
        </div>
        <div class="form-group">
            <label for="nationality">Nationality</label>
            <select id="nationality" name="nationality">
                <option value="------">------</option>
                <option value="Afghan">Afghan</option>
                <option value="Albanian">Albanian</option>
                <option value="Algerian">Algerian</option>
                <option value="American Samoan">American Samoan</option>
                <option value="Andorran">Andorran</option>
                <option value="Angolan">Angolan</option>
                <option value="Antiguan or Barbudan">Antiguan or Barbudan</option>
                <option value="Argentine">Argentine</option>
                <option value="Armenian">Armenian</option>
                <option value="Aruban">Aruban</option>
                <option value="Australian">Australian</option>
                <option value="Austrian">Austrian</option>
                <option value="Azerbaijani">Azerbaijani</option>
                <option value="Bahamian">Bahamian</option>
                <option value="Bahraini">Bahraini</option>
                <option value="Bangladeshi">Bangladeshi</option>
                <option value="Barbadian">Barbadian</option>
                <option value="Belarusian">Belarusian</option>
                <option value="Belgian">Belgian</option>
                <option value="Belizean">Belizean</option>
                <option value="Beninese">Beninese</option>
                <option value="Bermudian">Bermudian</option>
                <option value="Bhutanese">Bhutanese</option>
                <option value="Bolivian">Bolivian</option>
                <option value="Bosnian or Herzegovinian">Bosnian or Herzegovinian</option>
                <option value="Botswanan">Botswanan</option>
                <option value="Brazilian">Brazilian</option>
                <option value="British Virgin Islander">British Virgin Islander</option>
                <option value="Bruneian">Bruneian</option>
                <option value="Bulgarian">Bulgarian</option>
                <option value="Burkinabe">Burkinabe</option>
                <option value="Burundian">Burundian</option>
                <option value="Cabo Verdean">Cabo Verdean</option>
                <option value="Cambodian">Cambodian</option>
                <option value="Cameroonian">Cameroonian</option>
                <option value="Canadian">Canadian</option>
                <option value="Caymanian">Caymanian</option>
                <option value="Central African">Central African</option>
                <option value="Chadian">Chadian</option>
                <option value="Chilean">Chilean</option>
                <option value="Chinese">Chinese</option>
                <option value="Colombian">Colombian</option>
                <option value="Comorian">Comorian</option>
                <option value="Congolese (Congo-Brazzaville)">Congolese (Congo-Brazzaville)</option>
                <option value="Congolese (Democratic Republic of the Congo)">Congolese (Democratic Republic of the Congo)</option>
                <option value="Cook Islander">Cook Islander</option>
                <option value="Costa Rican">Costa Rican</option>
                <option value="Croatian">Croatian</option>
                <option value="Cuban">Cuban</option>
                <option value="Curaçaoan">Curaçaoan</option>
                <option value="Cypriot">Cypriot</option>
                <option value="Czech">Czech</option>
                <option value="Danish">Danish</option>
                <option value="Djiboutian">Djiboutian</option>
                <option value="Dominican">Dominican</option>
                <option value="Dominican (Republic of the Dominican Republic)">Dominican (Republic of the Dominican Republic)</option>
                <option value="Dutch">Dutch</option>
                <option value="East Timorese">East Timorese</option>
                <option value="Ecuadorean">Ecuadorean</option>
                <option value="Egyptian">Egyptian</option>
                <option value="Salvadoran">Salvadoran</option>
                <option value="Equatorial Guinean">Equatorial Guinean</option>
                <option value="Eritrean">Eritrean</option>
                <option value="Estonian">Estonian</option>
                <option value="Eswatini">Eswatini</option>
                <option value="Ethiopian">Ethiopian</option>
                <option value="Faroese">Faroese</option>
                <option value="Fijian">Fijian</option>
                <option value="Finnish">Finnish</option>
                <option value="French">French</option>
                <option value="French Polynesian">French Polynesian</option>
                <option value="Gabonese">Gabonese</option>
                <option value="Gambian">Gambian</option>
                <option value="Georgian">Georgian</option>
                <option value="German">German</option>
                <option value="Ghanaian">Ghanaian</option>
                <option value="Gibraltarian">Gibraltarian</option>
                <option value="Greek">Greek</option>
                <option value="Grenadian">Grenadian</option>
                <option value="Guadeloupean">Guadeloupean</option>
                <option value="Guatemalan">Guatemalan</option>
                <option value="Guyanese">Guyanese</option>
                <option value="Guinean">Guinean</option>
                <option value="Guinea-Bissauan">Guinea-Bissauan</option>
                <option value="Haitian">Haitian</option>
                <option value="Honduran">Honduran</option>
                <option value="Hong Konger">Hong Konger</option>
                <option value="Hungarian">Hungarian</option>
                <option value="Icelandic">Icelandic</option>
                <option value="Indian">Indian</option>
                <option value="Indonesian">Indonesian</option>
                <option value="Iranian">Iranian</option>
                <option value="Iraqi">Iraqi</option>
                <option value="Irish">Irish</option>
                <option value="Israeli">Israeli</option>
                <option value="Italian">Italian</option>
                <option value="Ivorian">Ivorian</option>
                <option value="Jamaican">Jamaican</option>
                <option value="Japanese">Japanese</option>
                <option value="Jordanian">Jordanian</option>
                <option value="Kazakh">Kazakh</option>
                <option value="Kenyan">Kenyan</option>
                <option value="Kiribati">Kiribati</option>
                <option value="Kosovar">Kosovar</option>
                <option value="Kuwaiti">Kuwaiti</option>
                <option value="Kyrgyz">Kyrgyz</option>
                <option value="Laotian">Laotian</option>
                <option value="Latvian">Latvian</option>
                <option value="Lebanese">Lebanese</option>
                <option value="Lesothoan">Lesothoan</option>
                <option value="Liberian">Liberian</option>
                <option value="Libyan">Libyan</option>
                <option value="Liechtensteiner">Liechtensteiner</option>
                <option value="Lithuanian">Lithuanian</option>
                <option value="Luxembourgish">Luxembourgish</option>
                <option value="Macanese">Macanese</option>
                <option value="Malagasy">Malagasy</option>
                <option value="Malawian">Malawian</option>
                <option value="Malaysian">Malaysian</option>
                <option value="Maldivian">Maldivian</option>
                <option value="Malian">Malian</option>
                <option value="Maltese">Maltese</option>
                <option value="Manx">Manx</option>
                <option value="Martiniquais">Martiniquais</option>
                <option value="Mauritanian">Mauritanian</option>
                <option value="Mauritian">Mauritian</option>
                <option value="Mexican">Mexican</option>
                <option value="Micronesian">Micronesian</option>
                <option value="Moldovan">Moldovan</option>
                <option value="Monégasque">Monégasque</option>
                <option value="Mongolian">Mongolian</option>
                <option value="Montenegrin">Montenegrin</option>
                <option value="Moroccan">Moroccan</option>
                <option value="Motswana">Motswana</option>
                <option value="Mozambican">Mozambican</option>
                <option value="Mosotho">Mosotho</option>
                <option value="Myanmarese">Myanmarese</option>
                <option value="Namibian">Namibian</option>
                <option value="Nauruan">Nauruan</option>
                <option value="Nepalese">Nepalese</option>
                <option value="Netherlands Antillean">Netherlands Antillean</option>
                <option value="New Caledonian">New Caledonian</option>
                <option value="New Zealander">New Zealander</option>
                <option value="Nicaraguan">Nicaraguan</option>
                <option value="Nigerien">Nigerien</option>
                <option value="Niuean">Niuean</option>
                <option value="North Korean">North Korean</option>
                <option value="North Macedonian">North Macedonian</option>
                <option value="Norwegian">Norwegian</option>
                <option value="Omani">Omani</option>
                <option value="Pakistani">Pakistani</option>
                <option value="Palauan">Palauan</option>
                <option value="Palestinian">Palestinian</option>
                <option value="Panamanian">Panamanian</option>
                <option value="Papuan New Guinean">Papuan New Guinean</option>
                <option value="Paraguayan">Paraguayan</option>
                <option value="Peruvian">Peruvian</option>
                <option value="Philippine">Philippine</option>
                <option value="Pitcairn Islander">Pitcairn Islander</option>\
                <option value="Polish">Polish</option>
                <option value="Portuguese">Portuguese</option>
                <option value="Puerto Rican">Puerto Rican</option>
                <option value="Qatari">Qatari</option>
                <option value="Romanian">Romanian</option>
                <option value="Russian">Russian</option>
                <option value="Rwandan">Rwandan</option>
                <option value="Saint Helenian">Saint Helenian</option>
                <option value="Saint Kitts and Nevisian">Saint Kitts and Nevisian</option>
                <option value="Saint Lucian">Saint Lucian</option>
                <option value="Saint Martin (French part)">Saint Martin (French part)</option>
                <option value="Samoan">Samoan</option>
                <option value="San Marinese">San Marinese</option>
                <option value="São Toméan">São Toméan</option>
                <option value="Saudi">Saudi</option>
                <option value="Senegalese">Senegalese</option>
                <option value="Serbian">Serbian</option>
                <option value="Seychellois">Seychellois</option>
                <option value="Sierra Leonean">Sierra Leonean</option>
                <option value="Singaporean">Singaporean</option>
                <option value="Sint Maarten (Dutch part)">Sint Maarten (Dutch part)</option>
                <option value="Slovak">Slovak</option>
                <option value="Slovenian">Slovenian</option>
                <option value="Solomon Islander">Solomon Islander</option>
                <option value="Somali">Somali</option>
                <option value="South African">South African</option>
                <option value="South Korean">South Korean</option>
                <option value="South Sudanese">South Sudanese</option>
                <option value="Spanish">Spanish</option>
                <option value="Sri Lankan">Sri Lankan</option>
                <option value="Sudanese">Sudanese</option>
                <option value="Surinamese">Surinamese</option>
                <option value="Swazi">Swazi</option>
                <option value="Swedish">Swedish</option>
                <option value="Swiss">Swiss</option>
                <option value="Syrian">Syrian</option>
                <option value="Taiwanese">Taiwanese</option>
                <option value="Tajik">Tajik</option>
                <option value="Tanzanian">Tanzanian</option>
                <option value="Thai">Thai</option>
                <option value="Togolese">Togolese</option>
                <option value="Tongan">Tongan</option>
                <option value="Trinidadian or Tobagonian">Trinidadian or Tobagonian</option>
                <option value="Tunisian">Tunisian</option>
                <option value="Turk">Turk</option>
                <option value="Turkmen">Turkmen</option>
                <option value="Tuvaluan">Tuvaluan</option>
                <option value="Ugandan">Ugandan</option>
                <option value="Ukrainian">Ukrainian</option>
                <option value="Uruguayan">Uruguayan</option>
                <option value="Uzbek">Uzbek</option>
                <option value="Vanuatuan">Vanuatuan</option>
                <option value="Vatican City citizen">Vatican City citizen</option>
                <option value="Venezuelan">Venezuelan</option>
                <option value="Vietnamese">Vietnamese</option>
                <option value="Virgin Islander (British)">Virgin Islander (British)</option>
                <option value="Virgin Islander (US)">Virgin Islander (US)</option>
                <option value="Wallisian and Futunan">Wallisian and Futunan</option>
                <option value="Yemeni">Yemeni</option>
                <option value="Zambian">Zambian</option>
                <option value="Zimbabwean">Zimbabwean</option>
            </select><br></br>
        </div>
        <div class="form-group">
            <label for="portOfArrival">Port Of Arrival*</label>
            <select id="portOfArrival" name="portOfArrival">
                <option value="----">----</option>
                <option value="newYork">New York</option>
                <option value="losAngeles">Los Angeles</option>
                <option value="mumbai">Mumbai, India</option>
                <option value="chennai">Chennai, India</option>
                <option value="singapore">Singapore</option>
            </select><br></br>
        </div>
        <div class="form-group">
            <label for="dob">Date of Birth (DD/MM/YYYY)</label>
            <input type="date" id="dob" name="dob" required /><br></br>
        </div>
        <div class="form-group">
            <label for="email">Email ID</label>
            <input type="email" id="email" name="email" required /><br></br>
        </div>
        <div class="form-group">
            <label for="reenterEmail">Re-enter Email ID</label>
            <input type="email" id="reenterEmail" name="reenterEmail" required /><br></br>
        </div>
        <div class="form-group">
            <label for="arrivalDate">Expected Date of Arrival (DD/MM/YYYY)</label>
            <input type="date" id="arrivalDate" name="arrivalDate" required /><br></br>
        </div>
        <div class="form-group">
            <label for="visaService">Visa Service*</label>
            <select id="visaService" name="visaService">
                <option value="------">------ </option>
                <option value="eTourist">eTOURIST VISA</option>
                <option value="eMedical">eMEDICAL VISA</option>
                <option value="eBusiness">eBUSINESS VISA</option>
                <option value="eConference">eCONFERENCE Visa</option>
                <option value="eMedicalAttendant">eMEDICAL ATTENDANT VISA</option>
            </select><br></br>
        </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </section>
    </div>
    
  );
}

export default Apply;
