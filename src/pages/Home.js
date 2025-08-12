import React  from "react";
import Button from "../components/Button";
import resturant from "../assets/restauranfood.jpg"
import Card from "../components/Card";
import Greek from "../assets/greek salad.jpg";
import Bruchetta from "../assets/bruchetta.svg";
import Lemondessert from "../assets/lemon dessert.jpg";
import Pics from "../components/Pics";
import BlogPost from "../components/BlogPost";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";




function Home() {

  const navigate = useNavigate();

  const [Items, setItems] = useState([]);
  
  useEffect(() => {
        fetch("/MenuData.json") // Path must match where file is stored in public/src
          .then((res) => res.json())
          .then((data) => setItems(data))
          .catch((err) => console.error("Error fetching menu data:", err));
      }, []);

  return (
    <div className="home">
      {/* hero section */}
      <section className="hero">
        <div className="hero-body">
          <div className="head">
            <h1 className="hero-title">Little Lemon</h1>
            <p>Chicago</p>
          </div>
          <p className="hero-text">
            Little Lemon is a charming neighborhood bistro that serves simple
            food made from fresh, local ingredients. Our cozy atmosphere and
            friendly staff make us the perfect spot for a casual meal with
            family and friends.
          </p>
          <Button aria-label="Reserve a Table" title="Reserve a Table" onClick={() => {navigate("/reservations");}} />
        </div>
        <div className="hero-img">
          <img src={resturant} alt="Little Lemon" />
        </div>
      </section>
      {/* orders section */}
      <section className="orders">
        <div className="head">
          <h3>Specials</h3>
          <Button title="Order Menu" onClick={() => {navigate("/menu");}} />
        </div>
        <div className="cards">
          {Items.slice(0, 3).map((item) => (
                    // <Link key={item.id} to={`/order/${item.id}`} style={{ textDecoration: "none" }}>
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
                        description={item.description} />
          
                  
                  ))}
        </div>
      </section>
      {/* testimonials section */}
      <section className="testimonials">
        <h2>Testimonials</h2>
        <div className="pics">
          <Pics
            title="Rest"
            img={resturant}
            review="Great food and atmosphere!"
          />
          <Pics
            title="Greek Salad"
            img={Greek}
            review="A fresh and healthy option!"
          />
          <Pics
            title="Bruchetta"
            img={Bruchetta}
            review="A delicious Italian appetizer!"
          />
          <Pics
            title="Lemon Dessert"
            img={Lemondessert}
            review="A light and refreshing lemon dessert!"
          />
        </div>
      </section>

      {/* blog section */}
      <section className="blog">
        <h2>Latest News</h2>
        <div className="blog-posts">
          <BlogPost
            title="Fresh Summer Menu Arrived!"
            date="August 5, 2025"
            summary="We've updated our menu with fresh, seasonal dishes that highlight local ingredients."
          />
          <BlogPost
            title="Live Music Every Friday"
            date="July 29, 2025"
            summary="Join us for live music performances every Friday evening at Little Lemon."
          />
          <BlogPost
            title="Chef’s Special: Lemon Herb Chicken"
            date="July 20, 2025"
            summary="Don't miss our chef's new creation – a tangy, juicy lemon herb chicken dish, available for a limited time!"
          />
        </div>
      </section>
    </div>
  );
}
export default Home;