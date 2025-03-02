export function Card({ children, className }) {
    return <div className={`p-4 shadow-md rounded-lg ${className}`}>{children}</div>;
  }
  
  export function CardContent({ children, className }) {
    return <div className={`p-2 ${className}`}>{children}</div>;
  }
  