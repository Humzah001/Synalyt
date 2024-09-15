"use client";

import React from 'react'
import Link from 'next/link'
import { FaChartLine, FaDatabase, FaBolt, FaChartBar, FaChartPie, FaArrowRight } from 'react-icons/fa'

const LandingPage = () => {
return (
<div className="flex flex-col min-h-screen">
    <header className="px-4 lg:px-6 h-14 flex items-center justify-between">
    <Link href="/" className="flex items-center justify-center">
        <FaChartLine className="h-6 w-6" />
        <span className="ml-2 text-2xl font-bold">Synalyt</span>
    </Link>
    <nav className="hidden md:flex gap-4 sm:gap-6">
        <Link href="#features" className="text-sm font-medium hover:underline underline-offset-4">
        Features
        </Link>
        <Link href="#pricing" className="text-sm font-medium hover:underline underline-offset-4">
        Pricing
        </Link>
        <Link href="#about" className="text-sm font-medium hover:underline underline-offset-4">
        About
        </Link>
        <Link href="#contact" className="text-sm font-medium hover:underline underline-offset-4">
        Contact
        </Link>
    </nav>
    <button className="md:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="3" y1="12" x2="21" y2="12"></line>
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
    </button>
    </header>
    <main className="flex-1">
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                From Data to Decisions
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Synalyt merges synthesis and analytics, transforming your raw data into actionable insights for
                e-commerce and marketing strategies.
            </p>
            </div>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none bg-primary text-primary-foreground hover:bg-primary/90 h-10 py-2 px-4">
                Get Started
            </button>
            <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 py-2 px-4">
                Learn More
            </button>
            </div>
        </div>
        </div>
    </section>
    <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">How It Works</h2>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
            <FaDatabase className="h-8 w-8 mb-2" />
            <h3 className="text-xl font-bold text-center">Data Collection</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                Upload your dataset or let us fetch relevant information based on your prompts.
            </p>
            </div>
            <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
            <FaBolt className="h-8 w-8 mb-2" />
            <h3 className="text-xl font-bold text-center">Data Preprocessing</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                We clean, transform, and prepare your data for analysis, handling errors and missing values.
            </p>
            </div>
            <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
            <FaChartBar className="h-8 w-8 mb-2" />
            <h3 className="text-xl font-bold text-center">Statistical Analysis</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                Apply advanced statistical methods to uncover patterns and correlations in your data.
            </p>
            </div>
            <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
            <FaChartPie className="h-8 w-8 mb-2" />
            <h3 className="text-xl font-bold text-center">Data Visualization</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                Create stunning visual representations of your data insights with interactive charts and graphs.
            </p>
            </div>
            <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
            <FaArrowRight className="h-8 w-8 mb-2" />
            <h3 className="text-xl font-bold text-center">Actionable Insights</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                Translate analytical findings into clear, actionable strategies for your business.
            </p>
            </div>
        </div>
        </div>
    </section>
    <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Key Features</h2>
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <li className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
            <h3 className="text-xl font-bold text-center">E-commerce Analysis</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                Analyze shopping behavior and preferences to optimize your online store.
            </p>
            </li>
            <li className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
            <h3 className="text-xl font-bold text-center">Marketing Insights</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                Gain deep consumer insights to tailor your marketing campaigns effectively.
            </p>
            </li>
            <li className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
            <h3 className="text-xl font-bold text-center">Custom Analysis</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                Specify exactly what you want to analyze, and we'll deliver targeted insights.
            </p>
            </li>
            <li className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
            <h3 className="text-xl font-bold text-center">Advanced Visualization</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                Create interactive dashboards and reports to communicate your findings effectively.
            </p>
            </li>
            <li className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
            <h3 className="text-xl font-bold text-center">Predictive Analytics</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                Use machine learning to forecast trends and make data-driven predictions.
            </p>
            </li>
            <li className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
            <h3 className="text-xl font-bold text-center">Seamless Integration</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                Easily integrate with your existing tools and data sources for comprehensive analysis.
            </p>
            </li>
        </ul>
        </div>
    </section>
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Ready to Transform Your Data?
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Join Synalyt today and start turning your raw data into powerful business decisions. Our platform is
                designed to help you uncover insights, optimize strategies, and drive growth.
            </p>
            </div>
            <div className="w-full max-w-sm space-y-2">
            <button className="w-full inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8">
                Get Started
            </button>
            <button className="w-full inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 px-8">
                Request a Demo
            </button>
            </div>
        </div>
        </div>
    </section>
    </main>
    <footer className="w-full py-6 px-4 md:px-6 border-t">
    <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2023 Synalyt. All rights reserved.</p>
        <nav className="flex gap-4 sm:gap-6 mt-4 sm:mt-0">
        <Link href="/terms" className="text-xs hover:underline underline-offset-4">
            Terms of Service
        </Link>
        <Link href="/privacy" className="text-xs hover:underline underline-offset-4">
            Privacy
        </Link>
        </nav>
    </div>
    </footer>
</div>
)
}

export default LandingPage