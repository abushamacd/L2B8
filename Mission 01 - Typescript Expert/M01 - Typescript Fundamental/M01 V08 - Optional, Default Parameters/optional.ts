const fullName = (firstName: string, lastName?: string): string => {
  return firstName + " " + lastName;
};

console.log(fullName("Shama")); // lastName is optional
