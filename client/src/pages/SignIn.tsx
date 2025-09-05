// =============================
// SignIn.tsx
// -----------------------------
// This file defines the Sign In page for users to log into their account.
//
// How it works:
// - Uses React functional component syntax.
// - Displays a form for email and password.
// - Uses Tailwind CSS for layout, colors, and spacing.
// - Includes a link to the Sign Up page for new users.
// - Shows the site footer at the bottom.
//
// How to update:
// - To change the form fields, update the <input> elements in the form.
// - To change colors, spacing, or layout, update the className values (these use Tailwind CSS).
// - To change navigation, update the <Link> component's 'to' prop.
// - To debug, use your browser's developer tools to inspect the form and see how each part is rendered.
//
// If you see an error:
// - Make sure all imported components exist and are spelled correctly.
// - Check that the file paths in import statements match the actual file names (case-sensitive).
// - If navigation doesn't work, check that react-router-dom is installed and set up in your project.
//
// Anyone can update this file by following the comments and examples below. No coding experience required—just follow the instructions in the comments.
// =============================
// Import React and needed components for navigation and footer.
import React from "react";
import Footer from "../sections/Footer";
import { Link } from "react-router-dom";

// The SignIn component displays the sign in form and footer.
const SignIn: React.FC = () => (
  <div className="flex flex-col min-h-screen bg-[#F8FAFC]">
  {/* Main content area centers the form on the page. */}
  <main className="flex-1 flex flex-col items-center justify-center">
  {/* The form container. Update className for different styles. */}
  <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md">
  {/* Page title. Change text to rename the page. */}
  <h2 className="text-3xl font-bold mb-6 text-center text-[#1E293B]">Sign In</h2>
        {/* The sign in form. Update <input> fields to change what info is collected. */}
        <form className="flex flex-col gap-4">
          <input type="email" placeholder="Email" className="border rounded px-4 py-2" />
          <input type="password" placeholder="Password" className="border rounded px-4 py-2" />
          {/* The submit button. Change text or style as needed. */}
          <button type="submit" className="bg-[#0D9488] text-white rounded px-4 py-2 font-semibold hover:bg-[#0C827A]">Sign In</button>
        </form>
        {/* Link to the Sign Up page for users who don't have an account. */}
        <div className="mt-6 text-center">
          <span className="text-gray-600">Don't have an account? </span>
          <Link to="/signup" className="text-[#0D9488] font-semibold hover:underline">Sign Up</Link>
        </div>
      </div>
    </main>
  {/* The site footer. Update Footer component to change footer content. */}
  <Footer />
  </div>
);

export default SignIn;
