import chai from 'chai';
const expect = chai.expect;
chai.use(require('chai-sorted'));
import insertionSort from '../lib/insertionSort';
import arrayGenerator from './array-generator';

describe('insertionSort', () => {
  it('should sort a simple numbers array', () => {
    const simpleArray = [3, 0, 1, 4, 2, 5];
    expect(insertionSort(simpleArray)).to.be.sorted();
  });

  it('should sort a simple letters array', () => {
    const simpleArray = ['b', 'e', 'z', 'g', 'd', 'x'];
    expect(insertionSort(simpleArray)).to.be.sorted();
  });

  it('should sort a large array', () => {
    const largeArray = arrayGenerator(1000);
    expect(insertionSort(largeArray)).to.be.sorted();
  });
});

