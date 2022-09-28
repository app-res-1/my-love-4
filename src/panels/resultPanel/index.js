import React, { useState, useEffect } from "react";
import bridge from "@vkontakte/vk-bridge";
import cn from "classnames";
import "./ResultPanel.scss";
import { story } from "../../sharing-method";
import { nativeAds } from "../../ads";
import { Modal, Button } from "antd";
import { SettingLightIcon } from "../../icons";
import { ResultModal } from "./ResultModal/index";
import { SuccessModal } from "./SuccessModal/index";

import {
  APP_IMG_SHARING_STORIES_OBJECT,
  APP_ID_TARGET,
  GROUP_TARGET_MSG_ID,
  GROUP_SUPPORT_MSG_ID,
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

  const [isSuccessModalVisible, setIsSuccessModalVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      nativeAds(getPlatform);
    }, 4000);
  }, []);

  const showModal = () => {
    setIsModalVisible(true);
    setTimeout(() => {
      setIsSuccessModalVisible(true);
      // success();
    }, 60 * 10 * 1000);
  };

  const openNewApp = (appId) => {
    bridge
      .send("VKWebAppOpenApp", { app_id: appId, location: "" })
      .then((res) => {
        console.log("VKWebAppOpenApp res", res);
      })
      .catch((err) => {
        console.log("VKWebAppOpenApp err", err);
      });
  };

  const onStories = () => {
    const URL =
      fetchedUser.sex === 2
        ? APP_IMG_SHARING_STORIES_OBJECT.MAN
        : APP_IMG_SHARING_STORIES_OBJECT.WOMAN;
    return story(URL);
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
        <Button className="buttons" onClick={onStories}>
          Посмотреть результат
        </Button>
        <Button className="buttons small-text">
          <Link
            className="btn-link"
            href={`https://vk.me/public${GROUP_TARGET_MSG_ID}`}
            target="_blank"
          >
            Узнать кол-во сообщений и шагов за 2022г
          </Link>
        </Button>

        <Button className="button small-text" onClick={showModal}>
          Узнать тайных поклонников страницы
        </Button>
      </div>
      <div
        style={{
          position: "relative",
          bottom: "50px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          fontSize: "10px",
        }}
      >
        <span>
          По вопросам рекламы <span>- </span>
          <Link
            style={{
              color: "black",
              textDecoration: "underline",
            }}
            href={`https://vk.me/public${GROUP_SUPPORT_MSG_ID}`}
            target="_blank"
          >
            ссылка
          </Link>
        </span>
      </div>
      <ResultModal
        setIsModalVisible={setIsModalVisible}
        isModalVisible={isModalVisible}
        showModal={showModal}
        notifyLinks={notifyLinks}
        setIsSuccessModalVisible={setIsSuccessModalVisible}
      />
      <SuccessModal
        isSuccessModalVisible={isSuccessModalVisible}
        setIsSuccessModalVisible={setIsSuccessModalVisible}
      />
    </>
  );
};

export { ResultPanel };
