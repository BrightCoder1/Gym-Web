export const login = catchAsyncError(async (req, res, next) => {
    const { email, password, confirmPassword, role } = req.body;

    if (!email || !password || !confirmPassword || !role) {
        return next(new ErrorHandler("Please Enter Valid Details"), 400)
    }
    if (password !== confirmPassword) {
        return next(new ErrorHandler("Password & Confirm Password Do not Match!"), 400)
    } else {
        const user = await User.findOne({ email: email }).select("+password");

        if (!user) {
            return next(new ErrorHandler("Invalid Password Or Email.."), 400);
        } else {
            const isPasswordMatched = await user.comprePassword(password);
            if (!isPasswordMatched) {
                return next(new ErrorHandler("Invalid Password Or Email.."), 400);
            }
            if (role !== user.role) {
                return next(new ErrorHandler("User With This Role Not Found!"), 400);
            }

            generateToken(user, "User Login!..", 200, res);
        }
    }
})