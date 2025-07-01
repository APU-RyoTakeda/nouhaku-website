// src/app/history/page.tsx
'use client'; // Next.js 13以降のApp Routerでクライアントコンポーネントを使用する場合に必要

import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// スタイリングコンポーネントの定義
const HistoryContainer = styled.section`
  padding: 80px 40px;
  background-color: #f9f9f9;
  font-family: 'Inter', sans-serif; /* モダンなフォント */
  color: #333;
  overflow: hidden;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 3.5rem;
  font-weight: 700;
  color: #2c3e50;
  text-align: center;
  margin-bottom: 80px;
  letter-spacing: -0.05em;
  background: linear-gradient(90deg, #6dd5ed, #2193b0); /* グラデーションタイトル */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Timeline = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 0;

  &::after {
    content: '';
    position: absolute;
    width: 4px;
    background: linear-gradient(to bottom, #6dd5ed, #2193b0);
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -2px;
    z-index: 1; /* タイムライン線を前面に */
  }

  @media (max-width: 768px) {
    &::after {
      left: 30px;
    }
  }
`;

const TimelineItem = styled(motion.div)`
  padding: 10px 40px;
  position: relative;
  background-color: inherit;
  width: 50%;
  box-sizing: border-box; /* パディングを含めて幅を計算 */
  z-index: 2; /* アイテムをタイムライン線より前面に */

  &:nth-child(odd) {
    left: 0;
    text-align: right;
    padding-right: 60px; /* アイテムと線の間隔を調整 */
    @media (max-width: 768px) {
      width: 100%;
      padding-left: 80px;
      padding-right: 20px;
      text-align: left;
    }
  }

  &:nth-child(even) {
    left: 50%;
    padding-left: 60px; /* アイテムと線の間隔を調整 */
    @media (max-width: 768px) {
      width: 100%;
      left: 0;
      padding-left: 80px;
      padding-right: 20px;
    }
  }
`;

const TimelineContent = styled.div`
  padding: 30px;
  background-color: #fff;
  position: relative;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-left: 6px solid #6dd5ed; /* モダンな左ボーダー */

  ${TimelineItem}:nth-child(even) & {
    border-right: 6px solid #2193b0; /* 偶数番目のアイテムは右ボーダー */
    border-left: none;
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
  }
`;

const Year = styled.h3`
  font-size: 2.2rem;
  color: #2193b0;
  margin-bottom: 15px;
  font-weight: 600;
  display: flex;
  align-items: center;

  &::before {
    content: '';
    display: inline-block;
    width: 12px;
    height: 12px;
    background-color: #6dd5ed;
    border-radius: 50%;
    margin-right: 15px; /* モダンな点 */
    ${TimelineItem}:nth-child(odd) & {
      margin-left: auto; /* 右寄せ時の調整 */
      margin-right: 0;
      order: 1; /* 年号の後に点を配置 */
    }
  }

  ${TimelineItem}:nth-child(odd) & {
    flex-direction: row-reverse; /* 右寄せ */
  }
`;

const EventList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const EventItem = styled.li`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 10px;
  color: #555;
  position: relative;
  padding-left: 20px;

  &::before {
    content: '•'; /* ドット箇条書き */
    color: #2193b0;
    font-size: 1.5rem;
    position: absolute;
    left: 0;
    top: -2px;
  }
`;

const Subtitle = styled.p`
  font-size: 1.3rem;
  font-weight: 500;
  color: #666;
  text-align: center;
  margin-bottom: 60px;
`;

// アニメーションバリアント
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const HistoryPage: React.FC = () => {
  const historyData = [
    {
      year: 2011,
      events: [
        'スギッチファンド助成金採択',
        '秋田県森づくり県民提案事業補助金獲得',
      ],
      description: '地域活動の基盤を築き、持続可能な発展に向けた第一歩を踏み出しました。',
    },
    {
      year: 2014,
      events: [
        '藤里町みんなでまちづくり事業補助金',
        '藤沢市鵠沼海岸商店街との交流のための助成金',
      ],
      description: '地域外との連携を開始し、新たな可能性を模索しました。',
    },
    {
      year: 2017,
      events: [
        '農水省農泊推進事業交付金採択',
        '米代川水系サクラマス協議会サクラマス養殖業務委託事業',
      ],
      description: '農泊事業を本格的に始動し、地域資源を最大限に活用した観光体験を提供開始。',
    },
    {
      year: 2020,
      events: [
        '秋田県GT拠点育成事業（業務委託）',
        '林野庁森林・山村多面的機能発揮対策交付金事業',
        '秋田県魅力ある里づくりモデル事業',
        '秋田県農山漁村体験施設緊急支援事業',
      ],
      description: 'パンデミックの困難に直面しながらも、多角的な事業展開と地域支援を継続。',
    },
    {
      year: 2023,
      events: [
        'JALふるさとワーキングホリデー連携',
        '農林水産省農村RMO実証事業',
        '秋田県農泊新規コンテンツ発掘調査事業',
        '農山漁村活性化部門ふるさと秋田農林水産大賞・農林水産大臣賞受賞',
      ],
      description: '活動が国内外で高く評価され、日本の農山漁村活性化を牽引する存在へと成長。',
    },
  ];

  return (
    <HistoryContainer>
      <SectionTitle
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        私たちの軌跡
      </SectionTitle>
      <Subtitle>
        地域と共に築き上げてきた、挑戦と成長のストーリー
      </Subtitle>

      <Timeline>
        {historyData.map((data, index) => (
          <TimelineItem
            key={data.year}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }} // 画面に入ったら一度だけアニメーション
          >
            <TimelineContent>
              <Year>{data.year}</Year>
              <p>{data.description}</p>
              <EventList>
                {data.events.map((event, eventIndex) => (
                  <EventItem key={eventIndex}>{event}</EventItem>
                ))}
              </EventList>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </HistoryContainer>
  );
};

export default HistoryPage;