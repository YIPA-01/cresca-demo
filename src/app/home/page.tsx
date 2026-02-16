'use client'
import { NavBar } from "@/components/ui/tubelight-navbar";
import { Home, User, Briefcase, FileText, CheckCircle2, Clock, Zap, GraduationCap } from "lucide-react";
import * as React from 'react';
import Image from 'next/image';
import { FloatingIconsHero, type FloatingIconsHeroProps } from "./_components/floating-icons-hero-section";
import { Footer } from "@/components/blocks/footer-section";
import { DestinationCard } from "@/components/ui/card-21";
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { TestimonialsColumn } from "@/components/blocks/testimonials-columns-1";
import { AnimatePresence, motion } from "framer-motion"; // Changed from 'motion/react' to standard 'framer-motion'
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect"
import * as PricingCard from '@/components/ui/pricing-card';

// --- Data ---
const courseItems = [
    {
        id: 1,
        title: "Virtual World Tour",
        description: "An advanced, conversation-driven course for confident speakers who love global topics and deep discussions.",
        imageSrc: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1200&auto=format&fit=crop",
    },
    {
        id: 2,
        title: "English Basics",
        description: "A simple, beginner-friendly course for learners who are still building confidence with English.",
        imageSrc: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=1200&auto=format&fit=crop",
    },
    {
        id: 3,
        title: "The Weekly Brief",
        description: "A news-based English course for anyone who wants to stay informed while improving their language skills.",
        imageSrc: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1200&auto=format&fit=crop",
    },
    {
        id: 4,
        title: "Conversational English",
        description: "A relaxed, discussion-based course for anyone who wants to speak more naturally and confidently in English.",
        imageSrc: "https://images.unsplash.com/photo-1543269664-76bc3997d9ea?q=80&w=1200&auto=format&fit=crop",
    },
];

const pricingPlans = [
    {
        name: "Starter Trial",
        price: "0",
        period: "One Time",
        description: "Perfect for new students who want to try our method.",
        cta: "Book Free Trial Now",
        details: [
            { label: "Includes", value: "1 X 15 Minutes" },
            { label: "Duration", value: "One Time" },
            { label: "Standard Price", value: "$0" },
            { label: "Launch Discount", value: "$0", highlight: true }
        ]
    },
    {
        name: "Once-off Lesson",
        price: "30",
        period: "1 Month",
        description: "Perfect for students who prefer no commitment",
        cta: "Enroll Now",
        details: [
            { label: "Includes", value: "1 X 45 Minutes" },
            { label: "Duration", value: "One Time" },
            { label: "Standard Price", value: "$30" },
            { label: "Launch Discount", value: "$25", highlight: true }
        ]
    },
    {
        name: "Flex Plan",
        price: "110",
        period: "1 Month",
        description: "Perfect for light, flexible learning – 1 session/week",
        cta: "Enroll Now",
        details: [
            { label: "Includes", value: "1 X 45 Minutes" },
            { label: "Duration", value: "One Month" },
            { label: "Standard Price", value: "$110" },
            { label: "Launch Discount", value: "$95", highlight: true }
        ]
    }
];

// --- Flag Icon Components ---
const FlagIcon = ({ countryCode, ...props }: { countryCode: string } & React.HTMLAttributes<HTMLDivElement>) => (
    <div {...props} className={`relative w-full h-full ${props.className || ''}`}>
        <Image src={`https://flagcdn.com/${countryCode}.svg`} alt={`${countryCode} flag`} fill className="object-contain rounded-sm" />
    </div>
);

