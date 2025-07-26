export const LogoutUser = async (req, res, next) => {
    res.clearCookie('token');
    const token = req.cookies.token || req.headers.authorization.split(' ')[1];
    res.status(200).json({ message: 'Logged out' });
};
