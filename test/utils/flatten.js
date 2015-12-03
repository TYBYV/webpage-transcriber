import flatten from 'utils/flatten';


describe('flatten', function() {

    it('should flatten one level', function() {
        const seq = [[1, 2], [3, 4], [5, 6]];
        const expected = [1, 2, 3, 4, 5, 6];
        const result = seq::flatten();
        result.should.eql(expected);
    });

    it('should flatten one level only', function() {
        const seq = [[1, 2], [3, 4], [[5, 6], [7, 8]]];
        const expected = [1, 2, 3, 4, [5, 6], [7, 8]];
        const result = seq::flatten();
        result.should.eql(expected);
    });

    it('should work on mixed results', function() {
        const seq = [1, [2], [3, 4], [5, 6, 7]];
        const expected = [1, 2, 3, 4, 5, 6, 7];
        const result = seq::flatten();
        result.should.eql(expected);
    });

});
