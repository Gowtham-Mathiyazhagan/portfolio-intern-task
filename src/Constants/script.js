import axios from "axios";

export async function fetchdata() {
  try {
    const res = await axios.get(
      "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae"
    );
    return res.data.user;
  } catch (err) {
    console.log("Error", err);
  }
}

export const navdata =["About","Timeline","Skills","Portfolio","Contact"]
