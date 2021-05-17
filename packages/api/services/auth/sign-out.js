function signOut(req = {}) {
    req.user = null;
    req.signOut = function noop() { };
}

export default signOut;

