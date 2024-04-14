import { useState, useCallback, useEffect, useRef } from "react";
import "./pass.css";

function PasswordGenerator() {
  let [length, setlength] = useState(8);
  let [numAllow, setnum] = useState(false);
  let [char, setchar] = useState(false);
  let [password, setPassword] = useState("");
  let passref = useRef(null);

  //Generate password
  const passgen = useCallback(() => {
    let str = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
    let pass = "";
    if (numAllow) str += "1234567890";
    if (char) str += "!@#$%^&*()_+-=";
    for (let index = 1; index <= length; index++) {
      pass += str[Math.floor(Math.random() * str.length)];
    }
    setPassword(pass);
  }, [length, numAllow, char, setPassword]);

  // Copy to clipbord
  const copyClipbord = useCallback(() => {
    passref.current?.select();
    passref.current.setSelectionRange(0, 5);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  //auto refresh after anychange
  useEffect(() => {
    passgen();
  }, [length, numAllow, char, passgen]);
  return (
    <>
      <div className="w-screen h-svh bg-slate-500 m-0 p-0 box-border felx pt-8">
        <div className="box w-svw h-16 bg-orange-400 flex justify-center ">
          <input
            className="box w-96 h-10 rounded-lg  bg-white self-center"
            type="text"
            value={password}
            readOnly
            ref={passref}
          />
          <button
            className="box mx-3 bg-blue-400 rounded-lg text-gray-50 w-16 h-10 self-center"
            onClick={copyClipbord}
          >
            copy
          </button>
        </div>
        <div className="box bg-red-700 flex justify-center gap-3">
          <input
            type="range"
            className=""
            min={6}
            max={20}
            value={length}
            onChange={(e) => {
              setlength(e.target.value);
            }}
          />
          <label>length {length}</label>

          <input
            type="checkbox"
            className=""
            onChange={() => setnum((state) => !state)}
          />
          <label>number</label>
          <input
            type="checkbox"
            className=""
            onChange={() => {
              setchar((prev) => !prev);
            }}
          />
          <label>character</label>
        </div>
      </div>
    </>
  );
}
export default PasswordGenerator;
