import React, { useContext } from "react";
import { DarkModeContext } from "../../../Components/DarkMode/DarkModeProvider";
import PropTypes from "prop-types";

function FeedCapsuleCard(props) {
  const { darkMode } = useContext(DarkModeContext);

  const {
    category,
    date,
    title,
    imageUrl,
    altText,
    authorAvatarUrl,
    authorName,
    authorRole,
    description
  } = props;

  return (
    <div
      className={` ${darkMode ? "bg-gray-800" : "bg-white"
        } flex justify-center items-center`}
    >
      <div style={{ maxWidth: "400px" }} className="w-full">
        <div className="p-8 bg-white border rounded shadow-sm text-center">
          <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
            <a
              href="/"
              className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              aria-label="Category"
            >
              {category}
            </a>{" "}
            <span className="text-gray-600">— {date}</span>
          </p>
          <a
            href="/"
            aria-label="Article"
            title={title}
            className="inline-block mb-3 text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
          >
            {title}
          </a>
          {/* Display description here */}
          {description && <p className="text-gray-500">{description}
          </p>}
          <br></br>
          <img
            src={imageUrl}
            alt={altText}
            className="max-w-full max-h-full mx-auto"
            style={{ width: "50%" }}
          />

          <p>{props.children}</p>

          <div className="flex flex-col items-center my-7">
            <a href="/" aria-label="Author" title="Author" className="mb-1">
              <img
                src={authorAvatarUrl}
                alt="avatar"
                className="object-cover w-10 h-10 rounded-full shadow-sm"
              />
            </a>
            <a
              href="/"
              aria-label="Author"
              title="Author"
              className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              {authorName}
            </a>
            <p className="text-sm font-medium leading-4 text-gray-600">
              {authorRole}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

FeedCapsuleCard.propTypes = {
  category: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  authorAvatarUrl: PropTypes.string.isRequired,
  authorName: PropTypes.string.isRequired,
  authorRole: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default FeedCapsuleCard;
