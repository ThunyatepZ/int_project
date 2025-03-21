
const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-slate-900 to-black">
      
      <main className="flex-grow">{children}</main>
      <div className="p-5 text-white text-center font-title4 font-thin text-sm">
        copyright© มัณฑนา จันทินมาธร, ธัญเทพ อนันตนาพงษ์
      </div>
    </div>
  );
};

export default Layout;