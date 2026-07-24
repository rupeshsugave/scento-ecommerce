function AuthLayout({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg,#0f172a,#1e293b)",
      }}
    >
      <div
        style={{
          width: "400px",
          background: "#111827",
          padding: "35px",
          borderRadius: "15px",
          color: "white",
          boxShadow: "0 10px 30px rgba(0,0,0,.4)",
        }}
      >
        <h1>{title}</h1>
        <p style={{ marginBottom: "20px", color: "#cbd5e1" }}>
          {subtitle}
        </p>

        {children}
      </div>
    </div>
  );
}

export default AuthLayout;