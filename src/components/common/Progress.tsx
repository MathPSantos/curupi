import { AriaProgressBarProps, useProgressBar } from "react-aria";

interface ProgressProps extends AriaProgressBarProps {
  className?: string;
  color?: string;
}

export const Progress = ({ className, ...props }: ProgressProps) => {
  const { value = 0, minValue = 0, maxValue = 100 } = props;

  let percentage = (value - minValue) / (maxValue - minValue);
  let barWidth = `${Math.round(percentage * 100)}%`;

  const { progressBarProps } = useProgressBar(props);

  return (
    <div {...progressBarProps} className="w-full">
      <div className="h-1 w-full bg-white rounded-full overflow-hidden">
        <div
          style={{ width: barWidth }}
          className="h-full bg-teal-500 rounded-full"
        />
      </div>
    </div>
  );
};
