import './Pagination.css'

export default function Pagination({ page, totalPages, onPageChange }) {
  if (totalPages <= 1) return null

  const pages = []
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i)
  }

  return (
    <div className="pagination">
      <button
        className="pagination__btn"
        disabled={page === 1}
        onClick={() => onPageChange(page - 1)}
      >
        ← Anterior
      </button>
      <div className="pagination__numbers">
        {pages.map((p) => (
          <button
            key={p}
            className={`pagination__num${p === page ? ' active' : ''}`}
            onClick={() => onPageChange(p)}
          >
            {p}
          </button>
        ))}
      </div>
      <button
        className="pagination__btn"
        disabled={page === totalPages}
        onClick={() => onPageChange(page + 1)}
      >
        Siguiente →
      </button>
    </div>
  )
}
