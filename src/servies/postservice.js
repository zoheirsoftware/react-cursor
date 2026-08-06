import swal from "sweetalert";
import { jpAxios } from "../jpAxios";

export const postsgetService = () => {
  return jpAxios.get("/posts");
};

export const postaddservice = async (data) => {
  await jpAxios.post("/posts", data).then((res) => {
    swal("ثبت رکورد با موفقیت انجام شد", {
      icon: "success",
    });
  });
};
export const postupdateswervice = async (data, postid) => {
  await jpAxios.put(`/posts/${postid}`, data).then((res) => {
    swal("ویرایش رکورد با موفقیت انجام شد", {
      icon: "success",
    });
  });
};

 