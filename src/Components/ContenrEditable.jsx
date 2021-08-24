import React, { useState } from "react";
import { useRef } from "react";
import ContentEditable from "react-contenteditable";

const ContenrEditable = () => {
  const [userText, setUserText] = useState([
    {
      userInput: "",
    },
  ]);
  const [tag, setTag] = useState("h1");
  const text = useRef("");

  const handleChange = (e, indx) => {
    text.current = e.target.value;
    const newUserInput = [...userText];
    newUserInput[indx].userInput = e.target.value;

    setUserText(newUserInput);
  };
  const[index,setIndex] = useState(null)
  const handleEnterPress = (e, index) => {
    // implementing logic so whenever user press /"any html tag" we can display it
    if (e.keyCode == 13) {
      const allUserInput = [...userText];
      const elementOfClickedIndex = allUserInput[index].userInput;
      if (elementOfClickedIndex.includes("/")) {
        const indexOfSlash = elementOfClickedIndex.indexOf("/");
        // console.log(allUserInput[index].userInput.slice(indexOfSlash +1,3))
        setTag(
          allUserInput[index].userInput.slice(
            indexOfSlash + 1,
            elementOfClickedIndex.length
          )
        );
        setIndex(index)
      }
      setUserText([...userText, { userInput: " " }]);
    }
  };

  return (
    <>
      Notion text editor
      {userText.map((value, indx) => {
        
        return (
          <ContentEditable
            tagName={indx===index?tag:'h1'}
            html={indx===index? "":value.userInput||""}
            onChange={(e) => handleChange(e, indx)}
            onKeyDown={(e) => handleEnterPress(e, indx)}
            style={{
              border: "1px solid black",
              width: "50vw",
              margin: "1rem auto",
            }}
          />
        );
      })}
    </>
  );
  // const [userInput, setUserInput] = useState([
  //   {
  //     input: "",
  //   }
  // ]);
  // const handleChange = (e,indx) => {
  //   const newInput = [...userInput]
  //   // name props is not supported on react content editable
  //   newInput[indx].input= e.target.value
  //   console.log(newInput)
  //   setUserInput(newInput);
  // };
  // const handleEnterKeyPress = (e) => {
  //   if (e.keyCode == 13) {
  //     setUserInput([...userInput, { input: " " }]);
  //   }
  // };
  // return (
  //   <div>
  //   <h3> write in input field and press enter</h3>
  //     {userInput.map((value, indx) => {
  //       return (
  //         <>
  //           <ContentEditable
  //             html={value.input}
  //             tagName="div"
  //             style={{ padding: ".5rem 1rem ", border: "1px dotted black" }}
  //             onChange={(e) => handleChange(e ,indx)}
  //             onKeyDown ={handleEnterKeyPress}
  //           />
  //         </>
  //       );
  //     })}
  //   </div>
  // );
};

export default ContenrEditable;
