import React, { useState , useEffect } from "react";
import Card from "../components/Card";



function Menu() {
    // Step 1: Fetch menu data from JSON file
    const [Items, setItems] = useState([]);
     const [visibleCount, setVisibleCount] = useState(4);

    useEffect(() => {
      fetch("/MenuData.json") // Path must match where file is stored in public/src
        .then((res) => res.json())
        .then((data) => setItems(data))
        .catch((err) => console.error("Error fetching menu data:", err));
    }, []);
  
  // Step 2: Control how many items are visible
 

  // Step 3: Show more items when button clicked
  const handleSeeMore = () => {
    setVisibleCount((prev) => prev + 3); // Show 3 more each click
  };

  return (
    <div className="menu">
      <h1 className="menu-title">Menu Page</h1>
      <p className="menu-description">
        Explore our delicious menu featuring a variety of dishes made with
        fresh, locally sourced ingredients. From appetizers to desserts, we have
        something for everyone to enjoy.
      </p>

      <div className="cards">
        {Items.slice(0, visibleCount).map((item) => (
          // <Link to={`/order/${item.id}`} style={{ textDecoration: "none" }}>
          //   <Card
          //     id={item.id}
          //     image={item.image}
          //     title={item.title}
          //     price={item.price}
          //     description={item.description} />
          // </Link>
          <Card
            key={item.id}
            id={item.id}
            image={item.image}
            title={item.title}
            price={item.price}
            description={item.description}
          />
        ))}
      </div>

      {visibleCount < Items.length && (
        <button onClick={handleSeeMore} className="see-more-btn">
          See More
        </button>
      )}
    </div>
  );
}

export default Menu;
