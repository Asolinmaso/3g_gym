'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const REQUIREMENTS = [
  {
    icon: '/blueprint-1.png',
    title: 'Area Requirement',
    value: 'Minimum 2500 Sq. Ft.',
  },
  {
    icon: '/blueprint-2.png',
    title: 'Initial Investment',
    value: '30 - 35 Lakhs',
  },
  {
    icon: '/blueprint-3.png',
    title: 'ROI Timeline',
    value: '24 - 36 Months',
  },
];

export default function FranchiseBlueprint() {
  return (
    <section className="franchise-blueprint">
      <div className="franchise-blueprint__layout">
        {/* Left Side - Images */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="franchise-blueprint__left"
        >
          {/* Red Sidebar Element */}
          <div className="franchise-blueprint__sidebar-element" />

          {/* Main Image - Gym Interior (Back) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="franchise-blueprint__img-main"
          >
            <div className="franchise-blueprint__img-container">
              <Image
                src="/two.jpeg"
                alt="Modern gym interior"
                fill
                className="franchise-blueprint__img"
              />
            </div>
          </motion.div>

          {/* Front Image - Weight Plate (Overlapping) */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="franchise-blueprint__img-sub"
          >
            <div className="franchise-blueprint__img-container">
              <Image
                src="/three.jpeg"
                alt="Weight training detail"
                fill
                className="franchise-blueprint__img"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side - Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="franchise-blueprint__right"
        >
          {/* Header Box */}
          <div className="franchise-blueprint__header">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="franchise-blueprint__header-label"
            >
              <div className="franchise-blueprint__header-line" />
              <span className="franchise-blueprint__subtitle">THE BLUEPRINT</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="franchise-blueprint__heading"
            >
              What You Need
            </motion.h2>
          </div>

          {/* Subheading */}
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="franchise-blueprint__subheading"
          >
            To <span className="franchise-blueprint__highlight">Get Started</span>
          </motion.h3>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="franchise-blueprint__description"
          >
            We look for partners who are passionate about fitness and committed to delivering a premium experience.
          </motion.p>

          {/* Requirements */}
          <div className="franchise-blueprint__requirements">
            {REQUIREMENTS.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                viewport={{ once: true }}
                className="franchise-blueprint__requirement-item"
              >
                <div className="franchise-blueprint__requirement-icon">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={36}
                    height={36}
                    className="blueprint-icon"
                  />
                </div>
                <div>
                  <p className="franchise-blueprint__requirement-title">{item.title}</p>
                  <p className="franchise-blueprint__requirement-value">{item.value}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
