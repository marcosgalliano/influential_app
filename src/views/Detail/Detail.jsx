import style from "./Detail.module.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import backImage from "../../assets/background.png";
import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import GroupsIcon from "@mui/icons-material/Groups";
import CollectionsIcon from "@mui/icons-material/Collections";
import QueryStatsIcon from "@mui/icons-material/QueryStats";

import galeria from "../../assets/galeria.png";
import estadisticas from "../../assets/estadisticas.png";
import opiniones from "../../assets/opiniones.png";
import colabs from "../../assets/colabs.png";

const Detail = () => {
  const params = useParams();
  const id = parseInt(params.id);
  const [user, setUser] = useState(null);
  const [value, setValue] = useState("Calificaciones");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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

  const foundUser = users.find((us) => us.id === id);

  useEffect(() => {
    setUser(foundUser);
  }, [foundUser]);

  const getImageSrc = () => {
    switch (value) {
      case "Calificaciones":
        return opiniones;
      case "Colaboraciones":
        return colabs;
      case "Galería":
        return galeria;
      case "Estadísticas":
        return estadisticas;
      default:
        return "";
    }
  };

  return user ? (
    <div className={style.DetailDivContainer}>
      <div className={style.headerDivDet}>
        <div className={style.backgroundAndPorfile}>
          <img src={backImage} alt="background" />
          <img src={user.image} alt="profile" />
        </div>
        <div className={style.contactAndName}>
          <h5>@{user.handle}</h5>
          <button>Contactar</button>
        </div>
        <div className={style.divDescripcionAndInfo}>
          <h2>{user.name}</h2>
          <h6>{user.description}</h6>
          <div className={style.followersDiv}>
            <div className={style.socialMedia}>
              <ion-icon name="compass-outline"></ion-icon> {user.location}
            </div>
            <div className={style.socialMedia}>
              <ion-icon name="logo-instagram"></ion-icon> 22K
            </div>
            <div className={style.socialMedia}>
              <ion-icon name="logo-tiktok"></ion-icon> 104K
            </div>
          </div>
          <div className={style.rating}>{"★".repeat(user.rating)}</div>
        </div>
      </div>
      <div className={style.navBarDet}>
        <BottomNavigation value={value} onChange={handleChange}>
          <BottomNavigationAction
            label="Calificaciones"
            value="Calificaciones"
            icon={<StarBorderIcon />}
          />
          <BottomNavigationAction
            label="Colaboraciones"
            value="Colaboraciones"
            icon={<GroupsIcon />}
          />
          <BottomNavigationAction
            label="Galería"
            value="Galería"
            icon={<CollectionsIcon />}
          />
          <BottomNavigationAction
            label="Estadísticas"
            value="Estadísticas"
            icon={<QueryStatsIcon />}
          />
        </BottomNavigation>
      </div>
      <div className={style.divTestDisplays}>
        <img src={getImageSrc()} alt={value} />
      </div>
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default Detail;
