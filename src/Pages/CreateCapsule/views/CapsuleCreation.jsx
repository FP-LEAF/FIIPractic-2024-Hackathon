"use client";

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
} from "flowbite-react";
import Timepicker from "../../../Components/Timepicker.jsx";

import { useState, useRef } from "react";

export function CapsuleCreation() {
  const [isOrganizationSelected, setIsOrganizationSelected] = useState(false);

  const handleRadioChange = (event) => {
    setIsOrganizationSelected(event.target.value === "Organization");
  };

  const [selectedTheme, setSelectedTheme] = useState(null);

  const themes = [
    {
      name: "Love",
      image: "https://source.unsplash.com/random/400x400?love", // Random image from Unsplash API
    },
    {
      name: "Dark",
      image: "https://source.unsplash.com/random/400x400?dark", // Random image from Unsplash API
    },
    {
      name: "Light",
      image: "https://source.unsplash.com/random/400x400?light", // Random image from Unsplash API
    },
  ];

  const handleThemeSelect = (theme) => {
    setSelectedTheme(theme);
    // Perform any additional actions with the selected theme
  };

  return (
    <div className="flex max-w-md flex-col gap-4 mx-auto">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="base" value="Capsule Name" />
        </div>
        <TextInput id="base" type="text" sizing="md" />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="large" value="Capsule Description" />
        </div>
        <TextInput id="large" type="text" sizing="lg" />
      </div>

      <div className="max-w-md">
        <div className="mb-2 block">
          <Label htmlFor="comment" value="Capsule Text Content" />
        </div>
        <Textarea id="comment" placeholder="Type..." required rows={4} />
      </div>

      <div>
        <fieldset className="flex max-w-md flex-col gap-4">
          <legend className="mb-4">Create Capsule as:</legend>
          <div className="flex items-center gap-2">
            <Radio
              id="person"
              name="posting"
              value="Person"
              defaultChecked
              onChange={handleRadioChange}
            />
            <Label htmlFor="Person">Person</Label>
          </div>
          <div className="flex items-center gap-2">
            <Radio
              id="organization"
              name="posting"
              value="Organization"
              onChange={handleRadioChange}
            />
            <Label htmlFor="Organization">Organization</Label>
          </div>
        </fieldset>

        {isOrganizationSelected && (
          <div className="max-w-md mt-4">
            <div className="mb-2 block">
              <Label htmlFor="organisations" value="Select your organization" />
            </div>
            <Select id="organisations" required>
              <option>Centric</option>
              <option>FII Uaic</option>
            </Select>
          </div>
        )}
      </div>

      <div id="fileUpload" className="max-w-md">
        <div className="mb-2 block">
          <Label htmlFor="file" value="Upload file" />
        </div>
        <FileInput
          id="file"
          helperText="Accepted file formats: .jpg, .png, .mp3, .mp4"
        />
      </div>

      <div className="mb-4">
        <Label htmlFor="endDate" value="End date" />
        <Datepicker id="endDate" className="mt-1" />
      </div>
      <div className="mb-4">
        <Label htmlFor="selectTime" value="End date time" />
        <Timepicker id="selectTime" className="mt-1" />
      </div>

      <div className="max-w-md mx-auto mt-8">
        <h2 className="text-2xl font-bold mb-4">Select a Theme</h2>
        <ul className="divide-y divide-gray-200">
          {themes.map((theme, index) => (
            <li
              key={index}
              className={`py-4 flex items-center justify-between hover:bg-gray-100 cursor-pointer ${
                selectedTheme === theme ? "bg-indigo-100" : ""
              }`}
              onClick={() => handleThemeSelect(theme)}
            >
              <div className="flex items-center">
                <img
                  src={theme.image}
                  alt={theme.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <span className="text-lg font-semibold">{theme.name}</span>
              </div>
              {selectedTheme === theme && (
                <span className="text-indigo-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center gap-2">
        <Checkbox id="remember" />
        <Label htmlFor="remember">Terms & Conditions</Label>
      </div>
      <a href="/capsule">
        <Button type="submit">Create Capsule</Button>
      </a>
    </div>
  );
}

export default CapsuleCreation;
