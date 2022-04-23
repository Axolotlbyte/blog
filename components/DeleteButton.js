import { useState } from "react";

const DeleteButton = ({ removeFunc, comment }) => {
  const [button, setButton] = useState(false);
  const [alert, setAlert] = useState(false);

  return (
    <>
      <button
        onClick={() => {
          setButton(!button);
          setAlert(false);
          return;
        }}
        className="z-40 absolute w-8 h-8 flex items-center justify-center rounded-full bg-white shadow-lg right-2 top-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="bi bi-three-dots-vertical h-6 w-6"
          viewBox="0 0 16 16"
        >
          <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
        </svg>
      </button>
      <button
        onClick={() => {
          setAlert(true);
          setButton(false);
          return;
        }}
        style={{ zIndex: 45 }}
        className={
          " h-7 rounded w-auto absolute right-2 top-12 p-2 flex items-center cursor-pointer bg-red-600 text-white font-semibold" +
          (button ? "" : " hidden")
        }
      >
        {comment ? "Delete Comment" : "Delete Post"}
      </button>

      <div
        style={{ zIndex: 45 }}
        className={
          "min-w-24 z-40 h-auto p-1 rounded absolute right-2 bg-white top-12" +
          (alert ? "" : " hidden")
        }
      >
        <p className="text-sm mb-2 font-semibold">Are you sure?</p>
        <div className="flex gap-1">
          <button
            onClick={() => {
              removeFunc();
              setAlert(false);
            }}
            className="w-full rounded text-white flex items-center justify-center bg-red-600"
          >
            Yes
          </button>
          <button
            onClick={() => setAlert(false)}
            className="w-full bg-green-500 rounded text-white"
          >
            No
          </button>
        </div>
      </div>
    </>
  );
};

export default DeleteButton;
