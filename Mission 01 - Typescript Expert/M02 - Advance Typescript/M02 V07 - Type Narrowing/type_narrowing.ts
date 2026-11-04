// Type Guard

const print = (value: string | number) => {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else {
    return value;
  }
};

// Truthiness - If condition it true then the work done
