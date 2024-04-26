import React from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

const ChatbotComponent = () => {
  const theme = {
    background: '#f5f8fb',
    fontFamily: 'Arial',
    headerBgColor: '#197B22',
    headerFontColor: '#fff',
    headerFontSize: '20px',
    botBubbleColor: '#0F3789',
    botFontColor: '#fff',
    userBubbleColor: '#FF5733',
    userFontColor: '#fff',
  };

  // Function to generate fun facts
  const generateFunFacts = () => {
    const funFacts = [
        "The concept of e-visas originated to simplify the visa application process and promote tourism.",
        "E-visas eliminate the need for physical visa stamps and paperwork, saving time and resources for both travelers and governments.",
        "Some countries offer special e-visa programs for specific purposes such as business, tourism, or medical treatment.",
        "India was one of the pioneers in implementing e-visas on a large scale, significantly boosting tourism.",
        "E-visas typically have shorter processing times compared to traditional visa applications, making them a convenient option for last-minute travelers.",
        "E-visas often allow travelers to enter multiple times within a specified period, providing flexibility for frequent visitors.",
        "The introduction of e-visas has led to increased tourism revenue for many countries by simplifying the entry process for travelers.",
        "E-visas are usually applied for and processed online through government portals, making them accessible from anywhere with an internet connection.",
        "Many countries have expanded their e-visa programs to include a wide range of nationalities, encouraging more people to explore new destinations.",
        "E-visas contribute to the growth of the digital economy by facilitating online transactions and document processing.",
        "Some e-visa systems incorporate biometric data to enhance security and prevent identity fraud.",
        "The popularity of e-visas has led to increased competition among countries to attract tourists by offering streamlined visa processes.",
        "E-visas are environmentally friendly compared to traditional paper-based visas, reducing the use of paper and ink.",
        "Travelers can often track the status of their e-visa applications in real-time, providing peace of mind and transparency.",
        "E-visas have revolutionized the travel industry by simplifying border crossings and reducing wait times at immigration checkpoints.",
        "Some countries offer expedited processing options for e-visas, allowing travelers to obtain their visas more quickly for an additional fee.",
        "E-visas have made it easier for businesses to send employees on international assignments by streamlining the visa application process.",
        "E-visas can be issued for various purposes, including tourism, business meetings, conferences, medical treatment, and cultural exchanges.",
        "The introduction of e-visas has encouraged more people to explore off-the-beaten-path destinations, boosting local economies.",
        "E-visas are often valid for a specific duration, ranging from a few days to several months, depending on the country and purpose of travel.",
        "Many countries offer special discounts or promotions for e-visa applicants to attract more visitors and boost tourism revenue.",
        "E-visas have simplified the visa application process for travelers with disabilities by providing online forms and digital documents.",
        "The implementation of e-visas has led to improved diplomatic relations between countries by facilitating cross-border travel and cultural exchanges.",
        "E-visas are commonly used for short-term visits such as vacations, business trips, family reunions, and medical tourism.",
        "Some countries require travelers to provide proof of accommodation and travel itinerary as part of the e-visa application process.",
        "E-visas are often cheaper than traditional visas, as they eliminate the need for postage, courier services, and in-person appointments.",
        "The growing popularity of e-visas has prompted many countries to invest in upgrading their immigration infrastructure and online systems.",
        "E-visas can be obtained for single-entry or multiple-entry purposes, depending on the traveler's needs and the country's policies.",
        "E-visas have made it easier for travelers to explore multiple countries on the same trip by simplifying the visa application process.",
        "Some countries offer e-visas with extended validity periods, allowing frequent travelers to visit multiple times without reapplying.",
        "E-visas are often processed faster during off-peak travel seasons, making them an ideal option for travelers looking to avoid long wait times.",
        "The introduction of e-visas has led to increased collaboration between governments and travel agencies to promote tourism and facilitate visa processing.",
        "E-visas can be customized to include additional services such as airport transfers, hotel bookings, travel insurance, and sightseeing tours.",
        "The use of e-visas has reduced the risk of visa fraud and document forgery by implementing advanced security features and digital verification methods.",
        "Some countries offer e-visa waivers or exemptions for citizens of certain countries, promoting international cooperation and goodwill.",
        "E-visas are often valid for a specific purpose and cannot be used for activities outside the scope of the visa, such as employment or permanent residency.",
        "The introduction of e-visas has led to increased transparency and accountability in the visa application process by digitizing records and transactions.",
        "E-visas can be obtained from anywhere in the world, making them accessible to travelers regardless of their location or time zone.",
        "The use of e-visas has reduced the administrative burden on immigration officials and consular staff by automating routine tasks and data entry processes.",
        "Some countries offer e-visa extensions for travelers who wish to extend their stay beyond the original visa validity period.",
        "E-visas are often linked to the traveler's passport electronically, eliminating the need for physical visa stickers or stamps.",
        "The implementation of e-visas has led to increased efficiency and productivity in visa processing centers by reducing manual data entry and paperwork.",
        "E-visas have made it easier for travelers to plan spontaneous trips and explore new destinations without the hassle of lengthy visa application processes.",
        "The use of e-visas has simplified the visa application process for elderly travelers and individuals with mobility issues by offering online forms and assistance services.",
        "Some countries offer special e-visa programs for skilled workers, investors, entrepreneurs, and other professionals to encourage economic growth and innovation.",
        "E-visas can be obtained for transit purposes, allowing travelers to pass through a country's borders en route to their final destination.",
        "The implementation of e-visas has reduced the incidence of lost or misplaced visa documents by providing digital copies and confirmation numbers to travelers.",
        "E-visas have made it easier for families to reunite and celebrate special occasions such as weddings, graduations, and holidays by simplifying the visa application process.",
        "Some countries offer special e-visa packages that include discounts on airfare, accommodations, and attractions to attract more tourists and boost the local economy.",
        "The use of e-visas has transformed the way people travel by offering a convenient and efficient alternative to traditional visa application methods."
      ];
    return funFacts;
  };

  // Get all the fun facts
  const funFacts = generateFunFacts();

  // Function to generate steps for displaying fun facts
  const generateFunFactSteps = () => {
    const steps = [
      {
        id: 'funFacts',
        message: 'Here are some fun facts about e-visas, visas, and India:',
        trigger: 'funFact1',
      },
    ];

    for (let i = 0; i < funFacts.length; i++) {
      steps.push({
        id: `funFact${i + 1}`,
        message: funFacts[i],
        trigger: i === funFacts.length - 1 ? 'menu' : `funFact${i + 2}`,
      });
    }

    return steps;
  };

  const steps = [
    {
      id: '0',
      message: 'Welcome to eVisaIndia! Namaste India! How can I assist you today?',
      trigger: 'menu',
    },
    {
      id: 'menu',
      options: [
        { value: 'aboutVisa', label: 'About Visa', trigger: 'aboutVisa' },
        { value: 'requirements', label: 'Visa Requirements', trigger: 'requirements' },
        { value: 'applicationProcess', label: 'Application Process', trigger: 'applicationProcess' },
        { value: 'contact', label: 'Contact Us', trigger: 'contact' },
        { value: 'faq', label: 'FAQs', trigger: 'faq' },
        { value: 'funFacts', label: 'Fun Facts', trigger: 'funFacts' }, // New option for fun facts
        { value: 'feedback', label: 'Leave Feedback', trigger: 'feedback' },
      ],
    },
    {
      id: 'aboutVisa',
      message: 'An e-Visa is an official document permitting entry into and travel within a certain country. It is an alternative to visas issued at the embassies or consulates.',
      trigger: 'moreAboutVisa',
    },
    {
      id: 'moreAboutVisa',
      message: 'Would you like more information about e-Visas?',
      trigger: 'moreAboutVisaOptions',
    },
    {
      id: 'moreAboutVisaOptions',
      options: [
        { value: 'yes', label: 'Yes', trigger: 'aboutVisaInfo' },
        { value: 'no', label: 'No', trigger: 'menu' },
      ],
    },
    {
      id: 'aboutVisaInfo',
      message: 'Here is more information about e-Visas...',
      trigger: 'menu',
    },
    {
      id: 'requirements',
      message: 'Visa requirements vary depending on the country you intend to visit. Please provide the name of the country you are interested in:',
      trigger: 'countryInput',
    },
    {
      id: 'countryInput',
      user: true,
      trigger: 'displayRequirements',
    },
    {
      id: 'displayRequirements',
      message: 'The visa requirements for {previousValue} are...',
      trigger: 'menu',
    },
    {
      id: 'applicationProcess',
      message: 'The application process for e-Visas typically involves...',
      trigger: 'menu',
    },
    {
      id: 'contact',
      message: 'For inquiries and assistance, please contact us at eVisaIndia@kluniversity.in or call us at +91 987 6543 210.',
      trigger: 'menu',
    },
    {
      id: 'faq',
      message: 'Here are some frequently asked questions:',
      trigger: 'faqOptions',
    },
    {
      id: 'faqOptions',
      options: [
        { value: 'processingTime', label: 'What is the processing time for e-Visas?', trigger: 'processingTime' },
        { value: 'eligibility', label: 'Who is eligible for an e-Visa?', trigger: 'eligibility' },
        { value: 'fees', label: 'What are the fees for e-Visas?', trigger: 'fees' },
        { value: 'validity', label: 'How long is an e-Visa valid for?', trigger: 'validity' },
        { value: 'menu', label: 'Back to Main Menu', trigger: 'menu' },
      ],
    },
    {
      id: 'processingTime',
      message: 'The processing time for e-Visas varies depending on the country and type of visa. It usually takes...',
      trigger: 'faqOptions',
    },
    {
      id: 'eligibility',
      message: 'To check if you are eligible for an e-Visa, please visit our website and review the eligibility criteria.',
      trigger: 'faqOptions',
    },
    {
      id: 'fees',
      message: 'The fees for e-Visas also vary depending on the country and type of visa. You can find detailed fee information on our website.',
      trigger: 'faqOptions',
    },
    {
      id: 'validity',
      message: 'The validity of an e-Visa depends on the issuing country and type of visa. Typically, e-Visas are valid for...',
      trigger: 'faqOptions',
    },
    {
      id: 'feedback',
      message: 'We appreciate your feedback! Please share your thoughts or suggestions with us.',
      trigger: 'feedbackInput',
    },
    {
      id: 'feedbackInput',
      user: true,
      trigger: 'feedbackThankYou',
    },
    {
      id: 'feedbackThankYou',
      message: 'Thank you for your feedback! We will take it into consideration.',
      trigger: 'menu',
    },
  ];

  // Dynamically generate fun fact steps
  const funFactSteps = generateFunFactSteps();
  steps.push(...funFactSteps);

  return (
    <ThemeProvider theme={theme}>
      <ChatBot
        headerTitle="eVisaIndia"
        steps={steps}
        width="400px"
        height="500px"
      />
    </ThemeProvider>
  );
};

export default ChatbotComponent;
