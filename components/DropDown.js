import { logout } from "../services/user.service";
import { useRouter } from "next/dist/client/router";

const DropDown = ({ visibility, logOut, role }) => {
  const router = useRouter()

  const logoutAcc = () => {
    logout().then((res) => {
      console.log(res);
      logOut();
    });
  };

  return (
    <div
      style={{ zIndex: 52 }}
      className={
        "absolute w-40 top-14 right-1 h-auto bg-black" +
        (visibility ? " overflow-visible" : " hidden overflow-hidden")
      }
    >
      <div
        className={
          "relative" +
          (visibility ? " overflow-visible" : " hidden overflow-hidden")
        }
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="bi bi-caret-up-fill h-6 w-6 absolute right-1 text-black -top-4"
          viewBox="0 0 16 16"
        >
          <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
        </svg>
      </div>

      {role === "admin" ? (
        <div className="w-full text-white h-10 flex items-center justify-start">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="bi bi-file-earmark-check w-6 h-6 ml-2"
            viewBox="0 0 16 16"
          >
            <path d="M10.854 7.854a.5.5 0 0 0-.708-.708L7.5 9.793 6.354 8.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z" />
            <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z" />
          </svg>
          <p className="pl-4 text-base font-semibold">Manage Posts</p>
        </div>
      ) : null}

      <div onClick={() => router.push("/posts/create")} className="w-full text-white h-10 flex items-center justify-start">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="bi bi-pencil-square w-6 h-6 ml-2"
          viewBox="0 0 16 16"
        >
          <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
          <path
            fillRule="evenodd"
            d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
          />
        </svg>
        <p className="pl-4 text-base font-semibold">Create Post</p>
      </div>

      <div
        onClick={logoutAcc}
        className="w-full text-white h-10 flex items-center justify-start"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="bi bi-door-open w-6 h-6 ml-2"
          viewBox="0 0 16 16"
        >
          <path d="M8.5 10c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1z" />
          <path d="M10.828.122A.5.5 0 0 1 11 .5V1h.5A1.5 1.5 0 0 1 13 2.5V15h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V1.5a.5.5 0 0 1 .43-.495l7-1a.5.5 0 0 1 .398.117zM11.5 2H11v13h1V2.5a.5.5 0 0 0-.5-.5zM4 1.934V15h6V1.077l-6 .857z" />
        </svg>
        <p className="pl-8 text-base font-semibold">Logout</p>
      </div>
    </div>
  );
};

export default DropDown;
