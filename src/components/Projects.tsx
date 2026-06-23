import { useMemo, useState } from 'react';

type Project = {
  title: string;
  description: string;
  technologies: string[];
  period: string;
  link?: string;
  code?: string;
};

const monthToNum: Record<string, string> = {
  Jan: '01', Feb: '02', Mar: '03', Apr: '04', May: '05', Jun: '06',
  Jul: '07', Aug: '08', Sep: '09', Oct: '10', Nov: '11', Dec: '12',
};

const seasonToMonth: Record<string, string> = {
  Winter: '03', Spring: '06', Summer: '08', Fall: '12',
};

const parseDate = (dateStr: string): string => {
  const seasonMatch = dateStr.match(/^(Spring|Summer|Fall|Winter)\s(\d{4})$/);
  if (seasonMatch) {
    return `${seasonMatch[2]}-${seasonToMonth[seasonMatch[1]]}`;
  }

  const monthMatch = dateStr.match(/^(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{4})$/);
  if (monthMatch) {
    return `${monthMatch[2]}-${monthToNum[monthMatch[1]]}`;
  }

  return '0000-01';
};

const getEndSortKey = (period: string): string => {
  if (period.includes('Present')) return '9999-12';

  const endPart = period.split('–').map((s) => s.trim()).slice(-1)[0];
  return parseDate(endPart);
};

const getStartSortKey = (period: string): string => {
  const startPart = period.split('–').map((s) => s.trim())[0];
  return parseDate(startPart);
};

const getEndYear = (period: string): number => {
  if (period.includes('Present')) {
    return new Date().getFullYear();
  }

  const endPart = period.split('–').map((s) => s.trim()).slice(-1)[0];
  const yearMatch = endPart.match(/\d{4}/);
  return yearMatch ? parseInt(yearMatch[0], 10) : 0;
};

const compareProjects = (a: Project, b: Project): number => {
  const endA = getEndSortKey(a.period);
  const endB = getEndSortKey(b.period);
  const endCompare = endB.localeCompare(endA);
  if (endCompare !== 0) return endCompare;

  const startA = getStartSortKey(a.period);
  const startB = getStartSortKey(b.period);

  if (endA === '9999-12') {
    return startB.localeCompare(startA);
  }

  return startA.localeCompare(startB);
};

