import noProjectImage from "../assets/no-projects.png";
import Button from "./Button";

const NoProjectSelected = ({ handleClick }) => {
  return (
    <div className="w-2/3 mt-24 text-center">
      <img
        className="w-16 h-16 object-contain mx-auto"
        src={noProjectImage}
        alt="No Project"
      />
      <h2 className="text-xl font-bold text-stone-500 my-4">
        No Project Selected
      </h2>
      <p className="text-xl font-normal text-stone-400 mb-4">
        Select a project or get started with a new one
      </p>
      <p className="mt-8">
        <Button
          onClick={handleClick}
        >
          Create new project
        </Button>
      </p>
    </div>
  );
};

export default NoProjectSelected;
