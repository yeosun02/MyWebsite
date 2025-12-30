export const About = () => {
  const resumeUrl = `${import.meta.env.BASE_URL}resume.pdf`; 

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 shadow-lg">
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          Full-Stack Software Engineer with a strong foundation in computer 
          science and mathematics. Proficient in developing dynamic mobile apps 
          and websites using JavaScript, Vue, React, and Python. Modernized 20+ 
          universitylabs by converting them from Matlab to Python, increasing 
          accessibility and developed a R package for data visualization. 
          Passionate about challenging sophisticated problems and coming up with 
          the efficient solution.
          </p>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mt-4">
            Feel free to explore my skills, experience, and projects. If you'd like to
            connect, don't hesitate to reach out!
          </p>
          <div className="mt-6">
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 dark:bg-blue-500 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors font-medium"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              View Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

