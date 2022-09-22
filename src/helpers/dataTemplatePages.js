import {
  LoveIcon,
  SettingLightIcon,
  CalendarIcon,
  Setting2Icon,
  DoneIcon,
} from "../icons";
import { sharing } from "../sharing-method";
import { APP_IMG_SHARING_STORIES, APP_ID_DEFAULT } from "../constants";

export const dataTemplatePages = [
  {
    name: "/",
    icon: <LoveIcon />,
    header: "Привет!",
    title:
      "Наше приложение с помощью наших алгоритмов поможет Вам узнать вторую половинку",
    description:
      "* Приложение является развлекательным. Наши алгоритмы разрабатывались несколькими специалистами.",
    buttonName: ["Ок"],
    next: "setting",
  },
  {
    name: "setting",
    icon: <DoneIcon />,
    header: "Разрешите доступ",
    title: `Сохранить результат в фотоальбом?`,
    description: "",
    buttonName: ["Да", "Нет"],
    next: "like",
  },
  {
    name: "like",
    icon: null,
    header: "Отлично",
    title: "Теперь я могу проверить твои данные",
    description: "",
    buttonName: ["Начать анализ"],
    next: "search",
  },
  {
    name: "search",
    icon: <SettingLightIcon />,
    header: "Провожу анализ",
    title: "Ищу дату регистрации...",
    description: "",
    buttonName: [],
    next: "result",
  },
  {
    name: "result",
    icon: <LoveIcon className="pulse" />,
    header: "Анализ завершён",
    title: "",
    description: "",
    buttonName: ["Узнать результат"],
    next: "/result-panel",
  },
];
