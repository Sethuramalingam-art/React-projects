import React, { useEffect, useState } from "react";

const InfiniteScroll = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?page=${page}`
      );
      const result = await response.json();
      setLoading(false);
      setData((prev) => [...prev, ...result]);
    } catch (error) {
      setLoading(false);
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const { scrollHeight, scrollTop, clientHeight } = document.documentElement;

    if (scrollTop + clientHeight >= scrollHeight - 10 && !loading) {
      setLoading(true);
      setPage((prev) => prev + 1);
    }
  };

  return (
    <section className="landing">
      <div className="row container">
        <h1>Infinite Scroll</h1>
        {data &&
          data.map((item, index) => {
            return <div key={item.id}>Title: {item.title}</div>;
          })}
        {loading && <h1>Loading....</h1>}
      </div>
    </section>
  );
};

export default InfiniteScroll;
