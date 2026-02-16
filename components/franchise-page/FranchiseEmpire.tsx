'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function FranchiseEmpire() {
  return (
    <section className="franchise-empire">
      <div className="franchise-empire__inner">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="franchise-empire__content"
        >
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="franchise-empire__heading"
            >
              Build Your{' '}
              <span className="franchise-empire__accent">Fitness Empire</span>
              <br />
              At{' '}
              <span className="franchise-empire__accent">3RD GEN</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="franchise-empire__text"
          >
            We believe fitness is not just about lifting weights it's about
            building strength, confidence, and a healthier lifestyle. Our gym
            is designed to motivate you at every step, whether you're a
            beginner or a seasoned athlete. We offer a fully equipped training
            space, expert-certified trainers, and a supportive environment that
            pushes you to become the best version of yourself. From strength
            training and cardio to functional workouts and personal training, we
            focus on results-driven fitness programs tailored to your goals.          </motion.p>

          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#franchise-contact"
            className="franchise-empire__cta"
          >
            Enquire Now <span aria-hidden>&gt;&gt;&gt;</span>
          </motion.a>
        </motion.div>

        {/* Right Images */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="franchise-empire__images"
        >
          {/* Main Image - Woman with Dumbbells (one.jpeg) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="franchise-empire__img-main"
          >
            <div className="franchise-empire__img-container">
              <Image
                src="/one.jpeg"
                alt="Woman training with dumbbells"
                fill
                className="franchise-empire__img"
              />
            </div>
          </motion.div>

          {/* Top Right Image - Gym Interior (four.jpeg) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="franchise-empire__img-secondary"
          >
            <div className="franchise-empire__img-container">
              <Image
                src="/four.jpeg"
                alt="Modern gym interior"
                fill
                className="franchise-empire__img"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
