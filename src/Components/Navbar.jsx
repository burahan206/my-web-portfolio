const Navbar = () => {
  return (
    <div className=" fixed  top-0 w-full ">
      <nav className="bg-neutral-800  mb-20 flex justify-center py-6 ">
        <ul className="flex flex-row gap-4">
          <li>
            <a href="#about" className="hover:text-slate-200">
              <span>About</span>
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-slate-200">
              <span>Skills</span>
            </a>
          </li>
          <li>
            <a href="#"  className="hover:text-slate-200">
              <span>Projects</span>
            </a>
          </li>
          <li>
            <a href="./resume/my-resume.pdf" target="_blank"  className="hover:text-slate-200">
              <span>Resume</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
