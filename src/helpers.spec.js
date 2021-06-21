import {intersects, Line, Point} from './helpers';
 
const line1 = new Line(new Point(0,0), new Point(10,10));
const line2 = new Line(new Point(5,0), new Point(5,10));
const line3 = new Line(new Point(11,11), new Point(12,12));

describe('intersects should return true if two lines intersect', () => {
    it('tells you wether two lines intersect', () => {
        expect(intersects(line1, line2)).toBeTrue;
    });
    it('tells you wether two lines do not intersect', () => {
        expect(intersects(line1, line3)).toBeTrue;
    });
});