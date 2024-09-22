'use client';

import useHistoryPurchase from './hooks/useHistoryPurchase';

export default function HistoryPurchase() {
  const { clickText } = useHistoryPurchase();

  return (
    <div>
      <span onClick={clickText}>History Purchase</span>
    </div>
  );
}
