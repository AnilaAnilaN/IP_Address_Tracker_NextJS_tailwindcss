'use client';

import { InfoPanelProps } from '@/types';

export default function InfoPanel({ data }: InfoPanelProps) {
  if (!data) {
    return (
      <div className="bg-white rounded-[15px] shadow-2xl px-8 py-8 w-full">
        <div className="text-center text-gray-400">Loading...</div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-[15px] shadow-2xl w-full" style={{ padding: '32px 32px' }}>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 text-center md:text-left">
        {/* IP Address */}
        <div className="md:border-r md:border-gray-300 md:pr-8" style={{ paddingLeft: '0' }}>
          <h2 className="text-[10px] md:text-[12px] font-bold text-gray-400 tracking-[1.5px] md:tracking-[1.75px] mb-2 md:mb-3 uppercase">
            IP Address
          </h2>
          <p className="text-[20px] md:text-[26px] font-medium text-gray-950">
            {data.ip}
          </p>
        </div>

        {/* Location */}
        <div className="md:border-r md:border-gray-300 md:px-8" style={{ paddingLeft: '0' }}>
          <h2 className="text-[10px] md:text-[12px] font-bold text-gray-400 tracking-[1.5px] md:tracking-[1.75px] mb-2 md:mb-3 uppercase">
            Location
          </h2>
          <p className="text-[20px] md:text-[26px] font-medium text-gray-950 break-words">
            {[data.location.city, data.location.region, data.location.postalCode]
              .filter(item => item && item !== 'N/A')
              .join(', ') || `${data.location.region}`}
          </p>
        </div>

        {/* Timezone */}
        <div className="md:border-r md:border-gray-300 md:px-8" style={{ paddingLeft: '0' }}>
          <h2 className="text-[10px] md:text-[12px] font-bold text-gray-400 tracking-[1.5px] md:tracking-[1.75px] mb-2 md:mb-3 uppercase">
            Timezone
          </h2>
          <p className="text-[20px] md:text-[26px] font-medium text-gray-950">
            UTC {data.location.timezone}
          </p>
        </div>

        {/* ISP */}
        <div className="md:pl-8" style={{ paddingLeft: '0' }}>
          <h2 className="text-[10px] md:text-[12px] font-bold text-gray-400 tracking-[1.5px] md:tracking-[1.75px] mb-2 md:mb-3 uppercase">
            ISP
          </h2>
          <p className="text-[20px] md:text-[26px] font-medium text-gray-950 break-words">
            {data.isp}
          </p>
        </div>
      </div>
    </div>
  );
}