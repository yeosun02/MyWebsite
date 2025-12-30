export const Experience = () => {
  const experiences = [
    {
      title: 'Software Engineer',
      company: 'Company Name',
      location: 'City, State',
      period: '2022 - Present',
      description: 'Developed and maintained web applications using React and TypeScript. Collaborated with cross-functional teams to deliver high-quality software solutions.',
      technologies: ['React', 'TypeScript', 'Node.js'],
    },
    {
      title: 'Junior Developer',
      company: 'Previous Company',
      location: 'City, State',
      period: '2020 - 2022',
      description: 'Built responsive web interfaces and implemented RESTful APIs. Participated in code reviews and agile development processes.',
      technologies: ['JavaScript', 'Python', 'SQL'],
    },
  ];

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-xl text-gray-700 dark:text-gray-300 mb-1">
                    {exp.company}
                  </p>
                  <p className="text-lg text-gray-600 dark:text-gray-400">
                    {exp.location}
                  </p>
                </div>
                <span className="text-gray-600 dark:text-gray-400 font-medium mt-2 md:mt-0">
                  {exp.period}
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{exp.description}</p>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

