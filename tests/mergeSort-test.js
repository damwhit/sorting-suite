import chai from 'chai';
const expect = chai.expect;
chai.use(require('chai-sorted'));
import mergeSort from '../lib/mergeSort';
import arrayGenerator from './array-generator';

describe('mergeSort', () => {
  it('should sort a simple numbers array', () => {
    const simpleArray = [3, 0, 1, 4, 2, 5];
    const result = mergeSort(simpleArray);
    expect(result).to.be.sorted();
    expect(result.length).to.equal(simpleArray.length);
  });

  it('should sort a simple letters array', () => {
    const simpleArray = ['b', 'e', 'z', 'g', 'd', 'x'];
    const result = mergeSort(simpleArray);
    expect(result).to.be.sorted();
    expect(result.length).to.equal(simpleArray.length);
  });

  it('should sort a large array', () => {
    const largeArray = arrayGenerator(1000);
    const result = mergeSort(largeArray);
    expect(result).to.be.sorted();
    expect(result.length).to.equal(largeArray.length);
  });
});

