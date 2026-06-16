export async function registerUser(formData) {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const REGISTER_URL = `${API_URL}/api/auth/local/register`;
  const body = {
    username: formData.username,
    email: formData.email,
    password: formData.password,
  };
  try {
    const response = await fetch(REGISTER_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const data = await response.json();
    if (!response.ok) {
      console.log(response);
      throw new Error(data?.error?.message || "Registration failed");
    }
    console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function loginUser(formData) {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const LOGIN_URL = `${API_URL}/api/auth/local`;
  const body = {
    identifier: formData.identifier,
    password: formData.password
  };
  try {
    const response = await fetch(LOGIN_URL,{
      method: "POST",
      headers:{
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body)
    })
    const data = await response.json()
    if(!response.ok){
      throw new Error(data?.error?.message || "Registration failed");
    }
    console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
}
