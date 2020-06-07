import React from "react";
import { Form, InputNumber, Button, DatePicker, TimePicker } from "antd";
import { layout, tailLayout } from "./layoutStyle";
import styles from '../styles/bags_form.module.css'

const { RangePicker } = TimePicker;

const disabledDates = currentDate => {
  const today = new Date();
  today.setDate(today.getDate() - 1);
  if (new Date(currentDate._d) < today) {
    return true;
  }
  return false;
};

const BagsForm = () => {
  const onFinish = values => {
    console.log("Success:", values);
  };

  const onFinishFailed = errorInfo => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
    className={styles.bagsForm}
      {...layout}
      name="basic"
      initialValues={{
        remember: true
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <h1>Schedule pickup</h1>
      <Form.Item
        label="Number of bags"
        type="number"
        name="bags"
        rules={[
          {
            required: true,
            message: "Please input the number of bags you have"
          }
        ]}
      >
        <InputNumber />
      </Form.Item>

      <Form.Item
        label="Date for pickup"
        name="pickupdate"
        rules={[
          {
            required: true,
            message: "Select date for pickup"
          }
        ]}
      >
        <DatePicker format="DD/MM/YYYY" disabledDate={disabledDates} />
      </Form.Item>

      <Form.Item
        label="Time range for pickup"
        name="timerange"
        rules={[
          {
            required: true,
            message: "Select a time range"
          }
        ]}
      >
        <RangePicker />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button className={styles.submitButton} type="primary" htmlType="submit">
          Schedule
        </Button>
      </Form.Item>
    </Form>
  );
};

export default BagsForm;
