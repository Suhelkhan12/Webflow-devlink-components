import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";

import "@/index.css";

const TabsComponent = () => {
  return (
    <div className="flex w-full flex-col mt-10">
      <Tabs defaultValue="trigger">
        <TabsList className="mb-14 flex justify-between w-full   text-white p-0 bg-foreground">
          <TabsTrigger
            value="trigger"
            className="uppercase cursor-pointer font-normal text-white data-[state=active]:text-black"
          >
            <span className="text-xl">trigger</span>
          </TabsTrigger>
          <TabsTrigger
            value="handler"
            className="uppercase cursor-pointer font-normal data-[state=active]:shadow-none bg-foreground text-white data-[state=active]:text-black transition-all"
          >
            <span className="text-xl">handler</span>
          </TabsTrigger>
          <TabsTrigger
            value="emit"
            className=" uppercase cursor-pointer font-normal data-[state=active]:shadow-none bg-foreground text-white data-[state=active]:text-black transition-all"
          >
            <span className="text-xl">emit</span>
          </TabsTrigger>
          <TabsTrigger
            value="state"
            className=" uppercase cursor-pointer font-normal data-[state=active]:shadow-none bg-foreground text-white data-[state=active]:text-black transition-all "
          >
            <span className="text-xl">state</span>
          </TabsTrigger>
          <TabsTrigger
            value="logger"
            className=" uppercase cursor-pointer font-normal data-[state=active]:shadow-none bg-foreground text-white data-[state=active]:text-black transition-all"
          >
            <span className="text-xl">logger</span>
          </TabsTrigger>
          <TabsTrigger
            value="streams"
            className=" uppercase cursor-pointer font-normal data-[state=active]:shadow-none bg-foreground text-white data-[state=active]:text-black transition-all "
          >
            <span className="text-xl">streams</span>
          </TabsTrigger>
        </TabsList>
        <TabsContent value="trigger" className="px-10">
          <Card className="p-0 border-0 rounded-none shadow-none bg-foreground text-white">
            <CardContent className="flex gap-8 px-0 ">
              <div className="flex flex-col gap-4 px-0 items-start ">
                <h2 className="text-xl">Trigger - How Execution Begins</h2>
                <p className="text-muted-foreground">
                  Every Step has a type that defines how it triggers. Change the
                  type, and the same pattern works for different use cases. A
                  Step file contains two parts:
                </p>
                <Button className="w-auto">Read Docs</Button>
              </div>
              <Tabs
                defaultValue="api-trigger"
                className="w-full bg-accent-foreground border border-muted-foreground flex flex-col gap-0"
              >
                <TabsList className="w-full flex justify-between rounded-none p-0 ">
                  <TabsTrigger
                    value="api-trigger"
                    className="uppercase py-4 bg-accent-foreground data-[state=active]:bg-muted-foreground  text-muted rounded-none cursor-pointer"
                  >
                    api trigger
                  </TabsTrigger>
                  <TabsTrigger
                    value="event-trigger"
                    className=" uppercase py-4 bg-accent-foreground border-l border-r border-l-muted-foreground border-r-muted-foreground data-[state=active]:bg-muted-foreground  text-muted rounded-none cursor-pointer"
                  >
                    event trigger
                  </TabsTrigger>
                  <TabsTrigger
                    value="cron-trigger"
                    className="  uppercase py-4 bg-accent-foreground data-[state=active]:bg-muted-foreground  text-muted rounded-none cursor-pointer"
                  >
                    cron trigger
                  </TabsTrigger>
                </TabsList>
                <TabsContent
                  value="api-trigger"
                  className="px-4 border-t border-muted-foreground"
                >
                  <Tabs defaultValue="js" className="relative">
                    <TabsList className=" absolute right-0 top-2">
                      <TabsTrigger value="js" className=" uppercase">
                        js
                      </TabsTrigger>
                      <TabsTrigger value="ts" className=" uppercase">
                        ts
                      </TabsTrigger>
                      <TabsTrigger value="py" className=" uppercase">
                        py
                      </TabsTrigger>
                    </TabsList>
                    <TabsContent value="ts">
                      <span className=" inline-block my-4">api.step.js</span>
                      <pre>
                        <code>Java script code will here</code>
                      </pre>
                    </TabsContent>
                    <TabsContent value="js">
                      <span className=" inline-block my-4">api.step.ts</span>
                      <pre>
                        <code>Type script code will here</code>
                      </pre>
                    </TabsContent>
                    <TabsContent value="py">
                      <span className=" inline-block my-4">api.step.py</span>
                      <pre>
                        <code>Type script code will here</code>
                      </pre>
                    </TabsContent>
                  </Tabs>
                </TabsContent>
                <TabsContent
                  value="event-trigger"
                  className="px-4 border-t border-muted-foreground"
                >
                  <Tabs defaultValue="js" className="relative">
                    <TabsList className=" absolute right-0 top-2">
                      <TabsTrigger value="js" className=" uppercase">
                        js
                      </TabsTrigger>
                      <TabsTrigger value="ts" className=" uppercase">
                        ts
                      </TabsTrigger>
                      <TabsTrigger value="py" className=" uppercase">
                        py
                      </TabsTrigger>
                    </TabsList>
                    <TabsContent value="ts">
                      <span className=" inline-block my-4">event.step.js</span>
                      <pre>
                        <code>Java script code will here</code>
                      </pre>
                    </TabsContent>
                    <TabsContent value="js">
                      <span className=" inline-block my-4">event.step.ts</span>
                      <pre>
                        <code>Type script code will here</code>
                      </pre>
                    </TabsContent>
                    <TabsContent value="py">
                      <span className=" inline-block my-4">event.step.py</span>
                      <pre>
                        <code>Python code will here</code>
                      </pre>
                    </TabsContent>
                  </Tabs>
                </TabsContent>
                <TabsContent
                  value="cron-trigger"
                  className="px-4 border-t border-muted-foreground"
                >
                  <Tabs defaultValue="js" className="relative">
                    <TabsList className=" absolute right-0 top-2">
                      <TabsTrigger value="js" className=" uppercase">
                        js
                      </TabsTrigger>
                      <TabsTrigger value="ts" className=" uppercase">
                        ts
                      </TabsTrigger>
                      <TabsTrigger value="py" className=" uppercase">
                        py
                      </TabsTrigger>
                    </TabsList>
                    <TabsContent value="ts">
                      <span className=" inline-block my-4">cron.step.js</span>
                      <pre>
                        <code>Java script code will here</code>
                      </pre>
                    </TabsContent>
                    <TabsContent value="js">
                      <span className=" inline-block my-4">cron.step.ts</span>
                      <pre>
                        <code>Type script code will here</code>
                      </pre>
                    </TabsContent>
                    <TabsContent value="py">
                      <span className=" inline-block my-4">cron.step.py</span>
                      <pre>
                        <code>Python code will here</code>
                      </pre>
                    </TabsContent>
                  </Tabs>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="handler" className="px-10">
          <Card className="p-0 border-0 rounded-none shadow-none bg-foreground text-white">
            <CardContent className="flex gap-8 px-0">
              <div className="flex flex-col gap-4 px-0 items-start ">
                <h2 className="text-xl">Handler - How It Performs Logic</h2>
                <p className="text-muted-foreground">
                  This is where your business logic lives. The{" "}
                  <span className=" code-input">handler</span> function receives
                  input data and a context object with everything you need:
                  logger for tracking, emit for triggering other Steps, state
                  for storing data, and streams for real-time updates.
                </p>
                <Button className="w-auto">Read Docs</Button>
              </div>
              <Tabs
                defaultValue="api-trigger"
                className="w-full bg-accent-foreground border border-muted-foreground flex flex-col gap-0"
              >
                <TabsList className="w-full flex justify-between rounded-none p-0 ">
                  <TabsTrigger
                    value="api-trigger"
                    className="uppercase py-4 bg-accent-foreground data-[state=active]:bg-muted-foreground  text-muted rounded-none cursor-pointer"
                  >
                    api trigger
                  </TabsTrigger>
                  <TabsTrigger
                    value="event-trigger"
                    className=" uppercase py-4 bg-accent-foreground border-l border-r border-l-muted-foreground border-r-muted-foreground data-[state=active]:bg-muted-foreground  text-muted rounded-none cursor-pointer"
                  >
                    event trigger
                  </TabsTrigger>
                  <TabsTrigger
                    value="cron-trigger"
                    className="  uppercase py-4 bg-accent-foreground data-[state=active]:bg-muted-foreground  text-muted rounded-none cursor-pointer"
                  >
                    cron trigger
                  </TabsTrigger>
                </TabsList>
                <TabsContent
                  value="api-trigger"
                  className="px-4 border-t border-muted-foreground"
                >
                  <Tabs defaultValue="js" className="relative">
                    <TabsList className=" absolute right-0 top-2">
                      <TabsTrigger value="js" className=" uppercase">
                        js
                      </TabsTrigger>
                      <TabsTrigger value="ts" className=" uppercase">
                        ts
                      </TabsTrigger>
                      <TabsTrigger value="py" className=" uppercase">
                        py
                      </TabsTrigger>
                    </TabsList>
                    <TabsContent value="ts">
                      <span className=" inline-block my-4">api.step.js</span>
                      <pre>
                        <code>Java script code will here</code>
                      </pre>
                    </TabsContent>
                    <TabsContent value="js">
                      <span className=" inline-block my-4">api.step.ts</span>
                      <pre>
                        <code>Type script code will here</code>
                      </pre>
                    </TabsContent>
                    <TabsContent value="py">
                      <span className=" inline-block my-4">api.step.py</span>
                      <pre>
                        <code>Type script code will here</code>
                      </pre>
                    </TabsContent>
                  </Tabs>
                </TabsContent>
                <TabsContent
                  value="event-trigger"
                  className="px-4 border-t border-muted-foreground"
                >
                  <Tabs defaultValue="js" className="relative">
                    <TabsList className=" absolute right-0 top-2">
                      <TabsTrigger value="js" className=" uppercase">
                        js
                      </TabsTrigger>
                      <TabsTrigger value="ts" className=" uppercase">
                        ts
                      </TabsTrigger>
                      <TabsTrigger value="py" className=" uppercase">
                        py
                      </TabsTrigger>
                    </TabsList>
                    <TabsContent value="ts">
                      <span className=" inline-block my-4">event.step.js</span>
                      <pre>
                        <code>Java script code will here</code>
                      </pre>
                    </TabsContent>
                    <TabsContent value="js">
                      <span className=" inline-block my-4">event.step.ts</span>
                      <pre>
                        <code>Type script code will here</code>
                      </pre>
                    </TabsContent>
                    <TabsContent value="py">
                      <span className=" inline-block my-4">event.step.py</span>
                      <pre>
                        <code>Python code will here</code>
                      </pre>
                    </TabsContent>
                  </Tabs>
                </TabsContent>
                <TabsContent
                  value="cron-trigger"
                  className="px-4 border-t border-muted-foreground"
                >
                  <Tabs defaultValue="js" className="relative">
                    <TabsList className=" absolute right-0 top-2">
                      <TabsTrigger value="js" className=" uppercase">
                        js
                      </TabsTrigger>
                      <TabsTrigger value="ts" className=" uppercase">
                        ts
                      </TabsTrigger>
                      <TabsTrigger value="py" className=" uppercase">
                        py
                      </TabsTrigger>
                    </TabsList>
                    <TabsContent value="ts">
                      <span className=" inline-block my-4">cron.step.js</span>
                      <pre>
                        <code>Java script code will here</code>
                      </pre>
                    </TabsContent>
                    <TabsContent value="js">
                      <span className=" inline-block my-4">cron.step.ts</span>
                      <pre>
                        <code>Type script code will here</code>
                      </pre>
                    </TabsContent>
                    <TabsContent value="py">
                      <span className=" inline-block my-4">cron.step.py</span>
                      <pre>
                        <code>Python code will here</code>
                      </pre>
                    </TabsContent>
                  </Tabs>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="emit" className="px-10">
          <Card className="p-0 border-0 rounded-none shadow-none bg-foreground text-white">
            <CardContent className="flex gap-8 px-0">
              <div className="flex flex-col gap-4 px-0 items-start ">
                <h2 className="text-xl">Emit - How It Outputs Data</h2>
                <p className="text-muted-foreground">
                  Send data to other Steps using <br />
                  <span className="code-input">
                    {`await emit({ topic: 'event.name', data: {...} })`}
                  </span>
                  <br />
                  Any Step that subscribes to that topic will receive your data
                  and run automatically. This is how Steps talk to each other.
                </p>
                <Button className="w-auto">Read Docs</Button>
              </div>
              <Tabs
                defaultValue="api-trigger"
                className="w-full bg-accent-foreground border border-muted-foreground flex flex-col gap-0"
              >
                <TabsList className="w-full flex justify-between rounded-none p-0 ">
                  <TabsTrigger
                    value="api-trigger"
                    className="uppercase py-4 bg-accent-foreground data-[state=active]:bg-muted-foreground  text-muted rounded-none cursor-pointer"
                  >
                    api trigger
                  </TabsTrigger>
                  <TabsTrigger
                    value="event-trigger"
                    className=" uppercase py-4 bg-accent-foreground border-l border-r border-l-muted-foreground border-r-muted-foreground data-[state=active]:bg-muted-foreground  text-muted rounded-none cursor-pointer"
                  >
                    event trigger
                  </TabsTrigger>
                  <TabsTrigger
                    value="cron-trigger"
                    className="  uppercase py-4 bg-accent-foreground data-[state=active]:bg-muted-foreground  text-muted rounded-none cursor-pointer"
                  >
                    cron trigger
                  </TabsTrigger>
                </TabsList>
                <TabsContent
                  value="api-trigger"
                  className="px-4 border-t border-muted-foreground"
                >
                  <Tabs defaultValue="js" className="relative">
                    <TabsList className=" absolute right-0 top-2">
                      <TabsTrigger value="js" className=" uppercase">
                        js
                      </TabsTrigger>
                      <TabsTrigger value="ts" className=" uppercase">
                        ts
                      </TabsTrigger>
                      <TabsTrigger value="py" className=" uppercase">
                        py
                      </TabsTrigger>
                    </TabsList>
                    <TabsContent value="ts">
                      <span className=" inline-block my-4">api.step.js</span>
                      <pre>
                        <code>Java script code will here</code>
                      </pre>
                    </TabsContent>
                    <TabsContent value="js">
                      <span className=" inline-block my-4">api.step.ts</span>
                      <pre>
                        <code>Type script code will here</code>
                      </pre>
                    </TabsContent>
                    <TabsContent value="py">
                      <span className=" inline-block my-4">api.step.py</span>
                      <pre>
                        <code>Type script code will here</code>
                      </pre>
                    </TabsContent>
                  </Tabs>
                </TabsContent>
                <TabsContent
                  value="event-trigger"
                  className="px-4 border-t border-muted-foreground"
                >
                  <Tabs defaultValue="js" className="relative">
                    <TabsList className=" absolute right-0 top-2">
                      <TabsTrigger value="js" className=" uppercase">
                        js
                      </TabsTrigger>
                      <TabsTrigger value="ts" className=" uppercase">
                        ts
                      </TabsTrigger>
                      <TabsTrigger value="py" className=" uppercase">
                        py
                      </TabsTrigger>
                    </TabsList>
                    <TabsContent value="ts">
                      <span className=" inline-block my-4">event.step.js</span>
                      <pre>
                        <code>Java script code will here</code>
                      </pre>
                    </TabsContent>
                    <TabsContent value="js">
                      <span className=" inline-block my-4">event.step.ts</span>
                      <pre>
                        <code>Type script code will here</code>
                      </pre>
                    </TabsContent>
                    <TabsContent value="py">
                      <span className=" inline-block my-4">event.step.py</span>
                      <pre>
                        <code>Python code will here</code>
                      </pre>
                    </TabsContent>
                  </Tabs>
                </TabsContent>
                <TabsContent
                  value="cron-trigger"
                  className="px-4 border-t border-muted-foreground"
                >
                  <Tabs defaultValue="js" className="relative">
                    <TabsList className=" absolute right-0 top-2">
                      <TabsTrigger value="js" className=" uppercase">
                        js
                      </TabsTrigger>
                      <TabsTrigger value="ts" className=" uppercase">
                        ts
                      </TabsTrigger>
                      <TabsTrigger value="py" className=" uppercase">
                        py
                      </TabsTrigger>
                    </TabsList>
                    <TabsContent value="ts">
                      <span className=" inline-block my-4">cron.step.js</span>
                      <pre>
                        <code>Java script code will here</code>
                      </pre>
                    </TabsContent>
                    <TabsContent value="js">
                      <span className=" inline-block my-4">cron.step.ts</span>
                      <pre>
                        <code>Type script code will here</code>
                      </pre>
                    </TabsContent>
                    <TabsContent value="py">
                      <span className=" inline-block my-4">cron.step.py</span>
                      <pre>
                        <code>Python code will here</code>
                      </pre>
                    </TabsContent>
                  </Tabs>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="state" className="px-10">
          <Card className="p-0 border-0 rounded-none shadow-none bg-foreground text-white">
            <CardContent className="flex gap-8 px-0">
              <div className="flex flex-col gap-4 px-0 items-start ">
                <h2 className="text-xl">State - How It Stores Data</h2>
                <p className="text-muted-foreground">
                  Store and retrieve data across Steps using
                  <br />
                  <span className="code-input">
                    ‍await state.set(key, value)
                  </span>{" "}
                  and <span className="code-input"> await state.get(key).</span>
                  <br />
                  Perfect for tracking workflow progress, caching results, or
                  sharing data between Steps without setting up a database.
                </p>
                <Button className="w-auto">Read Docs</Button>
              </div>
              <Tabs
                defaultValue="api-trigger"
                className="w-full bg-accent-foreground border border-muted-foreground flex flex-col gap-0"
              >
                <TabsList className="w-full flex justify-between rounded-none p-0 ">
                  <TabsTrigger
                    value="api-trigger"
                    className="uppercase py-4 bg-accent-foreground data-[state=active]:bg-muted-foreground  text-muted rounded-none cursor-pointer"
                  >
                    api trigger
                  </TabsTrigger>
                  <TabsTrigger
                    value="event-trigger"
                    className=" uppercase py-4 bg-accent-foreground border-l border-r border-l-muted-foreground border-r-muted-foreground data-[state=active]:bg-muted-foreground  text-muted rounded-none cursor-pointer"
                  >
                    event trigger
                  </TabsTrigger>
                  <TabsTrigger
                    value="cron-trigger"
                    className="  uppercase py-4 bg-accent-foreground data-[state=active]:bg-muted-foreground  text-muted rounded-none cursor-pointer"
                  >
                    cron trigger
                  </TabsTrigger>
                </TabsList>
                <TabsContent
                  value="api-trigger"
                  className="px-4 border-t border-muted-foreground"
                >
                  <Tabs defaultValue="js" className="relative">
                    <TabsList className=" absolute right-0 top-2">
                      <TabsTrigger value="js" className=" uppercase">
                        js
                      </TabsTrigger>
                      <TabsTrigger value="ts" className=" uppercase">
                        ts
                      </TabsTrigger>
                      <TabsTrigger value="py" className=" uppercase">
                        py
                      </TabsTrigger>
                    </TabsList>
                    <TabsContent value="ts">
                      <span className=" inline-block my-4">api.step.js</span>
                      <pre>
                        <code>Java script code will here</code>
                      </pre>
                    </TabsContent>
                    <TabsContent value="js">
                      <span className=" inline-block my-4">api.step.ts</span>
                      <pre>
                        <code>Type script code will here</code>
                      </pre>
                    </TabsContent>
                    <TabsContent value="py">
                      <span className=" inline-block my-4">api.step.py</span>
                      <pre>
                        <code>Type script code will here</code>
                      </pre>
                    </TabsContent>
                  </Tabs>
                </TabsContent>
                <TabsContent
                  value="event-trigger"
                  className="px-4 border-t border-muted-foreground"
                >
                  <Tabs defaultValue="js" className="relative">
                    <TabsList className=" absolute right-0 top-2">
                      <TabsTrigger value="js" className=" uppercase">
                        js
                      </TabsTrigger>
                      <TabsTrigger value="ts" className=" uppercase">
                        ts
                      </TabsTrigger>
                      <TabsTrigger value="py" className=" uppercase">
                        py
                      </TabsTrigger>
                    </TabsList>
                    <TabsContent value="ts">
                      <span className=" inline-block my-4">event.step.js</span>
                      <pre>
                        <code>Java script code will here</code>
                      </pre>
                    </TabsContent>
                    <TabsContent value="js">
                      <span className=" inline-block my-4">event.step.ts</span>
                      <pre>
                        <code>Type script code will here</code>
                      </pre>
                    </TabsContent>
                    <TabsContent value="py">
                      <span className=" inline-block my-4">event.step.py</span>
                      <pre>
                        <code>Python code will here</code>
                      </pre>
                    </TabsContent>
                  </Tabs>
                </TabsContent>
                <TabsContent
                  value="cron-trigger"
                  className="px-4 border-t border-muted-foreground"
                >
                  <Tabs defaultValue="js" className="relative">
                    <TabsList className=" absolute right-0 top-2">
                      <TabsTrigger value="js" className=" uppercase">
                        js
                      </TabsTrigger>
                      <TabsTrigger value="ts" className=" uppercase">
                        ts
                      </TabsTrigger>
                      <TabsTrigger value="py" className=" uppercase">
                        py
                      </TabsTrigger>
                    </TabsList>
                    <TabsContent value="ts">
                      <span className=" inline-block my-4">cron.step.js</span>
                      <pre>
                        <code>Java script code will here</code>
                      </pre>
                    </TabsContent>
                    <TabsContent value="js">
                      <span className=" inline-block my-4">cron.step.ts</span>
                      <pre>
                        <code>Type script code will here</code>
                      </pre>
                    </TabsContent>
                    <TabsContent value="py">
                      <span className=" inline-block my-4">cron.step.py</span>
                      <pre>
                        <code>Python code will here</code>
                      </pre>
                    </TabsContent>
                  </Tabs>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="logger" className="px-10">
          <Card className="p-0 border-0 rounded-none shadow-none bg-foreground text-white">
            <CardContent className="flex gap-8 px-0">
              <div className="flex flex-col gap-4 px-0 items-start ">
                <h2 className="text-xl">Logger - How it tracks execution</h2>
                <p className="text-muted-foreground">
                  Every handler gets a logger object. Call{" "}
                  <span className="code-input">logger.info()</span>,
                  <span className="code-input">logger.warn()</span>, or
                  <span className="code-input">logger.error()</span> with your
                  message and data. All logs automatically include your Step
                  name, trace ID, and timestamp - making it easy to debug
                  workflows in the Workbench.
                </p>
                <Button className="w-auto">Read Docs</Button>
              </div>
              <Tabs
                defaultValue="api-trigger"
                className="w-full bg-accent-foreground border border-muted-foreground flex flex-col gap-0"
              >
                <TabsList className="w-full flex justify-between rounded-none p-0 ">
                  <TabsTrigger
                    value="api-trigger"
                    className="uppercase py-4 bg-accent-foreground data-[state=active]:bg-muted-foreground  text-muted rounded-none cursor-pointer"
                  >
                    api trigger
                  </TabsTrigger>
                  <TabsTrigger
                    value="event-trigger"
                    className=" uppercase py-4 bg-accent-foreground border-l border-r border-l-muted-foreground border-r-muted-foreground data-[state=active]:bg-muted-foreground  text-muted rounded-none cursor-pointer"
                  >
                    event trigger
                  </TabsTrigger>
                  <TabsTrigger
                    value="cron-trigger"
                    className="  uppercase py-4 bg-accent-foreground data-[state=active]:bg-muted-foreground  text-muted rounded-none cursor-pointer"
                  >
                    cron trigger
                  </TabsTrigger>
                </TabsList>
                <TabsContent
                  value="api-trigger"
                  className="px-4 border-t border-muted-foreground"
                >
                  <Tabs defaultValue="js" className="relative">
                    <TabsList className=" absolute right-0 top-2">
                      <TabsTrigger value="js" className=" uppercase">
                        js
                      </TabsTrigger>
                      <TabsTrigger value="ts" className=" uppercase">
                        ts
                      </TabsTrigger>
                      <TabsTrigger value="py" className=" uppercase">
                        py
                      </TabsTrigger>
                    </TabsList>
                    <TabsContent value="ts">
                      <span className=" inline-block my-4">api.step.js</span>
                      <pre>
                        <code>Java script code will here</code>
                      </pre>
                    </TabsContent>
                    <TabsContent value="js">
                      <span className=" inline-block my-4">api.step.ts</span>
                      <pre>
                        <code>Type script code will here</code>
                      </pre>
                    </TabsContent>
                    <TabsContent value="py">
                      <span className=" inline-block my-4">api.step.py</span>
                      <pre>
                        <code>Type script code will here</code>
                      </pre>
                    </TabsContent>
                  </Tabs>
                </TabsContent>
                <TabsContent
                  value="event-trigger"
                  className="px-4 border-t border-muted-foreground"
                >
                  <Tabs defaultValue="js" className="relative">
                    <TabsList className=" absolute right-0 top-2">
                      <TabsTrigger value="js" className=" uppercase">
                        js
                      </TabsTrigger>
                      <TabsTrigger value="ts" className=" uppercase">
                        ts
                      </TabsTrigger>
                      <TabsTrigger value="py" className=" uppercase">
                        py
                      </TabsTrigger>
                    </TabsList>
                    <TabsContent value="ts">
                      <span className=" inline-block my-4">event.step.js</span>
                      <pre>
                        <code>Java script code will here</code>
                      </pre>
                    </TabsContent>
                    <TabsContent value="js">
                      <span className=" inline-block my-4">event.step.ts</span>
                      <pre>
                        <code>Type script code will here</code>
                      </pre>
                    </TabsContent>
                    <TabsContent value="py">
                      <span className=" inline-block my-4">event.step.py</span>
                      <pre>
                        <code>Python code will here</code>
                      </pre>
                    </TabsContent>
                  </Tabs>
                </TabsContent>
                <TabsContent
                  value="cron-trigger"
                  className="px-4 border-t border-muted-foreground"
                >
                  <Tabs defaultValue="js" className="relative">
                    <TabsList className=" absolute right-0 top-2">
                      <TabsTrigger value="js" className=" uppercase">
                        js
                      </TabsTrigger>
                      <TabsTrigger value="ts" className=" uppercase">
                        ts
                      </TabsTrigger>
                      <TabsTrigger value="py" className=" uppercase">
                        py
                      </TabsTrigger>
                    </TabsList>
                    <TabsContent value="ts">
                      <span className=" inline-block my-4">cron.step.js</span>
                      <pre>
                        <code>Java script code will here</code>
                      </pre>
                    </TabsContent>
                    <TabsContent value="js">
                      <span className=" inline-block my-4">cron.step.ts</span>
                      <pre>
                        <code>Type script code will here</code>
                      </pre>
                    </TabsContent>
                    <TabsContent value="py">
                      <span className=" inline-block my-4">cron.step.py</span>
                      <pre>
                        <code>Python code will here</code>
                      </pre>
                    </TabsContent>
                  </Tabs>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="streams" className="px-10">
          <Card className="p-0 border-0 rounded-none shadow-none bg-foreground text-white">
            <CardContent className="flex gap-8 px-0">
              <div className="flex flex-col gap-4 px-0 items-start ">
                <h2 className="text-xl">
                  Streams - How It Broadcasts Live Data
                </h2>
                <p className="text-muted-foreground">
                  Push updates directly to connected clients with ‍{" "}
                  <span className="code-input">
                    await streams.mystream.set(key, value)
                  </span>
                  . When you update stream data from any Step, all subscribed
                  frontend clients receive the changes instantly - no extra
                  setup needed.
                </p>
                <Button className="w-auto">Read Docs</Button>
              </div>
              <Tabs
                defaultValue="api-trigger"
                className="w-full bg-accent-foreground border border-muted-foreground flex flex-col gap-0"
              >
                <TabsList className="w-full flex justify-between rounded-none p-0 ">
                  <TabsTrigger
                    value="api-trigger"
                    className="uppercase py-4 bg-accent-foreground data-[state=active]:bg-muted-foreground  text-muted rounded-none cursor-pointer"
                  >
                    api trigger
                  </TabsTrigger>
                  <TabsTrigger
                    value="event-trigger"
                    className=" uppercase py-4 bg-accent-foreground border-l border-r border-l-muted-foreground border-r-muted-foreground data-[state=active]:bg-muted-foreground  text-muted rounded-none cursor-pointer"
                  >
                    event trigger
                  </TabsTrigger>
                  <TabsTrigger
                    value="cron-trigger"
                    className="  uppercase py-4 bg-accent-foreground data-[state=active]:bg-muted-foreground  text-muted rounded-none cursor-pointer"
                  >
                    cron trigger
                  </TabsTrigger>
                </TabsList>
                <TabsContent
                  value="api-trigger"
                  className="px-4 border-t border-muted-foreground"
                >
                  <Tabs defaultValue="js" className="relative">
                    <TabsList className=" absolute right-0 top-2">
                      <TabsTrigger value="js" className=" uppercase">
                        js
                      </TabsTrigger>
                      <TabsTrigger value="ts" className=" uppercase">
                        ts
                      </TabsTrigger>
                      <TabsTrigger value="py" className=" uppercase">
                        py
                      </TabsTrigger>
                    </TabsList>
                    <TabsContent value="ts">
                      <span className=" inline-block my-4">api.step.js</span>
                      <pre>
                        <code>Java script code will here</code>
                      </pre>
                    </TabsContent>
                    <TabsContent value="js">
                      <span className=" inline-block my-4">api.step.ts</span>
                      <pre>
                        <code>Type script code will here</code>
                      </pre>
                    </TabsContent>
                    <TabsContent value="py">
                      <span className=" inline-block my-4">api.step.py</span>
                      <pre>
                        <code>Type script code will here</code>
                      </pre>
                    </TabsContent>
                  </Tabs>
                </TabsContent>
                <TabsContent
                  value="event-trigger"
                  className="px-4 border-t border-muted-foreground"
                >
                  <Tabs defaultValue="js" className="relative">
                    <TabsList className=" absolute right-0 top-2">
                      <TabsTrigger value="js" className=" uppercase">
                        js
                      </TabsTrigger>
                      <TabsTrigger value="ts" className=" uppercase">
                        ts
                      </TabsTrigger>
                      <TabsTrigger value="py" className=" uppercase">
                        py
                      </TabsTrigger>
                    </TabsList>
                    <TabsContent value="ts">
                      <span className=" inline-block my-4">event.step.js</span>
                      <pre>
                        <code>Java script code will here</code>
                      </pre>
                    </TabsContent>
                    <TabsContent value="js">
                      <span className=" inline-block my-4">event.step.ts</span>
                      <pre>
                        <code>Type script code will here</code>
                      </pre>
                    </TabsContent>
                    <TabsContent value="py">
                      <span className=" inline-block my-4">event.step.py</span>
                      <pre>
                        <code>Python code will here</code>
                      </pre>
                    </TabsContent>
                  </Tabs>
                </TabsContent>
                <TabsContent
                  value="cron-trigger"
                  className="px-4 border-t border-muted-foreground"
                >
                  <Tabs defaultValue="js" className="relative">
                    <TabsList className=" absolute right-0 top-2">
                      <TabsTrigger value="js" className=" uppercase">
                        js
                      </TabsTrigger>
                      <TabsTrigger value="ts" className=" uppercase">
                        ts
                      </TabsTrigger>
                      <TabsTrigger value="py" className=" uppercase">
                        py
                      </TabsTrigger>
                    </TabsList>
                    <TabsContent value="ts">
                      <span className=" inline-block my-4">cron.step.js</span>
                      <pre>
                        <code>Java script code will here</code>
                      </pre>
                    </TabsContent>
                    <TabsContent value="js">
                      <span className=" inline-block my-4">cron.step.ts</span>
                      <pre>
                        <code>Type script code will here</code>
                      </pre>
                    </TabsContent>
                    <TabsContent value="py">
                      <span className=" inline-block my-4">cron.step.py</span>
                      <pre>
                        <code>Python code will here</code>
                      </pre>
                    </TabsContent>
                  </Tabs>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TabsComponent;
