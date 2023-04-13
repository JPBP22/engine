import React, { useState } from 'react';
import SteamyBubble from './SteamyBubble';
import RecommendationForm from './RecommendationForm';
import styles from './SteamyContainer.module.css';

const SteamyContainer = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleBubbleClick = () => {
    setIsFormVisible(!isFormVisible);
  };

  return (
    <div className={styles.chatBotContainer}>
      <SteamyBubble onClick={handleBubbleClick} />
      {isFormVisible && (
        <div className={styles.formContainer}>
          <h1>Recommender</h1>
          <RecommendationForm />
        </div>
      )}
    </div>
  );
};

export default SteamyContainer;
