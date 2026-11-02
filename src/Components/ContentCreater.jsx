const TechnicalCard = ({ icon, title, description, skills, index }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={index * 100}
      className="
        group
        rounded-3xl
        border
        border-white/10
        bg-white/5
        p-7
        backdrop-blur-md
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-[#ff2a2a]/40
        hover:bg-white/[0.07]
        hover:shadow-[0_20px_50px_rgba(255,42,42,0.12)]
      "
    >
      {/* Icon + Number */}
      <div className="mb-6 flex items-start justify-between">
        <div
          className="
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-2xl
            bg-[#ff2a2a]/10
            transition-all
            duration-300
            group-hover:scale-110
            group-hover:bg-[#ff2a2a]/20
          "
        >
          {icon}
        </div>

        <span
          className="
            rounded-full
            border
            border-white/10
            px-3
            py-1
            font-mono
            text-[10px]
            font-bold
            tracking-widest
            text-white/30
          "
        >
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      {/* Title */}
      <h3
        className="
          mb-3
          text-xl
          font-black
          tracking-tight
          text-white
          transition-colors
          duration-300
          group-hover:text-[#ff2a2a]
        "
      >
        {title}
      </h3>

      {/* Description */}
      <p
        className="
          text-sm
          font-medium
          leading-7
          text-white/55
        "
      >
        {description}
      </p>

      {/* Skills */}
      <div
        className="
          mt-6
          flex
          flex-wrap
          gap-2
          border-t
          border-white/5
          pt-5
        "
      >
        {skills.map((skill) => (
          <span
            key={skill}
            className="
              rounded-full
              border
              border-white/10
              bg-white/5
              px-3
              py-1.5
              text-[10px]
              font-bold
              uppercase
              tracking-wide
              text-white/50
              transition-all
              duration-300
              group-hover:text-white/80
            "
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

/*CODE ICON*/

const CodeIcon = () => (
  <svg
    className="h-7 w-7 text-[#ff2a2a]"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M16 18l6-6-6-6M8 6l-6 6 6 6M14.5 4l-5 16"
    />
  </svg>
);

/* REACT ICON */

const ReactIcon = () => (
  <svg viewBox="0 0 128 128" className="h-8 w-8">
    <g
      fill="none"
      stroke="#61DAFB"
      strokeWidth="6"
      transform="translate(64 64)"
    >
      <ellipse rx="52" ry="20" />
      <ellipse rx="52" ry="20" transform="rotate(60)" />
      <ellipse rx="52" ry="20" transform="rotate(120)" />
    </g>

    <circle cx="64" cy="64" r="9" fill="#61DAFB" />
  </svg>
);

/* =========================================================
   API ICON
========================================================= */

const ApiIcon = () => (
  <svg
    className="h-7 w-7 text-[#61DAFB]"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      d="M8 9l-3 3 3 3M16 9l3 3-3 3M14 5l-4 14"
    />
  </svg>
);

/* =========================================================
   DATABASE ICON
========================================================= */

const DatabaseIcon = () => (
  <svg
    className="h-7 w-7 text-[#4DB33D]"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <ellipse cx="12" cy="5" rx="7" ry="3" strokeWidth="1.8" />

    <path strokeWidth="1.8" d="M5 5v7c0 1.66 3.13 3 7 3s7-1.34 7-3V5" />

    <path strokeWidth="1.8" d="M5 12v7c0 1.66 3.13 3 7 3s7-1.34 7-3v-7" />
  </svg>
);

/* =========================================================
   TOOLS ICON
========================================================= */

const ToolsIcon = () => (
  <svg
    className="h-7 w-7 text-[#ff2a2a]"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      d="M14.7 6.3a5 5 0 01-6.4 6.4L3 18l3 3 5.3-5.3a5 5 0 006.4-6.4l-2.5 2.5-2.8-.7-.7-2.8 2.5-2.5z"
    />
  </svg>
);

/* =========================================================
   ABOUT / TECHNICAL EXPERTISE SECTION
========================================================= */

const ContentCreator = () => {
  const technicalSkills = [
    {
      title: "Frontend Development",
      icon: <ReactIcon />,
      description:
        "Building responsive and user-friendly web applications using modern frontend technologies and reusable components.",
      skills: [
        "React.js",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Bootstrap",
        "Material UI",
      ],
    },

    {
      title: "React & State Management",
      icon: <CodeIcon />,
      description:
        "Developing component-based interfaces with React.js and managing application state with Redux Toolkit.",
      skills: [
        "React.js",
        "Redux Toolkit",
        "Reusable Components",
        "Responsive UI",
      ],
    },

    {
      title: "REST API Integration",
      icon: <ApiIcon />,
      description:
        "Integrating REST APIs and working with JSON data to connect frontend applications with backend services.",
      skills: ["REST APIs", "JSON", "Axios"],
    },

    {
      title: "Programming & Database",
      icon: <DatabaseIcon />,
      description:
        "Working knowledge of programming and database technologies used for application development and data management.",
      skills: ["Java", "Python", "SQL", "MySQL"],
    },

    {
      title: "Development Tools",
      icon: <ToolsIcon />,
      description:
        "Using version control and development tools to manage projects, write code and maintain development workflows.",
      skills: ["Git", "GitHub", "VS Code", "npm"],
    },

    {
      title: "Responsive Web Design",
      icon: <CodeIcon />,
      description:
        "Creating responsive interfaces that provide a clean and consistent experience across desktop, tablet and mobile devices.",
      skills: [
        "Responsive Design",
        "CSS3",
        "Tailwind CSS",
        "Bootstrap",
        "Material UI",
      ],
    },
  ];

  return (
    <section
      id="creator"
      className="
        relative
        w-full
        overflow-hidden
        bg-[#0a0a0a]
        px-6
        pb-32
        pt-24
        font-sans
        md:px-12
      "
    >
      {/* =====================================================
          BACKGROUND GRID
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-50
          [background-image:linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)]
          [background-size:80px_80px]
        "
      />

      {/* =====================================================
          BACKGROUND GLOW
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[600px]
          w-[600px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-red-600/5
          blur-[160px]
        "
      />

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-6xl
        "
      >
        {/* ===================================================
            HEADER
        ==================================================== */}

        <div data-aos="fade-up" className="mb-16 md:mb-20">
          {/* Badge */}

          <div
            className="
              mb-6
              inline-block
              rounded-full
              border
              border-white/20
              bg-white/5
              px-5
              py-1.5
              text-sm
              font-bold
              text-white/60
              backdrop-blur-sm
            "
          >
            TECHNICAL EXPERTISE
          </div>

          {/* Heading */}

          <h2
            className="
              mb-6
              max-w-4xl
              text-4xl
              font-black
              leading-[1.05]
              tracking-tight
              text-white
              md:text-5xl
              lg:text-6xl
            "
          >
            Building Clean &<span className="text-[#ff2a2a]"> Responsive</span>{" "}
            Web Experiences.
          </h2>

          {/* Description */}

          <p
            className="
              max-w-2xl
              text-base
              font-medium
              leading-relaxed
              text-white/50
              md:text-lg
            "
          >
            I'm focused on frontend development, React.js, responsive UI, REST
            API integration and modern web technologies, with an emphasis on
            clean, maintainable and user-friendly interfaces.
          </p>
        </div>

        {/* ===================================================
            TECHNICAL SKILLS GRID
        ==================================================== */}

        <div
          className="
            grid
            grid-cols-1
            gap-6
            md:grid-cols-2
            lg:grid-cols-3
          "
        >
          {technicalSkills.map((item, index) => (
            <TechnicalCard
              key={item.title}
              index={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
              skills={item.skills}
            />
          ))}
        </div>

        {/* ===================================================
            CORE TECHNOLOGIES
        ==================================================== */}

        <div
          data-aos="fade-up"
          data-aos-delay="500"
          className="
            mt-16
            rounded-3xl
            border
            border-white/10
            bg-white/[0.03]
            p-8
            backdrop-blur-md
            md:p-10
          "
        >
          <div
            className="
              flex
              flex-col
              gap-8
              lg:flex-row
              lg:items-center
              lg:justify-between
            "
          >
            {/* Heading */}

            <div className="shrink-0">
              <span
                className="
                  text-[10px]
                  font-black
                  uppercase
                  tracking-[0.3em]
                  text-[#ff2a2a]
                "
              >
                My Stack
              </span>

              <h3
                className="
                  mt-2
                  text-2xl
                  font-black
                  tracking-tight
                  text-white
                  md:text-3xl
                "
              >
                Technologies I Work With
              </h3>
            </div>

            {/* Technology Tags */}

            <div
              className="
                flex
                flex-wrap
                gap-2
                lg:max-w-2xl
                lg:justify-end
              "
            >
              {[
                "React.js",
                "JavaScript",
                "Redux Toolkit",
                "HTML5",
                "CSS3",
                "Tailwind CSS",
                "Bootstrap",
                "Material UI",
                "REST APIs",
                "JSON",
                "Git",
                "GitHub",
                "Java",
                "Python",
                "SQL",
                "MySQL",
              ].map((skill) => (
                <span
                  key={skill}
                  className="
                    rounded-full
                    border
                    border-white/10
                    bg-white/5
                    px-3
                    py-2
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-wide
                    text-white/50
                    transition-all
                    duration-300
                    hover:border-[#ff2a2a]/40
                    hover:bg-[#ff2a2a]/10
                    hover:text-white
                  "
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentCreator;
