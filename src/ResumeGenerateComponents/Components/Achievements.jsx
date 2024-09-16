import React, { useState } from "react";
import { MdAdd, MdClose } from "react-icons/md";

let i = 1;

function Achievements({ formData, setFormData, disabled, setDisable }) {
  const [achievement, setAchievement] = useState({ desc: "" });

  const disable = () => {
    setDisable(!disabled);
  };

  const handleChange = (event) => {
    setAchievement({
      ...achievement,
      [event.target.name]: event.target.value,
    });
  };

  const handleRemove = async (id) => {
    await setFormData({
      ...formData,
      achievements: formData.achievements.filter((item) => item.id !== id),
    });
  };

  const handleAdd = async () => {
    if (!disabled) {
      if (achievement.desc.trim() === "") {
        // Show an alert if the description is empty
        window.alert("Achievement description cannot be empty.");
        return;
      }
      
      await setFormData({
        ...formData,
        achievements: [...formData.achievements, { ...achievement, id: i++ }],
      });
      await setAchievement({ desc: "" });
    }
  };

  return (
    <div className="my-4">
      <h3 className="font-semibold text-lg mb-2">ACHIEVEMENTS/CERTIFICATIONS</h3>
      <div
        onClick={disable}
        className="cursor-pointer hover:text-gray-700 mb-4"
      >
        Haven't any achievement or certifications?{" "}
        <span className="text-blue-600">click here</span> to disable/enable
      </div>

      {disabled ? null : (
        formData.achievements.map((item) => (
          <div
            key={item.id}
            className="flex items-center mb-2 p-2 border border-gray-300 rounded-md"
          >
            <div className="flex-1 bg-gray-100 p-2 rounded-md">{item.desc}</div>
            <button
              className="ml-2 bg-red-500 text-white font-bold rounded-full p-1"
              type="button"
              onClick={() => handleRemove(item.id)}
            >
              <MdClose size={20} />
            </button>
          </div>
        ))
      )}

      <div className="flex flex-col md:flex-row items-center border-2 border-gray-300 bg-gray-100 p-4 rounded-lg">
        <input
          className="text-gray-700 rounded-md p-2 border-2 border-gray-300 flex-1 mb-2 md:mb-0 md:mr-2"
          type="text"
          name="desc"
          value={achievement.desc}
          onChange={(event) => handleChange(event)}
          placeholder="Enter achievement or certification..."
        />
        <button
          type="button"
          onClick={handleAdd}
          className="bg-blue-500 text-white font-bold rounded-full p-2"
        >
          <MdAdd size={20} />
        </button>
      </div>
    </div>
  );
}

export default Achievements;
