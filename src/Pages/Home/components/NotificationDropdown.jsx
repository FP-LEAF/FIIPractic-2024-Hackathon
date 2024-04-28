import React from "react";
import { Dropdown } from "flowbite-react";

import NotificationCard from "../../../Components/NotificationCard";

import poza1 from "../../../Components/assets/image1.png";
import user1 from "../../../Components/assets/user1.jpg";

const NotificationsDropdown = () => {
  const notifications = [
    {
      id: 1,
      name: "Example Name 1",
      message: "is about to open a capsule! Come and see!",
      timeRemaining: "59 min",
      avatarSrc: user1,
      capsuleSrc: poza1,
    },
    {
      id: 2,
      name: "Example Name 2",
      message: "opened a new capsule. Check it out!",
      timeRemaining: "1 hour",
      avatarSrc: user1,
      capsuleSrc: poza1,
    },
    {
      id: 3,
      name: "Example Name 3",
      message: "added a new post. Take a look!",
      timeRemaining: "2 hours",
      avatarSrc: user1,
      capsuleSrc: poza1,
    },
    {
      id: 4,
      name: "Example Name 4",
      message: "sent you a message. Read now!",
      timeRemaining: "3 hours",
      avatarSrc: user1,
      capsuleSrc: poza1,
    },
  ];
  return (
    <>
      <div class="inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">
        8
      </div>
      <Dropdown
        inline
        label={<i className="fas fa-bell text-lg leading-lg"></i>}
      >
        <Dropdown.Header>
          <span className="block text-sm">Notifications</span>
        </Dropdown.Header>
        {notifications.map((notification) => (
          <a href="/live-oppening">
            <Dropdown.Item>
              <NotificationCard
                key={notification.id}
                name={notification.name}
                message={notification.message}
                timeRemaining={notification.timeRemaining}
                avatarSrc={user1}
                capsuleSrc={poza1}
              />
            </Dropdown.Item>
          </a>
        ))}
        <Dropdown.Divider />
        <Dropdown.Item>See all notifications</Dropdown.Item>
      </Dropdown>
    </>
  );
};

export default NotificationsDropdown;
