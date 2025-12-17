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
    { image: B1, title: "React JS", sub: "React JS full course [Beginner Friendly]", price: 499, dis: 10 },
    { image: B2, title: "JavaScript", sub: "JavaScript full course [Beginner Friendly]", price: 299, dis: 25 },
    { image: B3, title: "HTML", sub: "HTML full course [Beginner Friendly]", price: 199, dis: 5 },
    { image: B4, title: "CSS", sub: "CSS full course [Beginner Friendly]", price: 399, dis: 20 },
    { image: B5, title: "Java", sub: "Java full course [Beginner Friendly]", price: 599, dis: 30 },
    { image: B6, title: "Figma", sub: "Figma full course [Beginner Friendly]", price: 99, dis: 15 },
    { image: B1, title: "React JS", sub: "React JS full course [Beginner Friendly]", price: 499, dis: 10 },
    { image: B2, title: "JavaScript", sub: "JavaScript full course [Beginner Friendly]", price: 299, dis: 25 },
    { image: B3, title: "HTML", sub: "HTML full course [Beginner Friendly]", price: 199, dis: 5 },
    { image: B4, title: "CSS", sub: "CSS full course [Beginner Friendly]", price: 399, dis: 20 },
    { image: B5, title: "Java", sub: "Java full course [Beginner Friendly]", price: 599, dis: 30 },
    { image: B6, title: "Figma", sub: "Figma full course [Beginner Friendly]", price: 99, dis: 15 },
    { image: B1, title: "React JS", sub: "React JS full course [Beginner Friendly]", price: 499, dis: 10 },
    { image: B2, title: "JavaScript", sub: "JavaScript full course [Beginner Friendly]", price: 299, dis: 25 },
    { image: B3, title: "HTML", sub: "HTML full course [Beginner Friendly]", price: 199, dis: 5 },
    { image: B4, title: "CSS", sub: "CSS full course [Beginner Friendly]", price: 399, dis: 20 },
    { image: B5, title: "Java", sub: "Java full course [Beginner Friendly]", price: 599, dis: 30 },
    { image: B6, title: "Figma", sub: "Figma full course [Beginner Friendly]", price: 99, dis: 15 },
    { image: B1, title: "React JS", sub: "React JS full course [Beginner Friendly]", price: 499, dis: 10 },
    { image: B2, title: "JavaScript", sub: "JavaScript full course [Beginner Friendly]", price: 299, dis: 25 },
    { image: B3, title: "HTML", sub: "HTML full course [Beginner Friendly]", price: 199, dis: 5 },
    { image: B4, title: "CSS", sub: "CSS full course [Beginner Friendly]", price: 399, dis: 20 },
    { image: B5, title: "Java", sub: "Java full course [Beginner Friendly]", price: 599, dis: 30 },
    { image: B6, title: "Figma", sub: "Figma full course [Beginner Friendly]", price: 99, dis: 15 },
    { image: B1, title: "React JS", sub: "React JS full course [Beginner Friendly]", price: 499, dis: 10 },
    { image: B2, title: "JavaScript", sub: "JavaScript full course [Beginner Friendly]", price: 299, dis: 25 },
    { image: B3, title: "HTML", sub: "HTML full course [Beginner Friendly]", price: 199, dis: 5 },
    { image: B4, title: "CSS", sub: "CSS full course [Beginner Friendly]", price: 399, dis: 20 },
    { image: B5, title: "Java", sub: "Java full course [Beginner Friendly]", price: 599, dis: 30 },
    { image: B6, title: "Figma", sub: "Figma full course [Beginner Friendly]", price: 99, dis: 15 },
  ]);

  function Hide(index) {
    const updatedCourses = courseList.filter(( j,i) => i !== index);
    setCourses(updatedCourses);
    console.log("Course removed:", index);
  }

  const [Summa , setSumma] = useState(10);

  useEffect(()=>{
    console.log('Activated...');
    console.log(Summa);
  }, [])

  return (
    <>
      <div className="NavBar">
        <NavBar />
      </div>

      <div className="container">
        {courseList.map((course, index) => (
          <Courses
            key={index}
            image={course.image}
            title={course.title}
            sub={course.sub}
            price={course.price}
            dis={course.dis}
            hide={() => Hide(index)}
          />
        ))}
      </div>

    </>
  );
}

export default App;
