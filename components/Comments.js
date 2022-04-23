import { useState, useEffect } from "react";
import { deleteComment } from "../services/admin.service";
import { check, comment } from "../services/user.service";
import DeleteButton from "./DeleteButton";

const Comments = ({ id, comments }) => {
  const [text, setText] = useState("");
  const [allComments, setComments] = useState([]);
  const [isLoggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    check().then((res) => {
      if (res.status) {
        return setLoggedIn(true);
      }
    });
  }, []);

  useEffect(() => {
    setComments(comments);
  }, []);

  const submitComment = async () =>
    comment(text, id).then((res) => {
      console.log(res.comment);
      setComments([...res.comment]);
      setText("");
    });

  return (
    <div id="comments" className=" my-8 h-auto">
      <hr className="mb-4" />
      <div className="w-11/12 lg:w-3/5 md:ml-16 lg:ml-24 mx-auto md:mx-0 sm:w-10/12 md:w-3/4 h-auto">
        {isLoggedIn ? (
          <div className="flex items-center">
            <div className="w-10 h-9 relative overflow-hidden flex items-center justify-center text-white ring-yellow-500 bg-gradient-to-br from-purple-400 via-violet-400 to-blue-500 rounded-full ring-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="bi bi-person-fill h-10 w-10 absolute -bottom-1.5"
                viewBox="0 0 16 16"
              >
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
              </svg>
            </div>
            <div className="w-full overflow-hidden flex items-center">
              <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="ml-4 w-full pb-1 border-b outline-none text-lg"
                type="text"
                placeholder="Type something here..."
              />
              <button
                onClick={submitComment}
                className="font-semibold border-b pb-1 text-lg text-blue-700"
              >
                Submit
              </button>
            </div>
          </div>
        ) : (
          <p className="text-2xl font-semibold">Comments:</p>
        )}
        <div className="mt-4 ml-0.5">
          {/* comments */}
          {allComments?.map((item) => {
            return (
              <div
                key={item._id}
                className="flex relative border-b py-2 flex-grow-0 h-auto"
              >
                <DeleteButton
                  removeFunc={async () => {
                    await deleteComment(id, item._id)
                      .then(() => {
                        setComments([
                          ...allComments.filter((i) => i._id !== item._id),
                        ]);
                        return;
                      })
                      .catch((err) => console.log(err));
                  }}
                  comment
                />
                <div className="w-8 h-8 flex-shrink-0 flex-grow-0 relative overflow-hidden flex items-center justify-center text-white bg-gradient-to-br from-purple-400 via-violet-400 to-blue-500 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="bi bi-person-fill h-9 w-9 absolute -bottom-1.5"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                  </svg>
                </div>
                <div className="w-full pl-2 flex flex-col">
                  <p className="text-sm font-semibold">{item.user.username}</p>
                  <p className="pt-0.5 text-base">{item.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Comments;
