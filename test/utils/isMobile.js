import isMobile from 'utils/isMobile';


describe('isMobile', function() {

    it('should return true only for mobile user-agents', function() {
        const tests = [
            { expected:true,  ua:'Mozilla/5.0 (iPhone; CPU iPhone OS 8_0_2 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12A366 Safari/600.1.4' },
            { expected:true,  ua:'Mozilla/5.0 (Linux; Android 4.0.4; Galaxy Nexus Build/IMM76B) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.133 Mobile Safari/535.19' },
            { expected:true,  ua:'Mozilla/5.0 (compatible; MSIE 10.0; Windows Phone 8.0; Trident/6.0; IEMobile/10.0; ARM; Touch; NOKIA; Lumia 920)' },
            { expected:false, ua:'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2227.1 Safari/537.36' },
        ];
        tests.forEach(function({ ua, expected }) {
            isMobile(ua).should.equal(expected);
        });
    });

});
