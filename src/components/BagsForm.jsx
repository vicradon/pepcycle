import React from "react";
import { Form, Input, InputNumber, Button, DatePicker } from "antd";
import { layout, tailLayout } from "./utils/layout_style";
import styles from "../styles/bags_form.module.css";
import disabledDates from './utils/disabled_dates'
import submitScheduleForm from "../http/submit_schedule_form";

const { RangePicker } = DatePicker;

const BagsForm = () => {
  const onFinish = values => {
    submitScheduleForm("placeholder url", JSON.stringify(values))
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
      <h1 className={styles.heading}>Schedule pickup</h1>
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
        <InputNumber placeholder="3" className={styles.w100} />
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
        <RangePicker
          className={styles.w100}
          disabledDate={disabledDates}
          showTime={{ format: "HH:mm" }}
          format="YYYY-MM-DD HH:mm"
        />
      </Form.Item>

      <Form.Item
        label="Location"
        type="text"
        name="location"
        rules={[
          {
            required: true,
            message: "Please input your location"
          }
        ]}
      >
        <Input placeholder="No 2 west street" />
      </Form.Item>

      <Form.Item
        label="Account Number"
        type="number"
        name="acctbum"
        rules={[
          {
            required: true,
            message: "Please input account number"
          }
        ]}
      >
        <InputNumber placeholder="3095837582" className={styles.w100} />
      </Form.Item>

      <Form.Item
        label="Account Name"
        type="text"
        name="acctnum"
        rules={[
          {
            required: true,
            message: "Please input account name"
          }
        ]}
      >
        <Input placeholder="My money account" />
      </Form.Item>

      <Form.Item
        label="Bank Name"
        type="text"
        name="bankname"
        rules={[
          {
            required: true,
            message: "Please input bank name"
          }
        ]}
      >
        <Input placeholder="Boss Baby Bank" />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button
          className={styles.submitButton}
          type="primary"
          htmlType="submit"
        >
          Schedule
        </Button>
      </Form.Item>
    </Form>
  );
};

export default BagsForm;
