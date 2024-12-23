import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Adm = () => {
  const reports = Array.from({ length: 10 }, (_, i) => `Report ${i + 1}`);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen pt-16 px-4 bg-[#f5f5f5]" // Off-white background
    >
      <div className="max-w-7xl mx-auto py-6">
        <h1 className="text-3xl font-bold text-blue-600 mb-8 text-center">ADM Reports</h1>
        
        <div className="flex flex-col items-center space-y-4">
          {reports.map((report) => (
            <Button
              key={report}
              variant="outline"
              className="w-64 text-green-600 hover:text-red-600 transition-colors border-blue-300 hover:border-red-300"
              onClick={() => console.log(`Uploading ${report}`)}
            >
              Upload {report}
            </Button>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Adm;