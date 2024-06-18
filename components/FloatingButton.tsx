import Link from "next/link";

const FloatingButton: React.FC = () => {
    return (
      <Link
        href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0W9SITQXSJThFdp-tp2cnXP5gTjJm1f0SFHGGigsmOc52UED6cwJDza31WnNn-q8sH78jStiDl?gv=true"
        target="_blank"
        //className="fixed bottom-5 right-5 w-fit px-5 py-2.5 bg-gradient-to-br from-pink-600 to-orange-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-900 text-white text-lg font-bold rounded-lg shadow-lg flex items-center justify-center z-60"
        className="fixed bottom-5 right-5 bg-gradient-to-br from-pink-600 to-orange-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-900 text-white text-sm font-bold rounded-full shadow-lg inline-flex items-center justify-center px-4 py-2 z-[60]"

      >
        Agendar
      </Link>
    );
};

export default FloatingButton
