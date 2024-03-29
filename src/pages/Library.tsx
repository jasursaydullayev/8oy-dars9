import { collection, addDoc, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { auth, db } from "../firebaseApp";
// import { doc, deleteDoc } from "firebase/firestore";
// import Login from "../components/Login";
// import SignUp from "./components/SignUp";
function Library() {
  const [title, setTitle] = useState("");
  const [books, setBooks] = useState<any>([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (title) {
      setLoading(true);
      const ref = await addDoc(collection(db, "library"), {
        title,
      });
      setBooks([...books, { id: ref.id, title }]);
      setLoading(false);
    }
  };

  useEffect(() => {
    async function getData() {
      let booksArr: any = [];
      const snap = await getDocs(collection(db, "library"));
      snap.forEach((doc) => {
        booksArr.push({ id: doc.id, ...doc.data() });
      });
    }
    getData();
  }, []);

  const signOut = () => {
    console.log(auth.currentUser);
    
  }

  return (
    <div>
      <h3>Create Book</h3>
      <h3 onClick={signOut} style={{textAlign: "right", cursor: "pointer"}}>Sign Out</h3>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          type="text"
          placeholder="Book title"
        />
        <br />
        <br />
        <button disabled={loading}>{loading ? "Loading" : "Create"}</button>
      </form>

      <ul>
        {books.map((book: any) => {
          return <li key={book.id}>{book.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default Library;