const demoIcons: FloatingIconsHeroProps['icons'] = [
    { id: 1, icon: (p) => <FlagIcon countryCode="us" {...p} />, className: 'top-[10%] left-[10%] ' },
    { id: 2, icon: (p) => <FlagIcon countryCode="gb" {...p} />, className: 'top-[20%] right-[8%]' },
    { id: 3, icon: (p) => <FlagIcon countryCode="jp" {...p} />, className: 'top-[80%] left-[10%]' },
    { id: 4, icon: (p) => <FlagIcon countryCode="de" {...p} />, className: 'bottom-[10%] right-[10%]' },
    { id: 5, icon: (p) => <FlagIcon countryCode="fr" {...p} />, className: 'top-[5%] left-[30%]' },
    { id: 6, icon: (p) => <FlagIcon countryCode="es" {...p} />, className: 'top-[5%] right-[30%]' },
    { id: 7, icon: (p) => <FlagIcon countryCode="it" {...p} />, className: 'bottom-[8%] left-[25%]' },
    { id: 8, icon: (p) => <FlagIcon countryCode="ca" {...p} />, className: 'top-[40%] left-[15%]' },
    { id: 9, icon: (p) => <FlagIcon countryCode="au" {...p} />, className: 'top-[75%] right-[25%]' },
    { id: 10, icon: (p) => <FlagIcon countryCode="br" {...p} />, className: 'top-[90%] left-[70%]' },
    { id: 11, icon: (p) => <FlagIcon countryCode="kr" {...p} />, className: 'top-[50%] right-[5%]' },
    { id: 12, icon: (p) => <FlagIcon countryCode="cn" {...p} />, className: 'top-[55%] left-[5%]' },
    { id: 13, icon: (p) => <FlagIcon countryCode="mx" {...p} />, className: 'top-[5%] left-[55%]' },
    { id: 14, icon: (p) => <FlagIcon countryCode="nl" {...p} />, className: 'bottom-[5%] right-[45%]' },
    { id: 15, icon: (p) => <FlagIcon countryCode="se" {...p} />, className: 'top-[25%] right-[20%]' },
    { id: 16, icon: (p) => <FlagIcon countryCode="in" {...p} />, className: 'top-[60%] left-[30%]' },
];

const navItems = [
    { name: 'Home', url: '#', icon: Home },
    { name: 'About', url: '#', icon: User },
    { name: 'Projects', url: '#', icon: Briefcase },
    { name: 'Resume', url: '#', icon: FileText }
];

const getFlagAvatar = (index: number) => {
    const IconComponent = demoIcons[index % demoIcons.length].icon;
    return (
        <div className="flex items-center justify-center w-10 h-10 rounded-full border bg-zinc-50 dark:bg-zinc-900 p-1.5 shadow-sm overflow-hidden">
            <IconComponent className="w-full h-full" />
        </div>
    );
};

const testimonials = [
    { text: "The Virtual World Tour course completely changed how I speak. I finally feel confident!", name: "Briana Patton", role: "Operations Manager", image: getFlagAvatar(0) },
    { text: "English Basics was perfect for me. The lessons were supportive and I never felt judged.", name: "Bilal Ahmed", role: "Student", image: getFlagAvatar(1) },
    { text: "The Weekly Brief is my favorite part of the week. Best way to stay informed!", name: "Saman Malik", role: "Journalist", image: getFlagAvatar(4) },
    { text: "Conversational English helped me lose my fear of speaking. The atmosphere is relaxed.", name: "Omar Raza", role: "Tech Lead", image: getFlagAvatar(10) },
    { text: "I tried many schools before, but this method is different. It’s intuitive and fun.", name: "Zainab Hussain", role: "Project Manager", image: getFlagAvatar(15) },
    { text: "The flexibility of the plans allowed me to keep learning even during busy months.", name: "Aliza Khan", role: "Business Analyst", image: getFlagAvatar(6) },
];
// We map the icons to the testimonial object


const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

