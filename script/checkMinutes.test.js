const checkMinutes = require('./checkMinutes');
describe('check minutes',()=>{
    test('check less than 30 minutes', () => {
        expect(checkMinutes("28")).toBe("twenty eight minutes past");
      });
    
      test('check more than 30 minutes', () => {
        expect(checkMinutes("40")).toBe("twenty minutes to");
      });

      test('check 0 minutes', () => {
        expect(checkMinutes("00")).toBe("o'clock");
      });
});
