import { useEffect, useRef, useState } from "react";
import Pill from "./components/Pill";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [selectedUserSet, setSelectedUserSet] = useState(new Set());

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setSuggestions([]);
      return;
    }

    fetch(`https://dummyjson.com/users/search?q=${searchTerm}`)
      .then((res) => res.json())
      .then((data) => setSuggestions(data))
      .catch((error) => {
        console.log(error);
      });
  }, [searchTerm]);

  const handleSelectUser = (user) => {
    setSelectedUsers([...selectedUsers, user]);
    setSearchTerm("");
    setSuggestions([]);
    setSelectedUserSet(new Set([...selectedUserSet, user.email]));
    inputRef.current.focus();
  };
  // console.log(selectedUsers);

  const handleRemoveUser = (user) => {
    const updatedUsers = selectedUsers.filter(
      (selectedUser) => selectedUser.id !== user.id
    );
    setSelectedUsers(updatedUsers);
    const updatedEmails = new Set(updatedUsers);
    updatedEmails.delete(user.email);
    setSelectedUserSet(updatedEmails);
  };

  const inputRef = useRef(null);

  const handleBckspRemove = (e) => {
    if (
      e.key === "Backspace" &&
      e.target.value === "" &&
      selectedUsers.length > 0
    ) {
      const lastUser = selectedUsers[selectedUsers.length - 1];
      handleRemoveUser(lastUser);
      // setSuggestions([]);
    }
  };

  return (
    <>
      <div className="h-screen flex flex-col items-start relative gap-1 bg-slate-900">
        <div className="w-[80%] mx-auto mt-36 flex items-center flex-wrap gap-2 p-2 border-2 border-gray-500 rounded-2xl">
          {/* Pills */}
          {selectedUsers.map((user) => {
            return (
              <Pill
                key={user.email}
                image={user.image}
                text={user.firstName}
                onclick={() => handleRemoveUser(user)}
              />
            );
          })}
          {/* Input with search suggestions */}
          <input
            type="text"
            ref={inputRef}
            value={searchTerm}
            onKeyDown={handleBckspRemove}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for a User..."
            className="border-none h-5 p-1 outline-none font-medium bg-transparent text-white"
          />
        </div>
        <ul className="max-h-[300px] w-[80%] mx-auto overflow-y-scroll list-none bg-slate-800 border-2 rounded-md border-none text-white">
          {suggestions?.users?.map((user) => {
            return !selectedUserSet.has(user.email) ? (
              <li
                key={user.email}
                className="mb-1 p-1 border-b-2 cursor-pointer hover:bg-gray-600"
                onClick={() => handleSelectUser(user)}
              >
                <img
                  src={user.image}
                  alt={`${user.firstName} ${user.lastName}`}
                  className="w-10 inline mr-5"
                />
                <span>
                  {user.firstName} {user.lastName}
                </span>
              </li>
            ) : (
              <></>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default App;
