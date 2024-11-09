interface Circle {
  shape: "circle";
  radius: number;
}

interface Rectangle {
  shape: "rectangle";
  width: number;
  height: number;
}

type Shape = Circle | Rectangle;

const calculateShapeArea = (shape: Shape): number => {
  if (shape.shape === "circle") {
    const area: number = Math.PI * shape.radius * shape.radius;
    return parseFloat(area.toFixed(2));
  } else if (shape.shape == "rectangle") {
    return shape.width * shape.height;
  }

  return 0;
};

const circleArea :number = calculateShapeArea({ shape: "circle", radius: 5 });
console.log(circleArea);

const rectangleArea : number = calculateShapeArea({
  shape: "rectangle",
  width: 4,
  height: 6,
});
console.log(rectangleArea);
