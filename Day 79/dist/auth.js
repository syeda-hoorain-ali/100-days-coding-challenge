import base64 from 'base-64';
const decode = (authHeaders) => {
    const encoded = authHeaders.replace('Basic', '').trim();
    const decoded = base64.decode(encoded);
    return decoded.split(':');
};
const authMiddleware = (req, res, next) => {
    const [username, password] = decode(req.headers.authorization || '');
    if (username === 'admin' && password === 'admin') {
        return next();
    }
    res.set('WWW-Authenticate', 'Basic realm="user_pages"');
    res.status(401).send('Authentication required');
};
export default authMiddleware;
