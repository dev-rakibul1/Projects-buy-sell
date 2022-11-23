import { useEffect } from "react";

const UseTitle = (title) => {
  useEffect(() => {
    document.title = `${title} | Car seller`;
  }, [title]);
};

export default UseTitle;
