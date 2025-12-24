import CustomTabs from "./custom-tabs/CustomTabs";
import { declareComponent } from "@webflow/react";

const CustomTabsWebflow = declareComponent(CustomTabs, {
  name: "Tabs-Custom",
  description: "Tabs component using custom react code",
});

export default CustomTabsWebflow;
