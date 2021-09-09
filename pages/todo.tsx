import Link from "next/link";
import Layout from "../components/Layout";
import TodoList from "../src/components/list";
import Edit from "../src/components/edit";

const ToDoPage = () => (
  <Layout title="ToDo | Next.js + TypeScript Example">
    <h1>ToDo</h1>
    <p>This is the todo page</p>
    <p>
      <Link href="/">
        <a>Go about</a>
      </Link>
    </p>
    <p>
      <Edit />
      <TodoList />
    </p>
    <p>
      <div className="App">
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img
            className="w-full"
            src="https://source.unsplash.com/random/1600x900/"
            alt="Sunset in the mountains"
          ></img>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div className="px-6 py-4">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
              #photography
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
              #travel
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
              #winter
            </span>
          </div>
        </div>
      </div>
    </p>
  </Layout>
);

export default ToDoPage;
