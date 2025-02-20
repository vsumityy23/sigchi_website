import React, { useState } from "react";
import Footer from "./Footer";
import logoss from "../assets/logoss.jpg"
import Navbar from "./Navbar";



/////////////////////////////////////// constants  ///////////////////////////////////////////

// export const sections = [
//   {
//     title: "CreateRoom",
//     content:
//       "Hands-on workshops to dive into sketching, tinkering, coding and training in methodologies and tools.",
//     image:
//       "https://media.licdn.com/dms/image/v2/C4D12AQGvunFI98D6Ig/article-inline_image-shrink_400_744/article-inline_image-shrink_400_744/0/1645894535616?e=1743033600&v=beta&t=vVnnB6wJoR7fipl_NH_a_S2FywMHxVTCYuMw_DGE3nc",
//     link: "https://example.com/create-room",
//   },
//   {
//     title: "Workshop2",
//     content: "Workshop2 is ......................",
//     image: "https://source.unsplash.com/600x400/?finance,economy",
//     link: "https://example.com/workshop2",
//   },
//   {
//     title: "Workshop 3",
//     content: "wjnfnvgj/.................................................",
//     image: "https://source.unsplash.com/600x400/?realestate,house",
//     link: "https://example.com/workshop3",
//   },
// ];

// const competitions = [
//   {
//     id: "model-united",
//     title: " Interact-athon",
//     description:
//       "Interact-athon is an exciting competition to tickle brains! We'll let the mystery remain for this one",
//     image:
//       "https://media.licdn.com/dms/image/v2/C4D12AQGvunFI98D6Ig/article-inline_image-shrink_400_744/article-inline_image-shrink_400_744/0/1645894535616?e=1743033600&v=beta&t=vVnnB6wJoR7fipl_NH_a_S2FywMHxVTCYuMw_DGE3nc",
//   },
//   {
//     id: "stock-the-stock",
//     title: "STOCK THE STOCK",
//     description:
//       "Master the art of stock trading! Compete with fellow traders, analyze market trends, and make strategic investments.",
//     image: "https://source.unsplash.com/600x400/?stock,market",
//   },
//   {
//     id: "biz-tangle",
//     title: "BIZ TANGLE",
//     description:
//       "Tackle real-world business challenges! Work with a team to navigate corporate dilemmas and showcase your strategic skills.",
//     image: "https://source.unsplash.com/600x400/?business,team",
//   },
// ];

const speakers = [
  {
    name: "Travis Kalanick",
    post: "Co-founder, Uber",
    image:
      "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202412/6770fed06c6f3-in-a-viral-clip-that-has-amassed-over-14-million-views--gupta-described-the-disparity-between-the-a-294826597-16x9.jpg?size=948:533",
  },
  {
    name: "Jordan Belfort",
    post: "Author, The Wolf of Wall Street",
    image:
      "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202412/6770fed06c6f3-in-a-viral-clip-that-has-amassed-over-14-million-views--gupta-described-the-disparity-between-the-a-294826597-16x9.jpg?size=948:533",
  },
  {
    name: "Aman Gupta",
    post: "Co-founder, BOAT",
    image:
      "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202412/6770fed06c6f3-in-a-viral-clip-that-has-amassed-over-14-million-views--gupta-described-the-disparity-between-the-a-294826597-16x9.jpg?size=948:533",
  },
  {
    name: "Nitin Gadkari",
    post: "Union Minister",
    image:
      "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202412/6770fed06c6f3-in-a-viral-clip-that-has-amassed-over-14-million-views--gupta-described-the-disparity-between-the-a-294826597-16x9.jpg?size=948:533",
  },
  {
    name: "Travis Kalanick",
    post: "Co-founder, Uber",
    image:
      "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202412/6770fed06c6f3-in-a-viral-clip-that-has-amassed-over-14-million-views--gupta-described-the-disparity-between-the-a-294826597-16x9.jpg?size=948:533",
  },
  {
    name: "Jordan Belfort",
    post: "Author, The Wolf of Wall Street",
    image:
      "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202412/6770fed06c6f3-in-a-viral-clip-that-has-amassed-over-14-million-views--gupta-described-the-disparity-between-the-a-294826597-16x9.jpg?size=948:533",
  },
  {
    name: "Aman Gupta",
    post: "Co-founder, BOAT",
    image:
      "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202412/6770fed06c6f3-in-a-viral-clip-that-has-amassed-over-14-million-views--gupta-described-the-disparity-between-the-a-294826597-16x9.jpg?size=948:533",
  },
  {
    name: "Aman Gupta",
    post: "Co-founder, BOAT",
    image:
      "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202412/6770fed06c6f3-in-a-viral-clip-that-has-amassed-over-14-million-views--gupta-described-the-disparity-between-the-a-294826597-16x9.jpg?size=948:533",
  },
];


