const Pagination = () => {
  return (
    <div className="flex justify-between">
      <button className="w-24 border rounded-lg p-4 cursor-pointer button-light dark:button-dark">
        Previous
      </button>
      <button className="w-24 border rounded-lg p-4 cursor-pointer button-light dark:button-dark">
        Next
      </button>
    </div>
  );
};

export default Pagination;
