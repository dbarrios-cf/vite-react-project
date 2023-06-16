import { useState } from 'react';
import { AiFillHeart, AiFillLinkedin, AiOutlineHeart } from 'react-icons/ai';
import styles from './Like.module.css';

interface LikeProps {
  onLike: () => void;
  onDislike: () => void;
}

function Like({ onLike, onDislike }: LikeProps) {
  const [isLiked, setLiked] = useState(false);

  const toggleLikedState = () => {
    isLiked ? onDislike() : onLike();
    setLiked(!isLiked);
  };

  if (isLiked) {
    return (
      <AiFillHeart
        className={[styles.like, styles.active].join(' ')}
        onClick={toggleLikedState}
      />
    );
  }

  return <AiOutlineHeart className={styles.like} onClick={toggleLikedState} />;
}

export default Like;
