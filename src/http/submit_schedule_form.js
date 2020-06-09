import launchModal from "../components/utils/launch_modal";

const submitScheduleForm = (url, jsonData) => {
  fetch(url, {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: jsonData,
  })
    .then((res) => res.json())
    .then((res) => {
      launchModal("success");
      alert("success")
    })
    .catch((err) => { alert("success") });
};

export default submitScheduleForm;
