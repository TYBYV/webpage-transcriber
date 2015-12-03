import flatMap from 'utils/flatMap';


describe('flatMap', function() {

    it('should map over a sequence', function() {
        const seq = [1, 2, 3];
        const expected = [2, 4, 6];
        const result = seq::flatMap(x => x * 2);
        result.should.eql(expected);
    });

    it('should flatten one level', function() {
        const seq = ['abc', 'de', 'f'];
        const expected = ['a', 'b', 'c', 'd', 'e', 'f'];
        const result = seq::flatMap(x => x.split(''));
        result.should.eql(expected);
    });

    it('should work on mixed results', function() {
        const seq = ['list', 'single', 'list'];
        const expected = [1, 2, 3, 1, 1, 2, 3];
        const result = seq::flatMap(x => x === 'list'? [1, 2, 3] : 1);
        result.should.eql(expected);
    });

});
