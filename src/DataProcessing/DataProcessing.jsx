import { createContext } from "react";
import PropTypes from "prop-types";
import useExecutiveBodyData from "./Components/useExecutiveBodyData";
import useEventData from "./Components/useEventData";
import axios from "axios";

export const DataContext = createContext();

export default function DataProcessing({ children }) {
  const {
    events,
    isModalOpen,
    handleCloseModal,
    lastEvent,
    loading,
    latestEvent,
  } = useEventData();
  const { committees, executiveLoading, executiveError } =
    useExecutiveBodyData();

  // Axios Configuration
  axios.defaults.baseURL = import.meta.env.VITE_SERVER_API;
  return (
    <DataContext.Provider
      value={{
        // Events
        events,
        isModalOpen,
        handleCloseModal,
        lastEvent,
        loading,
        latestEvent,
        committees,
        executiveLoading,
        executiveError,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
// Prop types validation
DataProcessing.propTypes = {
  children: PropTypes.node.isRequired,
};
