/* eslint-disable react/prop-types */
function Login({
  showLogin,
  proceedLogin,
  username,
  password,
  setUsername,
  setPassword,
  handleShowRegister,
  setShowLogin,
}) {
  const handleClose = () => {
    setShowLogin(false);
  };
  return (
    <>
      {showLogin && (
        <div className="login-form">
          <form onSubmit={proceedLogin}>
            <div className="form-header">
              <h2>User Login</h2>
              <button className="turn-off-btn" onClick={handleClose}>
                ❌
              </button>
            </div>
            <div className="form-group">
              <label>
                User Name <span className="error-message">*</span>
              </label>
              <input
                type="text"
                placeholder="User Name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <label>
                Password <span className="error-message">*</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="submit">
              <button type="submit" className="login">
                Login
              </button>
              <span className="new-user" onClick={handleShowRegister}>
                Register
              </span>
            </div>
          </form>
        </div>
      )}
    </>
  );
}

export default Login;
