export const baseUrl =
  "https://employee-mangtt-server-side.herokuapp.com/api/v1";
export const headers = {
  accept: "Application/json",
  Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
};
