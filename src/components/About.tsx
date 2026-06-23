export const About = () => {
  const resumeUrl = `${import.meta.env.BASE_URL}resume.pdf`;

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 shadow-lg">
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            M.S. Computer Science student with a strong foundation in full-stack
            development, machine learning, and distributed systems. Led LikeLion
            US Davis as Project Lead & President, earning 1st place out of 50+
            teams in the 2023 Ideathon. Experienced in building everything from
            autonomous vehicle perception pipelines to real-time metrics
            monitoring systems.
          </p>
          <div className="mt-4 mb-4">
            <div className="mb-3">
              <div className="flex justify-between items-center mb-1">
                <p className="text-lg font-semibold text-gray-900 dark:text-white">
                  University of California, Davis
                </p>
                <p className="text-base text-gray-600 dark:text-gray-400">
                  Sep 2024 – Jun 2026
                </p>
              </div>
              <ul className="list-disc list-inside text-base text-gray-700 dark:text-gray-300 ml-4">
                <li>M.S. in Computer Science, GPA: 3.870</li>
              </ul>
            </div>
            <div className="mb-3">
              <div className="flex justify-between items-center mb-1">
                <p className="text-lg font-semibold text-gray-900 dark:text-white">
                  University of California, Davis
                </p>
                <p className="text-base text-gray-600 dark:text-gray-400">
                  Sep 2022 – Jun 2024
                </p>
              </div>
              <ul className="list-disc list-inside text-base text-gray-700 dark:text-gray-300 ml-4">
                <li>B.S. in Computer Science, B.S. in Mathematics, GPA: 3.946</li>
                <li>Dean&apos;s Honors List — Fall 22, Spring 23, Winter 24, Spring 24</li>
              </ul>
            </div>
          </div>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mt-4">
            Feel free to explore my skills, experience, and projects. If you&apos;d like to
            connect, don&apos;t hesitate to reach out!
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
