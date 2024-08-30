import noProjectImage from "../assets/no-projects.png";

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
        <button
          onClick={handleClick}
          className="w-auto mt-6 py-2 px-4 bg-stone-800 text-stone-400 rounded-md hover:bg-stone-700 hover:text-stone-200"
        >
          Create new project
        </button>
      </p>
    </div>
  );
};

export default NoProjectSelected;
