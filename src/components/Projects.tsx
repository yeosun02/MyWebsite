export const Projects = () => {
  const projects = [
    {
      title: 'Object Detection with 3D Bounding Boxes',
      description: 'By using 2D bounding box predictions from YOLO model with monocular depth predictions, the system aims to approximate the spatial orientation and distance of objects.',
      technologies: ['Machine Learning','Python', 'YOLOv8', 'MiDaS', 'BDD 100K'],
      link: `${import.meta.env.BASE_URL}webcam_demo.mp4`,
      code: 'https://drive.google.com/drive/folders/18qf8viqIP6zCaWwZr4ixJNtsCeD6h8gp?usp=sharing',
    },
    {
      title: 'My Website',
      description: 'A personal website built using Cursor with React, TypeScript, and Tailwind CSS, showcasing my projects and skills.',
      technologies: ['Cursor','React', 'TypeScript', 'Tailwind CSS'],
      link: 'https://yeosun02.github.io/MyWebsite/',
      code: 'https://github.com/yeosun02/MyWebsite',
    },
  ];

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow flex flex-col"
            >
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Live Demo
                </a>
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:underline"
                >
                  Code Repository
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

