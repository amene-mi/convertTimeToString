const checkHours = require('./checkHours');
describe('check hour',()=>{
    test('check less than 12 hours', () => {
        expect(checkHours(11)).toBe("eleven");
      });
    
      test('check more than 12 hours', () => {
        expect(checkHours(13)).toBe("one");
      });

      test('check 00 hours', () => {
        expect(checkHours(0)).toBe("midnight");
      });
});
