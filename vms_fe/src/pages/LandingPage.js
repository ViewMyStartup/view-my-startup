import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import styles from "./MainPage.module.css";
import PageNav from "components/PageNav";
import placeholder1 from "assets/images/placeHolder1.jpg";
import placeholder2 from "assets/images/placeHolder2.jpg";
import placeholder3 from "assets/images/placeHolder3.jpg";
import placeholder4 from "assets/images/placeHolder4.jpg";
import placeholder5 from "assets/images/placeHolder5.jpg";
import placeholder6 from "assets/images/placeHolder6.jpg";

const generateChartData = () => {
  return Array.from({ length: 12 }, (_, i) => ({
    month: `${i + 1} 월`,
    value: Math.floor(Math.random() * 1000000000) + 5000000,
  }));
};

const formatToBillion = (value) => {
  return `${(value / 100000000).toFixed(2)}억`;
};

const MainPage = () => {
  const [chartData, setChartData] = useState(generateChartData());
  const [currentPage, setCurrentPage] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const pageRefs = useRef([]);

  const investors = [
    {
      name: "Warren Buffett",
      role: "버크셔 해서웨이",
      image: placeholder1,
    },
    {
      name: "Ray Dalio",
      role: "브리지워터 어소시에이츠",
      image: placeholder2,
    },
    {
      name: "George Soros",
      role: "소로스 펀드 매니지먼트",
      image: placeholder3,
    },
    {
      name: "조정호",
      role: "메리츠 금융지주 회장",
      image: placeholder4,
    },
    {
      name: "Jim Simons",
      role: "르네상스 테크놀로지",
      image: placeholder5,
    },
    {
      name: "John Templeton",
      role: "르네상스 테크놀로지",
      image: placeholder6,
    },
  ];

  useEffect(() => {
    const handleResize = () => setViewportWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setChartData(generateChartData());
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = pageRefs.current.indexOf(entry.target);
          if (index !== -1 && index !== currentPage) {
            setCurrentPage(index);
          }
        }
      });
    }, observerOptions);

    pageRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      pageRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [currentPage]);

  const handleSidebarClick = (index) => {
    const targetRef = pageRefs.current[index];
    if (targetRef) {
      targetRef.scrollIntoView({ behavior: "smooth" });
    }
  };

  const pageTitles = ["1", "2", "3", "4"];

  return (
    <div className={styles.container}>
      <PageNav />
      <div className={styles.scrollContainer}>
        {pageTitles.map((title, index) => (
          <div
            key={index}
            className={styles.pageContainer}
            ref={(el) => (pageRefs.current[index] = el)}
          >
            {index === 0 && (
              <section className={styles.introSection}>
                <div className={styles.backgroundGradient}></div>
                <h2 className={styles.introTitle}>View My StartUp</h2>
                <p className={styles.introSubtitle}>
                  무궁무진한 가능성에 투자하세요
                </p>
                <Link to="/mainpage" className={styles.exploreButton}>
                  투자하기
                  <ArrowRight className={styles.arrowIcon} />
                </Link>
              </section>
            )}
            {index === 1 && (
              <section className={styles.chartSection}>
                <div>
                  <h3 className={styles.chartTitle}>라이브 투자금액 차트</h3>
                  <div className={styles.chartContainer}>
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={chartData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                        <XAxis dataKey="month" stroke="#888" />
                        <YAxis stroke="#888" tickFormatter={formatToBillion} />
                        <Tooltip
                          contentStyle={{
                            backgroundColor: "#747474",
                            border: "none",
                            borderRadius: "15px",
                          }}
                          itemStyle={{ color: "#ffffff" }}
                          formatter={(value) => formatToBillion(value)}
                          labelFormatter={(label) => `${label}`}
                        />
                        <Line
                          type="monotone"
                          dataKey="value"
                          stroke="#747474"
                          strokeWidth={2}
                          dot={{ fill: "#2e2e2e", strokeWidth: 2 }}
                          activeDot={{ r: 8 }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                  <div className={styles.chartInsights}>
                    <p>
                      현 최고 투자금액:{" "}
                      {formatToBillion(
                        Math.max(...chartData.map((data) => data.value))
                      )}
                    </p>
                  </div>
                </div>
                <div className={styles.chartTextContainer}>
                  <div className={styles.chartTextTitle}>압도적 정보량</div>
                  <div className={styles.chartTextTitle}>
                    빠른판단에 뒤따르는 빠른 업데이트
                    <br /> 고객경험의 새로운 지평을 열다.
                  </div>
                </div>
              </section>
            )}
            {index === 2 && (
              <section className={styles.statsSection}>
                <div className={styles.statsCard}>
                  <TrendingUp className={styles.statsIcon} />
                  <h3 className={styles.statsTitle}>압도적인 성장 가능성</h3>
                  <p className={styles.statsValue}>200%+</p>
                </div>
                <div className={styles.growthDetails}>
                  <h2>투자, 성장, 회수, 재투자</h2>
                  <div className={styles.growthChart}></div>
                  <div className={styles.growthCases}>
                    <h4>성장 사례</h4>
                    <p>X는 최근 6개월 동안 300% 성장하였습니다.</p>
                  </div>
                </div>
              </section>
            )}
            {index === 3 && (
              <section className={styles.investorSection}>
                <div className={styles.InvestorContainer}>
                  <h1 className={styles.InvestorTitle}>활동한 투자자들</h1>
                  <p className={styles.InvestorDescription}>
                    신뢰성있는 투자자들과 함께한 유망한 회사들
                  </p>
                  <div className={styles.InvestorGrid}>
                    {viewportWidth <= 900
                      ? investors.slice(0, 2).map((investor, index) => (
                          <div key={index} className={styles.InvestorCard}>
                            <img
                              src={investor.image}
                              alt={investor.name}
                              className={styles.InvestorImage}
                            />
                            <h2 className={styles.InvestorName}>
                              {investor.name}
                            </h2>
                            <p className={styles.InvestorRole}>
                              {investor.role}
                            </p>
                          </div>
                        ))
                      : viewportWidth <= 1200
                      ? investors.slice(0, 4).map((investor, index) => (
                          <div key={index} className={styles.InvestorCard}>
                            <img
                              src={investor.image}
                              alt={investor.name}
                              className={styles.InvestorImage}
                            />
                            <h2 className={styles.InvestorName}>
                              {investor.name}
                            </h2>
                            <p className={styles.InvestorRole}>
                              {investor.role}
                            </p>
                          </div>
                        ))
                      : investors.map((investor, index) => (
                          <div key={index} className={styles.InvestorCard}>
                            <img
                              src={investor.image}
                              alt={investor.name}
                              className={styles.InvestorImage}
                            />
                            <h2 className={styles.InvestorName}>
                              {investor.name}
                            </h2>
                            <p className={styles.InvestorRole}>
                              {investor.role}
                            </p>
                          </div>
                        ))}
                  </div>
                </div>
              </section>
            )}
          </div>
        ))}
      </div>
      <div className={styles.sidebar}>
        {pageTitles.map((title, index) => (
          <div
            key={index}
            className={`${styles.sidebarItem} ${
              currentPage === index ? styles.active : ""
            }`}
            onClick={() => handleSidebarClick(index)}
          >
            {title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainPage;