// --- Methodology Card Component ---
const MethodologyCard = ({
    title,
    description,
    image,
    ctaText,
    ctaHref,
    children,
}: {
    title: string;
    description: string;
    image: string;
    ctaText: string;
    ctaHref: string;
    children?: React.ReactNode;
}) => {
    const [hovered, setHovered] = React.useState(false);
    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2] w-full p-4 relative h-[30rem] overflow-hidden"
        >

            {/* Background Image */}
            <Image
                src={image}
                alt={title}
                fill
                className="object-cover transition-transform duration-500 group-hover/canvas-card:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 group-hover/canvas-card:bg-black/20 transition-colors duration-500" />

            {/* Canvas Reveal Effect on Hover */}
            <AnimatePresence>
                {hovered && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="h-full w-full absolute inset-0 z-10"
                    >
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Content */}
            <div className="relative z-20 w-full h-full flex items-center justify-center">
                {/* Title - visible by default, fades out on hover */}
                <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-300">
                    <h3 className="text-white text-2xl font-bold tracking-tight">{title}</h3>
                </div>

                {/* Description + CTA - hidden by default, appears on hover */}
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover/canvas-card:opacity-100 transition duration-300 px-8">
                    <h2 className="text-white text-2xl font-bold mb-3">{title}</h2>
                    <p className="text-white/90 text-sm leading-relaxed mb-6 max-w-xs">{description}</p>
                    <Button
                        className="bg-white text-black hover:bg-white/90 font-semibold px-6 py-2 rounded-full shadow-lg"
                        onClick={() => window.location.href = ctaHref}
                    >
                        {ctaText}
                    </Button>
                </div>
            </div>
        </div>
    );
};

const CornerIcon = ({ className, ...rest }: any) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={className}
            {...rest}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
        </svg>
    );
};

