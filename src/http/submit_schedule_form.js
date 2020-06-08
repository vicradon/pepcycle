const submitScheduleForm = (url, jsonData) => {
  fetch(url, {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: jsonData
  })
    .then((res) => res.json())
    .then(res => alert("submited"))
    .catch((err) => alert(err))
};

export default submitScheduleForm