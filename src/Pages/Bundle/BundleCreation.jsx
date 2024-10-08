import React, { useState } from "react";
import {
  Label,
  TextInput,
  Textarea,
  Select,
  Radio,
  FileInput,
  Checkbox,
  Button,
  Datepicker,
  Card,
  //   TimePicker,
} from "flowbite-react";
import Footer from "../Home/components/Footer.jsx";
import Navbar from "../Home/components/Navbar.jsx";
import Timepicker from "../../Components/Timepicker.jsx";

const BundleCreation = () => {
  const [entries, setEntries] = useState([{ name: "", age: "" }]);

  const handleChange = (index, key, value) => {
    const newEntries = [...entries];
    newEntries[index][key] = value;
    setEntries(newEntries);
  };

  const handleAddEntry = () => {
    setEntries([...entries, { name: "", age: "" }]);
  };

  const handleRemoveEntry = (index) => {
    const newEntries = [...entries];
    newEntries.splice(index, 1);
    setEntries(newEntries);
  };

  const [selectedTime, setSelectedTime] = useState("");

  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value);
  };

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Navbar className="bg-transparent" />
        <div className="relative h-96 overflow-hidden">
          <img
            src="https://w.forfun.com/fetch/78/782e9a735d4b97fdce4a9e830cecb6e8.jpeg"
            alt="Hero background"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-10">
            <h1 className="text-4xl font-bold">Bundle creation</h1>
          </div>
        </div>
        <main className="mt-20 mb-20 flex-1 flex items-center justify-center">
          <div className="w-full sm:w-auto md:w-1/3 lg:w-1/3 xl:w-1/3">
            <div className="mb-4">
              <Label htmlFor="base" value="Bundle Name" />
              <TextInput id="base" type="text" sizing="md" className="mt-1" />
            </div>
            <div className="mb-4">
              <Label htmlFor="endDate" value="End date" />
              <Datepicker id="endDate" className="mt-1" />
            </div>
            <div className="mb-4">
              <Label htmlFor="selectTime" value="Select time" />
              <Timepicker id="selectTime" className="mt-1" />
            </div>
            <div className="mb-4">
              <Label htmlFor="base" value="Milestones" />
              <div id="lsit">
                <Card href="#" className="max-w">
                  {entries.map((entry, index) => (
                    <div key={index}>
                      <div className="grid grid-cols-4 gap-4">
                        {/* Row 1: TextInput (3 columns) and Button (1 column) */}
                        <div className="col-span-3 flex items-center">
                          {" "}
                          {/* Flexbox to make TextInput and Button inline */}
                          <TextInput
                            onChange={(text) =>
                              handleChange(index, "name", text)
                            }
                            placeholder="Name"
                          />
                        </div>
                        <div className="col-span-1">
                          <Button pill onClick={() => handleRemoveEntry(index)}>
                            Remove
                          </Button>
                        </div>

                        {/* Row 2: Datepicker and Timepicker */}
                        <div className="col-span-2">
                          <div className="mb-4">
                            <Label htmlFor="endDate" value="End date" />
                            <Datepicker id="endDate" className="mt-1" />
                          </div>
                        </div>
                        <div className="col-span-2">
                          <div className="mb-4">
                            <Label htmlFor="selectTime" value="Select time" />
                            <Timepicker id="selectTime" className="mt-1" />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </Card>

                <Button
                  className="mt-5"
                  color="blue"
                  pill
                  onClick={handleAddEntry}
                >
                  Add milestone
                </Button>
                <a href="/bundle-view">
                  <Button className="mt-10" type="submit">
                    Create Bundle
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </main>
        <Footer className="mt-20" />
      </div>
    </>
  );
};

export default BundleCreation;
