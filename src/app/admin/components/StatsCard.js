// src/app/admin/components/StatsCard.js

"use client"
import { Card, CardContent } from "../../../components/ui/Card";

const StatsCard = ({ icon, title, value }) => {
  return (
    <Card className="w-full p-4 shadow-md border border-gray-200 rounded-lg bg-white">
      <CardContent className="flex items-center space-x-4">
        <span className="text-4xl">{icon}</span>
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-2xl font-bold">{value}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default StatsCard;
