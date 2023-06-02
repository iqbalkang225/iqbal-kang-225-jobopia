import React, { useEffect } from 'react';
import { Card } from '../components';
import { IoIosTimer } from 'react-icons/io';
import { FiBell } from 'react-icons/fi';
import { MdOutlineCancel } from 'react-icons/md';

import { useDispatch, useSelector } from 'react-redux';
import { getStats } from '../features/job/jobSlice';
import Chart from '../components/Chart';

const Dashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStats());
  }, []);

  const { jobs } = useSelector((store) => store.search);
  //   const { pending, interview, declined } = useSelector((store) => store.job?.stats);
  const { stats, apps } = useSelector((store) => store.job);
  const { pending = 0, interview = 0, declined = 0 } = stats;

  // const getStatusCount = (jobStatus) => jobs.filter((job) => job.status === jobStatus).length

  // const calcPercentage = (jobType) => {
  //     const totalJobs = jobs.length
  //     return Math.round((jobType / totalJobs) * 100)
  // }

  // const pending =  getStatusCount('pending')
  // const interview =  getStatusCount('interview')
  // const declined =  getStatusCount('declined')

  return (
    <div className='grid sm:grid-cols-2 gap-6 md:grid-cols-3'>
      <Card className='flex flex-col'>
        <div className='p-4 pb-1 px-4 self-end'>
          <IoIosTimer className='h-[40px] w-[40px] lg:h-[36px] lg:w-[36px]' />
        </div>
        <div className='w-full h-0.5 bg-blue'></div>
        <div className='p-4 flex flex-col'>
          <p className='font-bold text-2xl'>Pending</p>
          <p className='mb-5 text-4xl font-extralight'>Applications</p>
          <h2 className='text-7xl self-center text-blue md:text-5xl lg:text-7xl'> {pending} </h2>
        </div>
      </Card>

      <Card className='flex flex-col'>
        <div className='p-4 pb-1 px-4 self-end'>
          <FiBell className='h-[40px] w-[40px] lg:h-[36px] lg:w-[36px]' />
        </div>
        <div className='w-full h-0.5 bg-magenta'></div>
        <div className='p-4 flex flex-col'>
          <p className='font-bold text-2xl'>Interviews</p>
          <p className='mb-5 text-4xl font-extralight'>Scheduled</p>
          <h2 className='text-7xl self-center text-magenta md:text-5xl lg:text-7xl'> {interview} </h2>
        </div>
      </Card>

      <Card className='flex flex-col'>
        <div className='p-4 pb-1 px-4 self-end'>
          <MdOutlineCancel className='h-[40px] w-[40px] lg:h-[36px] lg:w-[36px]' />
        </div>
        <div className='w-full h-0.5 bg-red'></div>
        <div className='p-4 flex flex-col'>
          <p className='font-bold text-2xl'>Jobs</p>
          <p className='mb-5 text-4xl font-extralight'>Declined</p>
          <h2 className='text-7xl self-center text-red md:text-5xl lg:text-7xl'> {declined} </h2>
        </div>
      </Card>

      <Card className='flex flex-col col-span-3 h-[300px] p-6'>
        <Chart data={apps} />
      </Card>
    </div>
  );
};

export default Dashboard;
