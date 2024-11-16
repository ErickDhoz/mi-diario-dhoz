
import { Navigate, Route, Routes } from "react-router-dom";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { CheckingAuth } from "../ui/component/CheckingAuth";
import { JournalPage } from "../journal/pages/JournalPage";
import { useCheckAuth } from "../hooks/useCheckAuth";

export const AppRoutes = () => {
  
  const {status}= useCheckAuth();
  

  if (status === "checking") {
    return <CheckingAuth />;
  }

  return (
    <Routes>
      {status === "authenticated" ? (
        <Route path="/*" element={<JournalPage />} />
      ) : (
        <Route path="/auth/*" element={<AuthRoutes />} />
      )}
      <Route path="/*" element={<Navigate to="/auth/login" />} />
    </Routes>
  );
};
