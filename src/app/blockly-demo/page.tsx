import React from "react";
import BlocklyDemo from "@/components/blockly/BlocklyDemo";
import { JobProvider } from "@/contexts/JobContext";
import { JobFormProvider } from "@/contexts/JobFormContext";
import templatesData from "@/data/templates.json";

export default function Page() {
  return (
    <JobProvider templates={templatesData.templates}>
      <JobFormProvider>
        <BlocklyDemo />
      </JobFormProvider>
    </JobProvider>
  );
}
