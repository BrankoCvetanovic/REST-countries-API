
export async function fetchCountries() {
 
    const response = await fetch("https://restcountries.com/v3.1/all");
  
    if (!response.ok) {
      const error = new Error("An error occurred while fetching the events");
      error.code = response.status;
      error.info = await response.json();
      throw error;
    }
  
    const resData = await response.json();
  
    return resData;
  }