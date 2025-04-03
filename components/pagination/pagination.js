import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export function PaginationCustom({ recentPage, lastPage, setRecentPage }) {
  const onClickPrev = () => {
    if (recentPage > 1) {
      setRecentPage((page) => page - 1);
    }
  };

  const onClickNext = () => {
    if (recentPage < lastPage) {
      setRecentPage((page) => page + 1);
    }
  };

  const setPage = (value) => () => {
    setRecentPage(value);
  };

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem onClick={onClickPrev}>
          <PaginationPrevious />
        </PaginationItem>
        {recentPage > 2 && (
          <>
            <PaginationItem onClick={setPage(1)}>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
          </>
        )}
        {recentPage !== 1 && (
          <PaginationItem onClick={setPage(recentPage - 1)}>
            <PaginationLink>{recentPage - 1}</PaginationLink>
          </PaginationItem>
        )}
        <PaginationItem>
          <PaginationLink href="#" isActive>
            {recentPage}
          </PaginationLink>
        </PaginationItem>
        {recentPage !== lastPage && (
          <PaginationItem onClick={setPage(recentPage + 1)}>
            <PaginationLink href="#">{recentPage + 1}</PaginationLink>
          </PaginationItem>
        )}
        {recentPage + 1 < lastPage && (
          <>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem onClick={setPage(lastPage)}>
              <PaginationLink href="#">{lastPage}</PaginationLink>
            </PaginationItem>
          </>
        )}
        <PaginationItem onClick={onClickNext}>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
