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
    <div className='container mx-auto px-4 sm:px-6 lg:px-0'>

      <div>
        <h1 className='font-bold text-3xl py-5'>
          Friendship Analytics
        </h1>
      </div>

      <div className=' justify-center my-16 shadow rounded-2xl p-10 border border-dashed border-slate-400 bg-base-200'>
        <div className='md:text-lef'>
          <h1 className='text-lg md:text-xl font-semibold text-gray-600'>By Interaction Type</h1>
        </div>

        <div className="w-full h-[300px] md:h-[400px] mt-10">

          <ResponsiveContainer width="100%" height="90%">
            <PieChart>
              <Pie
                data={data}
                innerRadius="70%"
                outerRadius="100%"
                cornerRadius={12}
                paddingAngle={5}
                dataKey="value"
                isAnimationActive={true}/>


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