import React, { useContext, useMemo } from 'react';
import { Legend, Pie, PieChart, Tooltip, ResponsiveContainer } from 'recharts';
import { AllCardContext } from '../../context/AllCardProvider';

const StatsChart = () => {

  const { callHistory } = useContext(AllCardContext);

  const data = useMemo(() => {
    const counts = {
      Call: 0,
      Text: 0,
      Video: 0,
    };

    callHistory.forEach((item) => {
      if (counts[item.title] !== undefined) {
        counts[item.title]++;
      }
    });

    return [
      { name: 'Call', value: counts.Call, fill: '#00C49F' },
      { name: 'Text', value: counts.Text, fill: '#713199' },
      { name: 'Video', value: counts.Video, fill: '#F72C05' },
    ];
  }, [callHistory]);

  return (
    <div className='container mx-auto'>

      <div>
        <h1 className='font-bold text-3xl py-5'>
          Friendship Analytics
        </h1>
      </div>

      <div className='flex justify-center my-16 shadow rounded-2xl p-10 border border-dashed border-slate-300'>

        <div className="w-full h-[300px] md:h-[400px]">

          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                innerRadius="70%"
                outerRadius="100%"
                cornerRadius={10}
                paddingAngle={5}
                dataKey="value"
                isAnimationActive={true}
              />
              <Legend />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>

        </div>

      </div>

    </div>
  );
};

export default StatsChart;