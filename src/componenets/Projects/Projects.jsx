function Projects() {
  return (
    <div className="bg-white p-4 pt-24 lg:pt-8">
      <h1 className="sm:pt-0 pt-4 text-center text-3xl sm:text-5xl font-semibold text-gray-600">
        Project
      </h1>
      <div className="lg:p-14">
        {dummyContent.map((item, index) => (
          <div key={index} className="my-10">
            <p className="text-2xl font-semibold text-gray-700 mb-4">
              {item.title}
            </p>
            <img className="shadow-md rounded" src={item.image} alt="" />
            <div className="text-sm flex flex-col gap-2 mt-6 prose prose-sm dark:prose-invert">
              <h1 className="sm:pt-0 pt-4 text-xl font-semibold text-gray-600">
                Description
              </h1>
              {item.description}
            </div>
            <div></div>
          </div>
        ))}
      </div>
    </div>
  );
}

const dummyContent = [
  {
    title: "Survey Genius",
    url: "https://assignment-12tarek.netlify.app",
    github: "https://github.com/Tarek124/Survey-Genius-client-side",
    description: (
      <>
        <p>
          <span className="font-semibold">User Authentication and Roles:</span>{" "}
          Secure user authentication system with role-based access control
          (admin, surveyor, pro-user, user).
        </p>
        <p>
          <span className="font-semibold">Survey Creation and Management:</span>
          Intuitive interface for creating surveys with customizable options,
          categories, and deadlines. Ability to add questions with yes/no
          options or multiple-choice responses. Dashboard for Users and
          Surveyors: Separate dashboards for different user roles (user,
          surveyor) providing relevant functionalities. Users can view their
          surveys, responses, and manage their profile settings.
        </p>
        <p>
          <span className="font-semibold">Payment Integration:</span> Seamless
          integration with payment gateways allowing users to upgrade to pro
          accounts or participate in paid surveys. Real-time Data Updates: Live
          updates for survey responses and voting statistics displayed in
          real-time. Dynamic charts and graphs for visualizing survey trends and
          results.
        </p>
        <p>
          <span className="font-semibold">Notification System:</span> Automated
          notifications for survey deadlines, new responses, and account
          activities. Customizable email notifications for users based on their
          preferences.
        </p>
        <p>
          <span className="font-semibold">Reporting and Analytics:</span>
          Robust reporting tools for generating detailed analytics reports on
          survey performance, user engagement, and demographics. Customizable
          Settings: Personalized user settings for language preferences, survey
          notification settings, and account security options.
          Admin-configurable site settings for branding, SEO optimization, and
          integration with external services.
        </p>
      </>
    ),
    image: "https://i.ibb.co/74FzPG6/Screenshot-2024-07-03-225823.png",
  },
  {
    title: "Tour Vista",
    url: "https://assignment-10-a5238.web.app",
    github: "https://github.com/Tarek124/TourVista-client-side",
    description: (
      <>
        <p>
          <span className="font-semibold">Comprehensive Travel Planning:</span>
          Our website offers a one-stop solution for all your travel needs, from
          booking accommodations and transportation to creating personalized
          itineraries.
        </p>
        <p>
          <span className="font-semibold">Expert Travel Advice:</span> Gain
          insights from travel experts and locals to ensure you get the best
          recommendations on attractions, dining, and activities at your
          destination.
        </p>
        <p>
          <span className="font-semibold">Flexible Booking Options:</span>
          Choose from a wide range of accommodations and transportation, with
          flexible cancellation policies and the ability to customize your
          travel plans.
        </p>
        <p>
          <span className="font-semibold">Safety and Security:</span> We
          prioritize your safety, providing travel advisories, health tips, and
          emergency contact information for a worry-free trip.
        </p>
        <p>
          <span className="font-semibold">Customer Support:</span> Our customer
          service team is available 24/7 to assist with any questions or
          concerns, ensuring you have a seamless travel experience from start to
          finish.
        </p>
      </>
    ),
    image: "https://i.ibb.co/rfQcsZX/Screenshot-2024-07-03-230626.png",
  },
  {
    title: "Estate Explorer",
    url: "https://assignment-9-fb78d.web.app/",
    github: "https://github.com/Tarek124/EstateExplorer",
    description: (
      <>
        <p>
          <span className="font-semibold">Seamless Profile Management:</span>{" "}
          Effortlessly update and manage your profile details, including
          personal information and preferences, to ensure your account reflects
          your latest information and preferences.
        </p>
        <p>
          <span className="font-semibold">Efficient Communication:</span> Easily
          reach out to property agents or fellow users through our integrated
          contact system, facilitating smooth and efficient communication for
          inquiries, appointments, or general assistance.
        </p>
        <p>
          <span className="font-semibold">Secure Login and Registration:</span>{" "}
          Enjoy peace of mind with our robust login and registration system,
          safeguarding your account with industry-standard security measures to
          protect your personal information and ensure a secure browsing
          experience.
        </p>
        <p>
          <span className="font-semibold">Streamlined Estate Exploration:</span>
          Dive into our comprehensive estate section, where you can browse
          through a diverse range of properties, filter by location, price, and
          amenities, and explore detailed property listings with ease.
        </p>
        <p>
          <span className="font-semibold"> Personalized Experience: </span>
          Tailor your browsing experience to your preferences, whether it's
          saving favorite properties for later, receiving personalized
          recommendations, or accessing exclusive features based on your user
          profile and activity.
        </p>
      </>
    ),
    image: "https://i.ibb.co/vq72m5f/Screenshot-2024-07-03-231051.png",
  },
];

export default Projects;
