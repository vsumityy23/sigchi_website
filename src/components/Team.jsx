// import React, { useState } from 'react';
// import Modal from 'react-modal';
// import {

//   facultyAdvisor2025,
//   chapterOfficers2025,
//   coreMembers2025,
//   secretaries2025,

//   facultyAdvisor2024,
//   chapterOfficers2024,
//   coreMembers2024,
//   secretaries2024,
//   otherMembers2024,
//   // If you have separate arrays for 2025:
//   // facultyAdvisor2025,
//   // coreMembers2025,
//   // secretaries2025
// } from '../constants';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faIdCard } from '@fortawesome/free-solid-svg-icons';
// import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
// import Footer from './Footer';

// Modal.setAppElement('#root');

// const Team = () => {
//   const [modalIsOpen, setModalIsOpen] = useState(false);
//   const [selectedMember, setSelectedMember] = useState(null);

//   const openModal = (member) => {
//     setSelectedMember(member);
//     setModalIsOpen(true);
//   };

//   const closeModal = () => {
//     setModalIsOpen(false);
//     setSelectedMember(null);
//   };

//   const renderMemberCard = (member, index) => (
//     <div
//       key={index}
//       className="rounded-[20px] py-5 px-8 min-h-[280px] flex flex-col items-center"
//       style={{ background: '#151030' }}
//     >
//       <img
//         src={member.image}
//         alt={`${member.name} Photo`}
//         className="rounded-full w-48 h-48 mb-4 object-cover"
//       />
//       <h3 className="text-xl font-semibold text-white">{member.name}</h3>
//       <p className="text-gray-400">{member.role}</p>
//       <hr className="w-full my-4 border-gray-600" />
//       <div className="flex space-x-4">
//         <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
//           <FontAwesomeIcon icon={faLinkedin} className="text-white hover:text-blue-400" />
//         </a>
//         <a href={member.github} target="_blank" rel="noopener noreferrer">
//           <FontAwesomeIcon icon={faGithub} className="text-white hover:text-blue-400" />
//         </a>
//         <button onClick={() => openModal(member)}>
//           <FontAwesomeIcon icon={faIdCard} className="text-white hover:text-blue-400" />
//         </button>
//       </div>
//     </div>
//   );

//   return (
//     <div className="bg-black w-full text-white pt-5 overflow-hidden">

//       {/* 2024 Team Heading (White background, full width) */}
//       <section className="w-full bg-white py-4 px-4 mt-10">
//         <h1 className="text-3xl font-extrabold text-black">2023-2024 Team (Founding Team)</h1>
//       </section>

//       {/* 2024 Team Content */}
//       <div className="max-w-screen-xl mx-auto px-4">
//         <section className="py-20">
//           <h2 className="text-3xl font-extrabold mb-6">Faculty Advisor</h2>
//           <div className="grid grid-cols-4 gap-6">
//             {facultyAdvisor2024.map((member, index) => renderMemberCard(member, index))}
//           </div>
//         </section>

//         <section className="py-8">
//           <h2 className="text-3xl font-extrabold mb-6">Chapter Officers</h2>
//           <div className="grid grid-cols-4 gap-6">
//             {chapterOfficers2024.map((member, index) => renderMemberCard(member, index))}
//           </div>
//         </section>

//         <section className="py-8">
//           <h2 className="text-3xl font-extrabold mb-6">Core Team</h2>
//           <div className="grid grid-cols-4 gap-6">
//             {coreMembers2024.map((member, index) => renderMemberCard(member, index))}
//           </div>
//         </section>

//         <section className="py-8">
//           <h2 className="text-3xl font-bold mb-6">Secretaries</h2>
//           <div className="grid grid-cols-4 gap-6">
//             {secretaries2024.map((member, index) => renderMemberCard(member, index))}
//           </div>
//         </section>

//         <section className="py-8">
//           <h2 className="text-3xl font-bold mb-6">Secretaries</h2>
//           <div className="grid grid-cols-4 gap-6">
//             {otherMembers2024.map((member, index) => renderMemberCard(member, index))}
//           </div>
//         </section>

//       </div>

