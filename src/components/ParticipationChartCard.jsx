import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

// Sample data
const data = [
  { name: "ANC", value: 20 },
  { name: "ENC", value: 25 },
  { name: "NHQ", value: 30 },
  { name: "SNC", value: 12 },
  { name: "WNC", value: 13 },
];

const COLORS = ["#3b82f6", "#10b981", "#facc15", "#f97316", "#ec4899"];

const ParticipationChartCard = () => {
  return (
    <div className="bg-white rounded shadow p-3 text-center">
      {/* Card Header */}
      <div className="bg-[#020234] px-3 py-2 rounded-t -mt-3 -mx-3 mb-3">
        <h3 className="font-semibold text-white text-sm">
          Participation Across Commands
        </h3>
      </div>

      {/* Chart */}
      <div className="w-full flex flex-row-reverse h-56">
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              innerRadius={45}
              outerRadius={65}
              paddingAngle={2}
              dataKey="value"
              nameKey="name"
              label
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: "#ffffff",
                border: "1px solid #e5e7eb",
                fontSize: "12px",
              }}
            />
          </PieChart>
        </ResponsiveContainer>

        <div className="text-left w-28 mt-3 space-y-1 text-xs text-gray-700">
        {data.map((entry, index) => (
          <div key={entry.name} className="w-full flex items-center gap-2">
            <span
              className="w-3 h-3 rounded-full inline-block"
              style={{ backgroundColor: COLORS[index] }}
            />
            {entry.name} - {entry.value}%
          </div>
        ))}
      </div>
      </div>

      {/* Legend */}
    </div>
  )
}

export default ParticipationChartCard;