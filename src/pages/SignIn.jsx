const SignIn = () => {
  return (
    <div className="form sign-in">
      <h2 className="text-2xl font-semibold">Welcome</h2>
      <label>
        <span className="">Email</span>
        <input type="email" />
      </label>
      <label>
        <span className="">Password</span>
        <input type="password" />
      </label>
      <p className="forgot-pass">Forgot password?</p>
      <button type="button" className="submit font-semibold">
        Sign In
      </button>
    </div>
  );
};

export default SignIn;
