import regroup from 'utils/regroup';


describe('regroup', function() {

    it('should group a list of objects by key', function() {
        const seq = [ {v:1}, {v:2}, {v:1} ];
        const expected = { 1:[{v:1}, {v:1}], 2:[{v:2}] };
        const result = seq::regroup(x => x.v);
        result.should.eql(expected);
    });

});
