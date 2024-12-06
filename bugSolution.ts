function calculateArea(shape: string, width: number, height?: number): number {
  if (shape !== "rectangle" && shape !== "triangle") {
    throw new Error("Invalid shape: " + shape);
  }
  switch (shape) {
    case "rectangle":
      return width * height!; //height! is used because height is optional and has to be checked if it is defined
    case "triangle":
      return 0.5 * width * height!; //height! is used because height is optional and has to be checked if it is defined
    default:
      throw new Error("Invalid shape");
  }
}

console.log(calculateArea("rectangle", 10, 5)); // 50
console.log(calculateArea("triangle", 10, 5)); //25
console.log(calculateArea("circle", 10)); // throws error because it is not a valid shape
console.log(calculateArea("rectangle",10)); // throws error because height is missing