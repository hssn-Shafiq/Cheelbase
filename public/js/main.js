
const allStories = [
  {
    id: 0,
    author: "Jiane",
    imageUrl: "assets/images/3.jpg",
  },

  {
    id: 1,
    author: "Willow Grace",
    imageUrl: "assets/images/2.jpg",
  },

  {
    id: 2,
    author: "Emma Smith",
    imageUrl: "assets/images/3.jpg",
  },

  {
    id: 3,
    author: "Ruby Skye",
    imageUrl: "assets/images/4.jpg",
  },

  {
    id: 4,
    author: "Live Blogger",
    imageUrl: "assets/images/5.jpg",
  },

  {
    id: 5,
    author: "Hazel Jade",
    imageUrl: "assets/images/6.jpg",
  },

  {
    id: 6,
    author: "Eden Faith",
    imageUrl: "assets/images/7.jpg",
  },

  {
    id: 7,
    author: "Flora Maeve",
    imageUrl: "assets/images/8.jpg",
  },

  {
    id: 8,
    author: "Nathaniel Hayes",
    imageUrl: "assets/images/9.jpg",
  },

  {
    id: 9,
    author: "Everett Lee",
    imageUrl: "assets/images/10.jpg",
  },

  {
    id: 9,
    author: "Owen",
    imageUrl: "assets/images/11.jpg",
  },

  {
    id: 9,
    author: "Caleb Knox",
    imageUrl: "assets/images/12.jpg",
  },

  {
    id: 9,
    author: "Felix",
    imageUrl: "assets/images/13.jpg",
  },
];

// const stories = document.querySelector(".stories");
// // const storyThumbnails = document.querySelectorAll(".story .thumbnail"); // Select all thumbnails
// const storiesFullView = document.querySelector(".stories-full-view");
// const closeBtn = document.querySelector(".close-btn");
// const storyImageFull = document.querySelector(".stories-full-view .story img");
// const storyAuthorFull = document.querySelector(".stories-full-view .story .author");
// const nextBtn = document.querySelector(".stories-container .next-btn");
// const previousBtn = document.querySelector(".stories-container .previous-btn");
// const storiesContent = document.querySelector(".stories-container .content");
// const nextBtnFull = document.querySelector(".stories-full-view .next-btn");
// const previousBtnFull = document.querySelector(".stories-full-view .previous-btn");

// let currentActive = 0;

const Stories = () => {
  const [currentActive, setCurrentActive] = useState(null);
  
  const showFullView = (index) => {
    setCurrentActive(index);
  };

  const closeFullView = () => {
    setCurrentActive(null);
  };

  const createStories = () => {
    return (
      <div>
        <div className="stories">
          {allStories.map((story, index) => (
            <div key={index} className="story" onClick={() => showFullView(index)}>
              <img src={story.imageUrl} alt={story.author} />
              <div className="author">{story.author}</div>
            </div>
          ))}
        </div>

        {currentActive !== null && (
          <div className="stories-full-view">
            <div className="story">
              <img src={allStories[currentActive].imageUrl} alt={allStories[currentActive].author} />
              <div className="author">{allStories[currentActive].author}</div>
            </div>
            <button className="close-btn" onClick={closeFullView}>
              Close
            </button>
          </div>
        )}
      </div>
    );
  };

  return createStories();
};

export default Stories;



