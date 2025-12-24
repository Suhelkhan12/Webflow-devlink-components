import TabsComponent from "./tabs/tabs";
import { declareComponent } from "@webflow/react";

const TabsWebflow = declareComponent(TabsComponent, {
  name: "Tabs",
  description: "Tabs component using shadcn",
});

export default TabsWebflow;
