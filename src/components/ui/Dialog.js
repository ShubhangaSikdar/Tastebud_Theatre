export function Dialog({ open, onClose, children }) {
    if (!open) return null;
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white rounded-lg p-5 w-96">
          {children}
          
        </div>
      </div>
    );
  }
  