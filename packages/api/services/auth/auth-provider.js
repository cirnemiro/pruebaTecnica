// const admin = require("firebase-admin")
import admin from 'firebase-admin';
import dotenv from 'dotenv';
dotenv.config();
const key = "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCz7JQp4f1kSLiT\nMRaJrqdxykYdH7cyGZAhAX4IzOqRvYvZ4vzK8j5oVUT7pOe2pXb4rql3YGjmMRNC\nqp2iMHXpROShxcxWO3RTw7yq2y2HeMPoFXxf17wx/RwmrwyPmUJGgol8OFw90ZNX\nKP91j3i0WZAPyzK/mDeSPdhckYNhLanOJedOBVJfaQZs893uSvCbwU/98llhtKl5\n1J31jsFyzAf4BtxgruJTPAIYz8bU7qyLF06aVno08BeQfLrTXdhF4ILgUuqDyDh1\nsJdz6GJLBj/6BR3BEEDe9BkQFosqJEbJHHJvPZGeEK6TjkHFHfHWBMwbhlbw7jJp\nD/cVyfRlAgMBAAECggEACsyIygi/2iyJM4BvP11FvI0s7yOPrcid/3Uk+Oc/rvam\n9bFrhczLVRzFEqt/otVEkkF9d2ZIdYR9iPNPmcP518HkTRdfn89auIpXgRO9pFNp\nwrzDZcc/iuqLrYC1KstCkJPWJ6gEVUuGYeVai9ZMItr7TA9goOJEd5kRquCq94KZ\nyOH3AVVNB2xilRdnVKVXfOXG6h5L7NjubD8WuaKycOgeErKynQwRwL/bw+HPhZ2h\nIWp4ED7iZ+02W8GmEblCUwKz4zJ2SA0GTHmsB6mBjIzLFyQ/aQF7DLYNBpIE7oTS\njMu1tqtGbwIqI2C3aSPAY7dUBw/6ILnKt5Gu7f8KYwKBgQDm/Jiwpud1hxtiMNTk\nyn+qa/gCKA1+1Y8hG/v+9Gg98NGSCdh/E29CpZn8Non2DOe75g4wqpeiPL0C6Fc5\nGBn1mIt1mtl4p8HE9v5sVLBSokccVwa1UB3Ohx1HW7EgMM8/aWCt7tlOBm33yZCD\nbyHAg7hjtLMzw8ez1mjKRQYWSwKBgQDHaG2O8xzMPAO1QVxqaWuo9y4pKyuP/JXI\nEf4Li/FeiM7jvFfd0p9GVR045HsGvTaxtRq5E/eNftiyH+3wJsJegrOnt6uoK2fC\nLdVgoVDHUR++iTtamEOArmRCazVjIQxT5xZLyEaDz06Nr97HOpuLRFL/bni55J8o\n/8T7kbwyDwKBgB19XEUZWe2QTTexAk0faUMpu6US1f4+Z6KTfw2iyHg3+ZmKdkBr\nC8ZXfBxOHjjyltdPXLpr3SYSWRM49IHOiOnpCsz98wvLZxqtafgMq+Iw46FDnxCg\n5N1MNLm6hBeXA66V1oj+OHIUsg9zhWayVn3Mk0rvc/2E3kcgdYp1W3yXAoGAR3wS\nOnrAyh6BncrOnH8qTyo9bBjDxxxffZeloPIMFz2oHU/5l9XXr1j33ttZlzLhlpc7\n+zlDN4BPopt7qunaKBNm4Csh6GmXCq9vnPJ3iNx2KtH7ayDGoiziWEUioGTKjJF9\nFrG3Ra1dlcGEdZt3A1f9AQDTWqCwxfva2+yEsNUCgYEAquE0wi2Y9dSJmLOLGoRZ\nDt950IU8Lr/PC22/KZitDg3+FcIzxq9hto/54ZBUFra+iVY2apOk5b5gwp5UWw/1\nykDftsWkp+LwN/HM21PIXquqh9tD1iwOtUJAgbf+bkgTIjvTcW5vqZMJ//riyyO4\nsGEAxQgPDGsWmWPHmpS//gE=\n-----END PRIVATE KEY-----\n"
const firebaseCertConfig = {
    type: process.env.FB_CERT_TYPE,
    project_id: process.env.FB_CERT_PROJECT_ID,
    private_key_id: process.env.FB_CERT_PRIVATE_KEY_ID,
    private_key: key.replace(/\\n/gm, '\n'),
    client_email: process.env.FB_CERT_CLIENT_EMAIL,
    client_id: process.env.FB_CERT_CLIENT_ID,
    auth_uri: process.env.FB_CERT_AUTH_URI,
    token_uri: process.env.FB_CERT_TOKEN_URI,
    auth_provider_x509_cert_url: process.env.FB_CERT_AUTH_PROVIDER_X_509_CERT_URL,
    client_x509_cert_url: process.env.FB_CERT_CLIENT_X_509_CERT_URL,
};

admin.initializeApp({
    credential: admin.credential.cert(firebaseCertConfig),
});

const auth = admin.auth();

function verifyIdToken(token) {
    return auth.verifyIdToken(token);
}

export { verifyIdToken };
// module.exports = {
//     verifyIdToken: verifyIdToken,
// }
