import {useState, useEffect} from 'react';
import './App.css';
function App() {
  const [loading, setLoading] = useState(true);
  const [records, setRecords] = useState([]);
  
  // async function fetchAPI() {
  const fetchAPI = async () => {
    setLoading(true);
    try{
      const response = await fetch('https://jsonplaceholder.typicode.com/todos')
      const data = await response.json()
      if(data) { setRecords(data) }
    } catch(error) {
      console.error(error);
    }
    setLoading(false);
  }

  useEffect(() => {
    // setLoading(true);
    // fetch('https://jsonplaceholder.typicode.com/todos')
    //   .then(response => response.json())
    //   .then(data => setRecords(data))
    //   .catch(error => console.error(error));
    // setLoading(false);
    fetchAPI();
  }, []);

  return (
    <div className="App">

      {loading ? 'Loading...' : (
        <div className="grid">
          {records && records.map(item => (
            <div className="item" key={item.id}>
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      )}

    </div>
  );
}

export default App;
