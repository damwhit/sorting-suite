import chai from 'chai';
const expect = chai.expect;
chai.use(require('chai-sorted'));
import quickSort from '../lib/quickSort';
import arrayGenerator from './array-generator';

describe('quickSort', () => {
    it('should sort a simple numbers array', () => {
    const simpleArray = [3, 0, 1, 4, 2, 5];
    expect(quickSort(simpleArray)).to.be.sorted();
  });

  it('should sort a simple letters array', () => {
    const simpleArray = ['b', 'e', 'z', 'g', 'd', 'x'];
    expect(quickSort(simpleArray)).to.be.sorted();
  });

  it('should sort a large array', () => {
    const largeArray = arrayGenerator(1000);
    expect(quickSort(largeArray)).to.be.sorted();
  });
});

