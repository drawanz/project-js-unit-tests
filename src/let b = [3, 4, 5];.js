const circle = (radius) => {
  const PI = 3.14;

  if (!radius || typeof radius !== 'number') { return undefined; }

  return {
    radius,
    area: PI * radius * radius,
    circumference: 2 * PI * radius,
  };
};

console.log(Object.values(circle(3))[1]);