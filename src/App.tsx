import TabsComponent from "./components/tabs/tabs";

const App = () => {
  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-extrabold text-center text-blue-500 ">
          Tabs for Webflow
        </h1>
        <TabsComponent />
      </div>
    </section>
  );
};

export default App;
