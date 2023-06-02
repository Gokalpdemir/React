import React from "react";

export const Course = ({ image, title, description }) => {
  return (
    <div>
      <div className="card">
        <div class="card-image">
          <figure className="image is-4by3">
            <img src={image} />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{title}</p>
            </div>
          </div>

          <div class="content">{description}</div>
        </div>
      </div>
    </div>
  );
};
