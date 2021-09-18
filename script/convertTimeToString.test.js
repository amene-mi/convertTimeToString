const convertTimeToString = require('./convertTimeToString');

describe('convert Time to String',()=>{
  test('test 1', () => {
      expect(convertTimeToString("13:00")).toBe("one o'clock");
    });
    test('test 2', () => {
      expect(convertTimeToString("00:00")).toBe("midnight");
    });
  test('test 3', () => {
      expect(convertTimeToString("13:29")).toBe("twenty nine minutes past one");
    });
  test('test 4', () => {
      expect(convertTimeToString("13:30")).toBe("half past one");
    });
  test('test 5', () => {
      expect(convertTimeToString("13:31")).toBe("twenty nine minutes to two");
    });
    test('test 6', () => {
      expect(convertTimeToString("13:45")).toBe("quarter to two");
    });
    test('test 7', () => {
      expect(convertTimeToString("13:15")).toBe("quarter past one");
    });
});