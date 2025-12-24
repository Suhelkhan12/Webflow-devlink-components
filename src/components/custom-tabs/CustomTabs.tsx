import { Tabs } from "../ui/tabs-custom/Tabs";
import { TabsList } from "../ui/tabs-custom/TabsList";
import { TabsTrigger } from "../ui/tabs-custom/TabsTrigger";
import { TabsContent } from "../ui/tabs-custom/TabsContent";
import "./CustomTabs.css";

const CustomTabs = () => {
  return (
    <Tabs defaultValue={"trigger"}>
      <TabsList>
        <TabsTrigger value="trigger">Trigger</TabsTrigger>
        <TabsTrigger value="handler">Handler</TabsTrigger>
        <TabsTrigger value="emit">Emit</TabsTrigger>
        <TabsTrigger value="state">State</TabsTrigger>
        <TabsTrigger value="logger">Logger</TabsTrigger>
        <TabsTrigger value="stream">stream</TabsTrigger>
      </TabsList>
      <TabsContent value="trigger">
        <div className="content-left">
          <h2 className="content-h2">Trigger - How Execution Begins</h2>
          <p className="content-p">
            Every Step has a type that defines how it triggers. Change the type,
            and the same pattern works for different use cases. A Step file
            contains two parts:
          </p>
        </div>
        <Tabs defaultValue={"api-trigger"} data-varriant="full-w">
          <TabsList data-varriant="full-w">
            <TabsTrigger value="api-trigger">Api trigger</TabsTrigger>
            <TabsTrigger value="event-trigger">Event trigger</TabsTrigger>
            <TabsTrigger value="cron-trigger">Cron trigger</TabsTrigger>
          </TabsList>
          <TabsContent value="api-trigger" data-tabs="second-instance">
            <Tabs defaultValue={"js"} data-varriant="full-w">
              <TabsList data-position="abs">
                <TabsTrigger value="js">JS</TabsTrigger>
                <TabsTrigger value="ts">TS</TabsTrigger>
                <TabsTrigger value="py">PY</TabsTrigger>
              </TabsList>
              <TabsContent value="js">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: ".5rem",
                  }}
                >
                  <div style={{ padding: "8px 0px" }}>api.js</div>
                  <p>This is javascript code</p>
                </div>
              </TabsContent>
              <TabsContent value="ts">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: ".5rem",
                  }}
                >
                  <div style={{ padding: "8px 0px" }}>api.ts</div>
                  <p>This is typscript code</p>
                </div>
              </TabsContent>
              <TabsContent value="py">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: ".5rem",
                  }}
                >
                  <div style={{ padding: "8px 0px" }}>api.py</div>
                  <p>This is python code</p>
                </div>
              </TabsContent>
            </Tabs>
          </TabsContent>
          <TabsContent value="event-trigger" data-tabs="second-instance">
            <Tabs defaultValue={"js"} data-varriant="full-w">
              <TabsList data-position="abs">
                <TabsTrigger value="js">JS</TabsTrigger>
                <TabsTrigger value="ts">TS</TabsTrigger>
                <TabsTrigger value="py">PY</TabsTrigger>
              </TabsList>
              <TabsContent value="js">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: ".5rem",
                  }}
                >
                  <div style={{ padding: "8px 0px" }}>api.js</div>
                  <p>This is javascript code</p>
                </div>
              </TabsContent>
              <TabsContent value="ts">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: ".5rem",
                  }}
                >
                  <div style={{ padding: "8px 0px" }}>api.ts</div>
                  <p>This is typscript code</p>
                </div>
              </TabsContent>
              <TabsContent value="py">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: ".5rem",
                  }}
                >
                  <div style={{ padding: "8px 0px" }}>api.py</div>
                  <p>This is python code</p>
                </div>
              </TabsContent>
            </Tabs>
          </TabsContent>
          <TabsContent value="cron-trigger" data-tabs="second-instance">
            <Tabs defaultValue={"js"} data-varriant="full-w">
              <TabsList data-position="abs">
                <TabsTrigger value="js">JS</TabsTrigger>
                <TabsTrigger value="ts">TS</TabsTrigger>
                <TabsTrigger value="py">PY</TabsTrigger>
              </TabsList>
              <TabsContent value="js">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: ".5rem",
                  }}
                >
                  <div style={{ padding: "8px 0px" }}>api.js</div>
                  <p>This is javascript code</p>
                </div>
              </TabsContent>
              <TabsContent value="ts">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: ".5rem",
                  }}
                >
                  <div style={{ padding: "8px 0px" }}>api.ts</div>
                  <p>This is typscript code</p>
                </div>
              </TabsContent>
              <TabsContent value="py">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: ".5rem",
                  }}
                >
                  <div style={{ padding: "8px 0px" }}>api.py</div>
                  <p>This is python code</p>
                </div>
              </TabsContent>
            </Tabs>
          </TabsContent>
        </Tabs>
      </TabsContent>
      <TabsContent value="handler">
        <div className="content-left">
          <h2 className="content-h2">Handler - How It Performs Logic</h2>
          <p className="content-p">
            This is where your business logic lives. The{" "}
            <span className="code-input">handler</span> function receives input
            data and a context object with everything you need: logger for
            tracking, emit for triggering other Steps, state for storing data,
            and streams for real-time updates.
          </p>
        </div>
        <Tabs defaultValue={"api-trigger"} data-varriant="full-w">
          <TabsList data-varriant="full-w">
            <TabsTrigger value="api-trigger">Api trigger</TabsTrigger>
            <TabsTrigger value="event-trigger">Event trigger</TabsTrigger>
            <TabsTrigger value="cron-trigger">Cron trigger</TabsTrigger>
          </TabsList>
          <TabsContent value="api-trigger" data-tabs="second-instance">
            <Tabs defaultValue={"js"} data-varriant="full-w">
              <TabsList data-position="abs">
                <TabsTrigger value="js">JS</TabsTrigger>
                <TabsTrigger value="ts">TS</TabsTrigger>
                <TabsTrigger value="py">PY</TabsTrigger>
              </TabsList>
              <TabsContent value="js">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: ".5rem",
                  }}
                >
                  <div style={{ padding: "8px 0px" }}>api.js</div>
                  <p>This is javascript code</p>
                </div>
              </TabsContent>
              <TabsContent value="ts">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: ".5rem",
                  }}
                >
                  <div style={{ padding: "8px 0px" }}>api.ts</div>
                  <p>This is typscript code</p>
                </div>
              </TabsContent>
              <TabsContent value="py">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: ".5rem",
                  }}
                >
                  <div style={{ padding: "8px 0px" }}>api.py</div>
                  <p>This is python code</p>
                </div>
              </TabsContent>
            </Tabs>
          </TabsContent>
          <TabsContent value="event-trigger" data-tabs="second-instance">
            <Tabs defaultValue={"js"} data-varriant="full-w">
              <TabsList data-position="abs">
                <TabsTrigger value="js">JS</TabsTrigger>
                <TabsTrigger value="ts">TS</TabsTrigger>
                <TabsTrigger value="py">PY</TabsTrigger>
              </TabsList>
              <TabsContent value="js">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: ".5rem",
                  }}
                >
                  <div style={{ padding: "8px 0px" }}>api.js</div>
                  <p>This is javascript code</p>
                </div>
              </TabsContent>
              <TabsContent value="ts">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: ".5rem",
                  }}
                >
                  <div style={{ padding: "8px 0px" }}>api.ts</div>
                  <p>This is typscript code</p>
                </div>
              </TabsContent>
              <TabsContent value="py">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: ".5rem",
                  }}
                >
                  <div style={{ padding: "8px 0px" }}>api.py</div>
                  <p>This is python code</p>
                </div>
              </TabsContent>
            </Tabs>
          </TabsContent>
          <TabsContent value="cron-trigger" data-tabs="second-instance">
            <Tabs defaultValue={"js"} data-varriant="full-w">
              <TabsList data-position="abs">
                <TabsTrigger value="js">JS</TabsTrigger>
                <TabsTrigger value="ts">TS</TabsTrigger>
                <TabsTrigger value="py">PY</TabsTrigger>
              </TabsList>
              <TabsContent value="js">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: ".5rem",
                  }}
                >
                  <div style={{ padding: "8px 0px" }}>api.js</div>
                  <p>This is javascript code</p>
                </div>
              </TabsContent>
              <TabsContent value="ts">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: ".5rem",
                  }}
                >
                  <div style={{ padding: "8px 0px" }}>api.ts</div>
                  <p>This is typscript code</p>
                </div>
              </TabsContent>
              <TabsContent value="py">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: ".5rem",
                  }}
                >
                  <div style={{ padding: "8px 0px" }}>api.py</div>
                  <p>This is python code</p>
                </div>
              </TabsContent>
            </Tabs>
          </TabsContent>
        </Tabs>
      </TabsContent>
      <TabsContent value="emit">
        <div className="conten-left">
          <h2 className="content-h2">emit - How It Performs Logic</h2>
          <p className="content-p">
            This is where your business logic lives. The{" "}
            <span className="code-input">handler</span> function receives input
            data and a context object with everything you need: logger for
            tracking, emit for triggering other Steps, state for storing data,
            and streams for real-time updates.
          </p>
        </div>
        <Tabs defaultValue={"api-trigger"} data-varriant="full-w">
          <TabsList data-varriant="full-w">
            <TabsTrigger value="api-trigger">Api trigger</TabsTrigger>
            <TabsTrigger value="event-trigger">Event trigger</TabsTrigger>
            <TabsTrigger value="cron-trigger">Cron trigger</TabsTrigger>
          </TabsList>
          <TabsContent value="api-trigger" data-tabs="second-instance">
            <Tabs defaultValue={"js"} data-varriant="full-w">
              <TabsList data-position="abs">
                <TabsTrigger value="js">JS</TabsTrigger>
                <TabsTrigger value="ts">TS</TabsTrigger>
                <TabsTrigger value="py">PY</TabsTrigger>
              </TabsList>
              <TabsContent value="js">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: ".5rem",
                  }}
                >
                  <div style={{ padding: "8px 0px" }}>api.js</div>
                  <p>This is javascript code</p>
                </div>
              </TabsContent>
              <TabsContent value="ts">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: ".5rem",
                  }}
                >
                  <div style={{ padding: "8px 0px" }}>api.ts</div>
                  <p>This is typscript code</p>
                </div>
              </TabsContent>
              <TabsContent value="py">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: ".5rem",
                  }}
                >
                  <div style={{ padding: "8px 0px" }}>api.py</div>
                  <p>This is python code</p>
                </div>
              </TabsContent>
            </Tabs>
          </TabsContent>
          <TabsContent value="event-trigger" data-tabs="second-instance">
            <Tabs defaultValue={"js"} data-varriant="full-w">
              <TabsList data-position="abs">
                <TabsTrigger value="js">JS</TabsTrigger>
                <TabsTrigger value="ts">TS</TabsTrigger>
                <TabsTrigger value="py">PY</TabsTrigger>
              </TabsList>
              <TabsContent value="js">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: ".5rem",
                  }}
                >
                  <div style={{ padding: "8px 0px" }}>api.js</div>
                  <p>This is javascript code</p>
                </div>
              </TabsContent>
              <TabsContent value="ts">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: ".5rem",
                  }}
                >
                  <div style={{ padding: "8px 0px" }}>api.ts</div>
                  <p>This is typscript code</p>
                </div>
              </TabsContent>
              <TabsContent value="py">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: ".5rem",
                  }}
                >
                  <div style={{ padding: "8px 0px" }}>api.py</div>
                  <p>This is python code</p>
                </div>
              </TabsContent>
            </Tabs>
          </TabsContent>
          <TabsContent value="cron-trigger" data-tabs="second-instance">
            <Tabs defaultValue={"js"} data-varriant="full-w">
              <TabsList data-position="abs">
                <TabsTrigger value="js">JS</TabsTrigger>
                <TabsTrigger value="ts">TS</TabsTrigger>
                <TabsTrigger value="py">PY</TabsTrigger>
              </TabsList>
              <TabsContent value="js">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: ".5rem",
                  }}
                >
                  <div style={{ padding: "8px 0px" }}>api.js</div>
                  <p>This is javascript code</p>
                </div>
              </TabsContent>
              <TabsContent value="ts">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: ".5rem",
                  }}
                >
                  <div style={{ padding: "8px 0px" }}>api.ts</div>
                  <p>This is typscript code</p>
                </div>
              </TabsContent>
              <TabsContent value="py">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: ".5rem",
                  }}
                >
                  <div style={{ padding: "8px 0px" }}>api.py</div>
                  <p>This is python code</p>
                </div>
              </TabsContent>
            </Tabs>
          </TabsContent>
        </Tabs>
      </TabsContent>
      <TabsContent value="state">
        <div className="content-left">
          <h2 className="content-h2">state - How It Performs Logic</h2>
          <p className="content-p">
            This is where your business logic lives. The{" "}
            <span className="code-input">handler</span> function receives input
            data and a context object with everything you need: logger for
            tracking, emit for triggering other Steps, state for storing data,
            and streams for real-time updates.
          </p>
        </div>
        <Tabs defaultValue={"api-trigger"} data-varriant="full-w">
          <TabsList data-varriant="full-w">
            <TabsTrigger value="api-trigger">Api trigger</TabsTrigger>
            <TabsTrigger value="event-trigger">Event trigger</TabsTrigger>
            <TabsTrigger value="cron-trigger">Cron trigger</TabsTrigger>
          </TabsList>
          <TabsContent value="api-trigger" data-tabs="second-instance">
            <Tabs defaultValue={"js"} data-varriant="full-w">
              <TabsList data-position="abs">
                <TabsTrigger value="js">JS</TabsTrigger>
                <TabsTrigger value="ts">TS</TabsTrigger>
                <TabsTrigger value="py">PY</TabsTrigger>
              </TabsList>
              <TabsContent value="js">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: ".5rem",
                  }}
                >
                  <div style={{ padding: "8px 0px" }}>api.js</div>
                  <p>This is javascript code</p>
                </div>
              </TabsContent>
              <TabsContent value="ts">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: ".5rem",
                  }}
                >
                  <div style={{ padding: "8px 0px" }}>api.ts</div>
                  <p>This is typscript code</p>
                </div>
              </TabsContent>
              <TabsContent value="py">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: ".5rem",
                  }}
                >
                  <div style={{ padding: "8px 0px" }}>api.py</div>
                  <p>This is python code</p>
                </div>
              </TabsContent>
            </Tabs>
          </TabsContent>
          <TabsContent value="event-trigger" data-tabs="second-instance">
            <Tabs defaultValue={"js"} data-varriant="full-w">
              <TabsList data-position="abs">
                <TabsTrigger value="js">JS</TabsTrigger>
                <TabsTrigger value="ts">TS</TabsTrigger>
                <TabsTrigger value="py">PY</TabsTrigger>
              </TabsList>
              <TabsContent value="js">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: ".5rem",
                  }}
                >
                  <div style={{ padding: "8px 0px" }}>api.js</div>
                  <p>This is javascript code</p>
                </div>
              </TabsContent>
              <TabsContent value="ts">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: ".5rem",
                  }}
                >
                  <div style={{ padding: "8px 0px" }}>api.ts</div>
                  <p>This is typscript code</p>
                </div>
              </TabsContent>
              <TabsContent value="py">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: ".5rem",
                  }}
                >
                  <div style={{ padding: "8px 0px" }}>api.py</div>
                  <p>This is python code</p>
                </div>
              </TabsContent>
            </Tabs>
          </TabsContent>
          <TabsContent value="cron-trigger" data-tabs="second-instance">
            <Tabs defaultValue={"js"} data-varriant="full-w">
              <TabsList data-position="abs">
                <TabsTrigger value="js">JS</TabsTrigger>
                <TabsTrigger value="ts">TS</TabsTrigger>
                <TabsTrigger value="py">PY</TabsTrigger>
              </TabsList>
              <TabsContent value="js">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: ".5rem",
                  }}
                >
                  <div style={{ padding: "8px 0px" }}>api.js</div>
                  <p>This is javascript code</p>
                </div>
              </TabsContent>
              <TabsContent value="ts">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: ".5rem",
                  }}
                >
                  <div style={{ padding: "8px 0px" }}>api.ts</div>
                  <p>This is typscript code</p>
                </div>
              </TabsContent>
              <TabsContent value="py">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: ".5rem",
                  }}
                >
                  <div style={{ padding: "8px 0px" }}>api.py</div>
                  <p>This is python code</p>
                </div>
              </TabsContent>
            </Tabs>
          </TabsContent>
        </Tabs>
      </TabsContent>
      <TabsContent value="logger">
        <div className="content-left">
          <h2 className="content-h2">logger - How It Performs Logic</h2>
          <p className="content-p">
            This is where your business logic lives. The{" "}
            <span className="code-input">handler</span> function receives input
            data and a context object with everything you need: logger for
            tracking, emit for triggering other Steps, state for storing data,
            and streams for real-time updates.
          </p>
        </div>
        <Tabs defaultValue={"api-trigger"} data-varriant="full-w">
          <TabsList data-varriant="full-w">
            <TabsTrigger value="api-trigger">Api trigger</TabsTrigger>
            <TabsTrigger value="event-trigger">Event trigger</TabsTrigger>
            <TabsTrigger value="cron-trigger">Cron trigger</TabsTrigger>
          </TabsList>
          <TabsContent value="api-trigger" data-tabs="second-instance">
            <Tabs defaultValue={"js"} data-varriant="full-w">
              <TabsList data-position="abs">
                <TabsTrigger value="js">JS</TabsTrigger>
                <TabsTrigger value="ts">TS</TabsTrigger>
                <TabsTrigger value="py">PY</TabsTrigger>
              </TabsList>
              <TabsContent value="js">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: ".5rem",
                  }}
                >
                  <div style={{ padding: "8px 0px" }}>api.js</div>
                  <p>This is javascript code</p>
                </div>
              </TabsContent>
              <TabsContent value="ts">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: ".5rem",
                  }}
                >
                  <div style={{ padding: "8px 0px" }}>api.ts</div>
                  <p>This is typscript code</p>
                </div>
              </TabsContent>
              <TabsContent value="py">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: ".5rem",
                  }}
                >
                  <div style={{ padding: "8px 0px" }}>api.py</div>
                  <p>This is python code</p>
                </div>
              </TabsContent>
            </Tabs>
          </TabsContent>
          <TabsContent value="event-trigger" data-tabs="second-instance">
            <Tabs defaultValue={"js"} data-varriant="full-w">
              <TabsList data-position="abs">
                <TabsTrigger value="js">JS</TabsTrigger>
                <TabsTrigger value="ts">TS</TabsTrigger>
                <TabsTrigger value="py">PY</TabsTrigger>
              </TabsList>
              <TabsContent value="js">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: ".5rem",
                  }}
                >
                  <div style={{ padding: "8px 0px" }}>api.js</div>
                  <p>This is javascript code</p>
                </div>
              </TabsContent>
              <TabsContent value="ts">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: ".5rem",
                  }}
                >
                  <div style={{ padding: "8px 0px" }}>api.ts</div>
                  <p>This is typscript code</p>
                </div>
              </TabsContent>
              <TabsContent value="py">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: ".5rem",
                  }}
                >
                  <div style={{ padding: "8px 0px" }}>api.py</div>
                  <p>This is python code</p>
                </div>
              </TabsContent>
            </Tabs>
          </TabsContent>
          <TabsContent value="cron-trigger" data-tabs="second-instance">
            <Tabs defaultValue={"js"} data-varriant="full-w">
              <TabsList data-position="abs">
                <TabsTrigger value="js">JS</TabsTrigger>
                <TabsTrigger value="ts">TS</TabsTrigger>
                <TabsTrigger value="py">PY</TabsTrigger>
              </TabsList>
              <TabsContent value="js">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: ".5rem",
                  }}
                >
                  <div style={{ padding: "8px 0px" }}>api.js</div>
                  <p>This is javascript code</p>
                </div>
              </TabsContent>
              <TabsContent value="ts">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: ".5rem",
                  }}
                >
                  <div style={{ padding: "8px 0px" }}>api.ts</div>
                  <p>This is typscript code</p>
                </div>
              </TabsContent>
              <TabsContent value="py">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: ".5rem",
                  }}
                >
                  <div style={{ padding: "8px 0px" }}>api.py</div>
                  <p>This is python code</p>
                </div>
              </TabsContent>
            </Tabs>
          </TabsContent>
        </Tabs>
      </TabsContent>
      <TabsContent value="stream">
        <div className="content-left">
          <h2 className="content-h2">stream - How It Performs Logic</h2>
          <p className="content-p">
            This is where your business logic lives. The{" "}
            <span className="code-input">handler</span> function receives input
            data and a context object with everything you need: logger for
            tracking, emit for triggering other Steps, state for storing data,
            and streams for real-time updates.
          </p>
        </div>
        <Tabs defaultValue={"api-trigger"} data-varriant="full-w">
          <TabsList data-varriant="full-w">
            <TabsTrigger value="api-trigger">Api trigger</TabsTrigger>
            <TabsTrigger value="event-trigger">Event trigger</TabsTrigger>
            <TabsTrigger value="cron-trigger">Cron trigger</TabsTrigger>
          </TabsList>
          <TabsContent value="api-trigger" data-tabs="second-instance">
            <Tabs defaultValue={"js"} data-varriant="full-w">
              <TabsList data-position="abs">
                <TabsTrigger value="js">JS</TabsTrigger>
                <TabsTrigger value="ts">TS</TabsTrigger>
                <TabsTrigger value="py">PY</TabsTrigger>
              </TabsList>
              <TabsContent value="js">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: ".5rem",
                  }}
                >
                  <div style={{ padding: "8px 0px" }}>api.js</div>
                  <p>This is javascript code</p>
                </div>
              </TabsContent>
              <TabsContent value="ts">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: ".5rem",
                  }}
                >
                  <div style={{ padding: "8px 0px" }}>api.ts</div>
                  <p>This is typscript code</p>
                </div>
              </TabsContent>
              <TabsContent value="py">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: ".5rem",
                  }}
                >
                  <div style={{ padding: "8px 0px" }}>api.py</div>
                  <p>This is python code</p>
                </div>
              </TabsContent>
            </Tabs>
          </TabsContent>
          <TabsContent value="event-trigger" data-tabs="second-instance">
            <Tabs defaultValue={"js"} data-varriant="full-w">
              <TabsList data-position="abs">
                <TabsTrigger value="js">JS</TabsTrigger>
                <TabsTrigger value="ts">TS</TabsTrigger>
                <TabsTrigger value="py">PY</TabsTrigger>
              </TabsList>
              <TabsContent value="js">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: ".5rem",
                  }}
                >
                  <div style={{ padding: "8px 0px" }}>api.js</div>
                  <p>This is javascript code</p>
                </div>
              </TabsContent>
              <TabsContent value="ts">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: ".5rem",
                  }}
                >
                  <div style={{ padding: "8px 0px" }}>api.ts</div>
                  <p>This is typscript code</p>
                </div>
              </TabsContent>
              <TabsContent value="py">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: ".5rem",
                  }}
                >
                  <div style={{ padding: "8px 0px" }}>api.py</div>
                  <p>This is python code</p>
                </div>
              </TabsContent>
            </Tabs>
          </TabsContent>
          <TabsContent value="cron-trigger" data-tabs="second-instance">
            <Tabs defaultValue={"js"} data-varriant="full-w">
              <TabsList data-position="abs">
                <TabsTrigger value="js">JS</TabsTrigger>
                <TabsTrigger value="ts">TS</TabsTrigger>
                <TabsTrigger value="py">PY</TabsTrigger>
              </TabsList>
              <TabsContent value="js">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: ".5rem",
                  }}
                >
                  <div style={{ padding: "8px 0px" }}>api.js</div>
                  <p>This is javascript code</p>
                </div>
              </TabsContent>
              <TabsContent value="ts">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: ".5rem",
                  }}
                >
                  <div style={{ padding: "8px 0px" }}>api.ts</div>
                  <p>This is typscript code</p>
                </div>
              </TabsContent>
              <TabsContent value="py">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: ".5rem",
                  }}
                >
                  <div style={{ padding: "8px 0px" }}>api.py</div>
                  <p>This is python code</p>
                </div>
              </TabsContent>
            </Tabs>
          </TabsContent>
        </Tabs>
      </TabsContent>
    </Tabs>
  );
};

export default CustomTabs;
