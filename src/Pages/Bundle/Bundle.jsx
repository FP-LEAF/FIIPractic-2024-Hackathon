import { Button, Timeline } from "flowbite-react";
import { HiArrowNarrowRight } from "react-icons/hi";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Footer from "../Home/components/Footer.jsx";
import Navbar from "../Home/components/Navbar.jsx";
import Timepicker from "../../Components/Timepicker.jsx";

import {
  Label,
  TextInput,
  Textarea,
  Select,
  Radio,
  FileInput,
  Checkbox,
  Datepicker,
  Card,
  //   TimePicker,
} from "flowbite-react";

const Bundle = () => {
  const bundleName = "Liceu";
  const mockTimelineData = [
    {
      id: 1,
      date: "February 2022",
      title: "Clasa 9",
      state: "completed",
      buttonLabel: "You have added a capsule for this milestone",
    },
    {
      id: 2,
      date: "March 2022",
      title: "Clasa 10",
      state: "ready",
      buttonLabel: "Create Time Capsule",
    },
    {
      id: 3,
      date: "April 2022",
      title: "Clasa 11",
      state: "disabled",
      buttonLabel: "Create Time Capsule",
    },
    {
      id: 4,
      date: "May 2022",
      title: "Clasa 12",
      state: "disabled",
      buttonLabel: "Create Time Capsule",
    },
  ];

  // Inside your component
  const [timelineData, setTimelineData] = useState(mockTimelineData); // State for timeline data
  //   const history = useHistory();
  const navigate = useNavigate();
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Navbar className="bg-transparent" />

        {/* Hero section */}
        <div className="relative h-96 overflow-hidden">
          <img
            src="https://w.forfun.com/fetch/78/782e9a735d4b97fdce4a9e830cecb6e8.jpeg"
            alt="Hero background"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-10">
            <h1 className="text-4xl font-bold">{bundleName}</h1>
          </div>
        </div>

        <main className="mt-20 mb-20 flex-1 flex items-center justify-center">
          <Timeline>
            {/* Map over the timelineData array to render Timeline.Item components */}
            {timelineData.map((item) => (
              <Timeline.Item key={item.id}>
                <Timeline.Point />
                <Timeline.Content>
                  <Card
                    href="#"
                    className={`max-w ${
                      item.state == "completed"
                        ? "bg-teal-50"
                        : item.state == "ready"
                        ? "bg-emerald-100"
                        : "bg-gray-100"
                    }`}
                  >
                    <Timeline.Time>{item.date}</Timeline.Time>
                    <Timeline.Title>{item.title}</Timeline.Title>
                    <Timeline.Body></Timeline.Body>
                    <Button
                      disabled={item.state != "ready"}
                      color={item.disabled ? "gray" : "gray"}
                      onClick={() => {
                        if (item.state == "ready") navigate("/create-capsule");
                      }}
                    >
                      {item.state == "completed"
                        ? "You have added a capsule for this milestone"
                        : item.state == "ready"
                        ? "Create Time Capsule"
                        : `This capsule enables on ${item.date}`}
                      {!item.disabled && (
                        <HiArrowNarrowRight className="ml-2 h-3 w-3" />
                      )}
                    </Button>
                  </Card>
                </Timeline.Content>
              </Timeline.Item>
            ))}
          </Timeline>
        </main>
        <Footer className="mt-20" />
      </div>
    </>
  );
};

export default Bundle;
