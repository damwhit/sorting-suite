import chai from 'chai';
const expect = chai.expect;
chai.use(require('chai-sorted'));
import bubbleSort from '../lib/bubbleSort';
import arrayGenerator from './array-generator';

describe('bubbleSort', () => {
  it('should sort a simple numbers array', () => {
    const simpleArray = [3, 0, 1, 4, 2, 5];
    expect(bubbleSort(simpleArray)).to.be.sorted();
  });

  it('should sort a simple letters array', () => {
    const simpleArray = ['b', 'e', 'z', 'g', 'd', 'x'];
    expect(bubbleSort(simpleArray)).to.be.sorted();
  });

  it('should sort a large array', () => {
    const largeArray = arrayGenerator(1000);
    expect(bubbleSort(largeArray)).to.be.sorted();
  });
});

