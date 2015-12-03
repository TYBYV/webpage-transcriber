const matcher = /(iphone|android|windows phone)/i;


/**
 * Detects if the runtime is running on a mobile device.
 *
 * @param  {String}  [userAgent=navigator.userAgent]
 * @return {Boolean}
 */
export default function isMobile(ua=navigator.userAgent) {
    return matcher.test(ua);
}
