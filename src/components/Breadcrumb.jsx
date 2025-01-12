import { ChevronsRight } from "lucide-react";

export const Breadcrumb = () => {
  return (
    <div className="flex items-center gap-1 text-sm text-gray-500 mb-4">
      <span>Cryptocurrencies</span>
      <span>
        <ChevronsRight size={15} />
      </span>
      <span className="text-gray-900 font-semibold">Bitcoin</span>
    </div>
  );
};
