export interface CardHeaderProps {
    title: string;
}

export interface FeatureCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  delay?: number;
  hoverBorderColor?: string;
}

export  interface MusicCardProps {
  category: string;
  title: string;
  artist: string;
  image: string;
  color: string;
}

export interface WorkCardProps {
    title: string;
    image: string;
    icon?: React.ReactNode;
    heading: string;
    description: string;
}