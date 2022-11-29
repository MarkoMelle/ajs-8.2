import ErrorRepository from '../ErrorRepository';

test('should translate the code into text', () => {
  const received = new ErrorRepository();

  const expected = 'Not Found';

  expect(received.translate(404)).toBe(expected);
});

test('should return an unknown Error', () => {
  const received = new ErrorRepository();

  const expected = 'Unknown error';

  expect(received.translate(405)).toBe(expected);
});
