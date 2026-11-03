type age = string | number;

const userAge = 23;

// litarel union
type role = "User" | "Admin";

const userRole: role = "Admin";

// Object Union
type teacher = { id: string; role: "teacher"; subject: string[] };

type student = { id: string; role: "student"; course: string[] };

type user = teacher | student;

const person: user = {
  id: "123",
  role: "teacher",
  subject: ["Bangla", "English"],
};
