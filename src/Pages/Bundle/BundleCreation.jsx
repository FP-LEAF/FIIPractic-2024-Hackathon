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
                        {" "}
                        {/* Use Flexbox to make children inline */}
                        <TextInput
                          className="col-span-3"
                          onChange={(text) => handleChange(index, "name", text)}
                          placeholder="Name"
                        />
                        <Button
                          pill
                          className="col-span-1"
                          onClick={() => handleRemoveEntry(index)}
                        >
                          Remove
                        </Button>
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
                <Button className="mt-10" type="submit">
                  Create Bundle
                </Button>
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
