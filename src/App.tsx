import CustomTabs from "./components/custom-tabs/CustomTabs";
import TabsComponent from "./components/tabs/tabs";

const App = () => {
  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-extrabold text-center text-blue-500 ">
          Tabs for Webflow
        </h1>
        <div className="mt-10">
          <h2 className="text-3xl font-bold text-center text-blue-500">
            Custom Tabs
          </h2>
          <CustomTabs />
        </div>
        <div className="mt-10">
          <h2 className="text-3xl font-bold text-center text-blue-500">
            Using ShadcnUI
          </h2>
          <TabsComponent />
        </div>
      </div>
    </section>
  );
};

export default App;
