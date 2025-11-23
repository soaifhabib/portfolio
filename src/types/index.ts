export interface HeaderProps {
    title: string;
    links: Array<{ label: string; url: string }>;
}

export interface FooterProps {
    copyrightText: string;
    socialLinks: Array<{ platform: string; url: string }>;
}

export interface HeroProps {
    introduction: string;
    callToAction: string;
}

export interface AboutProps {
    background: string;
    education: string;
    interests: string;
}

export interface ExperienceProps {
    experiences: Array<{
        jobTitle: string;
        company: string;
        responsibilities: string[];
    }>;
}

export interface ProjectProps {
    projects: Array<{
        title: string;
        description: string;
        link: string;
    }>;
}

export interface ContactProps {
    email: string;
    phone: string;
}