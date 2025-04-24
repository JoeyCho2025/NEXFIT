export const metadata = {
  title: "NEXFIT註冊與登入",
  description: "NEXFIT",
};

export default function AuthLayout({ children }) {
  return (
    <div className="min-h-screen w-full bg-black flex items-center justify-center">
      {children}
    </div>
  );
}
