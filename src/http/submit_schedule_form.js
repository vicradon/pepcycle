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
    })
    .catch((err) => {
      console.error(err);
    });
};

export default submitScheduleForm;
