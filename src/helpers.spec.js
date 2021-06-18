import {intersects, Line, Point} from './helpers';
 
const line1 = new Line(new Point(0,0), new Point(10,10));
const line2 = new Line(new Point(5,0), new Point(5,10));

describe('intersects should return true if two lines intersect', () => {
    it('Compute the square of a number', () => {
        expect(intersects(line1, line2)).toBeTrue;
    });
});