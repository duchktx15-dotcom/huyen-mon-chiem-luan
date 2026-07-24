"use client";

import { Card, CardContent } from "@/components/ui/card";

export default function BirthForm() {
  return (
    <Card className="border-yellow-500/20 bg-black/40 backdrop-blur-md">
      <CardContent className="p-8">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold text-yellow-400">
            LẬP LÁ SỐ TỬ VI
          </h1>

          <p className="text-gray-300">
            Nhập đầy đủ thông tin để lập lá số.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}