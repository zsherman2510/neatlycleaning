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

    return data.user;
  } catch (error: any) {
    console.error("Error registering user:", error.toString());
    throw error; // If you want the error to be propagated to the caller
  }
};
