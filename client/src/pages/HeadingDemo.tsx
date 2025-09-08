// =============================
// HeadingDemo.tsx
// -----------------------------
// This file demonstrates how to use the Heading component at different levels (h1-h6).
//
// How it works:
// - Uses React functional component syntax.
// - Imports and uses the Heading component for each heading level.
// - Uses Tailwind CSS for spacing and padding.
//
// How to update:
// - To change the heading text, update the 'text' prop for each Heading.
// - To change the heading level, update the 'level' prop (1-6).
// - To change spacing or layout, update the className values (these use Tailwind CSS).
// - To debug, use your browser's developer tools to inspect the headings and see how each part is rendered.
//
// If you see an error:
// - Make sure the Heading component is imported and spelled correctly.
// - Check that the file paths in import statements match the actual file names (case-sensitive).
//
// Anyone can update this file by following the comments and examples below. No coding experience required—just follow the instructions in the comments.
// =============================
// Import React and the Heading component for demonstration.
import React from "react";
import Heading from "../components/ui/Heading";

// The HeadingDemo component displays headings from level 1 to 6.
const HeadingDemo: React.FC = () => (
  <div className="space-y-4 p-8">
    {/* Each Heading below shows a different heading level. Change 'text' or 'level' as needed. */}
    <Heading text="Heading Level 1" level={1} className="mb-2" />
    <Heading text="Heading Level 2" level={2} className="mb-2" />
    <Heading text="Heading Level 3" level={3} className="mb-2" />
    <Heading text="Heading Level 4" level={4} className="mb-2" />
    <Heading text="Heading Level 5" level={5} className="mb-2" />
    <Heading text="Heading Level 6" level={6} className="mb-2" />
  </div>
);

export default HeadingDemo;
