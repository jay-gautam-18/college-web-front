import { useState } from "react";

const data = [
    { label: "2019", value: 14 },
    { label: "2020", value: 26 },
    { label: "2021", value: 59 },
    { label: "2022", value: 44 },
    { label: "2023", value: 53 },
];

const chartHeight = 400;
const BarChart = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const maxVal = Math.max(...data.map((d) => d.value));

    return (
        <div className="bg-transparent md:flex  p-4 rounded">
            <h1 className="text-2xl font-bold w-2 md:w-full mb-16">Intellectual Property Rights</h1>
            <div
                className="flex items-end space-x-4 md:h-[400px] h-[300px]"
                
            >
                {data.map((d, index) => (
                    <div key={index} className="flex flex-col items-center relative">
                        <div
                            className="w-8 md:w-16 bg-black transition-all duration-500 rounded-sm cursor-pointer"
                            style={{
                                height: `${(d.value / maxVal) * chartHeight}px`,
                                minHeight: "2px",
                            }}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            {hoveredIndex === index && (
                                <div className="absolute left-1/2 -translate-x-1/2 -top-8  text-black px-2 py-1  text-xl z-10">
                                    {d.value}
                                </div>
                            )}
                        </div>
                        <span className="mt-2 text-lg text-black">{d.label}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BarChart;
