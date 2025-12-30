type Section = 'about' | 'skills' | 'experience' | 'projects';

interface NavigationProps {
  currentSection: Section;
  onSectionChange: (section: Section) => void;
}

export const Navigation = ({ currentSection, onSectionChange }: NavigationProps) => {
  const sections: { id: Section; label: string }[] = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
  ];

  return (
    <nav className="border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="flex justify-center gap-8 md:gap-12">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => onSectionChange(section.id)}
              className={`py-4 px-2 text-sm md:text-base font-medium transition-colors border-b-2 ${
                currentSection === section.id
                  ? 'border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400'
                  : 'border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
              }`}
            >
              {section.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

