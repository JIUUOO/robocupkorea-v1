import { useLocation } from "react-router-dom";
import { Container, Title, Subtitle } from "../components/layouts";
import { PATH } from "../routes/path";
import "../styles/LeaguePage.css";
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

export default function LeaguePage() {
  const { pathname } = useLocation();

  const leagues = [
    {
      pathname: PATH.LEAGUES_JUNIOR_SOCCER,
      title: "Soccer",
      parent: "RoboCupJunior",
      img: "/images/RCJ_Soccer_2.jpg",
      descriptions: [
        {
          headline: `Soccer League
          (2:2 Lightweight and Open)`,
          text: `Soccer League는 매년 열리는 국제 로보컵 대회에서 두 개의 서브 리그가 있습니다. 축구 경량화(Light Weight)와 축구 오픈(Open)입니다.

          두 리그 모두 팀당 두 대의 로봇으로 진행되지만, 경량화 로봇은 카메라 없이 감지할 수 있는 적외선 볼을 사용하면서 무게 제한이 존재합니다.
          
          오렌지 골프공을 카메라로 감지해야하기 때문에 오픈 리그보다 더 정교한 소프트웨어를 요구합니다.`,
        },
        {
          headline: "Soccer Entry",
          text: `Soccer Entry(1:1 리그) 팀당 하나의 로봇으로 경쟁하는 하위 리그 입니다. 축구 엔트리는 Soccer 1:1 Standard Kit League와 Soccer 1:1 Lightweight로 구성됩니다.

          Soccer 1:1 Standard Kit League는 제한된 구성으로 처음 로봇컵에 참가하는 참가자들끼리 경쟁합니다.

          Soccer 1:1 Lightweight는 경량화된 로봇으로 경쟁합니다. 2:2 Lightweight, 2:2 Open 리그에 도전하기 전 참가하는 리그입니다.`,
        },
      ],
    },
    {
      pathname: PATH.LEAGUES_JUNIOR_ONSTAGE,
      title: "OnStage",
      parent: "RoboCupJunior",
      img: "/images/RCJ_OnStage.jpg",
      descriptions: [
        {
          headline: "RoboCupJunior OnStage",
          text: `OnStage의 팀들은 창의적이고 자율적으로 로봇들을 디자인하고, 제작하고, 프로그래밍합니다. 다양한 기술을 사용해 라이브 또는 스트리밍된 로봇 공연을 만들어 청중들에게 보여주는 것 입니다. 춤, 연극, 뮤지컬 등을 구상해 공연하는 것을 목표로 합니다.

                 OnStage는 개방적인 종목입니다. 팀들은 창의적으로 공연을 구상하고 혁신적으로 로봇을 구현해 청중들을 즐겁게 하도록 노력합니다. 모든 팀은 TDP(Technical Description Poster), 기술 시연(Technical Demonstration), 인터뷰(Technical Interview), 온스테이지 퍼포먼스(OnStage Performance) 등의 분야에서 심사를 받습니다. 모든 팀원은 7월 1일 기준 14세 이상 19세 이하여야 합니다.`,
        },
      ],
    },
    {
      pathname: PATH.LEAGUES_JUNIOR_RESCUE,
      title: "Rescue",
      parent: "RoboCupJunior",
      img: "/images/RCJ_Rescue.jpg",
      descriptions: [
        {
          headline: "RoboCupJunior Rescue",
          text: `Rescue는 탐색 및 구조 소프트웨어를 구현하는 종목입니다. 구조 시나리오를 제공받으면,
          요구조자를 탐색 및 구출하기 위한 소프트웨어를 개발해 구조자의 능력이 부여되는 지능형 에이전트 및 로봇을 구현합니다.
          주어진 환경에서 시뮬레이션을 하며 로봇의 하드웨어와 소프트웨어에 대한 객관적인 평가를 하며, 연구자 간의 협력을 목표로 합니다.
          로봇은 평평한 표면에서의 선 추적부터 고르지 않은 지형의 장애물을 통과해 안전지역에 이르기까지 복잡한 재난 시나리오에서 요구조자를 식별해 안전한 공간에 운반하는 것을 목표로 합니다.`,
        },
      ],
    },

    {
      pathname: PATH.LEAGUES_SOCCER_HUMANOID,
      title: "Humanoid",
      parent: "RoboCupSoccer",
      img: "/images/child/rcsHumanoid.png",
      descriptions: [
        {
          headline: "Humanoid League",
          text: `Humanoid League에서는 인간과 유사한 구조와 인간과 유사한 센서를 가진 자율 로봇이 서로 축구를 합니다. 일반적인 휴머노이드 로봇과는 달리 범위 센서를 사용하여 보다 정교하게 경기장을 인식합니다. 일반적인 축구 규칙을 잘 따를 수 있는 "휴머노이드" 로봇을 구현하는 것이 큰 과제 입니다.
          
          휴머노이드 리그에서 연구된 많은 주요 구현 기능 중에는 균형유지, 걷고 뛰기, 공 인식, 공을 차기, 필드 인식하기, 자기 위치 파악, 상대 로봇과 우리 팀 로봇 인식, 팀 플레이가 있습니다. Humanoid League에서는 위 기능이 구현된 세계 최고의 자율 휴머노이드 로봇 팀들이 경쟁합니다.`,
        },
        {
          headline: "Sub-Leagues",
          text: `Humanoid League는 3개의 서브리그가 있습니다.
          KidSize League, TeenSize League, AdultSize League로 각각 골키퍼를 포함해 4대, 3대, 1대 이내의 로봇이 한팀을 이루어 경쟁합니다.`,
        },
      ],
    },
    {
      pathname: PATH.LEAGUES_SOCCER_STANDARD_PLATFORM,
      title: "Standard Platform",
      parent: "RoboCupSoccer",
      img: "/images/child/rcsStandard.png",
      descriptions: [
        {
          headline: "Standard Platform League",
          text: `Standard Platform League는 모든 팀이 동일한 로봇 플랫폼을 사용하여 참여하는 축구 리그입니다. 현재는 알데바란에서 제조한 NAO 휴머노이드 로봇이 표준 플랫폼으로 사용되고 있습니다. 이 리그는 완전 자율 로봇을 위한 알고리즘 개발에 중점을 두고 있습니다.

                 매년 열리는 Standard Platform League에서 팀 축구 경기와 기술적 문제해결능력으로 경쟁합니다. RoboCup 2023에서 팀 축구는 Champion Cup 종목에서 7 대 7, Challenge Shield 종목에서 5 대 5로 진행됐습니다. 문제해결 종목에서는 시각센서 처리를 통한 축구 심판, 움직이는 공의 핸들링 판단 및 적어도 하나의 게임 내 참가가 포함됐습니다.`,
        },
      ],
    },
    {
      pathname: PATH.LEAGUES_SOCCER_MIDDLE_SIZE,
      title: "Middle Size",
      parent: "RoboCupSoccer",
      img: "/images/child/rcsMiddle.png",
      descriptions: [
        {
          headline: "Middle Soccer League",
          text: `Middle Soccer League는 5개의 완전 자율 로봇으로 한 팀을 이루어 일반 크기의 FIFA 축구공을 가지고 축구를 합니다. 팀들은 자유롭게 하드웨어를 설계할 수 있지만 모든 센서가 탑재되어야 하며 로봇에 최대 크기와 무게 제한이 있습니다. 연구의 초점은 계획 및 인식 수준에서 메카트로닉스 설계, 제어 및 다중 에이전트 협력에 있습니다.`,
        },
      ],
    },
    {
      pathname: PATH.LEAGUES_SOCCER_SMALL_SIZE,
      title: "Small Size",
      parent: "RoboCupSoccer",
      img: "/images/child/rcsSmall.png",
      descriptions: [
        {
          headline: "Small Size League",
          text: `Small Size League 또는 F180 리그는 가장 오래된 로보컵 축구 리그 중 하나입니다. 중앙 집중식/분산식 시스템을 갖춘 환경에서 지능적인 멀티 로봇/에이전트 협력 및 제어 시스템 구현에 중점을 둡니다.

Small Size League는 각각 6대의 로봇으로 한 팀을 이루어 경기합니다. 각 로봇은 F180 규칙에 명시된 치수를 따라야 합니다. 로봇은 직경 180mm 원 안에 들어맞아야 하고 15cm보다 커야 합니다. 로봇은 가로 6m, 세로 9m의 녹색 카펫이 깔린 필드에서 오렌지색 골프공을 가지고 축구를 합니다.

경기장의 모든 물체는 경기장 위에 위치한 카메라 바에 부착된 4개의 카메라에 의해 감지되고, 제공되는 데이터로 SSL-Vision이 추적합니다. SSL-Vision은 Small Size League가 제공하는 오픈 소스 프로젝트 비전 시스템입니다.

팀별 오프필드 컴퓨터가 로봇의 조정 및 제어를 처리하며, 로봇과 컴퓨터가 무선 송수신 장치로 통신합니다.`,
        },
      ],
    },
    {
      pathname: PATH.LEAGUES_SOCCER_SIMULATION,
      title: "Simulation",
      parent: "RoboCupSoccer",
      img: "/images/child/rcsSimulation.png",
      descriptions: [
        {
          headline: "Simulation League",
          text: `Simulation League는 RoboCup Soccer에서 가장 오래된 리그 중 하나입니다. 시뮬레이션 리그는 인공지능과 팀 전략에 중점을 둡니다. 독립적으로 움직이는 소프트웨어 플레이어(에이전트)는 컴퓨터 안의 가상 필드에서 축구를 합니다.
서브 리그는 2D와 3D 두 가지입니다.`,
        },

        {
          headline: "2D Simulation League",
          text: `2D Simulation League에서는 11개의 자율 소프트웨어 프로그램(에이전트)으로 구성된 두 팀이 각각 SoccerServer라고 불리는 중앙 서버의 2차원 가상 축구 경기장에서 경기를 진행합니다. 이 서버는 게임에 대한 모든 것, 즉 모든 플레이어와 공의 현재 위치, 물리 엔진 정보 등을 알고 있습니다. 서버와 각 에이전트 간의 통신이 게임을 좌우합니다. 각 플레이어는 가상 센서(시각, 음향 및 물리 엔진)의 상대적이고 환경에서 경기를 하기 위해 몇 가지 기본 명령(대시, 회전 또는 발차기)을 수행해 경기를 진행합니다.`,
        },

        {
          headline: "3D Simulation League",
          text: `3D Simulation League는 높이 차원과 더 복잡한 물리엔진을 추가함으로써 현실성을 높였습니다. 처음에 사용 가능한 로봇 모델은 구형 에이전트뿐이었습니다. 2006년에는 후지쯔 HOAP-2 로봇의 간단한 모델이 출시되었는데, 시뮬레이션 리그에서 휴머노이드 모델이 처음으로 사용된 것입니다. 3D Simulation League의 목적을 축구를 하는 전략적 행동의 설계에서 낮은 수준의 휴머노이드 로봇 설계, 개발까지 발전했습니다.`,
        },
      ],
    },

    {
      pathname: PATH.LEAGUES_RESCUE_ROBOT,
      title: "Robot",
      parent: "RoboCupRescue",
      img: "/images/child/rcrRobot.png",
      descriptions: [
        {
          headline: "USAR",
          text: `도심 수색 구조(Urban Search And Rescue) 로봇 대회의 목표는 수색 및 구조 애플리케이션과 관련된 문제를 접하고, 대표적인 환경에서 로봇 구현에 대한 객관적인 평가를 받으며, 연구자 간의 협력을 증진하는 것입니다.
          로봇이 이동성, 센서 인식, 구출 설계, 매핑 및 실제 운영자 인터페이스에서 능력을 입증하는 동시에 변수가 많은 환경에서 요구조자를 탐색해야 합니다.`,
        },
      ],
    },
    {
      pathname: PATH.LEAGUES_RESCUE_SIMULATION,
      title: "Simulation",
      parent: "RoboCupRescue",
      img: "/images/child/rcrSimulation.png",
      descriptions: [
        {
          headline: "Rescue Simulation League",
          text: `Rescue Simulation 리그의 목적은 두 가지입니다. 첫째, 시뮬레이션 시스템의 인프라를 형성하고 실제 재난상황에서 우세한 현상을 구현하는 시뮬레이터 개발을 목표로 합니다. 둘째, 재난 대응 시나리오에서 구조의 역할이 주어지는 지능형 에이전트와 로봇 개발을 목표로 합니다.

          자연 재해는 대규모의 경제적, 인적, 환경적 손실을 야기하는 사건들입니다. 자연 재해는 보통 예측하기가 어려워 발생하는 것을 방지하는 것은 훨씬 더 어렵습니다. 이러한 특성들 때문에, 자연재해가 발생했을 때 피해를 완화하기 위한 재해 관리 전략은 중요합니다.`,
        },
        {
          headline: "Agent Simulation League",
          text: `Agent Simulation League는 1995년 1월 17일 효고현을 강타한 6천 명 이상의 사망자를 낸 한신 대지진이라는 구체적인 자연 재해에 대응하여 시작된 교육 및 연구 프로젝트입니다.
                 Agent Simulation League의 목표는 아래와 같습니다.
                 1) 재난 시나리오에 대한 탐색 및 구조 작업을 수행할 때 가상의 개체 간의 분산된 조정 및 계획을 개선할 수 있는 새로운 계산 아티팩트를 개발하는 것을 목표로 합니다.
                 2) 자연재해 시나리오를 현실적으로 표현할 수 있는 시뮬레이션 소프트웨어를 연구 개발합니다.
                 3) 실무자 간의 아이디어와 경험의 교류 할 수있는 시간을 가지며 제공해 연구 개발 활동을 활성화 합니다.`,
        },

        {
          headline: "Virtual Robot League",
          text: `Virtual Robot League는 가상환경에서 실제 요구조자를 로봇으로 구출하는 시뮬레이션 리그입니다.`,
        },
      ],
    },

    {
      pathname: PATH.LEAGUES_ATHOME_OPEN_PLATFORM,
      title: "Open Platform",
      parent: "RoboCup@Home",
      img: "/images/child/rchOpen.png",
      descriptions: [
        {
          headline: "Open Platform League",
          text: `Open Platform League에서는 모든 커스텀 플랫폼이 허용됩니다.`,
        },
      ],
    },
    {
      pathname: PATH.LEAGUES_ATHOME_DOMESTIC_STANDARD_PLATFORM,
      title: "Domestic Standard Platform",
      parent: "RoboCup@Home",
      img: "/images/child/rchDomestic.png",
      descriptions: [
        {
          headline: "Domestic Standard Platform League",
          text: `Domestic Standard Platform League는 토요타사의 인간 지원 로봇(Human Support Robot) 표준 플랫폼을 사용합니다.`,
        },
      ],
    },
    {
      pathname: PATH.LEAGUES_ATHOME_SOCIAL_STANDARD_PLATFORM,
      title: "Social Standard Platform",
      parent: "RoboCup@Home",
      img: "/images/child/rchSocial.png",
      descriptions: [
        {
          headline: "Social Standard Platform League",
          text: `Social Standard Platform League는 Softbank Robotics Pepper 표준 플랫폼을 사용합니다.`,
        },
      ],
    },

    {
      pathname: PATH.LEAGUES_INDUSTRIAL_ROBOCUP_ATWORK,
      title: "RoboCup@work",
      parent: "RoboCupIndustrial",
      img: "/images/child/rciWork.png",
      descriptions: [
        {
          headline: "RoboCup@work",
          text: `RoboCup@Work는 로봇을 사용하는 업무 관련 시나리오를 제공하는 리그입니다. RoboCup@Work는 산업 및 서비스 로봇 공학의 미해결 연구 과제를 해결하기 위해 다른 로보컵 대회의 입증된 아이디어와 개념을 활용합니다. 이 리그의 도입으로 로보컵은 로봇 산업과 관련성이 높은 전통적이고 혁신적인 로봇 시나리오를 연구하는 커뮤니티와 함께합니다.`,
        },
      ],
    },
    {
      pathname: PATH.LEAGUES_INDUSTRIAL_LOGISTICS,
      title: "Logistics",
      parent: "RoboCupIndustrial",
      img: "/images/child/rciLogistics.png",
      descriptions: [
        {
          headline: "RoboCup Logistics League",
          text: `RoboCup Logistics League(RCLL)는 스마트 팩토리의 산업 시나리오에서 영감을 얻은 애플리케이션 중심 리그입니다. 많은 기계가 작업물을 정제, 조립 또는 수정하여 최종 제품을 생산하는 제조 서비스를 제공합니다. 이 새로운 패러다임에서 공장은 생산 유형 대신 여러 가지 생산 기술을 제공합니다. 이 아이디어는 소량 또는 고분산 제품에 대해서도 효율적인 비용으로 생산할 수 있도록 합니다. 이러한 공장은 로봇이 자연스러운 선택보다 유연한 물류를 필요로 합니다. RCL은 이러한 시스템에 대해 의미를 쉽게 이해할 수 있는 테스트베드와 벤치마크를 제공합니다.

          우리는 RCL을 현대 제조 산업을 위한 중심적이지만 결코 독점적이지 않은 요구 사항으로 더 큰 맥락에서 봅니다. 작업 수준 계획 및 스케줄링, 산업 생산 작업 흐름의 자동화 및 다중 로봇 시스템 통합에 대한 연구에 초점을 맞추고 있습니다. 이는 현재 로봇 연구를 위한 산업에 관심을 불러일으키고 이러한 응용 프로그램을 위한 벤치마킹 도메인을 제공하기 위한 것입니다.`,
        },
      ],
    },
  ];

  const Description = ({ headline, text }) => {
    const [ref, isIntersecting] = useIntersectionObserver({
      threshold: 0.5,
    });

    return (
      <div ref={ref} className="overflow-hidden m-5">
        <div className={` ${isIntersecting ? "slide-in-bottom" : "opacity-0"}`}>
          <div className="text-lg font-bold whitespace-pre-line">
            {headline}
          </div>
          <div className="whitespace-pre-line">{text}</div>
        </div>
      </div>
    );
  };

  const Notice = ({ title }) => {
    const [ref, isIntersecting] = useIntersectionObserver({
      threshold: 0.5,
    });

    return (
      <div
        ref={ref}
        className={`inline-block border border-black border-1 rounded-lg p-1.5 ${
          isIntersecting ? "slide-top" : "opacity-0"
        }`}
      >
        <a href={PATH.NOTICE_EVENTS}>{title} 규정 알아보기</a>
      </div>
    );
  };

  return (
    <Container>
      {leagues.map((league) => {
        if (league.pathname === pathname)
          return (
            <>
              <div
                className="bg-fixed bg-cover md:bg-contain bg-center bg-no-repeat content-end bg"
                style={{
                  backgroundImage: `url(${league.img})`,
                  height: `${league.img !== undefined ? "90vh" : "20vh"}`,
                }}
              >
                <div className="text-white fade-in w-full text-center stroke">
                  <Title>{league.title}</Title>
                  <Subtitle>{league.parent}</Subtitle>
                </div>
              </div>

              <div
                className={`${
                  league.descriptions.length === 1
                    ? "flex flex-col"
                    : "flex flex-col md:grid md:grid-cols-2"
                } border-b`}
              >
                {league.descriptions.map((description) => (
                  <Description
                    headline={description.headline}
                    text={description.text}
                  />
                ))}
              </div>
              <div className="mt-5">
                <Notice title={league.title} />
              </div>
            </>
          );
      })}
    </Container>
  );
}
