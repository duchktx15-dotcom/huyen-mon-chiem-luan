export default function Topbar() {
  return (
    <header className="h-20 border-b border-yellow-500/20 bg-black/30 backdrop-blur-xl flex items-center justify-between px-8">

      <div>

        <h2 className="text-2xl font-bold">
          Hệ thống quản trị
        </h2>

        <p className="text-sm text-gray-400 mt-1">
          HUYỀN MÔN CHIÊM LUẬN
        </p>

      </div>

      <div className="flex items-center gap-4">

        <div className="text-right">

          <p className="font-semibold">
            Đạo sĩ Nguyễn Thanh Huyền
          </p>

          <p className="text-sm text-gray-400">
            Administrator
          </p>

        </div>

        <div className="h-12 w-12 rounded-full bg-yellow-500 text-black flex items-center justify-center font-bold text-xl">
          H
        </div>

      </div>

    </header>
  );
}