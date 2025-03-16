
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  bg: string;
}

const ServiceCard = ({ title, description, icon, bg }: ServiceCardProps) => {
  return (
    <Card className={`transition-all duration-400 hover:shadow-lg ${bg} hover:-translate-y-2`}>
      <CardHeader className="pb-2">
        <div className="flex items-center gap-4">
          {icon}
          <CardTitle className="text-xl text-blue-900">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
