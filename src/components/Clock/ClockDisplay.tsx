
import { LabelList, Pie, PieChart } from "recharts"
import {
  ChartContainer,
  type ChartConfig,
} from "@/components/ui/chart"

const chartData = [
  { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
]

const time = 25;

const chartConfig = {
  chrome: {
    label: time,
    color: "var(--chart-3)",
  }
} satisfies ChartConfig

export default function ClockDisplay(){
  return (
     <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[350px] [&_.recharts-text]:fill-background"
        >
          <PieChart>
            <Pie data={chartData} dataKey="visitors">
              <LabelList
                dataKey="browser"
                className="fill-background"
                stroke="none"
                fontSize={25}
                formatter={(value) =>
                  chartConfig[value as keyof typeof chartConfig]?.label
                }
              />
            </Pie>
          </PieChart>
        </ChartContainer>
  )
}