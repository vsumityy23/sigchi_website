

import React, { useState } from "react";
import Modal from "react-modal";
import {
  facultyAdvisor2024,
  coreMembers2024,
  chapterOfficers2024,
  secretaries2024,
  otherMembers2024,
  facultyAdvisor2025,
  coreMembers2025,
  chapterOfficers2025,
  secretaries2025,
  otherMembers2025,
  // Import more years as needed
} from "../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIdCard } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
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
        {member.linkedin && (
          <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon
              icon={faLinkedin}
              className="text-white hover:text-blue-400"
            />
          </a>
        )}
        {/* GitHub Icon */}
        {member.github && (
          <a href={member.github} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon
              icon={faGithub}
              className="text-white hover:text-blue-400"
            />
          </a>
        )}
        {/* Description Icon (opens modal) */}
        {member.description && (
          <button onClick={() => openModal(member)}>
            <FontAwesomeIcon
              icon={faIdCard}
              className="text-white hover:text-blue-400"
            />
          </button>
        )}
      </div>
    </div>
  );

  // Structured team data by year
  const teamDataByYear = [
    {
      year: "2024-2025 Team",
      facultyAdvisor: facultyAdvisor2025,
      chapterOfficers: chapterOfficers2025,
      coreMembers: coreMembers2025,
      secretaries: secretaries2025,
      otherMembers: otherMembers2025,
    },
    {
      year: "2023-2024 Team (Founding Team)",
      facultyAdvisor: facultyAdvisor2024,
      chapterOfficers: chapterOfficers2024,
      coreMembers: coreMembers2024,
      secretaries: secretaries2024,
      otherMembers: otherMembers2024,
    },
    // Add more years as needed
  ];

  return (
    <div className="bg-black w-full text-white pt-12 mt-8 overflow-hidden">
      {teamDataByYear.map((team, teamIndex) => (
        <div key={teamIndex}>
          {/* Year Banner */}
          <section className="py-4 bg-[#1e1e2f]">
            <h1 className="text-4xl font-extrabold text-center mb-3">
              {team.year}
            </h1>
          </section>

          {/* Faculty Advisor Section */}
          {team.facultyAdvisor.length > 0 && (
            <section className="py-20">
              <h3 className="text-3xl font-extrabold text-center mb-6">
                Faculty Advisor
              </h3>
              <div className="flex justify-center">
                {team.facultyAdvisor.map((member, index) =>
                  renderMemberCard(member, index)
                )}
              </div>
            </section>
          )}

          {/* Chapter Officers Section */}
          {team.chapterOfficers.length > 0 && (
            <section className="py-8">
              <h3 className="text-3xl font-extrabold text-center mb-6">
                Chapter Officers
              </h3>
              <div className="flex flex-wrap justify-center gap-6">
                {team.chapterOfficers.map((member, index) =>
                  renderMemberCard(member, index)
                )}
              </div>
            </section>
          )}

          {/* Core Team Section */}
          {team.coreMembers.length > 0 && (
            <section className="py-8">
              <h3 className="text-3xl font-extrabold text-center mb-6">
                Core Team
              </h3>
              <div className="flex flex-wrap justify-center gap-6">
                {team.coreMembers.map((member, index) =>
                  renderMemberCard(member, index)
                )}
              </div>
            </section>
          )}

          {/* Secretaries Section */}
          {team.secretaries.length > 0 && (
            <section className="py-8">
              <h3 className="text-3xl font-bold text-center mb-6">
                Secretaries
              </h3>
              <div className="flex flex-wrap justify-center gap-6">
                {team.secretaries.map((member, index) =>
                  renderMemberCard(member, index)
                )}
              </div>
            </section>
          )}

          {/* Other Members Section */}
          {team.otherMembers.length > 0 && (
            <section className="py-8">
              <h3 className="text-3xl font-bold text-center mb-6">
                Other Members
              </h3>
              <div className="flex flex-wrap justify-center gap-6">
                {team.otherMembers.map((member, index) =>
                  renderMemberCard(member, index)
                )}
              </div>
            </section>
          )}

          {/* Optional: Add a divider between years */}
          {teamIndex < teamDataByYear.length - 1 && (
            <hr className="my-10 border-gray-700" />
          )}
        </div>
      ))}

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
