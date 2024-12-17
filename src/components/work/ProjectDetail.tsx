import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Layout, Users, Lightbulb, CheckCircle } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import Container from '../common/Container';

const projectDetails = {
  1: {
    title: 'E-commerce Redesign',
    category: 'UI/UX Design',
    client: 'TechStyle Commerce',
    duration: '3 months',
    year: '2023',
    coverImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
    description: '電商平台的完整重新設計，專注於提升用戶體驗和轉換率。',
    challenge: '原有平台存在用戶體驗問題，導致購物車放棄率高，需要重新設計以提升轉換率。',
    solution: '通過深入的用戶研究，重新設計了購物流程，簡化了結帳步驟，並優化了產品展示方式。',
    results: [
      '購物車放棄率降低45%',
      '轉換率提升30%',
      '用戶滿意度提升60%'
    ],
    process: [
      {
        title: '研究與分析',
        description: '進行用戶訪談和競品分析，識別關鍵問題點'
      },
      {
        title: '用戶流程設計',
        description: '優化購物流程，減少摩擦點'
      },
      {
        title: '視覺設計',
        description: '創建現代簡潔的視覺風格'
      },
      {
        title: '開發實現',
        description: '與開發團隊協作，確保設計完美實現'
      }
    ],
    images: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80'
    ]
  }
};

export default function ProjectDetail() {
  const { id } = useParams();
  const { t } = useLanguage();
  const project = projectDetails[Number(id)];

  if (!project) return <div>Project not found</div>;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="pt-20 pb-16"
    >
      {/* 頂部導航 */}
      <Container>
        <Link 
          to="/work"
          className="inline-flex items-center text-gray-600 hover:text-primary mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          返回作品集
        </Link>
      </Container>

      {/* 專案封面 */}
      <div className="relative h-[60vh] mb-16">
        <img
          src={project.coverImage}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <Container className="absolute bottom-0 left-0 right-0 text-white py-12">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            {project.title}
          </motion.h1>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-4 text-sm"
          >
            <span className="bg-white/20 px-3 py-1 rounded-full">
              {project.category}
            </span>
            <span className="bg-white/20 px-3 py-1 rounded-full">
              {project.year}
            </span>
            <span className="bg-white/20 px-3 py-1 rounded-full">
              {project.duration}
            </span>
          </motion.div>
        </Container>
      </div>

      {/* 專案內容 */}
      <Container>
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-4">專案概述</h2>
            <p className="text-gray-600 mb-8">{project.description}</p>
            
            <h2 className="text-2xl font-bold mb-4">挑戰</h2>
            <p className="text-gray-600 mb-8">{project.challenge}</p>
            
            <h2 className="text-2xl font-bold mb-4">解決方案</h2>
            <p className="text-gray-600">{project.solution}</p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg h-fit">
            <h3 className="text-xl font-bold mb-4">專案成果</h3>
            <ul className="space-y-3">
              {project.results.map((result, index) => (
                <li key={index} className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  {result}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 設計流程 */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">設計流程</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {project.process.map((step, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-primary font-bold">{index + 1}</span>
                </div>
                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 視覺展示 */}
        <div>
          <h2 className="text-2xl font-bold mb-8">視覺展示</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {project.images.map((image, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="rounded-lg overflow-hidden shadow-lg"
              >
                <img
                  src={image}
                  alt={`Project visual ${index + 1}`}
                  className="w-full h-64 object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </motion.div>
  );
}