export const registerCustomer = async (personalDetails: any, user: any) => {
  const postData = {
    ...personalDetails,
    ...user,
  };

  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/customer/register`,
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

export const registerCleaner = async (cleaner: any) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/cleaner/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cleaner),
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

export const getCareGivers = async () => {
  try {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/getCaregivers`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();

    return data;
  } catch (error: any) {
    throw error;
  }
};

export const getJobs = async () => {
  try {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/getJobs`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();

    return data;
  } catch (e: any) {}
};
