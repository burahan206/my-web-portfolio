import { SiV } from "react-icons/si";
import { ABOUT_TEXT } from "../constants";

const Aboutme = () => {
  return (
    <>
    <div >
      <h1 id="about" className="my-20 text-center text-4xl">About Me</h1>
      <div>{ABOUT_TEXT}</div>
      </div>
    </>
  );
};

export default Aboutme;
