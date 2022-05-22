import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

function CreatePost() {
	let navigate = useNavigate();

  const [name, setName] = useState("");
  const [alias, setAlias] = useState("");
  const [message, setMessage] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("http://localhost:8000/heroes/", {
        method: "POST",
				headers: {
					"Content-Type": 'application/json',
				},
        body: JSON.stringify({
          name: name,
          alias: alias
        }),
      });
      if (res.status === 201) {
        setName("");
        setAlias("");
        setMessage("Hero created and posted!");
				return navigate("/");
      } else {
        setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          value={alias}
          placeholder="Alias"
          onChange={(e) => setAlias(e.target.value)}
        />

        <button type="submit">Post</button>

        <div className="message">{message ? <p>{message}</p> : null}</div>
      </form>
    </div>
  );
}

export default CreatePost;
