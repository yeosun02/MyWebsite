export const Experience = () => {
  const experiences = [
    {
      title: 'Teaching Assistant',
      company: 'UC Davis',
      location: 'Davis, CA',
      period: 'Jan 2026 - Present',
      description: `Assisted with the teaching of the undergraduate course ECS 189C: Software Correctness, class size of 62 students. \n 
      - Guided students during weekly office hours, reviewing assignments, quizzes and exams.
      - Created an autograder in Python that will check students' homework.
      - Provided constructive feedback on assignments and exams.
      - Managed the course Q\&A platform (Piazza) to provide support students.`,
      technologies: ['Python', 'Hypothesis', 'Pytest', 'Z3', 'Dafny'],
    },
    {
      title: 'Teaching Assistant',
      company: 'UC Davis',
      location: 'Davis, CA',
      period: 'Apr 2025 - Jun 2025',
      description: `Assisted with the teaching of the undergraduate course ECS 122B: Algorithm Design \& Analysis, class size of 158 students. \n 
      - Guided students during weekly office hours, reviewing assignments, quizzes and exams
      - Created grading rubrics and solution keys to grade assignments and provide constructive feedback
      - Managed the course Q\&A platform (Piazza) to provide support students`,
      technologies: ['Suffix Tree', 'Divide and Conquer', 'Analysis of Algorithms'],
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