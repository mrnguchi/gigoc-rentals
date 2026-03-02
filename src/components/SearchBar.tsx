export default function SearchBar() {
  return (
    <div className="w-full px-2 ">
      <div className="soft-card  p-1 md:p-4 flex items-center gap-1">

        <input
          type="text"
          placeholder="Search by city or location"
          className="flex-1 px-4 py-2 rounded-xl text-sm focus:outline-none"
        />

        <button className="bg-[var(--primary)] text-white px-5 py-2 rounded-xl shadow-soft hover:opacity-90 transition whitespace-nowrap">
          Search
        </button>

      </div>
    </div>
  );
}