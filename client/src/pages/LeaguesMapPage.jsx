import { useLocation } from "react-router-dom";
import { Container, Title, Subtitle } from "../components/layouts";
import { PATH } from "../routes/path";
import "../styles/LeaguesMapPage.css";
import { useEffect, useState, useRef } from "react";

const useIntersectionObserver = (options) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsIntersecting(true);
        observer.disconnect();
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [options]);

  return [ref, isIntersecting];
};

const Description = ({ text }) => {
  const [ref, isIntersecting] = useIntersectionObserver({
    threshold: 0.5,
  });

  return (
    <div
      ref={ref}
      className={`mb-10 ${isIntersecting ? "slide-in-left" : "opacity-0"}`}
    >
      {text}
    </div>
  );
};

const ChildLink = ({ href, title }) => {
  const [ref, isIntersecting] = useIntersectionObserver({
    threshold: 0.5,
  });

  return (
    <div
      ref={ref}
      className={`inline-block ${isIntersecting ? "slide-top" : "opacity-0"} underline underline-offset-2`}
      style={{ animationDelay: "0.3s" }}
    >
      <a href={href}>{title}</a>
    </div>
  );
};

export default function LeaguesMapPage() {
  const { pathname } = useLocation();

  const leagues = [
    {
      pathname: PATH.LEAGUES_JUNIOR,
      title: "RoboCupJunior",
      img: "/images/RCJ_Soccer_1.jpg",
      descriptions: [
        {
          text: "로보컵주니어(RoboCupJunior)는 19세까지의 학생들을 대상으로 프로젝트 지향적인 종목을 경쟁하는 부문입니다. 시니어 리그에 참여할 자원이 없는 학부생뿐만 아니라 초, 중등 어린이들까지 로보컵(RoboCup)을 경험할 수 있습니다. 주니어 리그의 초점은 교육에 있습니다. 참가자들에게 국제 교류 프로그램에 참여하고 해외에서 온 다른 참가자들을 만나는 경험을 공유할 수 있는 기회를 제공합니다.",
        },
        {
          text: "로보컵주니어(RoboCupJunior)는 각각 협력적인 측면과 경쟁적인 측면을 강조하는 여러 도전 과제를 제공합니다. 어린 학생들을 위해 로봇 분야에 대한 흥미로운 소개, 전자, 하드웨어 및 소프트웨어와의 실제 경험을 통해 기술적 능력을 개발하는 새로운 방법, 그리고 다른 참가자들과 기술을 공유하면서 팀워크에 대해 배울 수 있는 매우 동기 부여적인 기회를 제공합니다. 참가자 혼자서 문제를 해결하는 것이 아닌, 다양한 관심사와 강점을 가진 참가자들이 공동의 목표를 달성하기 위해 팀으로 함께 일할 수 있는 독특한 기회를 제공합니다.",
        },
      ],

      child: [
        {
          href: PATH.LEAGUES_JUNIOR_SOCCER,
          title: "Soccer",
        },
        {
          href: PATH.LEAGUES_JUNIOR_ONSTAGE,
          title: "OnStage",
        },
        {
          href: PATH.LEAGUES_JUNIOR_RESCUE,
          title: "Rescue",
        },
      ],
    },
    {
      pathname: PATH.LEAGUES_SOCCER,
      title: "RoboCupSoccer",
      descriptions: [{ text: "주니어!" }],
      child: [
        {
          href: PATH.LEAGUES_SOCCER_HUMANOID,
          title: "Humanoid",
        },
        {
          href: PATH.LEAGUES_SOCCER_STANDARD_PLATFORM,
          title: "Standard Platform",
        },
        {
          href: PATH.LEAGUES_SOCCER_MIDDLE_SIZE,
          title: "Middle Size",
        },
        {
          href: PATH.LEAGUES_SOCCER_SMALL_SIZE,
          title: "Small Size",
        },
        {
          href: PATH.LEAGUES_SOCCER_SIMULATION,
          title: "Simulation",
        },
      ],
    },
    {
      pathname: PATH.LEAGUES_RESCUE,
      title: "RoboCupRescue",
      descriptions: [{ text: "주니어!" }],
      child: [
        {
          href: PATH.LEAGUES_RESCUE_ROBOT,
          title: "Robot",
        },
        {
          href: PATH.LEAGUES_RESCUE_SIMULATION,
          title: "Simulation",
        },
      ],
    },
    {
      pathname: PATH.LEAGUES_ATHOME,
      title: "RoboCup@Home",
      descriptions: [{ text: "주니어!" }],
      child: [
        {
          href: PATH.LEAGUES_ATHOME_OPENPLATFORM,
          title: "Open Platform",
        },
        {
          href: PATH.LEAGUES_ATHOME_DOMESTIC_STANDARD_PLATFORM,
          title: "Domestic Standard Platform",
        },
        {
          href: PATH.LEAGUES_ATHOME_SOCIAL_STANDARD_PLATFORM,
          title: "Social Standard Platform",
        },
      ],
    },
    {
      pathname: PATH.LEAGUES_INDUSTRIAL,
      title: "RoboCupIndustrial",
      descriptions: [{ text: "주니어!" }],
      child: [
        {
          href: PATH.LEAGUES_INDUSTRIAL_ROBOCUP_ATWORK,
          title: "RoboCup@Work",
        },
        {
          href: PATH.LEAGUES_INDUSTRIAL_LOGISTICS,
          title: "Logistics",
        },
      ],
    },
  ];

  const league = leagues.map((league) => {
    if (league.pathname === pathname) {
      return (
        <>
          <div className="text-center fade-in">
            <Title>{league.title}</Title>
            <Subtitle>로보컵 리그</Subtitle>
          </div>

          <div className="flex flex-col lg:flex-row">
            <div className="fade-in w-full lg:w-3/5 mb-10">
              <img className="w-full" src={`${league.img}`} alt="Not Founded" />
            </div>

            <div className="w-full lg:w-2/5 lg:ml-5 overflow-hidden">
              {league.descriptions.map((description, index) => (
                <Description
                  key={index}
                  text={description.text}
                  index={index}
                />
              ))}
            </div>
          </div>

          <div className="flex flex-row justify-center gap-40 md:gap-60 overflow-hidden">
            {league.child.map((childLeague, index) => (
              <ChildLink
                key={index}
                href={childLeague.href}
                title={childLeague.title}
                index={index}
              />
            ))}
          </div>
        </>
      );
    }
  });

  return <Container>{league}</Container>;
}
