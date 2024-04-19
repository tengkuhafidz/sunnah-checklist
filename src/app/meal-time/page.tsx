"use client";

import { useState } from "react";
import ListItem from "./components/ListItem";
import { sunnahList } from "./data";

export default function Tracker() {
  const [checkedItems, setCheckedItems] = useState({});
  const handleChange = (event: any) => {
    const { name, checked } = event.target;
    setCheckedItems({ ...checkedItems, [name]: checked });
  };
  const countCheckedItems = () => {
    return Object.values(checkedItems).filter((isChecked) => isChecked).length;
  };
  const renderSunnahList = () => {
    return sunnahList.map((listItem) => (
      <ListItem
        id={listItem.id}
        label={listItem.label}
        key={listItem.id}
        handleChange={handleChange}
      />
    ));
  };

  return (
    <div className="bg-gray-200">
      <div className="py-8 px-4">
        <h2 className="text-2xl font-semibold">🍔 Meal Time Sunnah</h2>
        <span className="bg-gray-800 text-gray-200 text-sm py-1 px-2 font-semibold rounded-lg">
          🌟 100 Sunnah Points
        </span>
        <div className="mt-4 text-gray-600 text-sm">
          <p>✅ 10 Sessions Tracked</p>
          <p>🔥 3 Days Streak</p>
        </div>
      </div>
      <main className="bg-white rounded-t-2xl py-6 px-4 ">
        <p className="py-1">
          Current Session: {countCheckedItems()}/{sunnahList.length} 🌟
        </p>
        {renderSunnahList()}
        <button className="bg-gray-900 rounded-xl text-lg text-white w-full py-4 my-4">
          Complete Session
        </button>
      </main>
    </div>
  );
}
