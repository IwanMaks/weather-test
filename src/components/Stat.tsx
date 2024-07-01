import { ReactNode } from "react";

interface StatProps {
  icon: ReactNode;
  label: string;
  value: string;
}

export const Stat = ({ icon, label, value }: StatProps) => {
  return (
    <>
      <div className="p-1 rounded-full bg-white shadow-md w-fit flex items-center justify-center">
        {icon}
      </div>
      <div className="flex flex-col items-start space-y-1 sm:hidden">
        <p className="text-gray-400 text-lg">{label}</p>
        <p className="text-gray-800 text-lg">{value}</p>
      </div>
      <p className="text-gray-400 text-lg hidden sm:block">{label}</p>
      <p className="text-gray-800 text-lg hidden sm:block">{value}</p>
    </>
  );
};
