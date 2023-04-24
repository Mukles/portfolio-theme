const imgReavel = {
  hidden: { y: 200, opacity: 0 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.8, duration: 0.8, ease: "circOut" },
  },
};

const Skills = () => {
  return (
    <div className="sm:container overflow-hidden">
      <div className="flex flex-wrap">
        <div>
          <h1 className="section-title">
            As A Designer I Am Good At Fit With Few <span>Skills.</span>
          </h1>
          <p>
            All desigener have good skills to make sure satisfied their clints,
            As a designer I am also specialised few <b>skills.</b>
          </p>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Skills;
