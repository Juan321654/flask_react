import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([{}]);

  console.log(data);

  useEffect(() => {
    // fetch("https://localhost:5000/members") // without proxy in package.json gives error "SSL_PROTOCOL_ERROR"
    fetch("/members")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  return (
    <div className="App">
      {typeof data.members === "undefined" ? (
        <div>Loading...</div>
      ) : (
        data.members.map((member, i) => <p key={i}>{member}</p>)
      )}
    </div>
  );
}

export default App;
