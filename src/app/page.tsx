"use client";

import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [education, setEducation] = useState("");
  const [experience, setExperience] = useState("");

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="bg-blue-600 text-white p-4 shadow">
        <h1 className="text-2xl font-bold">PathPilot</h1>
      </header>

      {/* Main content area */}
      <main className="flex flex-1">
        {/* Left side (form section) */}
        <section className="w-1/2 p-6 bg-gray-100 border-r border-gray-300 overflow-y-auto">
          <h2 className="text-xl font-semibold mb-6">Resume Form</h2>

          {/* Personal Info */}
          <div className="mb-8">
            <h3 className="text-lg font-medium mb-2">Personal Information</h3>
            <div className="space-y-4">
              <div>
                <label className="block mb-1 font-medium">Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border p-2 rounded"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Job Title</label>
                <input
                  type="text"
                  value={jobTitle}
                  onChange={(e) => setJobTitle(e.target.value)}
                  className="w-full border p-2 rounded"
                  placeholder="Enter your job title"
                />
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="mb-8">
            <h3 className="text-lg font-medium mb-2">Education</h3>
            <input
              type="text"
              value={education}
              onChange={(e) => setEducation(e.target.value)}
              className="w-full border p-2 rounded"
              placeholder="Enter your education"
            />
          </div>

          {/* Experience */}
          <div>
            <h3 className="text-lg font-medium mb-2">Experience</h3>
            <textarea
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              className="w-full border p-2 rounded h-28"
              placeholder="Enter your work experience"
            />
          </div>
        </section>

        {/* Right side (preview section) */}
        <section className="w-1/2 p-8 bg-white overflow-y-auto">
          {/* Personal Info */}
          <div className="mb-8 border-b pb-4">
            <p className="text-gray-900 text-3xl font-bold">{name || "Your Name"}</p>
            <p className="text-gray-600 text-xl">{jobTitle || "Your Job Title"}</p>
          </div>

          {/* Education */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-blue-600 mb-2">Education</h3>
            <p className="text-gray-700">{education || "Your education details"}</p>
          </div>

          {/* Experience */}
          <div>
            <h3 className="text-lg font-semibold text-blue-600 mb-2">Experience</h3>
            <p className="text-gray-700 whitespace-pre-line">
              {experience || "Your work experience details"}
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}