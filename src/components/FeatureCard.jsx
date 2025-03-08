import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, ClipboardCheck, Users } from "lucide-react";

function FeatureCard() {
  return (
    <section className="container mx-auto px-4 py-16">
          {/* Unlimited Practice */}
          <motion.div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
            <motion.div>
              <h3 className="text-2xl font-semibold mb-4">Unlimited Practice</h3>
              <p className="text-gray-400 mb-6">
                Access comprehensive study materials and practice questions across all subjects. Our AI-powered system
                adapts to your learning pace and provides personalized practice sessions to strengthen your
                understanding.
              </p>
              <motion.div className="border border-gray-800 rounded-lg p-6">
                <svg className="w-full" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Simple line illustration of student studying */}
                  <path d="M100,100 Q150,50 200,100 T300,100" stroke="white" strokeWidth="2" fill="none" />
                  <circle cx="150" cy="80" r="30" stroke="white" strokeWidth="2" fill="none" />
                  <rect x="200" y="60" width="100" height="80" stroke="white" strokeWidth="2" fill="none" />
                </svg>
              </motion.div>
            </motion.div>

            {/* Personalized Assessment */}
            <motion.div>
              <h3 className="text-2xl font-semibold mb-4">Personalized Assessment</h3>
              <p className="text-gray-400 mb-6">
                Regular assessments tailored to your learning goals help track your progress and identify areas for
                improvement. Get detailed performance analytics and personalized recommendations.
              </p>
              <motion.div className="border border-gray-800 rounded-lg p-6">
                <svg className="w-full" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Assessment flow diagram */}
                  <path d="M50,100 H350" stroke="white" strokeWidth="2" />
                  <circle cx="100" cy="100" r="20" stroke="white" strokeWidth="2" fill="none" />
                  <circle cx="200" cy="100" r="20" stroke="white" strokeWidth="2" fill="none" />
                  <circle cx="300" cy="100" r="20" stroke="white" strokeWidth="2" fill="none" />
                </svg>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Managing Students */}
          <motion.div className="mb-24">
            <h3 className="text-2xl font-semibold mb-4">Managing students academic life</h3>
            <p className="text-gray-400 mb-6 max-w-2xl">
              Our comprehensive management system helps track assignments, deadlines, and progress across all subjects.
              Stay organized and focused on your academic goals with our intuitive tools.
            </p>
            <motion.div className="border border-gray-800 rounded-lg p-6">
              <svg className="w-full" viewBox="0 0 800 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Student management illustration */}
                <path d="M100,100 H700" stroke="white" strokeWidth="2" />
                <rect x="150" y="50" width="100" height="100" stroke="white" strokeWidth="2" fill="none" />
                <rect x="350" y="50" width="100" height="100" stroke="white" strokeWidth="2" fill="none" />
                <rect x="550" y="50" width="100" height="100" stroke="white" strokeWidth="2" fill="none" />
              </svg>
            </motion.div>
          </motion.div>

          {/* How can we help */}
          <motion.div className="bg-gray-900 rounded-lg p-8 mb-24">
            <h3 className="text-2xl font-semibold mb-4">How can we help?</h3>
            <p className="text-gray-400 mb-6">
              Our dedicated team of educators and AI tutors are here to support your academic journey. Whether you need
              help with specific subjects, exam preparation, or academic planning, we've got you covered.
            </p>
            <button className="ml-4 text-white text-lg hover:underline">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </motion.div>

          {/* Crafted for your needs */}
          <motion.div className="text-center mb-24">
            <h2 className="text-3xl font-semibold mb-8">Crafted for your all academic needs</h2>
            <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 border border-gray-800 rounded-lg">
                <BookOpen className="h-8 w-8 mb-4 mx-auto" />
                <h4 className="text-xl font-medium mb-2">Comprehensive Learning</h4>
                <p className="text-gray-400">
                  Access study materials, practice questions, and personalized assessments
                </p>
              </div>
              <div className="p-6 border border-gray-800 rounded-lg">
                <ClipboardCheck className="h-8 w-8 mb-4 mx-auto" />
                <h4 className="text-xl font-medium mb-2">Progress Tracking</h4>
                <p className="text-gray-400">Monitor your performance and track improvements over time</p>
              </div>
              <div className="p-6 border border-gray-800 rounded-lg">
                <Users className="h-8 w-8 mb-4 mx-auto" />
                <h4 className="text-xl font-medium mb-2">Expert Support</h4>
                <p className="text-gray-400">Get help from experienced educators and AI-powered tutoring</p>
              </div>
            </motion.div>
          </motion.div>
        </section>
  );
}

export default FeatureCard;
