import signOut from './sign-out.js';

function login(req = {}, userClaims = {}) {
    const { email, uid } = userClaims;

    if (typeof email !== 'string' || typeof uid !== 'string') {
        throw new Error('Missing user claims');
    }

    req.user = {
        email: email,
        uid: uid,
    };

    req.signOut = signOut;
}

export default login;