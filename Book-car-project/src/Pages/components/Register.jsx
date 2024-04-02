import { useState } from "react";
import { toast } from "react-toastify";

function Register({ setShowRegister }) {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [successRegistration, setSuccessRegistration] = useState(true);

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id, password, email, name }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message);
      }
      toast.success("Registration successful!");
      setName("");
      setId("");
      setPassword("");
      setEmail("");
      setSuccessRegistration(false);
    } catch (error) {
      toast.error("Registration failed: " + error.message);
    }
  };

  const handleClose = () => {
    setShowRegister(false);
  };
  return (
    <div>
      {successRegistration && (
        <form className="register-form" onSubmit={handleRegister}>
          <div className="register-header">
            <h2>User Registration</h2>
            <button className="turn-off-btn" onClick={handleClose}>
              ❌
            </button>
          </div>
          <div className="form-group">
            <label>
              User Name <span className="error-message">*</span>
              <input
                type="text"
                required
                placeholder="User Name"
                value={id}
                onChange={(e) => setId(e.target.value)}
              />
            </label>
            <label>
              Nick Name <span className="error-message">*</span>
              <input
                type="text"
                required
                placeholder="Nick Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <label>
              Password <span className="error-message">*</span>
              <input
                type="password"
                required
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <label>
              Email <span className="error-message">*</span>
              <input
                type="email"
                required
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <button className="register-btn" type="submit">
              Register
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default Register;