export default function HomePage() {
    return (
        <main className="bg-background">
            <NavBar items={navItems} />

            <div className="relative">
                <FloatingIconsHero
                    title="Learn English The Easy Way"
                    subtitle="Simple, supportive online lessons designed for you"
                    ctaText="Book Your Free Trial Lesson!"
                    ctaHref="/home"
                    icons={demoIcons}
                />
                {/* Visual Fix: A smooth fade-out overlay to blend the hero into the white/dark background */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none z-30" />
            </div>



            {/* Courses Section */}
            <div className="container mx-auto px-4 py-24">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">Explore Our English Courses</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">Choose a path that fits your goals, from foundational basics to advanced global discussions.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                    {courseItems.map((item) => (
                        <DestinationCard
                            key={item.id}
                            imageUrl={item.imageSrc}
                            location={item.title}
                            stats={item.description}
                            href={`/courses/${item.id}`}
                            className="h-[400px]"
                        />
                    ))}
                </div>
            </div>


            {/* Pricing Section */}
            <div className="relative py-24 bg-black dark:bg-zinc-950/50 overflow-hidden">

                <div className="container relative z-10 mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4 text-white">Transparent Pricing</h2>
                        <p className="text-white text-center mx-auto max-w-2xl">
                            Invest in your future with flexible plans tailored to your schedule.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto ">
                        {pricingPlans.map((plan, idx) => (
                            <PricingCard.Card key={idx} className="bg-black shadow-xl">
                                <PricingCard.Header>
                                    <PricingCard.Plan>
                                        <PricingCard.PlanName>
                                            <GraduationCap className="h-5 w-5 text-orange-500" />
                                            <span className="font-bold text-xl">{plan.name}</span>
                                        </PricingCard.PlanName>
                                        {idx === 0 && <PricingCard.Badge>Popular</PricingCard.Badge>}
                                    </PricingCard.Plan>
                                    <PricingCard.Price>
                                        <PricingCard.MainPrice>${plan.price}</PricingCard.MainPrice>
                                        <PricingCard.Period>/ {plan.period}</PricingCard.Period>
                                    </PricingCard.Price>
                                    <p className="text-sm text-muted-foreground mt-2 min-h-[40px]">
                                        {plan.description}
                                    </p>
                                    <Button
                                        className={cn(
                                            'w-full mt-6 font-semibold text-white transition-all',
                                            idx === 0
                                                ? 'bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900'
                                                : 'bg-gradient-to-b from-orange-500 to-orange-600 shadow-[0_10px_25px_rgba(255,115,0,0.2)]'
                                        )}
                                    >
                                        {plan.cta}
                                    </Button>
                                </PricingCard.Header>
                                <PricingCard.Body>
                                    <PricingCard.Separator>Plan Details</PricingCard.Separator>
                                    <PricingCard.List>
                                        {plan.details.map((detail, dIdx) => (
                                            <PricingCard.ListItem key={dIdx} className="flex justify-between items-center text-sm">
                                                <span className="text-muted-foreground">{detail.label}:</span>
                                                <span className={cn(
                                                    "font-medium",
                                                    detail.highlight ? "text-orange-600 dark:text-orange-400 font-bold" : "text-foreground"
                                                )}>
                                                    {detail.value}
                                                </span>
                                            </PricingCard.ListItem>
                                        ))}
                                    </PricingCard.List>
                                </PricingCard.Body>
                            </PricingCard.Card>
                        ))}
                    </div>
                </div>
            </div>

            <section className="bg-gradient-to-b from-orange-500 to-orange-600 shadow-[0_10px_25px_rgba(255,115,0,0.2)] py-24 relative">
                <div className="container z-10 mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center justify-center max-w-[540px] mx-auto text-center"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mt-5 text-white">
                            What our users say
                        </h2>
                        <p className="mt-5 text-white/90">
                            Our students join from all over the world to master English.
                        </p>
                    </motion.div>

                    <div className="flex justify-center gap-6 mt-16 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] max-h-[740px] overflow-hidden">
                        <TestimonialsColumn testimonials={firstColumn} duration={15} />
                        <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
                        <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
                    </div>
                </div>
            </section>

            {/* Methodology Section with Canvas Reveal Cards */}
            <section className="py-24 bg-white dark:bg-black">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col items-center text-center mb-16">
                        <span className="text-orange-500 font-bold tracking-widest text-sm uppercase mb-2">Your Next Step</span>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black dark:text-white">Grow Your English Confidence</h2>
                        <p className="text-muted-foreground max-w-2xl text-lg">
                            Join <span className="text-orange-600 font-semibold italic">Cresca</span> for warm, supportive English lessons designed to help you learn, improve, and communicate with ease.
                        </p>
                    </div>

                    <div className="relative max-w-7xl mx-auto">


                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                            <MethodologyCard
                                title="Fun & Friendly"
                                description="Ditch the textbooks. Learn through laughter and real conversation in an environment that feels like chatting with a friend."
                                image="/image_2.png"
                                ctaText="Start Learning"
                                ctaHref="#pricing"
                            >
                                <CanvasRevealEffect
                                    animationSpeed={5.1}
                                    containerClassName="bg-orange-500"
                                    colors={[[255, 165, 0]]}
                                    opacities={[0.2, 0.4, 0.6, 0.8]}
                                />
                            </MethodologyCard>

                            <MethodologyCard
                                title="15-Minute Sprints"
                                description="Perfect for busy schedules. High-impact lessons that keep your brain engaged without the fatigue of long lectures."
                                image="/image_1.png"
                                ctaText="Try It Free"
                                ctaHref="#pricing"
                            >
                                <CanvasRevealEffect
                                    animationSpeed={3}
                                    containerClassName="bg-emerald-600"
                                    colors={[[16, 185, 129]]}
                                    dotSize={2}
                                />
                                <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
                            </MethodologyCard>

                            <MethodologyCard
                                title="No Wrong Answers"
                                description="Fear of making mistakes is the #1 barrier to fluency. At Cresca, every mistake is just a stepping stone to your next breakthrough."
                                image="/image_3.png"
                                ctaText="Book Free Trial"
                                ctaHref="#pricing"
                            >
                                <CanvasRevealEffect
                                    animationSpeed={3}
                                    containerClassName="bg-sky-600"
                                    colors={[[14, 165, 233]]}
                                />
                            </MethodologyCard>
                        </div>
                    </div>
                </div>
            </section>




            <Footer />
        </main>
    );
}