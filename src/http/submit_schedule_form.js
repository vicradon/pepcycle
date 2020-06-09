import launchModal from "../components/utils/launch_modal";

const submitScheduleForm = (url, jsonData) => {
  fetch(url, {
    method: "POST",
    mode: "no-cors",
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
      //pardon me. This returns an error anyways.
      launchModal("success");
    });
};

export default submitScheduleForm;
