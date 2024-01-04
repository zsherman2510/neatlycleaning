export const registerCleaner = async (personalDetails: any, user: any) => {
  const postData = {
    ...personalDetails,
    ...user,
  };

  console.log(postData);
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/cleaners/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      }
    );

    const data = await response.json();

    return data;
  } catch (error: any) {
    console.error("Error registering user:", error.toString());
    throw error; // If you want the error to be propagated to the caller
  }
};

export const loginUser = async (email: string, password: string) => {
  const creds = {
    email,
    password,
  };

  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(creds),
    });

    const data = await response.json();

    return data;
  } catch (error: any) {
    console.error("Error logging in:", error.toString());
    throw error; // If you want the error to be propagated to the caller
  }
};
