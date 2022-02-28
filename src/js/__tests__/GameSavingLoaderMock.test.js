import GameSavingLoader from '../components/GameSavingLoaderAsync';
import read from '../components/reader';

jest.mock('../components/reader');

describe('GameSavingLoader', () => {
  test('should return a Error', async () => {
    read.mockRejectedValue(new Error('error from test'));
    expect(GameSavingLoader.load()).rejects.toThrow('error from test');
  });
});
