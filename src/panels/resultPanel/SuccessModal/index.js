import React, { useState, useEffect } from "react";
import { Modal, Button } from "antd";
import { SettingLightIcon } from "../../../icons";
import { Timer } from "../../../components";

import { NAME_PROJECT, GROUP_TARGET_MSG_ID } from "../../../constants";

const SuccessModal = ({ setIsSuccessModalVisible, isSuccessModalVisible }) => {
  const handleCancel = () => {
    setIsSuccessModalVisible(false);
  };

  return (
    <Modal
      title="Узнать тайных поклонников страницы"
      visible={isSuccessModalVisible}
      onCancel={handleCancel}
      footer={null}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          width: "100%",
          height: "100%",
        }}
      >
        <Button
          type="primary"
          href={`https://vk.me/public${GROUP_TARGET_MSG_ID}`}
          target="_blank"
          onClick={handleCancel}
        >
          Узнать тайных поклонников
        </Button>
      </div>
    </Modal>
  );
};

export { SuccessModal };
