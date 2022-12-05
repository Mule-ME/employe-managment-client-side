export const baseUrl = "https://tame-teal-moth-tie.cyclic.app/api/v1";
export const headers = {
  accept: "Application/json",
  Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
};
