import React from 'react';
import CloseIcon from '../../Assets/CloseIcon';

// Modal Card
// When user select an item pop up the modal with recipes on it

const ModalCard = ({ recipeInfo, modalDom, cardDom, onHideModal }) => {
  const { image, label, ingredientLines } = recipeInfo;

  return (
    <div className="modal" ref={modalDom} onClick={onHideModal}>
      <div className="modal-card" ref={cardDom}>
        <div className="close-box" onClick={onHideModal}>
          <CloseIcon />
        </div>
        <div
          className="recipe-img"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div className="modal-content">
          <h1>{label}</h1>
          <ul className="modal-menu">
            {ingredientLines &&
              ingredientLines.map((item) => {
                return <li key={Math.random()}>- {item}</li>;
              })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ModalCard;