//       {selectedMember && (
//         <Modal
//           isOpen={modalIsOpen}
//           onRequestClose={closeModal}
//           contentLabel="Member Description"
//           className="bg-white rounded-lg p-8 mx-auto my-16 w-[90%] max-w-[500px] relative"
//           overlayClassName="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center"
//         >
//           <button
//             className="absolute top-2 right-2 text-black text-3xl hover:scale-110"
//             onClick={closeModal}
//           >
//             &times;
//           </button>
//           <h2 className="text-xl font-bold mb-4 text-black">
//             {selectedMember.name}
//           </h2>
//           <div className="flex justify-center mb-4">
//             <img
//               src={selectedMember.image}
//               alt={`${selectedMember.name} Photo`}
//               className="rounded-full w-48 h-48 object-cover"
//             />
//           </div>
//           <p className="text-center text-gray-700">
//             {selectedMember.description}
//           </p>
//         </Modal>
//       )}
//       <Footer />
//     </div>
//   );
// };

// export default Team;




// import React, { useState } from 'react';
// import Modal from 'react-modal';
// import { facultyAdvisor, coreMembers, heads, secretaries } from '../constants';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faIdCard } from '@fortawesome/free-solid-svg-icons';
// import { faGithub } from '@fortawesome/free-brands-svg-icons';
// import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
// import Footer from './Footer';

// Modal.setAppElement('#root');

// const Team = () => {
//   const [modalIsOpen, setModalIsOpen] = useState(false);
//   const [selectedMember, setSelectedMember] = useState(null);

//   const openModal = (member) => {
//     setSelectedMember(member);
//     setModalIsOpen(true);
//   };

//   const closeModal = () => {
//     setModalIsOpen(false);
//     setSelectedMember(null);
//   };

//   const renderMemberCard = (member, index) => (
//     <div
//       key={index}
//       className="rounded-[20px] py-5 px-8 min-h-[280px] w-full sm:w-[260px] md:w-[280px] lg:w-[300px] flex justify-evenly items-center flex-col"
//       style={{ background: '#151030' }}
//     >
//       <img
//         src={member.image}
//         alt={`${member.name} Photo`}
//         className="rounded-full w-48 h-48 mx-auto mb-4 object-cover"
//       />
//       <h3 className="text-xl font-semibold text-white">{member.name}</h3>
//       <p className="text-gray-400">{member.role}</p>
//       <hr className="w-full my-4 border-gray-600" />
//       <div className="flex justify-center space-x-4">
//         {/* LinkedIn Icon */}
//         <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
//           <FontAwesomeIcon icon={faLinkedin} className="text-white hover:text-blue-400" />
//         </a>
//         {/* GitHub Icon */}
//         <a href={member.github} target="_blank" rel="noopener noreferrer">
//           <FontAwesomeIcon icon={faGithub} className="text-white hover:text-blue-400" />
//         </a>
//         {/* Description Icon (opens modal) */}
//         <button onClick={() => openModal(member)}>
//           <FontAwesomeIcon icon={faIdCard} className="text-white hover:text-blue-400" />
//         </button>
//       </div>
//     </div>
//   );

//   return (
//     <div className="bg-black w-full text-white pt-4 overflow-hidden">
//       {/* Faculty Advisor Section */}
//       <section className="py-20">
//         <h2 className="text-3xl font-extrabold text-center mb-6">Faculty Advisor</h2>
//         <div className="flex justify-center">
//           {facultyAdvisor.map((member, index) => renderMemberCard(member, index))}
//         </div>
//       </section>

//       {/* Core Team Section */}
//       <section className="py-8">
//         <h2 className="text-3xl font-extrabold text-center mb-6">Core Team</h2>
//         <div className="flex flex-wrap justify-center gap-6">
//           {coreMembers.map((member, index) => renderMemberCard(member, index))}
//         </div>
//       </section>

//       {/* Secretaries Section */}
//       <section className="py-8">
//         <h2 className="text-3xl font-bold text-center mb-6">Secretaries</h2>
//         <div className="flex flex-wrap justify-center gap-6">
//           {secretaries.map((member, index) => renderMemberCard(member, index))}
//         </div>
//       </section>

//       {/* Modal for Member Details */}
//       {selectedMember && (
//         <Modal
//           isOpen={modalIsOpen}
//           onRequestClose={closeModal}
//           contentLabel="Member Description"
//           className="bg-white rounded-lg p-8 mx-auto my-16 w-[90%] max-w-[500px] relative transition-transform transform duration-500 ease-in-out animate-slideDown"
//           overlayClassName="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center"
//         >
//           <button
//             className="absolute top-2 right-2 text-black text-3xl transition-transform transform hover:scale-110"
//             onClick={closeModal}
//           >
//             &times;
//           </button>
//           <h2 className="text-xl font-bold text-center mb-4">
//             {selectedMember.name}
//           </h2>
//           <div className="flex justify-center mb-4">
//             <img
//               src={selectedMember.image}
//               alt={`${selectedMember.name} Photo`}
//               className="rounded-full w-48 h-48 object-cover"
//             />
//           </div>
//           <p className="text-center text-gray-700">
//             {selectedMember.description}
//           </p>
//         </Modal>
//       )}
//       <Footer />
//     </div>
//   );
// };

