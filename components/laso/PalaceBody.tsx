import Star from "./Star";

interface StarData {
  Name: string;
  Status?: string;
  type: "major" | "good" | "bad";
}

interface PalaceBodyProps {
  palace: {
    ChinhTinh?: Array<{
      Name: string;
      Status?: string;
    }>;

    Saotot?: Array<{
      Name: string;
      Status?: string;
    }>;

    Saoxau?: Array<{
      Name: string;
      Status?: string;
    }>;
  };
}

export default function PalaceBody({
  palace,
}: PalaceBodyProps) {

  // =========================
  // Chính tinh
  // =========================

  const majorStars: StarData[] = (palace.ChinhTinh ?? []).map((star) => ({
    ...star,
    type: "major",
  }));

  // =========================
  // Phụ tinh
  // =========================

  const otherStars: StarData[] = [
    ...(palace.Saotot ?? []).map((star) => ({
      ...star,
      type: "good" as const,
    })),

    ...(palace.Saoxau ?? []).map((star) => ({
      ...star,
      type: "bad" as const,
    })),
  ];

  const half = Math.ceil(otherStars.length / 2);

  const leftStars = otherStars.slice(0, half);
  const rightStars = otherStars.slice(half);

  return (
    <div className="flex h-full flex-col">

      {/* ========================= */}
      {/* Chính tinh */}
      {/* ========================= */}

      {majorStars.length > 0 && (
        <>
          <div className="flex flex-col items-center py-1">

            {majorStars.map((star) => (
              <Star
                key={`major-${star.Name}`}
                name={star.Name}
                status={star.Status}
                type="major"
              />
            ))}

          </div>

          <div className="mx-2 mb-1 border-b border-yellow-700/60" />
        </>
      )}

      {/* ========================= */}
      {/* Phụ tinh */}
      {/* ========================= */}

      <div className="grid flex-1 grid-cols-2 gap-x-3 px-1">

        <div className="space-y-[1px]">

          {leftStars.map((star) => (
            <Star
              key={`${star.type}-${star.Name}`}
              name={star.Name}
              status={star.Status}
              type={star.type}
            />
          ))}

        </div>

        <div className="space-y-[1px]">

          {rightStars.map((star) => (
            <Star
              key={`${star.type}-${star.Name}`}
              name={star.Name}
              status={star.Status}
              type={star.type}
            />
          ))}

        </div>

      </div>

    </div>
  );
}