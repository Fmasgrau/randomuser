import React from "react";
import "./card.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserEdit } from "@fortawesome/free-solid-svg-icons";

interface ICardProps {
  name: string;
  email: string;
  telephone: string;
  address: string;
  onClick: () => void;
}

export default function Card({
  name,
  email,
  telephone,
  address,
  onClick,
}: ICardProps): JSX.Element {
  return (
    <>
      <div className="card__container">
        <div className="card__header">
          <div
            className="card__edit"
            role="button"
            aria-label="button"
            onClick={onClick}
          >
            <FontAwesomeIcon icon={faUserEdit} className="card__icon" />
          </div>
          <p>{name}</p>
          <img src="https://randomuser.me/api/portraits/men/75.jpg" alt="men" />
        </div>
        <div className="card__body">
          <div>
            <p>{email}</p>
            <p>{telephone}</p>
            <p>{address}</p>
          </div>
        </div>
      </div>
    </>
  );
}
