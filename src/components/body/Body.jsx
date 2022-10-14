import { useState, useEffect } from "react";
import axios from "axios";

function Body() {
  const [size, setSize] = useState(4);
  const [data, setData] = useState();
  const [include, setInclude] = useState("text");
  useEffect(() => {
    async function call() {
      await axios(
        `https://baconipsum.com/api/?type=all-meat&paras=${size}&format=${include}`
      ).then((res) => setData(res.data));
    }
    call();
  }, [size, include]);
  return (
    <div>
      <div className="body_Div">
        <label htmlFor="paragraphs">Paragraphs:</label>
        <input
          type="number"
          min="1"
          onChange={(e) => setSize(e.target.value)}
          value={size}
          name="paragraphs"
        />
        <label htmlFor="paragraphs">Include HTML:</label>
        <select
          name="include"
          id="include"
          onChange={(e) => setInclude(e.currentTarget.value)}
          value={include}
        >
          <option value="text">No</option>
          <option value="html">Yes</option>
        </select>
      </div>
      <div className="code">
        <code>{data}</code>
      </div>
    </div>
  );
}

export default Body;
