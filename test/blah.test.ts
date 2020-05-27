import { reproduce } from '../src';

describe('reproduce', () => {
  it('works', () => {
    expect(
      reproduce(
        {
          type: 'strong',
        },
        args => {
          args.type = 'yo';
        }
      )
    ).toEqual({
      type: 'yo',
    });
  });
  it('works', () => {
    expect(
      reproduce(
        {
          age: 1,
          name: 'you',
        },
        args => {
          args.name = 'ya';
        }
      )
    ).toEqual({
      age: 1,
      name: 'ya',
    });
  });
});
