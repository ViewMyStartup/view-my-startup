"use client";

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  TrendingUp,
  Users,
  DollarSign,
  BarChart3,
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

const generateChartData = () => {
  return Array.from({ length: 12 }, (_, i) => ({
    month: `${i + 1} 월`,
    value: Math.floor(Math.random() * 1000000000) + 5000000,
  }));
};

const formatToBillion = (value) => {
  return `${(value / 100000000).toFixed(2)}억`;
};

export default function MainPage() {
  const [chartData, setChartData] = useState(generateChartData());

  useEffect(() => {
    const interval = setInterval(() => {
      setChartData(generateChartData());
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.pageContainer}>
      <div className={styles.backgroundGradient}></div>

      <PageNav />

      <main className={styles.mainContent}>
        <section className={styles.introSection}>
          <h2 className={styles.introTitle}>미래를 향한 투자</h2>
          <p className={styles.introSubtitle}>
            무궁무진한 가능성의 스타트업에 투자하세요
          </p>
            <Link to="/" className={styles.exploreButton}>
              투자하기
              <ArrowRight className={styles.arrowIcon} />
            </Link>
        </section>

        <section className={styles.chartSection}>
          <h3 className={styles.chartTitle}>라이브 투자금액 차트</h3>
          <div className={styles.chartContainer}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                <XAxis dataKey="month" stroke="#888" />
                <YAxis
                  stroke="#888"
                  tickFormatter={formatToBillion} // Y축 라벨을 억 단위로 변환
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#747474",
                    border: "none",
                    borderRadius: "15px",
                  }}
                  itemStyle={{ color: "#ffffff" }}
                  formatter={(value) => formatToBillion(value)} // 오직 값을 변환하여 표시
                  labelFormatter={(label) => `${label}`} // 라벨을 그대로 유지
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
        </section>

        <section className={styles.statsSection}>
          {[
            {
              icon: TrendingUp,
              title: "성장 가능성",
              value: "200%+",
            },
            { icon: Users, title: "활동한 투자자들", value: "10,000+" },
            { icon: DollarSign, title: "총 투자량", value: "100억+" },
            { icon: BarChart3, title: "함께한 스타트업", value: "30+" },
          ].map((item, index) => (
            <div
              key={index}
              className={styles.statsCard}
              style={{ animationDelay: `${(index + 9) * 200}ms` }}
            >
              <item.icon className={styles.statsIcon} />
              <h3 className={styles.statsTitle}>{item.title}</h3>
              <p className={styles.statsValue}>{item.value}</p>
            </div>
          ))}
        </section>
      </main>

      <div className={styles.footerGradient}></div>
    </div>
  );
}