const projectData: Project[] = [
  {
    title: 'Distributed Metrics Monitoring System',
    description: 'Built a low-overhead telemetry system with Rust data collection agents and a centralized Python backend. Designed a lightweight gRPC/Protocol Buffers serialization protocol to minimize network overhead, and developed a real-time Next.js dashboard for live performance metrics and historical trends.',
    technologies: ['Rust', 'Python', 'Next.js', 'gRPC'],
    period: 'Spring 2026',
  },
  {
    title: 'My Website',
    description: 'A personal portfolio built with Cursor, React, TypeScript, and Tailwind CSS, showcasing projects, skills, and experience.',
    technologies: ['Cursor', 'React', 'TypeScript', 'Tailwind CSS'],
    period: 'Dec 2025 – Present',
    link: 'https://yeosun02.github.io/MyWebsite/',
    code: 'https://github.com/yeosun02/MyWebsite',
  },
  {
    title: 'Quantitative Biology Computer Labs Conversion',
    description: 'Converted 30+ labs from three Bio/Math courses written in MATLAB to Python to enhance student experience. Configured autograders for each lab that can save graders\' time up to 80%.',
    technologies: ['MATLAB', 'Python'],
    period: 'Jun 2025 – Present',
  },
  {
    title: 'Autonomous Vehicle 3D Object Detection Pipeline',
    description: 'Architected a vision-only perception pipeline combining YOLOv8n 2D detection and MiDaS monocular depth estimation to generate 3D-aware bounding boxes. Engineered a 3D localization framework using pinhole camera geometry, and fine-tuned on BDD100K to double Precision to 67.5% and raise F1-score to 0.48.',
    technologies: ['Python', 'YOLOv8', 'MiDaS', 'OpenCV'],
    period: 'Fall 2025',
    link: `${import.meta.env.BASE_URL}webcam_demo.mp4`,
    code: 'https://drive.google.com/drive/folders/18qf8viqIP6zCaWwZr4ixJNtsCeD6h8gp?usp=sharing',
  },
  {
    title: 'EcoTracker — Full-Stack Developer',
    description: 'Led a team of three members to build a cross-platform mobile app using Flutter (Dart) and Firebase. Utilized GitHub for version control, managing pull requests and code reviews to maintain codebase integrity. Engineered a gamified diary system allowing users to log eco-friendly tasks and visualize impact statistics.',
    technologies: ['Flutter', 'Firebase', 'GitHub', 'Dart'],
    period: 'Jan 2025 – Jun 2025',
  },
  {
    title: 'Performance of Thread Pool Strategies',
    description: 'Evaluated concurrency strategies (FIFO, LIFO, TBB, OpenMP, OpenBLAS) and native vs. async/future models by benchmarking an algorithmically optimized, block-IK matrix multiplication workload in C++.',
    technologies: ['C++', 'OpenMP', 'TBB', 'OpenBLAS'],
    period: 'Spring 2025',
  },
  {
    title: 'Handover — Full-Stack Developer',
    description: 'Developed an AI-powered secondhand marketplace with a Vue.js frontend and Python/Flask backend. Integrated YOLO object detection to automatically identify and categorize user-uploaded items, securing 4th place out of 50+ teams at the 2024 LikeLion Hackathon.',
    technologies: ['Python', 'Vue.js', 'Flask', 'YOLO'],
    period: 'Jan 2024',
  },
  {
    title: '4point0.me — Full-Stack Developer',
    description: 'Developed scalable backend RESTful APIs using Python (Flask) and built a reactive frontend with Vue.js. Architected an academic utility platform for UC Davis students featuring a GPA Calculator and Scheduler. Integrated Google OAuth 2.0 for authentication and implemented JWT tokenization to secure user data.',
    technologies: ['Python', 'Vue.js', 'Flask', 'GitHub'],
    period: 'Jan 2024 – Jun 2024',
  },
  {
    title: 'Project Lead & President — LikeLion US Davis',
    description: 'Directed operations for a university software engineering club focused on full-stack development, AI applications, and collaborative product building. Led product planning as Team Leader & Head Engineer in Ideathon and Hackathon projects, earning 1st place out of 50+ teams in the 2023 LikeLion Ideathon.',
    technologies: ['Leadership', 'Full-Stack Development', 'AI Applications'],
    period: 'Jan 2023 – Jun 2026',
  },
  {
    title: 'StudyGroupApp — Frontend Developer',
    description: 'Developed a collaborative study tool using React Native, featuring a shared Calendar and Task Management system. Managed the Agile development lifecycle using GitHub, ensuring smooth collaboration on feature integration. Designed intuitive UI/UX for user onboarding and complex state management for shared to-do lists.',
    technologies: ['React Native', 'Figma', 'GitHub'],
    period: 'Jan 2023 – Aug 2023',
  },
];

export const Projects = () => {
  const [selectedYear, setSelectedYear] = useState<number | null>(null);

  const { years, projectsByYear } = useMemo(() => {
    const grouped = new Map<number, Project[]>();

    for (const project of projectData) {
      const year = getEndYear(project.period);
      const existing = grouped.get(year) ?? [];
      existing.push(project);
      grouped.set(year, existing);
    }

    for (const [year, projects] of grouped) {
      grouped.set(year, projects.sort(compareProjects));
    }

    const sortedYears = [...grouped.keys()].sort((a, b) => b - a);

    return { years: sortedYears, projectsByYear: grouped };
  }, []);

  const activeYear = selectedYear ?? years[0];
  const visibleProjects = projectsByYear.get(activeYear) ?? [];

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {years.map((year) => (
            <button
              key={year}
              onClick={() => setSelectedYear(year)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                activeYear === year
                  ? 'bg-blue-600 dark:bg-blue-500 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {year}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {visibleProjects.map((project) => (
            <div
              key={project.title}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow flex flex-col"
            >
              <h3 className="text-xl font-semibold mb-1 text-gray-900 dark:text-white">
                {project.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-500 mb-3">
                {project.period}
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {(project.link || project.code) && (
                <div className="flex gap-4">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      Live Demo
                    </a>
                  )}
                  {project.code && (
                    <a
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-400 hover:underline"
                    >
                      Code Repository
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
