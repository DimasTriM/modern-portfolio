import React from "react";
import { FaCode, FaPaintBrush, FaBrain } from "react-icons/fa";

const ServiceCard = ({ icon: Icon, title, description }) => (
    <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 p-6 rounded-xl hover:bg-gray-800/80 transition-all duration-300 hover:scale-105 group">
        <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
            <Icon className="text-2xl text-blue-400 group-hover:text-blue-300" />
        </div>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400 leading-relaxed">{description}</p>
    </div>
);

export default function Service() {
    const services = [
        {
            icon: FaCode,
            title: "Web Development",
            description: "Building responsive, high-performance websites using modern technologies like React, Node.js, and Tailwind CSS."
        },

        {
            icon: FaPaintBrush,
            title: "UI/UX Design",
            description: "Designing intuitive and visually appealing interfaces that prioritize user needs and enhance engagement."
        },
        {
            icon: FaBrain,
            title: "AI Solutions",
            description: "Implementing intelligent solutions using machine learning and deep learning algorithms to solve complex problems."
        }
    ];

    return (
        <section className="min-h-screen bg-[#020617] py-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-16 animate__animated animate__fadeInDown">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                        My <span className="text-blue-400">Services</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        I offer a range of services to help you bring your ideas to life, from web development to AI-powered solutions.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate__animated animate__fadeInUp animate__delay-0.5s">
                    {services.map((service, index) => (
                        <ServiceCard key={index} {...service} />
                    ))}
                </div>
            </div>
        </section>
    );
}
