import React, { useState, useEffect, useRef } from "react";
import "flowbite";

const Chat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const toggleChat = () => setIsOpen(!isOpen);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const messagesEndRef = useRef(null); // Add this line to create a ref for the messages end
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]); // Add messages as a dependency array so it will auto-scroll every time messages update

  const sendMessage = (sender, messageText) => {
    const trimmedText = messageText.trim();
    if (trimmedText) {
      const newMessage = {
        text: trimmedText,
        sender: sender,
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        status: "Delivered",
      };
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter" && inputValue.trim()) {
      sendMessage("User", inputValue);
      setInputValue("");

      // Give some time to simulate bot response
      setTimeout(() => {
        const botMessage = "Here's a simulated response!";
        sendMessage("Bot", botMessage);
      }, 1000);
    }
  };

  useEffect(() => {
    console.log(messages);
  }, [messages]);

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <button
        onClick={toggleChat}
        className="px-4 py-2 bg-pink-500 text-white font-medium rounded-lg shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        Chat with A.I
      </button>
      {isOpen && (
        <div className="mt-2 w-96 bg-white rounded-lg shadow-lg p-4">
          <div className="overflow-y-auto h-[32rem] mb-4 space-y-6">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex items-end ${
                  msg.sender === "User" ? "justify-end" : "justify-start"
                }`}
              >
                {msg.sender !== "User" && (
                  <img
                    className="w-8 h-8 rounded-full"
                    src="https://cuad.ask.fm/assets2/070/462/562/304/normal/image1.jpg"
                    alt="Bot image"
                  />
                )}
                <div
                  className={`flex flex-col w-full max-w-[320px] leading-1.5 p-4 ${
                    msg.sender === "User"
                      ? "bg-white-500 rounded-br-none"
                      : "bg-gray-100 rounded-bl-none"
                  } border border-gray-200 dark:bg-gray-700`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">
                      {msg.sender === "User" ? "You" : "Bot"}
                    </span>
                    <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                      {msg.timestamp}
                    </span>
                  </div>
                  <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">
                    {msg.text}
                  </p>
                  {msg.sender === "User" && (
                    <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                      Delivered
                    </span>
                  )}
                </div>
                {msg.sender === "User" && (
                  <img
                    className="w-8 h-8 rounded-full"
                    src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                    alt="User image"
                  />
                )}
                <div ref={messagesEndRef} />{" "}
                {/* Add this line. This is a dummy element at the end of your messages */}
              </div>
            ))}
          </div>
          <div className="flex items-center">
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
              className="flex-grow p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Type a message..."
            />
            <button
              onClick={() => sendMessage("User")}
              className="px-4 py-2 bg-green-500 text-white rounded-r-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chat;
