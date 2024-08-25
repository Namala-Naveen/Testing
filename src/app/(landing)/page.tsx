'use client'
import { LandingCTA } from '@/designSystem/landing/LandingCTA'
import { LandingContainer } from '@/designSystem/landing/LandingContainer'
import LandingFAQ from '@/designSystem/landing/LandingFAQ'
import { LandingFeatures } from '@/designSystem/landing/LandingFeatures'
import { LandingHero } from '@/designSystem/landing/LandingHero'
import { LandingHowItWorks } from '@/designSystem/landing/LandingHowItWorks'
import { LandingPainPoints } from '@/designSystem/landing/LandingPainPoints'
import { LandingPricing } from '@/designSystem/landing/LandingPricing'
import { LandingSocialProof } from '@/designSystem/landing/LandingSocialProof'
import { LandingSocialRating } from '@/designSystem/landing/LandingSocialRating'
import { LandingTestimonials } from '@/designSystem/landing/LandingTestimonials'
import {
  EditOutlined,
  VideoCameraOutlined,
  EnvironmentOutlined,
  DollarOutlined,
  StarOutlined,
  SmileOutlined,
} from '@ant-design/icons'

export default function LandingPage() {
  const features = [
    {
      heading: 'Find Top Videographers',
      description:
        'Browse and book the best videographers to capture every precious moment of your special day.',
      icon: <VideoCameraOutlined />,
    },
    {
      heading: 'Discover Perfect Venues',
      description:
        'Explore a variety of stunning venues that suit your style and budget.',
      icon: <EnvironmentOutlined />,
    },
    {
      heading: 'Catering Services',
      description:
        'Select from a range of catering options to delight your guests with delicious food.',
      icon: <DollarOutlined />,
    },
    {
      heading: 'Professional Makeup Artists',
      description:
        'Find skilled makeup artists to ensure you look your best on your wedding day.',
      icon: <StarOutlined />,
    },
    {
      heading: 'Decoration Teams',
      description:
        'Choose from talented decoration teams to create the perfect ambiance.',
      icon: <SmileOutlined />,
    },
    {
      heading: 'Book Priests',
      description: 'Easily find and book priests to officiate your ceremony.',
      icon: <EditOutlined />,
    },
  ]

  const testimonials = [
    {
      name: 'John Doe',
      designation: 'Groom',
      content:
        'This platform made our wedding planning so much easier. We found all our vendors in one place!',
      avatar: 'https://randomuser.me/api/portraits/men/5.jpg',
    },
    {
      name: 'Jane Smith',
      designation: 'Bride',
      content:
        'I loved how easy it was to compare different services. It saved us so much time and stress.',
      avatar: 'https://randomuser.me/api/portraits/women/6.jpg',
    },
    {
      name: 'Michael Brown',
      designation: 'Groom',
      content:
        'A fantastic resource for anyone planning a wedding. Highly recommend!',
      avatar: 'https://randomuser.me/api/portraits/men/7.jpg',
    },
    {
      name: 'Emily White',
      designation: 'Bride',
      content:
        'The detailed vendor pages were incredibly helpful. We felt confident in our choices.',
      avatar: 'https://randomuser.me/api/portraits/women/27.jpg',
    },
  ]

  const navItems = [
    {
      title: 'Home',
      link: '/',
    },
    {
      title: 'Services',
      link: '/services',
    },
    {
      title: 'Contact',
      link: '/contact',
    },
  ]

  const packages = [
    {
      title: 'Basic',
      description: 'Essential tools for a simple wedding.',
      monthly: 9,
      yearly: 69,
      features: ['Access to all vendors', 'Basic support'],
    },
    {
      title: 'Premium',
      description: 'Everything you need for a perfect wedding.',
      monthly: 29,
      yearly: 249,
      features: [
        'Access to all vendors',
        'Priority support',
        'Exclusive deals',
      ],
      highlight: true,
    },
    {
      title: 'Deluxe',
      description: 'The ultimate wedding planning experience.',
      monthly: 49,
      yearly: 399,
      features: [
        'Access to all vendors',
        '24/7 support',
        'Personalized assistance',
      ],
    },
  ]

  const questionAnswers = [
    {
      question: 'How do I book a service?',
      answer:
        'Simply browse the categories, select a service, and add it to your cart. You can review and pay for your selections at checkout.',
    },
    {
      question: 'Can I compare different vendors?',
      answer:
        'Yes, you can sort services by price, rating, and other criteria to find the best options for your needs.',
    },
    {
      question: 'Is there customer support available?',
      answer:
        'Yes, we offer various levels of support depending on your package. Our Premium and Deluxe packages include priority support.',
    },
    {
      question: 'Can I cancel or change my bookings?',
      answer:
        'Yes, you can manage your bookings through your account dashboard. Please check our cancellation policy for more details.',
    },
  ]

  const logos = [
    { url: 'https://i.imgur.com/afwBIFK.png' },
    { url: 'https://i.imgur.com/LlloOPa.png' },
    { url: 'https://i.imgur.com/j8jPb4H.png' },
    { url: 'https://i.imgur.com/mJ1sZFv.png' },
  ]

  const steps = [
    {
      heading: 'Sign Up',
      description:
        'Create an account to get started with your wedding planning journey.',
    },
    {
      heading: 'Browse Services',
      description:
        'Explore various categories and find the perfect vendors for your wedding.',
    },
    {
      heading: 'Add to Cart',
      description:
        'Select and add services to your cart for easy booking and payment.',
    },
    {
      heading: 'Enjoy Your Wedding',
      description:
        'Relax and enjoy your special day knowing everything is taken care of.',
    },
  ]

  const painPoints = [
    {
      emoji: '😫',
      title: 'Overwhelming Choices',
    },
    {
      emoji: '⏳',
      title: 'Time-Consuming Research',
    },
    {
      emoji: '💸',
      title: 'Budget Management',
    },
  ]

  const avatarItems = [
    {
      src: 'https://randomuser.me/api/portraits/men/51.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/women/9.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/women/52.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/men/5.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/men/4.jpg',
    },
  ]

  return (
    <LandingContainer navItems={navItems}>
      <LandingHero
        title="Your Dream Wedding, Simplified"
        subtitle="Plan your perfect day with ease. Find and book all your wedding services in one place."
        buttonText="Get Started"
        buttonLink="/register"
        pictureUrl="https://marblism-dashboard-api--production-public.s3.us-west-1.amazonaws.com/gi0nLD-easemarriage-rL6o"
        socialProof={
          <LandingSocialRating
            avatarItems={avatarItems}
            numberOfUsers={1000}
            suffixText="from happy couples"
          />
        }
      />
      <LandingSocialProof logos={logos} title="Featured on" />
      <LandingPainPoints
        title="Wedding Planning Can Be Stressful"
        painPoints={painPoints}
      />
      <LandingHowItWorks title="How It Works" steps={steps} />
      <LandingFeatures
        id="features"
        title="All Your Wedding Needs in One Place"
        subtitle="Discover how our platform can help you plan the wedding of your dreams."
        features={features}
      />
      <LandingTestimonials
        title="What Our Users Say"
        subtitle="Hear from couples who have used our platform to plan their perfect wedding."
        testimonials={testimonials}
      />
      <LandingPricing
        id="pricing"
        title="Affordable Plans for Every Couple"
        subtitle="Choose a plan that fits your needs and budget."
        packages={packages}
      />
      <LandingFAQ
        id="faq"
        title="Frequently Asked Questions"
        subtitle="Got questions? We've got answers."
        questionAnswers={questionAnswers}
      />
      <LandingCTA
        title="Start Planning Your Dream Wedding Today"
        subtitle="Join thousands of happy couples who have simplified their wedding planning."
        buttonText="Get Started"
        buttonLink="/register"
      />
    </LandingContainer>
  )
}
