/* eslint-disable react/no-unescaped-entities */
import MyInformation from "../MyInformation/MyInformation";

const AboutMe = () => {
  const sections = [
    {
      title: "Backend Development with Node.js and Express.js",
      content:
        "I architect and develop robust server-side applications using Node.js and Express.js. From designing RESTful APIs to implementing authentication and authorization mechanisms, I ensure your backend is secure, efficient, and scalable.",
    },
    {
      title: "Frontend Excellence with React.js",
      content:
        "I specialize in crafting dynamic and responsive user interfaces with React.js. Whether it's building single-page applications (SPAs), progressive web apps (PWAs), or integrating complex UI components, I prioritize performance and usability to deliver a seamless user experience.",
    },
    {
      title: "Data Management with MongoDB",
      content:
        "I utilize MongoDB for flexible and scalable data storage solutions. From schema design to querying and indexing, I optimize database performance to support your application's data-intensive requirements.",
    },
    {
      title: "Full Stack Integration and Optimization",
      content:
        "I excel in integrating frontend and backend components to create cohesive applications. Using modern development practices and tools like Redux for state management and TypeScript for type safety, I ensure code maintainability and scalability.",
    },
    {
      title: "Problem Solving and Innovation",
      content:
        "I thrive on solving complex technical challenges and implementing innovative solutions. Whether it's optimizing application performance, refactoring code for scalability, or integrating third-party APIs, I bring a creative approach to problem-solving.",
    },
    {
      title: "Agile Development and Collaboration",
      content:
        "Experienced in agile methodologies, I collaborate effectively in cross-functional teams. I prioritize communication, transparency, and iterative development cycles to deliver projects on time and within scope.",
    },
    {
      title: "Continuous Learning and Adaptation",
      content:
        "In the fast-paced world of technology, I am committed to continuous learning and growth. I stay updated with the latest trends in frontend development, explore new libraries and frameworks, and adapt best practices to deliver cutting-edge solutions.",
    },
  ];

  return (
    <div className="bg-white p-4 sm:flex items-start pt-24 lg:pt-8 gap-4">
      <div className="lg:hidden border rounded shadow-md flex justify-center">
        <MyInformation />
      </div>
      <div className="sm:mx-4 my-4 animate__fadeIn animate__animated">
        <div>
          <h1 className="sm:pt-0 pt-4 text-3xl sm:text-5xl font-semibold text-gray-600">
            About Me
          </h1>
          <p className="mt-4 text-gray-500 sm:text-base text-sm">
            Hi there!👋 I'm a passionate MERN stack developer specializing in
            crafting robust web applications. With a keen focus on user-centric
            design and seamless functionality, I thrive on leveraging MongoDB
            for flexible data management, harnessing Express.js for efficient
            server-side development, and creating dynamic user interfaces with
            React. Powered by Node.js, I bring projects to life with scalable
            and performant backend solutions. Let's build something amazing
            together!
          </p>
        </div>
        <div>
          <section className="py-8">
            <div className="mx-auto">
              <h2 className="text-3xl font-bold mb-6">What I Do</h2>

              <div className="space-y-6">
                {sections.map((section, index) => (
                  <div key={index}>
                    <h3 className="text-xl font-semibold mb-2">
                      {section.title}
                    </h3>
                    <p className="text-gray-700">{section.content}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
