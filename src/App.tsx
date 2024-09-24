import { useEffect, useState } from 'react';
import './App.css'
import { fetchPostByUser, Post } from './api/apiHandler';
import ProductCard from './components/ProductCard';

function App() {
  const [data,setData] = useState<Post[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
   console.log(data);
   useEffect(() => {
        fetchPostByUser(1).then((data) => {
          setData(data);
          setLoading(false);
        })
        .catch((error) => {
          setError(error.message);
          setLoading(false);
        })
   }, []);
  
   if (loading) {
    return <div>Loading...</div>;
  }
  console.log(data)
  if (error) {
    return <div>Error: {error}</div>;
  }


   return(
    <div>
      <ul>
      {data && data.map((post) => (
          <ProductCard
            key={post.id}
            image={post.image}
            title={post.title}
            description={post.description}
            price={`$${post.price.toFixed(2)}`}
          />
        ))}
      </ul>

    </div>
   );
};

export default App




