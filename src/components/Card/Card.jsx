import styles from "./card.module.css";
import { useEffect, useState } from "react";

function Card({
  img,
  name,
  id,
  setClickedCards,
  index,
  setCardIndex,
  prevIndex,
  setPrevIndex,
  solvedMemories,
  flippedCards,
}) {
  const [flip, setFlip] = useState(false);
  useEffect(() => {
    setFlip(flippedCards[index]);
    // eslint-disable-next-line
  }, [flippedCards]);

  function handleClick() {
    if (prevIndex !== index) {
      if (!solvedMemories.includes(index)) {
        setFlip((prev) => !prev);
        setClickedCards((prev) => [...prev, id]);
        setCardIndex((prev) => [...prev, index]);
        setPrevIndex(index);
      } else {
        console.log("contained!");
      }
    }
  }
  return (
    <div className={styles.card} onClick={handleClick}>
      <div
        className={
          flip
            ? `${styles.innerCard} ${styles.isFlipped}`
            : `${styles.innerCard}`
        }
      >
        <div className={`${styles.cardFace} ${styles.cardFaceFront}`}>
          Front
        </div>
        <div className={`${styles.cardFace} ${styles.cardFaceBack}`}>
          <img className={styles.cardImg} src={img} alt={name} />
        </div>
      </div>
    </div>
  );
}
export default Card;
