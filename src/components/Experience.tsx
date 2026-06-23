export const Experience = () => {
  const experiences = [
    {
      title: 'ECS 189C: Software Correctness',
      company: 'UC Davis — Professor Caleb Stanford',
      location: 'Davis, CA',
      period: 'Winter 2026',
      description: `- Facilitated weekly office hours for 70 students on formal verification, SMT solvers, and automated testing concepts.
- Engineered a Python automated grading system to validate student submissions in Hypothesis, Pytest, Z3, and Dafny, reducing turnaround time by 90%.`,
      technologies: ['Python', 'Hypothesis', 'Pytest', 'Z3', 'Dafny'],
    },
    {
      title: 'ECS 122B: Algorithm Design & Analysis',
      company: 'UC Davis — Dr. Yelena Frid',
      location: 'Davis, CA',
      period: 'Spring 2025',
      description: `- Taught fundamental algorithmic paradigms, complexity bounds, and asymptotic analysis for 150 undergraduate students.
- Created comprehensive grading rubrics and solution keys and provided constructive feedback.
- Moderated the Q&A platform (Piazza), resolving students' confusion and fostering a collaborative learning environment.`,
      technologies: ['Algorithms', 'Complexity Analysis', 'Divide and Conquer'],
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
                  <p className="text-xl text-gray-700 dark:text-gray-300">
                    {exp.company}
                  </p>
                </div>
                <div className="text-right mt-2 md:mt-0">
                  <span className="text-gray-600 dark:text-gray-400 font-medium block">
                    {exp.period}
                  </span>
                  <span className="text-lg text-gray-600 dark:text-gray-400 block">
                    {exp.location}
                  </span>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4 whitespace-pre-line">
                {exp.description}
              </p>
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
