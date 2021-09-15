import { Button } from "react-bootstrap";

const Pagination = ({ page, setPage, isPreviousData, hasMore }) => {
  return (
    <div>
      <Button onClick={() => setPage(1)}>Reset</Button>
      <Button
        className="m-3"
        disabled={page === 1}
        onClick={() => setPage((currentPage) => Math.max(currentPage - 1, 1))}
      >
        Prev
      </Button>
      <span>Current page: {page}</span>
      <Button
        className="m-3"
        onClick={() => {
          if (!isPreviousData && hasMore) {
            setPage((currentPage) => currentPage + 1);
          }
        }}
        disabled={isPreviousData || !hasMore}
      >
        Next
      </Button>
    </div>
  );
};

export default Pagination;
