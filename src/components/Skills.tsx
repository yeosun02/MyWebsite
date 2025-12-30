// Programming Languages: Python, JavaScript, SQL, R, C++, Java

export const Skills = () => {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: ['JavaScript', 'React', 'React Native', 'TypeScript', 'Vue.js', 
        'HTML/CSS', 'Tailwind CSS'],
    },
    {
      category: 'Backend',
      skills: ['Python', 'RESTful APIs', 'Django', 'Flask'],
    },
    {
      category: 'Database',
      skills: ['MySQL', 'SQLite', 'MongoDB', 'Firebase', 'Supabase'],
    },
    {
      category: 'Data Science & Machine Learning',
      skills: ['R', 'TensorFlow', 'PyTorch', 'scikit-learn', 'keras'],
    },
    {
      category: 'Tools & Other Programming Languages',
      skills: ['Git', 'GitHub', 'Notion', 'C++', 'C', 'Rust', 'C#', 'Go'],
    },
  ];

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                  >
                    {skill}
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