// export default Team;



import React, { useState } from "react";
import Modal from "react-modal";
import {
  facultyAdvisor2024,
  coreMembers2024,
  chapterOfficers2024,
  secretaries2024,
  otherMembers2024,
} from "../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIdCard } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Footer from "./Footer";

Modal.setAppElement("#root");

const Team = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);

  const openModal = (member) => {
    setSelectedMember(member);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedMember(null);
  };

  const renderMemberCard = (member, index) => (
    <div
      key={index}
      className="rounded-[20px] py-5 px-8 min-h-[280px] w-full sm:w-[260px] md:w-[280px] lg:w-[300px] flex justify-evenly items-center flex-col"
      style={{ background: "#151030" }}
    >
      <img
        src={member.image}
        alt={`${member.name} Photo`}
        className="rounded-full w-48 h-48 mx-auto mb-4 object-cover"
      />
      <h3 className="text-xl font-semibold text-white">{member.name}</h3>
      <p className="text-gray-400">{member.role}</p>
      <hr className="w-full my-4 border-gray-600" />
      <div className="flex justify-center space-x-4">
        {/* LinkedIn Icon */}
        <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon
            icon={faLinkedin}
            className="text-white hover:text-blue-400"
          />
        </a>
        {/* GitHub Icon */}
        <a href={member.github} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon
            icon={faGithub}
            className="text-white hover:text-blue-400"
          />
        </a>
        {/* Description Icon (opens modal) */}
        <button onClick={() => openModal(member)}>
          <FontAwesomeIcon
            icon={faIdCard}
            className="text-white hover:text-blue-400"
          />
        </button>
      </div>
    </div>
  );

  return (
    <div className="bg-black w-full text-white pt-4 overflow-hidden">
      {/* Faculty Advisor Section */}
      <section className="py-20">
        <h2 className="text-3xl font-extrabold text-center mb-6">
          Faculty Advisor
        </h2>
        <div className="flex justify-center">
          {facultyAdvisor2024.map((member, index) =>
            renderMemberCard(member, index)
          )}
        </div>
      </section>

      {/* Core Team Section */}
      <section className="py-8">
        <h2 className="text-3xl font-extrabold text-center mb-6">
          Chapter Officers
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {chapterOfficers2024.map((member, index) =>
            renderMemberCard(member, index)
          )}
        </div>
      </section>
      <section className="py-8">
        <h2 className="text-3xl font-extrabold text-center mb-6">Core Team</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {coreMembers2024.map((member, index) =>
            renderMemberCard(member, index)
          )}
        </div>
      </section>

      {/* Secretaries Section */}
      <section className="py-8">
        <h2 className="text-3xl font-bold text-center mb-6">Secretaries</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {secretaries2024.map((member, index) =>
            renderMemberCard(member, index)
          )}
        </div>
      </section>

      {/* Secretaries Section */}
      <section className="py-8">
        <h2 className="text-3xl font-bold text-center mb-6">Other Members</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {otherMembers2024.map((member, index) =>
            renderMemberCard(member, index)
          )}
        </div>
      </section>

      {/* Modal for Member Details */}
      {selectedMember && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Member Description"
          className="bg-white rounded-lg p-8 mx-auto my-16 w-[90%] max-w-[500px] relative transition-transform transform duration-500 ease-in-out animate-slideDown"
          overlayClassName="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center"
        >
          <button
            className="absolute top-2 right-2 text-black text-3xl transition-transform transform hover:scale-110"
            onClick={closeModal}
          >
            &times;
          </button>
          <h2 className="text-xl font-bold text-center mb-4">
            {selectedMember.name}
          </h2>
          <div className="flex justify-center mb-4">
            <img
              src={selectedMember.image}
              alt={`${selectedMember.name} Photo`}
              className="rounded-full w-48 h-48 object-cover"
            />
          </div>
          <p className="text-center text-gray-700">
            {selectedMember.description}
          </p>
        </Modal>
      )}
      <Footer />
    </div>
  );
};

export default Team;
