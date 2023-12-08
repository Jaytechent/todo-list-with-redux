import { ConfigProvider } from "antd";
import "./App.css";
import { HeartFilled, HeartOutlined, HeartTwoTone } from "@ant-design/icons";
import { AddTask } from "./components/AddTask";
import { FilterTask } from "./components/FilterTask";
import { ListTask } from "./components/ListTask";
import Marquee from "react-fast-marquee";

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#00b96b",
          algorithm: true,
          colorBgContainer: "#f6ffed",
        },
      }}
    >
      <Marquee className="mt-8">
        <p>
          Designed with <HeartOutlined /> <HeartTwoTone /> <HeartFilled /> by
          Jaytechent @2023 All Right Reserved.
        </p>
      </Marquee>
      <section className="flex items-center justify-center min-h-screen p-20">
        <div className="flex flex-col items-center w-fit bg-white rounded-lg shadow-lg">
          <h1 className="drop-shadow-lg font-medium text-center">
            Todo Checklist
          </h1>
          <div className="flex flex-col w-full min-h-[400px] gap-10 p-6">
            <AddTask />
            <FilterTask />
            <ListTask />
          </div>
        </div>
      </section>
    </ConfigProvider>
  );
}

export default App;
