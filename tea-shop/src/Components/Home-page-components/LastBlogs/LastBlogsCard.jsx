import { MdArrowRightAlt } from "react-icons/md";
import ReadMoreButton from "../../Buttons-components/ReadMoreButton";

// TODO:nepamiršk permesti į mock serverį :D
const blogs = [
  {
    title: "How to steep tea like a pro",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique consequatur laborum iusto, consequuntur ipsa quas dicta quibusdam fuga architecto excepturi. Deserunt sit modi nobis voluptatibus recusandae, ut quas voluptatem distinctio corrupti molestiae at velit odit nam vel aliquid aut sunt.",
    image: "images/how-to-steep-tea.png",
    id: 1,
  },
  {
    title: "All about tea aromas",
    description:
      " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur aliquam cupiditate alias porro incidunt amet ipsam recusandae! Illo modi debitis earum expedita possimus, ullam quisquam laboriosam nostrum esse ea voluptatem commodi eum ipsam eligendi quas quia? Nulla animi saepe itaque quas voluptates necessitatibus illum, eaque assumenda, odit dignissimos nesciunt.Itaque.",
    image: "images/all-about-tea.png",
    id: 3,
  },
];

function LastBlogsCard() {
  return (
    <>
      {blogs &&
        blogs.map((blog) => (
          <div className=" mb-8 flex flex-wrap justify-center" key={blog.id}>
            <img
              className="w-[250px] h-[250px] sm:w-[300px] sm:h-auto object-contain mb-4 sm:mb-0"
              src={blog.image}
              alt={blog.title}
            />
            <div className=" ps-2 sm:ps-10">
              <h4 className="text-lg sm:text-2xl mb-3">{blog.title}</h4>
              <p className="max-w-[300px] text-sm sm:text-base mb-3 ">
                {blog.description}
              </p>
              <ReadMoreButton />
            </div>
          </div>
        ))}
    </>
  );
}

export default LastBlogsCard;
