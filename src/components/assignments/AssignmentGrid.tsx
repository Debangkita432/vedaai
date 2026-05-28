"use client";

import { useEffect, useState } from "react";

import AssignmentCard from "./AssignmentCard";

interface Assignment {
  _id: string;
  subject: string;
  topic: string;
  difficulty: string;
  status: string;
}

export default function AssignmentGrid() {

  const [assignments, setAssignments] = useState<Assignment[]>([]);

  useEffect(() => {

    const fetchAssignments = async () => {

      try {

        const response = await fetch(
          "http://127.0.0.1:8000/api/assignments"
        );

        const data = await response.json();

        setAssignments(data.assignments);

      } catch (error) {

        console.log(error);

      }

    };

    fetchAssignments();

  }, []);

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">

      {assignments.map((assignment) => (

        <AssignmentCard
          key={assignment._id}
          subject={assignment.subject}
          topic={assignment.topic}
          difficulty={assignment.difficulty}
          status={assignment.status}
        />

      ))}

    </div>
  );
}