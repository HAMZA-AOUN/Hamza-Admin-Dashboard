"use client";
import styles from "./pagination.module.css";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

const Pagination = ({ count }) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();
  const params = new URLSearchParams(searchParams);
  const page = searchParams.get("page") || 1;
  const ITEMS_PER_PAGE = 3;

  const hasNext =
    ITEMS_PER_PAGE * (parseInt(page) - 1) + ITEMS_PER_PAGE < count;
  const hasPrev = ITEMS_PER_PAGE * (parseInt(page) - 1) > 0;

  const handleChangePage = (type) => {
    type === "next"
      ? params.set("page", parseInt(page) + 1)
      : params.set("page", parseInt(page) - 1);
    replace(`${pathname}?${params}`);
  };

  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        disabled={!hasPrev}
        onClick={() => handleChangePage("prev")}
      >
        previous
      </button>
      <button
        className={styles.button}
        disabled={!hasNext}
        onClick={() => handleChangePage("next")}
      >
        next
      </button>
    </div>
  );
};

export default Pagination;
