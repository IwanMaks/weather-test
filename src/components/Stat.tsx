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
      <p className="text-gray-400 text-lg">{label}</p>
      <p className="text-gray-800 text-lg">{value}</p>
    </>
  );
};
