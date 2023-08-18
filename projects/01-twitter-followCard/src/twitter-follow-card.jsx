//
import { PropTypes } from "prop-types";
import { useState } from "react";
//

export function TwitterFollowCard({
  // name,
  children,
  userName,
  formateUserName,
  initialIsFollowing,
  imageUrl,
}) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

  const HandlerClick = () => {
    setIsFollowing(!isFollowing);
  };

  let text = isFollowing ? "Siguiendo" : "Seguir";

  const buttonClassName = isFollowing
    ? "tw-followCard-button is-follower"
    : "tw-followCard-button";

  // use state returns and 2 positions array, first position has the  value of the state, and second position han a FUNCTION that lets us update the state

  //

  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          src={imageUrl}
          alt="profile image"
        />

        <div className="tw-followCard-infoContainer">
          <strong>{children}</strong>

          <span className="tw-followCard-infoName">
            {formateUserName(userName)}
          </span>
        </div>
      </header>

      <aside className="tw-followCard-buttonContainer">
        <button
          className={buttonClassName}
          onClick={HandlerClick}
          // onMouseOver={HoverButton}
        >
          <span className="following"> {text} </span>
          <span className="stop-following">Dejar de seguir</span>
        </button>
      </aside>
    </article>
  );
}
TwitterFollowCard.propTypes = {
  children: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  formateUserName: PropTypes.string.isRequired,
  initialIsFollowing: PropTypes.bool.isRequired,
  imageUrl: PropTypes.string.isRequired,
};
