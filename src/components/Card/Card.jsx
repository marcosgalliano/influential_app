import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from "./Card.module.css";
import { useSelector, useDispatch } from "react-redux";
import { postProductsToEdit } from "../../redux/actions";
import { useEffect } from "react";

const Card = (props) => {
  const {
    id,
    image,
    description,
    name,
    location,
    followers,
    category,
    handle,
    rating,
  } = props;

  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className={style.card}>
      <div className={style.imageContainer}>
        <Link to={`/Detail/${id}`}>
          <img src={image} alt={`${name}`} className={style.profileImage} />
        </Link>
        <div
          onClick={handleLike}
          className={liked ? style.likedDiv : style.notLiked}
        >
          <ion-icon name="heart"></ion-icon>
        </div>
      </div>
      <div className={style.cardContent}>
        <div className={style.nameAndStars}>
          <div className={style.nameAndPlace}>
            <h3>@{name}</h3>
            <h4>{location}</h4>
          </div>
          <div className={style.rating}>{"★".repeat(rating)}</div>
        </div>
        <h4 className={style.h4Description}>{description}</h4>
        <div className={style.divFollowersAndCategories}>
          <div className={style.followersDiv}>
            <div className={style.socialMedia}>
              <ion-icon name="logo-instagram"></ion-icon> 22K
            </div>
            <div className={style.socialMedia}>
              <ion-icon name="logo-tiktok"></ion-icon> 104K
            </div>
          </div>
          <div className={style.categoriesDiv}>
            {category.map((cat) => {
              return <h5>{cat}</h5>;
            })}
          </div>
        </div>
        <div className={style.buttonContDiv}>
          <button>Contactar</button>
        </div>
      </div>
    </div>
  );
};

export default Card;

{
  /* <div className={style.rating}>{"★".repeat(rating)}</div> */
}
