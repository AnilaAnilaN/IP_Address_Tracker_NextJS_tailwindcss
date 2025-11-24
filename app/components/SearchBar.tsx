'use client';

import { useState, FormEvent } from 'react';
import Image from 'next/image';
import { SearchBarProps } from '@/types';

export default function SearchBar({ onSearch, isLoading }: SearchBarProps) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
    }
  };

  return (
    <div className="w-full px-4 md:px-0 max-w-[555px]">
      <form 
        onSubmit={handleSubmit} 
        className="flex w-full h-[58px] bg-white rounded-[15px] shadow-lg"
      >
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for any IP address or domain"
          disabled={isLoading}
          className="flex-1 pl-6 pr-4 bg-transparent text-[18px] text-gray-950 placeholder:text-gray-400 focus:outline-none disabled:opacity-50 rounded-l-[15px]"
          style={{ 
            paddingLeft: '24px',
            textIndent: '0'
          }}
        />
        <button
          type="submit"
          disabled={isLoading}
          className="w-[58px] bg-black hover:bg-gray-950 disabled:opacity-50 transition-colors flex items-center justify-center flex-shrink-0 rounded-r-[15px]"
          aria-label="Search"
        >
          <Image
            src="/images/icon-arrow.svg"
            alt=""
            width={11}
            height={14}
          />
        </button>
      </form>
    </div>
  );
}