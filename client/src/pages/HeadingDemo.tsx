import React from "react";
import Heading from "../components/ui/Heading";

const HeadingDemo: React.FC = () => (
  <div className="space-y-4 p-8">
    <Heading text="Heading Level 1" level={1} className="mb-2" />
    <Heading text="Heading Level 2" level={2} className="mb-2" />
    <Heading text="Heading Level 3" level={3} className="mb-2" />
    <Heading text="Heading Level 4" level={4} className="mb-2" />
    <Heading text="Heading Level 5" level={5} className="mb-2" />
    <Heading text="Heading Level 6" level={6} className="mb-2" />
  </div>
);

export default HeadingDemo;
