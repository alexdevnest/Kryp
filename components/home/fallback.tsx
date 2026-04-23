import DataTable from "@/components/DataTable";


export function CoinOverviewFallback() {
  return (
    <div id="coin-overview-fallback">
      <div className="header pt-2">
        <div className="skeleton header-image" />
        <div className="info">
          <div className="skeleton header-line-sm" />
          <div className="skeleton header-line-lg" />
        </div>
      </div>

      <div className="flex gap-2 mb-4">
        <div className="skeleton period-button-skeleton" />
        <div className="skeleton period-button-skeleton" />
        <div className="skeleton period-button-skeleton" />
        <div className="skeleton period-button-skeleton" />
        <div className="skeleton period-button-skeleton" />
      </div>

      <div className="chart">
        <div className="skeleton chart-skeleton" />
      </div>
    </div>
  );
}


export function TrendingCoinsFallback() {
  const skeletonColumns: DataTableColumn<Record<string, unknown>>[] = [
    {
      header: "Name",
      cellClassName: "name-cell",
      cell: () => (
        <div className="name-link">
          <div className="skeleton name-image" />
          <div className="skeleton name-line" />
        </div>
      ),
    },
    {
      header: "24h Price Change",
      cellClassName: "name-cell",
      cell: () => (
        <div className="flex gap-1 items-center">
          <div className="skeleton change-icon" />
          <div className="skeleton change-line" />
        </div>
      ),
    },
    {
      header: "Price",
      cellClassName: "price-cell",
      cell: () => <div className="skeleton price-line" />,
    },
  ];

  const skeletonData = Array.from({ length: 6 }, () => ({}));

  return (
    <div id="trending-coins-fallback">
      <h4>Trending Coins</h4>
      <DataTable
        columns={skeletonColumns}
        data={skeletonData}
        rowKey={(_, index) => `skeleton-${index}`}
        tableClassName="trending-coins-table"
        headerCellClassName="py-3!"
        bodyCellClassName="py-2!"
      />
    </div>
  );
}