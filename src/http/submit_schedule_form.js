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
      const error = JSON.parse(
        JSON.stringify(err, Object.getOwnPropertyNames(err))
      );
      launchModal("error", error.message);
    });
};

export default submitScheduleForm;
