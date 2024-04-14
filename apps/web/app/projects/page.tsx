// Page.tsx

import React from "react";
import { NextPage } from "next";
import Project from "../components/projects/Project";

const Page: NextPage = () => {
  const projectData = {
    ongoingProjects: [
      {
        title: "Ongoing Project 1",
        description: "Description of ongoing project 1",
        image: "https://via.placeholder.com/569x751",
        status: "Ongoing",
      },
      {
        title: "Ongoing Project 2",
        description: "Description of ongoing project 2",
        image: "https://via.placeholder.com/569x751",
        status: "Ongoing",
      },
    ],
    completedProjects: [
      {
        title: "Completed Project 1",
        description: "Description of completed project 1",
        image: "https://via.placeholder.com/569x751",
        status: "Completed",
      },
      {
        title: "Completed Project 2",
        description: "Description of completed project 2",
        image: "https://via.placeholder.com/569x751",
        status: "Completed",
      },
    ],
  };

  return <Project projectData={projectData} />;
};

export default Page;
