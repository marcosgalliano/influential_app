import style from "./Home.module.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import Spinner from "../../components/Spinner/Spinner";
import Card from "../../components/Card/Card";

const Home = () => {
  const users = [
    {
      id: 2,
      image:
        "https://www.dzoom.org.es/wp-content/uploads/2008/11/alexandru-zdrobau-195418-734x532.jpg",
      description:
        "Tech enthusiast and gadget reviewer. Bringing you the latest in technology.",
      name: "Maria Gomez",
      location: "San Francisco, USA",
      followers: 30,
      category: ["Tech", "Reviews", "Gadgets"],
      handle: "mariagomez",
      rating: 5,
    },
    {
      id: 3,
      image:
        "https://www.dzoom.org.es/wp-content/uploads/2016/12/tipos-de-plano-cabecera-ok.jpg",
      description:
        "Fitness coach and wellness advocate. Helping you live a healthier life.",
      name: "Carlos Rodriguez",
      location: "Buenos Aires, Argentina",
      followers: 22,
      category: ["Fitness", "Health", "Wellness"],
      handle: "carlosrodriguez",
      rating: 4,
    },
    {
      id: 4,
      image:
        "https://www.dzoom.org.es/wp-content/uploads/2008/11/rakicevic-nenad-507632-810x540.jpg",
      description:
        "Fashion blogger and stylist. Inspiring you with the latest trends.",
      name: "Ana Martinez",
      location: "Paris, France",
      followers: 18,
      category: ["Fashion", "Style", "Beauty"],
      handle: "anamartinez",
      rating: 5,
    },
    {
      id: 5,
      image:
        "https://lh4.googleusercontent.com/4rF8gf7RFa1bJMqJUjVq8kK7HiLzHVCv0eDfpI9NXjFl6wZpN2cH4af8VaWnOzy3wLa8aKXjjpDB1ic8VkQm-AjouhkYjRUz1q2QyOnXuuVCMq6l-Ii9tpGrdImnJDrJmGT4aVr4",
      description:
        "Photographer capturing the beauty of the world, one shot at a time.",
      name: "Luis Fernandez",
      location: "Tokyo, Japan",
      followers: 25,
      category: ["Photography", "Travel", "Nature"],
      handle: "luisfernandez",
      rating: 4,
    },
  ];

  return (
    <div className={style.homeDiv}>
      <div className={style.filtrosDiv}>
        <div className={style.inputFilterDiv}>
          <input type="text" placeholder="Encuentra tu influencer" />
          <ion-icon name="search"></ion-icon>
        </div>
        <ion-icon name="filter"></ion-icon>
      </div>
      <div className={style.containercards}>
        {users.map((user) => (
          <Card key={user.id} {...user} />
        ))}
      </div>
    </div>
  );
};

export default Home;
