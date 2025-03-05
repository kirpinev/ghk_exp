import { ButtonMobile } from "@alfalab/core-components/button/mobile";

import { Typography } from "@alfalab/core-components/typography";
import bottom from "./assets/bottom.png";
import image1 from "./assets/image1.jpeg";
import image2 from "./assets/image2.jpeg";
import image3 from "./assets/image3.jpeg";
import image4 from "./assets/image4.jpeg";
import image5 from "./assets/image5.jpeg";
import image6 from "./assets/image6.jpeg";
import image7 from "./assets/image7.jpeg";
import image8 from "./assets/image8.jpeg";
import image9 from "./assets/image9.jpeg";
import image10 from "./assets/image10.jpeg";
import image11 from "./assets/image11.jpeg";
import image12 from "./assets/image12.jpeg";
import image13 from "./assets/image13.jpeg";
import image14 from "./assets/image14.jpeg";
import title from "./assets/title.png";
import laugh from "./assets/laugh.wav";
import card from "./assets/card.png";
import content from "./assets/content.png";
import love from "./assets/love.png";
import applause from "./assets/applause.wav";
import { appSt } from "./style.css";
import { Gap } from "@alfalab/core-components/gap";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { StatusBadge } from "@alfalab/core-components/status-badge";
import useSound from "use-sound";
import { Fireworks } from "@fireworks-js/react";

const targetDate = "2025-03-05 15:54:00";

interface Person {
  name: string;
  role: string;
  image: string;
  text: string;
  key: number;
  position?: string;
}

const people: Person[] = [
  {
    key: 1,
    name: "Постников Андрей",
    role: "GH Lead Generations",
    image: image1,
    text: "Календарь не ориентир, ты — весна в нашем коллективе! В день бесконечности желаю тебе бесконечных сроков, идей и отпусков. Без тебя работа мрак, за тебя поднимаю бокал!",
  },
  {
    key: 2,
    name: "Данил Чупругин",
    role: "Аналитик команды Daily",
    image: image3,
    text: "Пусть каждый эксперимент ведёт к удачным открытиям, а успехи радуют не только в работе, но и в жизни. Желаю вдохновения, счастья и отличного настроения!",
  },
  {
    key: 3,
    name: "Евгений Радченко",
    role: "Ведущий разработчик команды SOBR",
    image: image2,
    text: "Дорогие наши деффчонки, без вас даже удалёнка не спасла бы этот мир от хаоса и беспорядка! Пусть 8 марта подарит вам море цветов, тонну комплиментов и хотя бы один рабочий день без дедлайнов и багов. Оставайтесь такими же яркими, как ваши маникюры, и такими же незаменимыми, как кнопка «Отменить» в любой программе! 🎉🌸",
  },
  {
    key: 4,
    name: "Вадим Алешин",
    role: "iOS разработчик",
    image: image4,
    text: "С праздником весны, очарования и женственности! Пусть этот день напомнит тебе о том, как ты великолепна и удивительна! И каждый день искрится яркими эмоциями и никогда не будет места для печали!",
  },
  {
    key: 5,
    name: "Павел Николаев",
    role: "Аналитик команды роста Onboarding",
    image: image5,
    text: "Дорогие мои, помним, что за облаками всегда солнышко, а для меня солнышко это ваши улыбки, с наступающим 8 марта, любви, весны, красоты, тепло обнимаю",
  },
  {
    position: "top",
    key: 6,
    name: "Михаил Богов",
    role: "Product Analyst Lead",
    image: image6,
    text: "Девушки, дорогие, с праздником 🥰 Все в восторге от вас! Вы самые прекрасные, вы достойны самого лучшего и пусть именно так у вас и будет. Желаю весеннего настроения весь год, улыбайтесь и сияйте!",
  },
  {
    key: 7,
    name: "Константин Михеев",
    role: "Старший JS разработчик",
    image: image7,
    text: "Эй, квин, с 8 Марта! 🌸✨ Пусть жизнь будет чисто хайповая, без кринжа и с максимальным везением, а вокруг только свои, вайбовые и лояльные! Лови лютый буст к мечтам, море кэша и лав, а еще дзен без драмы — ты же реально топ! 💖🔥",
  },
  {
    position: "top",
    key: 8,
    name: "Дмитрий Горбунов",
    role: "GH Lead Daily Pay",
    image: image8,
    text: "Дорогие дамы, с 8 Марта! Пусть жизнь будет без багов, дедлайны не душат, а настроение всегда топ. Вы — наша самая лютая фича, без вас вообще ничего бы не работало. Чилла, кайфа и только хайповых моментов! Оставайтесь вечно молодыми и всегда шарьте за тренды!",
  },
  {
    position: "top",
    key: 9,
    name: "Влад Крюков",
    role: "Старший специалист по тестированию",
    image: image9,
    text: "Поздравляю с Международным женским днем! Пусть любые решения принимаются легко, гипотезы подтверждаются, а жизнь радует балансом между крутыми проектами и личными успехами. Оставайся такой же энергичной и талантливой!",
  },
  {
    key: 10,
    name: "Адель Багатеев",
    role: "Ведущий Android разработчик",
    image: image10,
    text: "С 8 марта! Пусть в твоем бэклоге всегда будет место для новых впечатлений, счастья и ярких эмоций, а любой спринт завершался с ощущением успеха. Желаю роста, мотивации и множества крутых возможностей!",
  },
  {
    key: 11,
    name: "Егор Шульман",
    role: "Ведущий системный аналитик",
    image: image11,
    text: 'Привет! Желаю быть счастливой, радоваться каждому моменту, улыбаться как можно чаще (тебе это точно идет!) и обязательно ценить себя Вы прекрасны и заслуживаете всего наилучшего в этом мире И, конечно, как можно чаще слышать три заветных слова: "люблю, куплю, поедем" С 8 Марта!',
  },
  {
    position: "bottom",
    key: 12,
    name: "Константин Микулик",
    role: "Аналитик команды роста Generations",
    image: image12,
    text: "Бокал за наших дам",
  },
  {
    position: "top",
    key: 13,
    name: "Яков Лысков",
    role: "Head of GH",
    image: image13,
    text: "Кисуни, с праздником! Красоты, здоровья и весенней романтики ❤️",
  },
  {
    position: "0 -62px",
    key: 14,
    name: "Кирилл Контарук",
    role: "Руководитель проектов команды роста",
    image: image14,
    text: "С 8 Марта, наши талантливые, прекрасные и креативные создательницы лучших фич! Пусть каждый ваш инсайт приносит успех, экспы и проекты попадают в самое яблочко, а каждый день — дает новые возможности для побед!",
  },
];

