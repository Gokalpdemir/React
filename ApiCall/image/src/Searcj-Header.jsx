import { useState } from "react";

function SearchHeader({ search }) {
  const [valueInput, setValue] = useState("");
  const handleFormSubmit = (event) => {
    event.preventDefault();
    debugger;
    search(valueInput);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div className="searchdiv">
      <form onSubmit={handleFormSubmit}>
        <label>Ne Arıyorsunuz?</label>
        <input type="text" onChange={handleChange} />
      </form>
    </div>
  );
}

export default SearchHeader;
