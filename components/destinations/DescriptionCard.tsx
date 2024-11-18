import { Card } from "../ui/card";

interface DescriptionCardProps {
  className?: string; // Optional additional styles for the card
  children: React.ReactNode; // Content to be rendered inside the card
}

export const DescriptionCard: React.FC<DescriptionCardProps> = ({
  children,
  className = "",
}) => {
  return (
    <Card className={`p-4 md:p-default space-y-4 text-justify ${className}`}>
      {children}
    </Card>
  );
};
