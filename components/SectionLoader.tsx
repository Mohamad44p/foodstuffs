import { motion } from "framer-motion";

interface SectionLoaderProps {
  title: string;
  color?: string;
  height?: string;
}

const SectionLoader: React.FC<SectionLoaderProps> = ({
  title,
  color = "#4CAF50",
  height = "300px",
}) => {
  return (
    <div
      className={`flex flex-col items-center justify-center w-full`}
      style={{ height }}
    >
      <motion.div
        className="w-16 h-16 border-t-4 border-b-4 border-green-500 rounded-full"
        style={{ borderColor: color }}
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
      <h3 className="mt-4 text-xl font-semibold text-gray-700">{title}</h3>
      <p className="mt-2 text-sm text-gray-500">
        Please wait while we load the content...
      </p>
    </div>
  );
};

export default SectionLoader;
