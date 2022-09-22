import React, { useState, useEffect } from "react";
import bridge from "@vkontakte/vk-bridge";
import cn from "classnames";
import "./ResultPanel.scss";
import { story } from "../../sharing-method";
import { nativeAds } from "../../ads";
import { Modal, Button } from "antd";
import { SettingLightIcon } from "../../icons";
import { ResultModal } from "./ResultModal/index";

import {
  APP_IMG_SHARING_STORIES,
  APP_ID_TARGET,
  GROUP_TARGET_MSG_ID
} from "../../constants";
import { AnimationStars } from "../../components";
import { navigate } from "@reach/router";
import { Link } from "@vkontakte/vkui";

const ResultPanel = ({
  id,
  go,
  IMGresult,
  getPlatform,
  openAlert,
  snackbar,
  fetchedUser,
  getGroupId,
  appID,
  imgIndex,
  notifyLinks,
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      nativeAds(getPlatform);
    }, 4000);
  }, []);

  function success() {
    Modal.success({
      title: "Ваши результаты",
      content: (
        <div>
          <p>Сообщений отправлено за год: 856 412</p>
          <p>Шагов за год: 1 642 286</p>
        </div>
      ),
      onOk() {},
    });
  }

  const showModal = () => {
    setIsModalVisible(true);
    setTimeout(() => {
      success();
    }, 60 * 10 * 1000);
  };

  const openNewApp = (appId) => {
    bridge
      .send("VKWebAppOpenApp", { app_id: appId, location: "new-app" })
      .then((res) => {})
      .catch((err) => {});
  };

  return (
    <>
      {/* <AnimationStars /> */}
      <div
        className={cn({
          "result-panel": true,
          web: getPlatform === "web",
        })}
      >
        <Button
          className="buttons"
          onClick={() => story(APP_IMG_SHARING_STORIES[imgIndex])}
        >
          Посмотреть результат
        </Button>
        <Button className="buttons small-text" onClick={() => openNewApp(APP_ID_TARGET)} >
          Узнать кол-во сообщений и шагов за 2022г
        </Button>
      
        <Button className="button small-text" >
        <Link className="btn-link" href={`https://vk.me/public${GROUP_TARGET_MSG_ID}`} target="_blank">
        Узнать тайных поклонников страницы
        </Link>
        </Button>
     
       
      </div>
      <ResultModal
        setIsModalVisible={setIsModalVisible}
        isModalVisible={isModalVisible}
        showModal={showModal}
        notifyLinks={notifyLinks}
        success={success}
      />

      {/* <Modal
        title="Кол-во сообщений и шагов за 2022г"
        visible={isModalVisible}
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
          <SettingLightIcon color="black" />
          <Timer expiryTimestamp={time} />
          <p>Чтобы узнать результат нажмите кнопку ниже</p>
          <Button
            type="primary"
            href={notifyLinks[`${NAME_PROJECT}_linkTelegram`]}
            target="_blank"
            onClick={handleOk}
          >
            Узнать
          </Button>
        </div>
      </Modal> */}
    </>
  );
};

export { ResultPanel };
