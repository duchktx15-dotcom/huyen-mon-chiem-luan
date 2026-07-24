interface StarModalProps {
  open: boolean;
  onClose: () => void;
  star: any;
}

export default function StarModal({
  open,
  onClose,
  star,
}: StarModalProps) {
  if (!open || !star) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg rounded-xl bg-neutral-900 p-6 text-white"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="mb-4 text-2xl font-bold text-yellow-400">
          {star.name}
        </h2>

        <div className="space-y-2 text-sm">

          <div>
            <strong>Hán Việt:</strong> {star.hanViet}
          </div>

          <div>
            <strong>Ngũ hành:</strong> {star.nguHanh}
          </div>

          <div>
            <strong>Loại sao:</strong> {star.type}
          </div>

          <div>
            <strong>Mô tả:</strong>
          </div>

          <p className="text-gray-300">
            {star.description}
          </p>

        </div>

        <button
          onClick={onClose}
          className="mt-6 rounded bg-yellow-500 px-4 py-2 font-semibold text-black"
        >
          Đóng
        </button>
      </div>
    </div>
  );
}