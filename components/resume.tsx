import React from "react";

const Resume = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white text-gray-800 rounded-lg shadow-lg">
      <header className="text-center mb-6">
        <h1 className="text-4xl font-bold">Your Name</h1>
        <p className="text-xl mt-2">Aspiring Full Stack Developer</p>
        <p className="mt-2">
          [Your Email] | [Your Phone Number] |{" "}
          <a href="https://github.com/yourusername" className="text-blue-500">
            GitHub
          </a>{" "}
          |{" "}
          <a
            href="https://www.linkedin.com/in/yourusername/"
            className="text-blue-500"
          >
            LinkedIn
          </a>
        </p>
      </header>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold border-b-2 border-gray-300 pb-2">
          Summary
        </h2>
        <p className="mt-2">
          Highly motivated Full Stack Developer with a strong foundation in both
          front-end and back-end technologies. Proficient in React, Node.js, and
          various modern frameworks. Passionate about building responsive and
          user-centric applications. Eager to contribute and grow within a
          dynamic team.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold border-b-2 border-gray-300 pb-2">
          Skills
        </h2>
        <ul className="mt-2 space-y-1">
          <li>
            <strong>Front-End:</strong> React, Tailwind CSS, GSAP,
            @radix-ui/react-icons
          </li>
          <li>
            <strong>Back-End:</strong> Node.js, Express.js, Socket.io, MongoDB
          </li>
          <li>
            <strong>Other:</strong> Three.js, Expo, NativeWind, Appwrite, Git
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold border-b-2 border-gray-300 pb-2">
          Projects
        </h2>
        <div className="mt-2 space-y-4">
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-bold">QueueOverFlow</h3>
            <p className="mt-1">
              A FULL-STACK project utilizing{" "}
              <strong>Next.js Server Actions</strong>, featuring secure{" "}
              <strong>Clerk authentication</strong>, a user{" "}
              <strong>reputation system</strong>, and a unique global search.
              Users can ask, edit, delete, and answer questions, including
              custom text and code. Supports <strong>responsive design</strong>{" "}
              for various devices with advanced search and filtering, and{" "}
              <strong>ChatGPT API</strong> integration.
            </p>
            <a
              href="https://queue-over-flow.vercel.app/"
              className="text-blue-500 underline"
            >
              Check Out Project
            </a>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-bold">RENTIFY</h3>
            <p className="mt-1">
              A <strong>MERN-STACK</strong> project with{" "}
              <strong>Socket.io</strong> for real-time chatting, chat{" "}
              <strong>notifications</strong>, and user authentication with{" "}
              <strong>JWT tokens</strong>. Utilizes{" "}
              <strong>Leaflet maps</strong> for property display. Allows users
              to <strong>search and filter</strong> properties, post, save, and
              view properties globally.
            </p>
            <a
              href="https://rentify-8r7z.onrender.com/"
              className="text-blue-500 underline"
            >
              Check Out Project
            </a>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-bold">Iphone Landing Page</h3>
            <p className="mt-1">
              A responsive landing page for Apple&apos;s iPhone 15 Pro,
              featuring interactive <strong>3D iPhone models</strong> with{" "}
              <strong>Three.js</strong>. Incorporates{" "}
              <strong>GSAP animations</strong> and{" "}
              <strong>scroll triggers</strong> for smooth user experience.
              Highlights Apple&apos;s technology with dynamic visuals and
              transitions across devices.
            </p>
            <a
              href="https://apple-ashy.vercel.app/"
              className="text-blue-500 underline"
            >
              Check Out Project
            </a>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-bold">Auro</h3>
            <p className="mt-1">
              A responsive landing page for showcasing{" "}
              <strong>AI-generated images and videos</strong>. Built with{" "}
              <strong>React Native</strong>, <strong>Expo</strong>, and{" "}
              <strong>NativeWind</strong>. Features image and video posting,
              liking, bookmarking, and a section for top posts. Uses{" "}
              <strong>Appwrite</strong> for data storage and user
              authentication.
            </p>
            <a href="#" className="text-blue-500 underline">
              Check Out Project
            </a>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold border-b-2 border-gray-300 pb-2">
          Education
        </h2>
        <div className="mt-2 space-y-4">
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-bold">Matriculation</h3>
            <p className="mt-1">
              <strong>Board:</strong> CBSE
            </p>
            <p className="mt-1">
              <strong>Institution:</strong> St. Aloysius School, Jabalpur
            </p>
            <p className="mt-1">
              <strong>Percentage:</strong> <strong>89.3%</strong>
            </p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-bold">Intermediate</h3>
            <p className="mt-1">
              <strong>Board:</strong> CBSE
            </p>
            <p className="mt-1">
              <strong>Institution:</strong> St. Aloysius School, Jabalpur
            </p>
            <p className="mt-1">
              <strong>Percentage:</strong> <strong>90.2%</strong>
            </p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-bold">Graduation</h3>
            <p className="mt-1">
              <strong>Degree:</strong> BTech CSE
            </p>
            <p className="mt-1">
              <strong>Institution:</strong> GGCT, Jabalpur
            </p>
            <p className="mt-1">
              <strong>CGPA:</strong> <strong>9</strong>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resume;