const sponsors = [
  {
    name: "Google",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  },
  {
    name: "Google",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  },
  {
    name: "Google",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  },
  {
    name: "Google",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  },
  {
    name: "Google",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  },
  {
    name: "Google",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  },
  {
    name: "Google",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  },

];



const SummerSchool = () => {
  // const [activeIndex, setActiveIndex] = useState(0);
  // const [selectedCompetition, setSelectedCompetition] = useState(
  //   competitions[0]
  // );
  

  return (
    <div>
      {/* Hero Section*/}

      <div className="relative flex items-center justify-center mt-10 h-screen bg-black text-center overflow-hidden">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <div className="border-y-4 border-white/25 px-4 py-10 w-full max-w-3xl bg-white/10 backdrop-blur-md rounded-lg">
          <p className="uppercase tracking-[0.5em] text-white font-bold text-sm md:text-base">
            ACM SIGCHI IIT KANPUR STUDENT CHAPTER
          </p>
          <span className="block text-4xl md:text-6xl py-5 font-bold font-oswald text-transparent bg-clip-text   animate-text">
            Summer School
          </span>

          <p className="uppercase tracking-[0.5em] font-bold text-white text-sm md:text-base mt-4">
            &mdash; 15th to 20th May &mdash;
          </p>

          <div className="mt-10">
            <a
            
               href="https://docs.google.com/forms/d/e/1FAIpQLScOK0DaDatJSFPVFxcQhNSYK7E187WnzNb2Yc4d1VVv8NrapQ/viewform" 
        target="_blank" 
      rel="noopener noreferrer"
              className="inline-block px-8 py-3 text-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 transition shadow-md duration-300 ease-in-out"
            >
              Register Now
            </a>
          </div>
        </div>
      </div>

      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
          {/* Text Section */}

          {/* Image Section */}
          <div className="md:w-1/2 flex items-center justify-center">
            <img
              src={logoss}
              alt="Summer School"
              className="w-40 md:w-64 lg:w-80 h-auto rounded-2xl shadow-lg"
            />
          </div>

          <div className="md:w-1/2 text-center md:text-left space-y-6">
            <h2 className=" flex items-center justify-center text-4xl font-extrabold text-gray-900 leading-tight  text-center mb-4">
              <span className="border-b-4 border-purple-600 pb-1">
                {" "}
                ABOUT SUMMER SCHOOL
              </span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              The ACM SIGCHI IITK Summer School aims to offer a holistic
              learning and community-building experience through in HCI and
              associated fields. We want creativity and critical thinking to
              shine together, and for curiosity to build bonds among students
              and professionals alike.<i> Accomodation will be free for those who
              get selected!!</i>
            </p>
          </div>
        </div>
      </section>

      <div className="bg-black text-white py-16 px-6 lg:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-center mb-8">
            <span className="border-b-4 border-purple-600 text-white pb-1">
              WHY TO ATTEND?
            </span>
          </h2>
          <p className="text-lg mb-8 opacity-90">
            An unforgettable learning experience packed with exciting
            activities, hands-on workshops, and career-boosting opportunities!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white text-gray-900 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform">
            <h3 className="text-xl font-bold mb-3">🚀 Hands-on Workshops</h3>
            <p className="opacity-80">
              Learn from experts through interactive, real-world projects and
              skill-building exercises.
            </p>
          </div>

          <div className="bg-white text-gray-900 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform">
            <h3 className="text-xl font-bold mb-3">🎭 Exciting Events</h3>
            <p className="opacity-80">
              Participate in panel discussions, networking sessions, and fun
              social activities.
            </p>
          </div>

          <div className="bg-white text-gray-900 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform">
            <h3 className="text-xl font-bold mb-3">🏆 Competitions</h3>
            <p className="opacity-80">
              Test your skills in coding, design, and innovation challenges with
              amazing rewards.
            </p>
          </div>

          <div className="bg-white text-gray-900 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform">
            <h3 className="text-xl font-bold mb-3">🤝 Networking</h3>
            <p className="opacity-80">
              Meet like-minded peers, industry professionals, and potential
              mentors.
            </p>
          </div>

          <div className="bg-white text-gray-900 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform">
            <h3 className="text-xl font-bold mb-3">📜 Certification</h3>
            <p className="opacity-80">
              Receive a certificate that adds value to your academic and
              professional profile.
            </p>
          </div>

          <div className="bg-white text-gray-900 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform">
            <h3 className="text-xl font-bold mb-3">🌍 Real-World Exposure</h3>
            <p className="opacity-80">
              Get insights into industry trends and practical knowledge to stay
              ahead.
            </p>
          </div>
        </div>
      </div>

      {/* /////////////////////////////////////////// Workshop Details /////////////////////////////////////////////////////////////////////////// */}

      {/* <section className="bg-gray-100">
        <h2 className=" flex items-center justify-center text-4xl font-extrabold text-center text-gray-900 uppercase tracking-wide pt-9 ">
          <span className="border-b-4 border-purple-600 pb-1 ">WORKSHOPS</span>
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-between px-10 pb-16 pt-8 bg-gray-100  ">
          <div className="w-full md:w-1/2 flex flex-col items-center">
            <img
              src={sections[activeIndex].image}
              alt="Feature"
              className="rounded-lg shadow-lg w-full max-w-md"
            />
            <a
              href={sections[activeIndex].link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 px-4 py-2 text-lg font-semibold text-white bg-red-600 rounded-lg shadow-lg hover:bg-red-700 transition duration-300 ease-in-out"
            >
              Register
            </a>
          </div>

          <div className="w-full md:w-1/2 mt-8 md:mt-0">
            <h3 className="text-2xl font-semibold mb-4">
              {sections[activeIndex].title}
            </h3>
            <p className="text-gray-600 mb-6">
              {sections[activeIndex].content}
            </p>
            {sections.map((section, index) => (
              <button
                key={index}
                className={`block w-full text-left px-4 py-3 mb-2 rounded-lg border ${
                  activeIndex === index
                    ? "bg-blue-500 text-white"
                    : "bg-white text-gray-700"
                } shadow-md transition-all`}
                onClick={() => setActiveIndex(index)}
              >
                {section.title}
              </button>
            ))}
          </div>
        </div>
      </section> */}

      {/* Competition Section */}

      <div className="bg-[#090d00] text-white py-10 ">
        {/* <h2 className="text-4xl font-bold text-center mb-8">
          <span className="border-b-4 border-purple-600 pb-1">
            COMPETITIONS
          </span>
        </h2> */}
        {/* <div className="flex flex-col md:flex-row items-center justify-center max-w-5xl mx-auto bg-white text-black rounded-lg shadow-lg p-6">
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={selectedCompetition.image}
              alt={selectedCompetition.title}
              className="max-w-full h-auto rounded-lg"
            />
          </div>
          <div className="w-full md:w-1/2 p-6">
            <h3 className="text-2xl font-bold">{selectedCompetition.title}</h3>
            <p className="mt-4 text-gray-700">
              {selectedCompetition.description}
            </p>
            <button className="mt-6 px-4 py-2 text-lg font-semibold text-white bg-red-600 rounded-lg shadow-lg hover:bg-red-700 transition duration-300 ease-in-out">
              Register
            </button>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          {competitions.map((comp) => (
            <button
              key={comp.id}
              className={`py-2 px-4  ${
                selectedCompetition.id === comp.id
                  ? "bg-white text-black  "
                  : "border-2  text-white"
              }`}
              onClick={() => setSelectedCompetition(comp)}
            >
              {comp.title}
            </button>
          ))}
        </div> */}

        {/* 
        <div className="bg-white py-16 mt-10">
         
          <h2 className="text-5xl font-extrabold text-center text-gray-900 uppercase tracking-wide">
            <span className="border-b-4 border-purple-600 pb-1">Speakers</span>
          </h2>

      
          <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8 px-8 mt-12 max-w-7xl mx-auto ">
            {speakers.map((speaker, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-xl overflow-hidden text-center"
              >
              
                <div className="w-full h-52 bg-gray-200 flex items-center justify-center">
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="h-full object-cover"
                  />
                </div>
               
                <div className="p-4">
                  <p className="text-purple-700 font-semibold text-sm">
                    {speaker.post}
                  </p>
                  <h3 className="text-lg font-bold text-gray-900 mt-1">
                    {speaker.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div> */}

        {/* <div className="bg-black py-16">
      
          <h2 className="text-5xl font-extrabold text-center text-white uppercase tracking-wide ">
            <span className="border-b-4 border-purple-600 pb-1">SPONSORS</span>
          </h2>

          <div className="flex justify-center flex-wrap gap-6 mt-10">
            {sponsors.map((sponsor, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 w-40 h-40 flex items-center justify-center"
              >
                <img
                  src={sponsor.image}
                  alt={sponsor.name}
                  className="max-w-full max-h-full"
                />
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default SummerSchool;
