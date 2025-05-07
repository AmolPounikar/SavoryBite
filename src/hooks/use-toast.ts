import { useState, useEffect, useCallback } from "react";

const TOAST_LIMIT = 5;
const TOAST_REMOVE_DELAY = 1000000;

let count = 0;

function genId(): string {
  count = (count + 1) % Number.MAX_SAFE_INTEGER;
  return count.toString();
}

interface Toast {
  id: string;
  title?: string;
  description?: string;
  action?: React.ReactNode;
  [key: string]: any; // Allows additional properties
}

interface UseToastReturn {
  toasts: Toast[];
  addToast: (toast: Omit<Toast, "id"> & { id?: string }) => { id: string };
  removeToast: (id: string) => void;
  updateToast: (toast: Partial<Toast> & { id: string }) => void;
}

export function useToast(): UseToastReturn {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = useCallback(
    ({ id, title, description, action, ...props }: Omit<Toast, "id"> & { id?: string }) => {
      const newId = id || genId();

      setToasts((prevToasts) => {
        const newToast: Toast = {
          id: newId,
          title,
          description,
          action,
          ...props,
        };

        return [...prevToasts, newToast].slice(-TOAST_LIMIT);
      });

      return { id: newId };
    },
    []
  );

  const removeToast = useCallback((id: string) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  }, []);

  const updateToast = useCallback(({ id, ...props }: Partial<Toast> & { id: string }) => {
    setToasts((prevToasts) =>
      prevToasts.map((toast) => (toast.id === id ? { ...toast, ...props } : toast))
    );
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (toasts.length > 0) {
        setToasts((prevToasts) => prevToasts.slice(1));
      }
    }, TOAST_REMOVE_DELAY);

    return () => clearTimeout(timer);
  }, [toasts]);

  return {
    toasts,
    addToast,
    removeToast,
    updateToast,
  };
}
