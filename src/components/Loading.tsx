export const Loading = ({ color = "bg-white", width = "w-3", height = "h-3" }) => {
  return (
    <div className={`flex items-center justify-center py-1`}>
      <div className="flex space-x-2 rtl:space-x-reverse animate-pulse">
        <div className={`${width} ${height} ${color} rounded-full`}></div>
        <div className={`${width} ${height} ${color} rounded-full`}></div>
        <div className={`${width} ${height} ${color} rounded-full`}></div>
      </div>
    </div>
  );
};
