export type IconType = 'gym' | 'scale' | 'weights' | 'person' | 'group' | 'nutrition';

export const SERVICES_DETAIL: {
  id: string;
  title: string;
  icon: IconType;
  whoItFor: string;
  benefits: string[];
  duration: string;
  intensity: string;
  image: string;
  imageLeft: boolean;
}[] = [
  {
    id: 'strength',
    title: 'Strength Training',
    icon: 'gym',
    whoItFor: 'Ideal for beginners to advanced members looking to build overall fitness.',
    benefits: [
      'Increases muscle mass & strength',
      'Improves posture and bone health',
      'Boosts metabolism',
      'Enhances overall performance',
    ],
    duration: '45–75 min per session',
    intensity: 'Moderate to High',
    image: '/services/Strength_training.png',
    imageLeft: true,
  },
  {
    id: 'weight-loss',
    title: 'Weight Loss Program',
    icon: 'scale',
    whoItFor: 'Designed for individuals aiming to lose body fat safely and sustainably.',
    benefits: [
      'Effective fat loss',
      'Improved endurance & stamina',
      'Better metabolic health',
      'Sustainable lifestyle habits',
    ],
    duration: '60 min per session',
    intensity: 'Moderate',
    image: '/services/Weight_loss.png',
    imageLeft: false,
  },
  {
    id: 'functional',
    title: 'Functional Training',
    icon: 'weights',
    whoItFor: 'Perfect for those who want better mobility, balance, and day-to-day strength.',
    benefits: [
      'Improves flexibility & coordination',
      'Enhances core stability',
      'Reduces injury risk',
      'Boosts overall movement efficiency',
    ],
    duration: '45–60 min per session',
    intensity: 'Low to High',
    image: '/services/Functional.png',
    imageLeft: true,
  },
  {
    id: 'personal',
    title: 'Personal Training',
    icon: 'person',
    whoItFor: 'Best for individuals who want personalized coaching and faster results.',
    benefits: [
      'One-on-one expert guidance',
      'Customized workout plans',
      'Faster & safer progress',
      'Continuous motivation & support',
    ],
    duration: '60 min per session',
    intensity: 'Low to High',
    image: '/services/Personal_training.png',
    imageLeft: false,
  },
  {
    id: 'group',
    title: 'Group Classes',
    icon: 'group',
    whoItFor: 'Great for those who enjoy training in a motivating, social environment.',
    benefits: [
      'High motivation & energy',
      'Structured group workouts',
      'Improves consistency',
      'Fun & engaging sessions',
    ],
    duration: '45–60 min per session',
    intensity: 'Moderate to High',
    image: '/services/Group_training.png',
    imageLeft: true,
  },
  {
    id: 'nutrition',
    title: 'Nutrition Guidance',
    icon: 'nutrition',
    whoItFor: 'Suitable for anyone looking to improve results through proper nutrition.',
    benefits: [
      'Better workout performance',
      'Supports fat loss & muscle gain',
      'Sustainable eating habits',
      'Improved overall health',
    ],
    duration: 'Lifestyle-based & flexible',
    intensity: '',
    image: '/services/Nutrition_guidance.png',
    imageLeft: false,
  },
];
