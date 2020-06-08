import { Modal } from "antd";

const launchModal = (type, errorMsg) => {
  let secondsToGo = type === "success" ? 2 : 10;
  const successModal =
    type === "success"
      ? Modal.success({
          title: "Successfully submitted form",
        })
      : "";
  const errorModal =
    type === "error"
      ? Modal.error({
          title: "An error occured",
          content: errorMsg,
        })
      : "";

  const modal = type === "success" ? successModal : errorModal;
  const timer = setInterval(() => {
    secondsToGo -= 1;
    modal.update({
      content: `${errorMsg} Closes in ${secondsToGo} second.`,
    });
  }, 1000);
  setTimeout(() => {
    clearInterval(timer);
    modal.destroy();
  }, secondsToGo * 1000);
};

export default launchModal;
