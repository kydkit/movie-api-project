import { Button } from "react-bootstrap";

const Pagination = ({ page, setPage, isPreviousData, hasMore }) => {
  return (
    <div>
      <Button
        className="btn-sm m-2"
        variant="outline-secondary"
        onClick={() => setPage(1)}
      >
        Reset
      </Button>
      <Button
        className="m-2 btn-sm"
        variant="outline-secondary"
        disabled={page === 1}
        onClick={() => setPage((currentPage) => Math.max(currentPage - 1, 1))}
      >
        Prev
      </Button>
      <span>Page: {page}</span>
      <Button
        className="m-2 btn-sm"
        variant="outline-secondary"
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
