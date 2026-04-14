import React from 'react';

const StatsChart = () => {
    return (
        <div className='container mx-auto'>
            <div>
                <h1 className='font-bold text-3xl py-5'>Friendship Analytics</h1>
            </div>

             <PieChart
      style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }}
      responsive
      margin={{
        top: 50,
        right: 120,
        bottom: 0,
        left: 120,
      }}
    >
      <Pie
        activeShape={renderActiveShape}
        data={data}
        cx="50%"
        cy="50%"
        innerRadius="60%"
        outerRadius="80%"
        fill="#8884d8"
        dataKey="value"
        isAnimationActive={isAnimationActive}
      />
      <Tooltip content={() => null} defaultIndex={defaultIndex} />
      <RechartsDevtools />
    </PieChart>
        </div>
    );
};

export default StatsChart;