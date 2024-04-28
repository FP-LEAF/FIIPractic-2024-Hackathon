import React from "react";

const NotificationCard = ({
  name,
  message,
  timeRemaining,
  avatarSrc,
  capsuleSrc,
}) => {
  return (
    <li className="py-3 sm:py-4 size-full">
      <div className="flex space-x-4 rtl:space-x-reverse size-full">
        <div className="flex-shrink-0">
          <img
            className="w-8 h-8 rounded-full"
            src={avatarSrc}
            alt="User avatar"
          />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-gray-900 truncate dark:text-white">
            {name} {message}
          </p>
          <p className="text-sm text-gray-500 truncate dark:text-gray-400">
            Time remaining <b className="pulsating-text">{timeRemaining}</b>
          </p>
        </div>
        <div className="flex-shrink-0">
          <img
            className="w-8 h-8 rounded-full"
            src={capsuleSrc}
            alt="User avatar"
          />
        </div>
      </div>
    </li>
  );
};

export default NotificationCard;
