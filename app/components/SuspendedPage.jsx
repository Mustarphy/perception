import { UserX } from "lucide-react";

// Static hosting/account-suspension notice.
// Rendered for every route while the site is temporarily suspended (see middleware.js).
export default function SuspendedPage() {
  return (
    <div className="min-h-screen w-full flex flex-col">
      {/* Top section */}
      <div className="bg-gray-200 flex flex-col items-center justify-center text-center px-4 py-10 sm:py-14">
        <UserX
          className="w-12 h-12 sm:w-14 sm:h-14 text-gray-400 mb-4"
          strokeWidth={1.5}
        />
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-400">
          Account Suspended
        </h1>
      </div>

      {/* Main section */}
      <div className="flex-1 bg-slate-800 flex flex-col items-center justify-center text-center px-4 py-16 sm:py-24">
        <p className="text-white text-xl sm:text-2xl md:text-3xl font-bold max-w-2xl">
          This Account has been suspended.
        </p>
        <p className="text-gray-300 text-sm sm:text-base md:text-lg mt-4">
          <span className="underline underline-offset-2">
            Contact your hosting provider
          </span>{" "}
          for more information.
        </p>
      </div>
    </div>
  );
}
