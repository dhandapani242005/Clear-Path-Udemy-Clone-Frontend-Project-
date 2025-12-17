export default function NavBar({ searchQuery, setSearchQuery, sortOrder, setSortOrder, setShowMyCoursesModal, purchasedCount }) {
    const handleSortClick = () => {
        if (sortOrder === null) {
            setSortOrder('low-to-high');
        } else if (sortOrder === 'low-to-high') {
            setSortOrder('high-to-low');
        } else {
            setSortOrder(null);
        }
    };

    return (
        <div className="NavBar">
            <h1>CLEAR PATH</h1>
            <input 
              type="text" 
              placeholder="🔍 Search For Cources..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button onClick={handleSortClick}>
                Sort By Price {sortOrder === 'low-to-high' ? '↑' : sortOrder === 'high-to-low' ? '↓' : ''}
            </button>
            <button onClick={() => setShowMyCoursesModal(true)}>
                My Courses {purchasedCount > 0 && `(${purchasedCount})`}
            </button>
        </div>
    )
}   