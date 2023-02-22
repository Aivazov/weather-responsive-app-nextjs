import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';

export default function SearchForm({ onSubmitAction }) {
  return (
    <div className="relative max-w-[500px] w-full m-auto flex justify-between items-center pt-4 z-10 text-white max-sm:px-10">
      <form
        onSubmit={onSubmitAction}
        className="flex justify-between items-center m-auto w-full p-3 bg-transparent border border-gray-300 rounded-2xl "
      >
        <div>
          <input
            type="text"
            autoFocus
            name="searchForm"
            autoComplete="off"
            placeholder="Search city"
            className="bg-transparent text-white border-none focus:outline-none text-xl"
          />
        </div>
        <button className="max-[356px]:hidden">
          <BsSearch size={20} />
        </button>
      </form>
    </div>
  );
}
