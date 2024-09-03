import React, { createContext, useContext, useState, ReactNode } from 'react';

interface LogItem {
  id: string;
  username: string;
  status: string;
  date: string;
}

interface LogContextType {
  logs: LogItem[];
  addLog: (log: LogItem) => void;
}

const LogContext = createContext<LogContextType | undefined>(undefined);

export const LogProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [logs, setLogs] = useState<LogItem[]>([]);

  const addLog = (log: LogItem) => {
    setLogs(prevLogs => [...prevLogs, log]);
  };

  return (
    <LogContext.Provider value={{ logs, addLog }}>
      {children}
    </LogContext.Provider>
  );
};

export const useLog = () => {
  const context = useContext(LogContext);
  if (context === undefined) {
    throw new Error('useLog must be used within a LogProvider');
  }
  return context;
};
