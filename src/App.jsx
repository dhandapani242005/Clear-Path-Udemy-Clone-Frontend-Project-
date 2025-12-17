import { useEffect, useState } from 'react';
import B1 from './assets/B1.jpg';
import B2 from './assets/B2.jpg';
import B3 from './assets/B3.jpg';
import B4 from './assets/B4.jpg';
import B5 from './assets/B5.jpg';
import B6 from './assets/B6.jpg';
import './App.css';
import Courses from './Courses';
import NavBar from './NavBar';

function App() {
  const [courseList, setCourses] = useState([
    { image: B1, title: "React JS", sub: "React JS full course [Beginner Friendly]", price: 499, dis: 10 },
    { image: B2, title: "JavaScript", sub: "JavaScript full course [Beginner Friendly]", price: 299, dis: 25 },
    { image: B3, title: "HTML", sub: "HTML full course [Beginner Friendly]", price: 199, dis: 5 },
    { image: B4, title: "CSS", sub: "CSS full course [Beginner Friendly]", price: 399, dis: 20 },
    { image: B5, title: "Java", sub: "Java full course [Beginner Friendly]", price: 599, dis: 30 },
    { image: B6, title: "Figma", sub: "Figma full course [Beginner Friendly]", price: 99, dis: 15 },
    
  ]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState(null);
  const [purchasedCourses, setPurchasedCourses] = useState([]);
  const [showMyCoursesModal, setShowMyCoursesModal] = useState(false);

  function Hide(index) {
    const updatedCourses = courseList.filter(( j,i) => i !== index);
    setCourses(updatedCourses);
    console.log("Course removed:", index);
  }

  const filteredCourses = courseList.filter(course =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    course.sub.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedCourses = [...filteredCourses].sort((a, b) => {
    if (sortOrder === 'low-to-high') {
      return a.price - b.price;
    } else if (sortOrder === 'high-to-low') {
      return b.price - a.price;
    }
    return 0;
  });

  const [Summa , setSumma] = useState(10);

  useEffect(()=>{
    console.log('Activated...');
    console.log(Summa);
  }, [])

  return (
    <>
      <div className="NavBar">
        <NavBar 
          searchQuery={searchQuery} 
          setSearchQuery={setSearchQuery}
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
          setShowMyCoursesModal={setShowMyCoursesModal}
          purchasedCount={purchasedCourses.length}
        />
      </div>

      {showMyCoursesModal && (
        <div className="modal-overlay" onClick={() => setShowMyCoursesModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>My Courses</h2>
              <button className="close-btn" onClick={() => setShowMyCoursesModal(false)}>×</button>
            </div>
            <div className="modal-body">
              {purchasedCourses.length === 0 ? (
                <p className="no-courses">No courses purchased yet</p>
              ) : (
                <div className="purchased-courses-list">
                  {purchasedCourses.map((course, index) => (
                    <div key={index} className="purchased-course-item">
                      <img src={course.image} alt={course.title} />
                      <div className="course-details">
                        <h3>{course.title}</h3>
                        <p>{course.sub}</p>
                        <p className="price">₹{course.finalPrice}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <div className="container">
        {sortedCourses.map((course, index) => (
          <Courses
            key={index}
            image={course.image}
            title={course.title}
            sub={course.sub}
            price={course.price}
            dis={course.dis}
            hide={() => Hide(index)}
            onPurchase={(finalPrice) => {
              setPurchasedCourses([...purchasedCourses, { ...course, finalPrice }]);
            }}
          />
        ))}
      </div>

    </>
  );
}

export default App;
