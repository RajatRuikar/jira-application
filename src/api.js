export async function loginUser(username, password) {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/auth/login`, {
    method: "POST", 
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });

  return response.text(); // token or "Invalid Credentials"
}

export async function registerUser(username, password) {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });

  return response.text();
}

export async function signupUser(userData) {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/auth/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });

  return response.text();
}
