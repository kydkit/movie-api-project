import { useState } from "react";

//setItem can be found in MovieCard.jsx
const useLocalStorage = (key, defaultValue = null) => {
  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(key);
    return jsonValue ? JSON.parse(jsonValue) : defaultValue;
  });

  return [value, setValue];
};

export default useLocalStorage;
