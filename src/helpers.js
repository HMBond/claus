export class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

export class Line {
  constructor(point1, point2) {
    const { x: x1, y: y1 } = point1;
    const { x: x2, y: y2 } = point2;
    this.x1 = x1;
    this.x2 = x2;
    this.y1 = y1;
    this.y2 = y2;
  }
}

// https://stackoverflow.com/questions/9043805/test-if-two-lines-intersect-javascript-function
export function intersects(line1, line2) {
  const { x1: a, y1: b, x2: c, y2: d } = line1;
  const { x1: p, y1: q, x2: r, y2: s } = line2;
  let det, gamma, lambda;
  det = (c - a) * (s - q) - (r - p) * (d - b);
  if (det === 0) {
    return false;
  } else {
    lambda = ((s - q) * (r - a) + (p - r) * (s - b)) / det;
    gamma = ((b - d) * (r - a) + (c - a) * (s - b)) / det;
    return 0 < lambda && lambda < 1 && 0 < gamma && gamma < 1;
  }
}