const getRandomElement = (arr: Person[]) => {
  const randomBuffer = new Uint32Array(1);
  window.crypto.getRandomValues(randomBuffer);
  const randomIndex = randomBuffer[0] % arr.length;

  return arr[randomIndex];
};

export const App = () => {
  const [laughPlay, { stop: stopLaugh }] = useSound(laugh);
  const [applausePlay, { stop: stopApplause }] = useSound(applause);
  const [step, setStep] = useState(1);
  const [selectedPerson, setSelectedPerson] = useState<Person>(
    getRandomElement(people),
  );
  const [loading, setLoading] = useState(false);
  const [isOneMoreClicked, setIsOneMoreClicked] = useState(false);

  const calculateTimeLeft = () => {
    // @ts-ignore
    const difference = new Date(targetDate) - new Date();
    if (difference <= 0) return null; // Если дата прошла, возвращаем null

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(
        2,
        "0",
      ),
      minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(
        2,
        "0",
      ),
      seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
    };
  };

  const isDatePassed = () => new Date() >= new Date(targetDate);

  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: string;
    minutes: string;
    seconds: string;
  } | null>(calculateTimeLeft());
  const [datePassed, setDatePassed] = useState(isDatePassed());

  const handleClick = () => {
    const array = people.filter((p) => p.key !== selectedPerson.key);

    setLoading(true);
    setIsOneMoreClicked(true);

    let i = 0;
    const interval = setInterval(() => {
      setSelectedPerson(getRandomElement(array)); // Перебираем поздравления
      i++;
    }, 300);

    setTimeout(() => {
      clearInterval(interval);
      const randomGreeting = getRandomElement(array);
      setSelectedPerson(randomGreeting);
      setLoading(false);
    }, 2500);
  };

  useEffect(() => {
    if (datePassed) return;

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
      setDatePassed(isDatePassed());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate, datePassed]);

  return (
    <>
      {step === 1 && (
        <>
          <div className={appSt.container}>
            <Gap size={16} />
            <div className={appSt.warning}>
              <Typography.Text view="primary-medium" color="primary-inverted">
                Задолженность
              </Typography.Text>
            </div>

            <Gap size={16} />

            <Typography.TitleResponsive
              tag="h1"
              view="medium"
              font="system"
              weight="bold"
              style={{ textAlign: "center" }}
            >
              На восьмое марта <br /> дарят всем подарки
            </Typography.TitleResponsive>

            <Gap size={8} />

            <Typography.Text
              view="primary-medium"
              color="secondary"
              style={{ textAlign: "center" }}
            >
              А тебе я эти пени насчитал*
            </Typography.Text>

            <Gap size={32} />

            <div className={appSt.box}>
              <img src={bottom} alt="Картинка Альфа-Смарт" />
            </div>

            <Gap size={16} />

            <Typography.Text
              view="primary-medium"
              color="secondary"
              style={{ textAlign: "center" }}
            >
              *По мотивам песни Евгения Осина
            </Typography.Text>

            <Gap size={32} />

            <div className={appSt.pay}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <Typography.Text view="primary-medium" color="secondary">
                  Оплатить
                </Typography.Text>
                <Typography.TitleResponsive
                  tag="h1"
                  view="small"
                  font="system"
                  weight="bold"
                >
                  Миллион Алых Пени
                </Typography.TitleResponsive>
              </div>
              <StatusBadge
                view="positive-checkmark"
                size={24}
                className={appSt.badge}
              />
            </div>
          </div>

          <Gap size={72} />

          <div className={appSt.bottomBtn}>
            <ButtonMobile
              block
              onClick={() => setStep(2)}
              view="primary"
              hint={
                <>
                  {datePassed ? (
                    <Typography.Text view="primary-small">
                      Эй, Красотка
                    </Typography.Text>
                  ) : (
                    <Typography.Text view="primary-small">
                      {timeLeft?.hours}:{timeLeft?.minutes}:{timeLeft?.seconds}
                    </Typography.Text>
                  )}
                </>
              }
              size="l"
              disabled={!datePassed}
            >
              {isDatePassed() ? "Продолжить" : "Зайди сюда 8го марта"}
            </ButtonMobile>
          </div>
        </>
      )}
      {step === 2 && (
        <>
          <div className={appSt.container}>
            <Gap size={16} />

            <motion.div
              key={selectedPerson.key}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              style={{ textAlign: "center" }}
            >
              <Typography.TitleResponsive
                tag="h1"
                view="medium"
                font="system"
                weight="bold"
                style={{ textAlign: "center" }}
              >
                {selectedPerson.name}
              </Typography.TitleResponsive>
              <Gap size={8} />
              <Typography.Text
                view="primary-medium"
                color="secondary"
                style={{ textAlign: "center" }}
              >
                {selectedPerson.role}
              </Typography.Text>
              <Gap size={32} />
              <img
                alt={selectedPerson.name}
                src={selectedPerson.image}
                style={{
                  borderRadius: "100%",
                  display: "block",
                  margin: "0 auto",
                  objectFit: "cover",
                  ...(selectedPerson.position && {
                    objectPosition: selectedPerson.position,
                  }),
                }}
                width={160}
                height={160}
              />
              <Gap size={32} />
              <img
                alt={selectedPerson.name}
                src={title}
                style={{
                  display: "block",
                  margin: "0 auto",
                }}
                width={32}
                height={24}
              />
              <Gap size={32} />
              <Typography.Text
                view="primary-large"
                style={{ textAlign: "center" }}
              >
                {selectedPerson.text}
              </Typography.Text>
            </motion.div>
          </div>

          <Gap size={96} />

          <div className={appSt.bottomBtn}>
            {isOneMoreClicked ? (
              <ButtonMobile
                block
                view="primary"
                size="l"
                loading={loading}
                onClick={() => {
                  setStep(3);
                }}
              >
                К Подарку
              </ButtonMobile>
            ) : (
              <ButtonMobile
                block
                view="primary"
                size="l"
                onClick={handleClick}
                loading={loading}
                disabled={loading}
              >
                А-еще!
              </ButtonMobile>
            )}
          </div>
        </>
      )}
      {step === 3 && (
        <>
          <div
            className={appSt.container}
            style={{ height: "100vh", backgroundColor: "#F2F0EE" }}
          >
            <Gap size={16} />

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              style={{ textAlign: "center" }}
            >
              <Typography.TitleResponsive
                tag="h1"
                view="medium"
                font="system"
                weight="bold"
                style={{ textAlign: "center" }}
              >
                Платиновая Карта
              </Typography.TitleResponsive>
              <Gap size={8} />
              <Typography.Text
                view="primary-medium"
                color="secondary"
                style={{ textAlign: "center" }}
              >
                Золотое Яблоко
              </Typography.Text>
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{
                  scale: 1,
                  opacity: 1,
                  y: [-5, 5],
                  rotate: [-3, 3],
                }}
                exit={{ scale: 0.95 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
              >
                <img
                  alt="Карта"
                  src={card}
                  style={{
                    display: "block",
                    margin: "auto auto",
                    width: "100%",
                  }}
                />
              </motion.div>
            </motion.div>
          </div>

          <div
            className={appSt.bottomBtn}
            style={{ backgroundColor: "#F2F0EE" }}
          >
            <ButtonMobile
              block
              view="primary"
              size="l"
              onClick={() => {
                setStep(4);
                laughPlay();
              }}
              style={{ backgroundColor: "#D6C1B7", color: "black" }}
            >
              Забрать подарок
            </ButtonMobile>
          </div>
        </>
      )}
      {step === 4 && (
        <>
          <div className={appSt.container} style={{ height: "100vh" }}>
            <Gap size={16} />

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              style={{ textAlign: "center" }}
            >
              <Typography.TitleResponsive
                tag="h1"
                view="medium"
                font="system"
                weight="bold"
                style={{ textAlign: "center" }}
              >
                Это был эксперимент
              </Typography.TitleResponsive>
              <img
                alt="Карта"
                src={content}
                style={{
                  display: "block",
                  margin: "auto auto",
                  width: "100%",
                }}
              />
            </motion.div>
          </div>

          <div className={appSt.bottomBtn}>
            <ButtonMobile
              block
              view="primary"
              size="l"
              onClick={() => {
                setStep(5);
                stopLaugh();
                applausePlay();
              }}
            >
              Далее
            </ButtonMobile>
          </div>
        </>
      )}
      {step === 5 && (
        <>
          <Fireworks
            style={{
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              position: "fixed",
              background: "white",
              zIndex: -1,
            }}
          ></Fireworks>

          <div className={appSt.container} style={{ height: "100vh" }}>
            <Gap size={16} />

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              style={{ textAlign: "center" }}
            >
              <Typography.TitleResponsive
                tag="h1"
                view="medium"
                font="system"
                weight="bold"
                style={{ textAlign: "center" }}
              >
                Не плачь, малая
              </Typography.TitleResponsive>
              <Gap size={8} />
              <Typography.Text
                view="primary-medium"
                color="secondary"
                style={{ textAlign: "center" }}
              >
                Скоро подарок придет на телефон!
              </Typography.Text>
              <img
                alt="Карта"
                src={love}
                style={{
                  display: "block",
                  margin: "auto auto",
                  width: "100%",
                }}
              />
            </motion.div>
          </div>

          <div className={appSt.bottomBtn}>
            <ButtonMobile
              block
              view="primary"
              size="l"
              onClick={() => {
                stopApplause();
              }}
              style={{ backgroundColor: "#E51815", color: "white" }}
              href=""
            >
              С 8 марта!
            </ButtonMobile>
          </div>
        </>
      )}
    </>
  );
};
