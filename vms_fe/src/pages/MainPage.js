import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  TrendingUp,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
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
import placeholder from "assets/images/placeholder.jpg";

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
      image: placeholder,
    },
    {
      name: "Ray Dalio",
      role: "브리지워터 어소시에이츠",
      image: placeholder,
    },
    {
      name: "George Soros",
      role: "소로스 펀드 매니지먼트",
      image: placeholder,
    },
    {
      name: "조정호",
      role: "메리츠 금융지주 회장",
      image: placeholder,
    },
    {
      name: "Jim Simons",
      role: "르네상스 테크놀로지",
      image: placeholder,
    },
    {
      name: "John Templeton",
      role: "르네상스 테크놀로지",
      image: placeholder,
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

  const pageTitles = ["1", "2", "3", "4", "5", "6"];

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
                  무궁무진한 가능성의 스타트업에 투자하세요
                </p>
                <Link to="/" className={styles.exploreButton}>
                  투자하기
                  <ArrowRight className={styles.arrowIcon} />
                </Link>
              </section>
            )}
            {index === 1 && (
              <section className={styles.chartSection}>
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
                  <h4>신뢰 가능한 성장 </h4>
                  <div className={styles.growthChart}>
                    {/* Mock Growth Chart or Graph */}
                  </div>
                  <div className={styles.growthCases}>
                    <h4>성장 사례</h4>
                    <p>스타트업 X는 최근 6개월 동안 300% 성장하였습니다.</p>
                  </div>
                </div>
              </section>
            )}
            {index === 3 && (
              <section className={styles.investorSection}>
                <div className={styles.InvestorContainer}>
                  <h1 className={styles.InvestorTitle}>활동한 투자자들</h1>
                  <p className={styles.InvestorDescription}>
                    신뢰성있는 투자자들과 함께한 엄선된 회사들
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
            {index === 4 && (
              <section className={styles.statsSection}>
                <div></div>
              </section>
            )}
            {index === 5 && (
              <section className={styles.statsSection}>
                <h3 className={styles.statsTitle}>함께한 스타트업</h3>
                <div className={styles.startupsList}>
                  <div className={styles.startupItem}>
                    <h4>스타트업 A</h4>
                    <p>설명: 혁신적인 기술 스타트업.</p>
                  </div>
                  <div className={styles.startupItem}>
                    <h4>스타트업 B</h4>
                    <p>설명: 지속 가능한 에너지 스타트업.</p>
                  </div>
                </div>
                <div className={styles.futurePlans}>
                  <h4>미래 계획</h4>
                  <p>우리는 다음 분기에 새로운 스타트업과 협력할 계획입니다.</p>
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
