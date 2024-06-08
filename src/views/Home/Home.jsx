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
        "https://img.freepik.com/foto-gratis/joven-confiado_1098-20868.jpg",
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
        "https://us.123rf.com/450wm/lopolo/lopolo2011/lopolo201105637/158379434-retrato-de-hombre-europeo-aislado-sobre-fondo-blanco.jpg?ver=6",
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
        "https://us.123rf.com/450wm/sevalv/sevalv1806/sevalv180600296/103250851-retrato-de-primer-plano-de-un-tipo-europeo-amable-y-amable-que-sonr%C3%ADe-ampliamente-como-si-se.jpg?ver=6",
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
        "https://us.123rf.com/450wm/sevalv/sevalv1803/sevalv180300533/97289773-retrato-de-hombre-gracioso-guapo-complacido-con-los-pu%C3%B1os-cerrados-en-la-boca-sonriendo-e.jpg?ver=6",
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
